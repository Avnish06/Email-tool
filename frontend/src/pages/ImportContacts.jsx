import { useState } from "react";
import { useCampaign } from "../Context/CampaignContext";
import axios from "axios";
import * as XLSX from "xlsx";
import { AppUrl } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ImportContacts = () => {
  const { campaign, setCampaign } = useCampaign();

  const [method, setMethod] = useState("");
  const [manualEmail, setManualEmail] = useState("");
  const [dragging, setDragging] = useState(false);
  const navigate = useNavigate()

  const storeContact = async () => {
    try {
      const response = await axios.post(
        AppUrl + "/contactinfo/contactdetails",
        { contact: campaign.contacts },
        { withCredentials: true }
      );

      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };
  const addManual = () => {
    if (!manualEmail) return;

    if (!manualEmail.includes("@")) {
      alert("Invalid Email");
      return;
    }

    if (campaign.contacts.includes(manualEmail)) {
      alert("Already added");
      return;
    }

    setCampaign({
      ...campaign,
      contacts: [...campaign.contacts, manualEmail],
    });

    setManualEmail("");
  };
  const processFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
      const emails = json
        .map((row) => row.Email || row.email)
        .filter(Boolean);
      if (!emails.length) {
        alert("No emails found");
        return;
      }
      const merged = [
        ...new Set([...campaign.contacts, ...emails]),
      ];
      setCampaign({
        ...campaign,
        contacts: merged,
      });
    };
    reader.readAsBinaryString(file);
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) processFile(file);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };
  const removeEmail = (email) => {
    setCampaign({
      ...campaign,
      contacts: campaign.contacts.filter(
        (e) => e !== email
      ),
    });
  };
  return (
    <div className="pt-28 px-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">
        Import Contacts 📥
      </h1>

      <div className="max-w-6xl mx-auto bg-white shadow rounded-xl p-6 space-y-8">
        <div>
          <h2 className="font-semibold mb-4">
            Select Import Method
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            <MethodCard
              title="Manual"
              icon="✍️"
              active={method === "manual"}
              onClick={() => setMethod("manual")}
            />

            <MethodCard
              title="Excel / CSV"
              icon="📊"
              active={method === "excel"}
              onClick={() => setMethod("excel")}
            />

            <MethodCard title="CRM" icon="🏢" disabled />
            <MethodCard title="ERP" icon="🏭" disabled />
            <MethodCard title="Previous" icon="📂" disabled />
          </div>
        </div>
        {method === "manual" && (
          <div className="space-y-4">
            <h3 className="font-semibold">Add Manually</h3>

            <div className="flex gap-3">
              <input
                value={manualEmail}
                onChange={(e) =>
                  setManualEmail(e.target.value)
                }
                placeholder="Enter email"
                className="flex-1 border p-2 rounded"
              />

              <button
                onClick={addManual}
                className="bg-teal-500 text-white px-5 rounded"
              >
                Add
              </button>
            </div>
          </div>
        )}
        {method === "excel" && (
          <div className="space-y-4">
            <h3 className="font-semibold">
              Upload Excel / CSV
            </h3>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed p-8 rounded text-center transition ${
                dragging
                  ? "border-teal-500 bg-teal-50"
                  : "border-gray-300"
              }`}
            >
              <p className="mb-2">Drag & Drop File</p>
              <p className="text-sm text-gray-500 mb-3">
                or click below
              </p>

              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFile}
                hidden
                id="file"
              />

              <label
                htmlFor="file"
                className="cursor-pointer text-teal-500 underline"
              >
                Browse File
              </label>
            </div>
          </div>
        )}
        {campaign.contacts.length > 0 && (
          <div>
            <div className="flex justify-between mb-2 text-sm text-gray-600">
              <p>Total: {campaign.contacts.length}</p>
              <p>Auto Deduplicated</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">#</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {campaign.contacts.map((email, i) => (
                    <tr key={email}>
                      <td className="border p-2">
                        {i + 1}
                      </td>
                      <td className="border p-2">
                        {email}
                      </td>
                      <td className="border p-2 text-center">
                        <button
                          onClick={() => removeEmail(email)}
                          className="text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ FIXED BUTTON PLACEMENT */}
            <div className="flex justify-center mt-6">
              <button
                onClick={storeContact}
                disabled={campaign.contacts.length === 0}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Add Contact
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50 ml-4" onClick={()=>navigate("/campaign/type")}>Next Page</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportContacts;

const MethodCard = ({
  title,
  icon,
  onClick,
  active,
  disabled,
}) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`border rounded-xl p-4 text-center cursor-pointer transition ${
        active
          ? "border-teal-500 bg-teal-50"
          : "hover:border-teal-400"
      } ${
        disabled
          ? "opacity-40 cursor-not-allowed"
          : ""
      }`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="font-medium">{title}</p>

      {disabled && (
        <p className="text-xs text-gray-500 mt-1">
          Coming Soon
        </p>
      )}
    </div>
  );
};

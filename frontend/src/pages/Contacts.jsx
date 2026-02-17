import React from "react";
import { useState } from "react";
import { useCampaign } from "../Context/CampaignContext";
import axios from "axios";
import * as XLSX from "xlsx";
import { AppUrl } from "../App";
import { toast } from "react-toastify";

const Contacts = () => {
  const { campaign, setCampaign } = useCampaign();
  const [method, setMethod] = useState("");
  const [manualEmail, setManualEmail] = useState("");
  const [dragging, setDragging] = useState(false);
  
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
    <div className="pt-28 px-6 min-h-screen bg-background relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
      <h1 className="text-3xl font-bold text-center mb-8 text-foreground relative z-10">
        Import Contacts 📥
      </h1>

      <div className="max-w-6xl mx-auto bg-card border border-border shadow-xl rounded-xl p-6 space-y-8 relative z-10 backdrop-blur-sm">
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
            <h3 className="font-semibold text-foreground">Add Manually</h3>

            <div className="flex gap-3">
              <input
                value={manualEmail}
                onChange={(e) =>
                  setManualEmail(e.target.value)
                }
                placeholder="Enter email"
                className="flex-1 bg-background border border-border p-2 rounded text-foreground outline-none focus:border-primary transition-all"
              />

              <button
                onClick={addManual}
                className="bg-primary text-primary-foreground px-5 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md shadow-primary/10"
              >
                Add
              </button>
            </div>
          </div>
        )}
        {method === "excel" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              Upload Excel / CSV
            </h3>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed p-8 rounded-xl text-center transition-all ${
                dragging
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/5"
                  : "border-border hover:border-primary/30 hover:bg-accent/5"
              }`}
            >
              <p className="mb-2 text-foreground font-medium">Drag & Drop File</p>
              <p className="text-sm text-muted-foreground mb-3">
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
                className="cursor-pointer inline-flex items-center px-6 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium hover:bg-primary/5 transition-all outline-none"
              >
                Browse File
              </label>
            </div>
          </div>
        )}
        {campaign.contacts.length > 0 && (
          <div>
            <div className="flex justify-between mb-2 text-sm text-muted-foreground">
              <p>Total: <span className="text-foreground font-bold">{campaign.contacts.length}</span></p>
              <p>Auto Deduplicated</p>
            </div>

            <div className="overflow-x-auto border border-border rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium">#</th>
                    <th className="px-4 py-2 text-left font-medium">Email</th>
                    <th className="px-4 py-2 text-center font-medium">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {campaign.contacts.map((email, i) => (
                    <tr key={email} className="hover:bg-accent/5 transition-colors">
                      <td className="px-4 py-2 text-muted-foreground font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-2 text-foreground">
                        {email}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button
                          onClick={() => removeEmail(email)}
                          className="text-destructive/80 hover:text-destructive transition-colors text-xs font-medium"
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
                className="bg-primary text-primary-foreground px-8 py-2 rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
              >
                Add Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Contacts;
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
      className={`border rounded-xl p-4 text-center cursor-pointer transition-all duration-300 ${
        active
          ? "border-primary bg-primary/10 shadow-lg shadow-primary/5 scale-[1.02]"
          : "border-border hover:border-primary/30 hover:bg-primary/5"
      } ${
        disabled
          ? "opacity-40 cursor-not-allowed"
          : ""
      }`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className={`font-medium ${active ? "text-primary" : "text-muted-foreground"}`}>{title}</p>

      {disabled && (
        <p className="text-[10px] text-muted-foreground/60 mt-1 uppercase tracking-wider">
          Coming Soon
        </p>
      )}
    </div>
  );
};

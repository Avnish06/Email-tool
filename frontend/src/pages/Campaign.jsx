import { useEffect, useState } from "react";
import axios from "axios";
import { AppUrl } from "../App";
import { useNavigate } from "react-router-dom";

const Campaign = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("create");
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= LOAD HISTORY ================= */

  useEffect(() => {
    if (activeTab === "history") {
      fetchCampaigns();
    }
  }, [activeTab]);

  
  const fetchCampaigns = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`${AppUrl}/campaign`);

      setCampaigns(data);

    } catch (err) {
      console.error("Fetch campaign error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="pt-28 px-6 min-h-screen bg-gray-50">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Campaign Dashboard
      </h1>

      {/* ================= TABS ================= */}

      <div className="flex justify-center gap-4 mb-10">

        <button
          onClick={() => setActiveTab("create")}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === "create"
              ? "bg-indigo-600 text-white"
              : "bg-white border"
          }`}
        >
          + Create Campaign
        </button>

        <button
          onClick={() => setActiveTab("history")}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === "history"
              ? "bg-indigo-600 text-white"
              : "bg-white border"
          }`}
        >
          📂 My Campaigns
        </button>

      </div>

      {/* ================= CREATE ================= */}

      {activeTab === "create" && (

        <div className="flex justify-center">

          <div className="bg-white p-8 rounded-xl shadow max-w-xl w-full text-center space-y-5">

            <h2 className="text-xl font-semibold">
              Start a New Campaign 🚀
            </h2>

            <p className="text-gray-600">
              Create a new email campaign step by step.
            </p>

            <button
              onClick={() => navigate("/campaign/new")}
              className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
            >
              Start New Campaign
            </button>

          </div>

        </div>
      )}

      {/* ================= HISTORY ================= */}

      {activeTab === "history" && (

        <div className="flex justify-center">

          <div className="bg-white p-6 rounded-xl shadow max-w-4xl w-full overflow-x-auto">

            <h2 className="text-xl font-semibold mb-4">
              Campaign History 📊
            </h2>

            {loading && (
              <p className="text-center text-gray-500">
                Loading...
              </p>
            )}

            {!loading && campaigns.length === 0 && (
              <p className="text-center text-gray-500">
                No campaigns found.
              </p>
            )}

            {!loading && campaigns.length > 0 && (

              <table className="w-full text-sm">

                <thead>
                  <tr className="border-b text-gray-600 text-left">

                    <th className="py-3">Name</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Recipients</th>
                    <th>Status</th>

                  </tr>
                </thead>

                <tbody>

                  {campaigns.map((c) => (

                    <tr key={c._id} className="border-b">

                      <td className="py-3 font-medium">
                        {c.name || "-"}
                      </td>

                      <td>{c.subject}</td>

                      <td>
                        {new Date(c.createdAt).toLocaleDateString()}
                      </td>

                      <td>
                        {c.emails?.length || 0}
                      </td>

                      <td>
                        <span className="px-3 py-1 text-xs rounded bg-green-100 text-green-700">
                          Sent
                        </span>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>
            )}

          </div>

        </div>
      )}

    </div>
  );
};

export default Campaign;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AppUrl } from "../App";


const Dashboard = () => {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    campaigns: 0,
    contacts: 0,
    sent: 0,
  });

  const [loading, setLoading] = useState(false);

  /* ================= LOAD STATS ================= */

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {

    try {
      setLoading(true);

      // You can replace these later with real analytics API
      const campaignRes = await axios.get(`${AppUrl}/campaign`);
      const contactRes = await axios.get(`${AppUrl}/contacts`);

      setStats({
        campaigns: campaignRes.data.length,
        contacts: contactRes.data.length,
        sent: campaignRes.data.reduce(
          (sum, c) => sum + (c.emails?.length || 0),
          0
        ),
      });

    } catch (err) {
      console.error("Dashboard Error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="pt-28 px-6 min-h-screen bg-gray-50">

      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard 📊
        </h1>

        <p className="text-gray-500">
          Overview of your email marketing system
        </p>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6">

          <StatCard
            title="Total Campaigns"
            value={stats.campaigns}
            icon="📢"
            loading={loading}
          />

          <StatCard
            title="Total Contacts"
            value={stats.contacts}
            icon="👥"
            loading={loading}
          />

          <StatCard
            title="Emails Sent"
            value={stats.sent}
            icon="📬"
            loading={loading}
          />

        </div>

        {/* ACTIONS */}
        <div className="grid md:grid-cols-2 gap-6">

          <ActionCard
            title="Create Campaign"
            desc="Start a new email campaign"
            btn="Create"
            onClick={() => navigate("/campaign/new")}
          />

          <ActionCard
            title="Manage Contacts"
            desc="View and manage subscribers"
            btn="Open"
            onClick={() => navigate("/contacts")}
          />

          <ActionCard
            title="Campaign History"
            desc="Track previous campaigns"
            btn="View"
            onClick={() => navigate("/campaigns")}
          />

          <ActionCard
            title="Analytics"
            desc="View performance reports"
            btn="Analyze"
            onClick={() => navigate("/analytics")}
          />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;


/* ================= COMPONENTS ================= */

const StatCard = ({ title, value, icon, loading }) => {

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center space-y-2">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="text-gray-600 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold text-indigo-600">

        {loading ? "..." : value}

      </p>

    </div>
  );
};


const ActionCard = ({ title, desc, btn, onClick }) => {

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-3">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-500 text-sm">
        {desc}
      </p>

      <button
        onClick={onClick}
        className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
      >
        {btn}
      </button>

    </div>
  );
};

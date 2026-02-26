import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDetails } from "../Context/userContext";
import axios from "axios";
import {
  Mail,
  LayoutDashboard,
  Megaphone,
  BarChart2,
  Users,
  Settings,
  Blocks,
  Calendar,
  ChevronDown,
  Download,
  Send,
  MailOpen,
  MousePointer2,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Loader2,
} from "lucide-react";

const Analytics = () => {
  const navigate = useNavigate();
  const { user } = useDetails();
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch analytics data
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/analytics/overview`,
          { withCredentials: true }
        );
        
        if (response.data.success) {
          setAnalyticsData(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching analytics:", err);
        setError("Failed to load analytics data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  };

  // Get data or defaults
  const overview = analyticsData?.overview || {
    totalSent: 0,
    openRate: 0,
    clickRate: 0,
    bounceRate: 0,
  };
  
  const topCampaigns = analyticsData?.topCampaigns || [];
  const chartData = analyticsData?.chartData || [];

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Megaphone, label: "Campaigns", path: "/campaigns" },
    { icon: BarChart2, label: "Analytics", path: "/analytics", active: true },
    { icon: Users, label: "Audience", path: "/contacts" },
  ];

  const settingsItems = [
    { icon: Blocks, label: "Integrations", path: "#" },
    { icon: Settings, label: "Settings", path: "#" },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <nav className="w-64 bg-sidebar border-r border-border flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-transparent">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Mail size={18} className="text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-primary">MailMint</span>
          </div>
        </div>

        {/* Navigation - Overview */}
        <div className="py-4 px-3">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground px-3 mb-2 font-semibold">
            Overview
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-accent/10"
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Navigation - Settings */}
        <div className="py-4 px-3">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground px-3 mb-2 font-semibold">
            Settings
          </div>
          <nav className="space-y-1">
            {settingsItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.path !== "#" && navigate(item.path)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-accent/10 transition-colors"
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="mt-auto p-6 border-t border-border">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:bg-accent/10 p-2 rounded-lg transition-colors"
            onClick={() => navigate("/profile")}
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              {user?.name?.charAt(0) || "S"}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm text-foreground">
                {user?.name || "Sarah Green"}
              </span>
              <span className="text-xs text-muted-foreground">Pro Plan</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-18 bg-card border-b border-border px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Analytics Overview
            </h1>
            <p className="text-sm text-muted-foreground">
              Performance metrics for your email campaigns
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Date Range Selector */}
            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-card cursor-pointer hover:bg-accent/5 transition-colors">
              <Calendar size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                {dateRange}
              </span>
              <ChevronDown size={16} className="text-muted-foreground" />
            </div>

            {/* Export Button */}
            <button className="btn-primary flex items-center gap-2">
              <Download size={16} />
              Export Report
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-destructive">
              {error}
            </div>
          )}

          {/* Analytics Content */}
          {!loading && !error && (
          <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Total Sent */}
            <div className="card p-6 bg-card border border-border rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Total Sent
                </span>
                <div className="w-7 h-7 bg-secondary rounded-md flex items-center justify-center">
                  <Send size={14} className="text-primary" />
                </div>
              </div>
              <div className="text-3xl font-semibold text-foreground mb-1">
                {overview.totalSent.toLocaleString()}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Total emails sent</span>
              </div>
            </div>

            {/* Open Rate */}
            <div className="card p-6 bg-card border border-border rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Open Rate
                </span>
                <div className="w-7 h-7 bg-secondary rounded-md flex items-center justify-center">
                  <MailOpen size={14} className="text-primary" />
                </div>
              </div>
              <div className="text-3xl font-semibold text-foreground mb-1">
                {overview.openRate}%
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Average open rate</span>
              </div>
            </div>

            {/* Click Rate */}
            <div className="card p-6 bg-card border border-border rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Click Rate
                </span>
                <div className="w-7 h-7 bg-secondary rounded-md flex items-center justify-center">
                  <MousePointer2 size={14} className="text-primary" />
                </div>
              </div>
              <div className="text-3xl font-semibold text-foreground mb-1">
                {overview.clickRate}%
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Average click rate</span>
              </div>
            </div>

            {/* Bounce Rate */}
            <div className="card p-6 bg-card border border-border rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Bounce Rate
                </span>
                <div className="w-7 h-7 bg-secondary rounded-md flex items-center justify-center">
                  <AlertCircle size={14} className="text-primary" />
                </div>
              </div>
              <div className="text-3xl font-semibold text-foreground mb-1">
                {overview.bounceRate}%
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Bounce rate</span>
              </div>
            </div>
          </div>

          {/* Performance Trends Chart */}
          <div className="card p-6 bg-card border border-border rounded-xl mb-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-semibold text-foreground">
                Performance Trends
              </h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-sm"></div>
                  Open Rate
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary-foreground opacity-20 rounded-sm"></div>
                  Click Rate
                </div>
              </div>
            </div>

            {/* Chart Container */}
            <div className="flex items-end gap-4 h-60 border-b border-border pb-3">
              {chartData.length > 0 ? (
                chartData.map((data, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col justify-end gap-1 h-full"
                  >
                    <div
                      className="w-full bg-primary rounded-t opacity-90"
                      style={{ height: `${data.openRate}%` }}
                    ></div>
                    <div
                      className="w-full bg-secondary-foreground opacity-20 rounded-t"
                      style={{ height: `${data.clickRate}%` }}
                    ></div>
                    <div className="text-xs text-muted-foreground text-center mt-3">
                      {data.day}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                  No data available for the selected period
                </div>
              )}
            </div>
          </div>

          {/* Bottom Section: Top Campaigns */}
          <div className="w-full">
            {/* Top Performing Campaigns */}
            <div className="card p-6 bg-card border border-border rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-foreground">
                  Top Performing Campaigns
                </h3>
                <button className="text-primary text-sm font-medium hover:underline">
                  View All
                </button>
              </div>

              {/* Table Header */}
              <div className="flex text-xs text-muted-foreground font-medium mb-2 px-2">
                <div className="flex-[2]">Campaign Name</div>
                <div className="flex-1 text-right">Open Rate</div>
                <div className="flex-1 text-right">Click Rate</div>
              </div>

              {/* Table Rows */}
              <div className="space-y-0">
                {topCampaigns.length > 0 ? (
                  topCampaigns.map((campaign, idx) => (
                    <div
                      key={idx}
                      className="flex items-center py-3 px-2 border-b border-border last:border-b-0"
                    >
                      <div className="flex-[2] flex flex-col">
                        <span className="font-medium text-sm text-foreground">
                          {campaign.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Sent {formatDate(campaign.sentDate)}
                        </span>
                      </div>
                      <div className="flex-1 text-right font-medium text-foreground">
                        {campaign.openRate}%
                      </div>
                      <div className="flex-1 text-right font-medium text-foreground">
                        {campaign.clickRate}%
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No campaigns sent yet
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Analytics;

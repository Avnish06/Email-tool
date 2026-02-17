import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDetails } from "../Context/userContext";
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
} from "lucide-react";

const Analytics = () => {
  const navigate = useNavigate();
  const { user } = useDetails();
  const [dateRange, setDateRange] = useState("Last 30 Days");

  // Sample data for top campaigns
  const topCampaigns = [
    {
      name: "Summer Sale Launch",
      sentDate: "Sent 2 days ago",
      openRate: "68.4%",
      clickRate: "12.1%",
    },
    {
      name: "Weekly Newsletter #42",
      sentDate: "Sent 5 days ago",
      openRate: "52.1%",
      clickRate: "8.3%",
    },
    {
      name: "Welcome Sequence - Day 1",
      sentDate: "Ongoing",
      openRate: "84.2%",
      clickRate: "24.5%",
    },
    {
      name: "Product Update v2.0",
      sentDate: "Sent 1 week ago",
      openRate: "45.0%",
      clickRate: "5.2%",
    },
  ];

  // Chart data (7 days)
  const chartData = [
    { day: "Mon", openRate: 45, clickRate: 15 },
    { day: "Tue", openRate: 65, clickRate: 25 },
    { day: "Wed", openRate: 50, clickRate: 20 },
    { day: "Thu", openRate: 80, clickRate: 35 },
    { day: "Fri", openRate: 70, clickRate: 30 },
    { day: "Sat", openRate: 40, clickRate: 10 },
    { day: "Sun", openRate: 55, clickRate: 22 },
  ];

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
          <div className="flex items-center gap-3">
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
          {/* KPI Stats Grid */}
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
                124,592
              </div>
              <div className="flex items-center gap-1 text-sm text-success">
                <TrendingUp size={14} />
                <span>12% vs last month</span>
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
                42.8%
              </div>
              <div className="flex items-center gap-1 text-sm text-success">
                <TrendingUp size={14} />
                <span>4.1% vs last month</span>
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
                8.4%
              </div>
              <div className="flex items-center gap-1 text-sm text-destructive">
                <TrendingDown size={14} />
                <span>1.2% vs last month</span>
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
                1.2%
              </div>
              <div className="flex items-center gap-1 text-sm text-success">
                <CheckCircle size={14} />
                <span>0.8% decrease</span>
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
              {chartData.map((data, idx) => (
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
              ))}
            </div>
          </div>

          {/* Bottom Grid: Top Campaigns + Device Engagement */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Performing Campaigns */}
            <div className="lg:col-span-2 card p-6 bg-card border border-border rounded-xl">
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
                {topCampaigns.map((campaign, idx) => (
                  <div
                    key={idx}
                    className="flex items-center py-3 px-2 border-b border-border last:border-b-0"
                  >
                    <div className="flex-[2] flex flex-col">
                      <span className="font-medium text-sm text-foreground">
                        {campaign.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {campaign.sentDate}
                      </span>
                    </div>
                    <div className="flex-1 text-right font-medium text-foreground">
                      {campaign.openRate}
                    </div>
                    <div className="flex-1 text-right font-medium text-foreground">
                      {campaign.clickRate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Engagement */}
            <div className="card p-6 bg-card border border-border rounded-xl">
              <h3 className="text-base font-semibold text-foreground mb-6">
                Device Engagement
              </h3>

              <div className="flex flex-col items-center justify-center">
                {/* Donut Chart */}
                <div
                  className="w-40 h-40 rounded-full relative"
                  style={{
                    background:
                      "conic-gradient(var(--primary) 0% 65%, #cbd5e1 65% 85%, #e2e8f0 85% 100%)",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-card rounded-full flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-foreground">
                      65%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Mobile
                    </span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-3 mt-6 w-full">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Mobile (65%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#cbd5e1" }}
                    ></div>
                    <span>Desktop (20%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#e2e8f0" }}
                    ></div>
                    <span>Tablet (15%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;

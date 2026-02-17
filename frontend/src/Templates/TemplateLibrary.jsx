import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCampaign } from "../Context/CampaignContext";
import { frontendTemplates } from "../data/templateData";
import { Zap } from "lucide-react";

export default function TemplateLibrary() {
  const navigate = useNavigate();
  const { setCampaign } = useCampaign();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  /* ================= FILTER TEMPLATES ================= */

  const categories = [
    { name: "All", count: frontendTemplates.length },
    { name: "Announcement", count: frontendTemplates.filter(t => t.category === "Announcement").length },
    { name: "Confirmation", count: frontendTemplates.filter(t => t.category === "Confirmation").length },
    { name: "Educational", count: frontendTemplates.filter(t => t.category === "Educational").length },
    { name: "Receipt", count: frontendTemplates.filter(t => t.category === "Receipt").length },
    { name: "Event", count: frontendTemplates.filter(t => t.category === "Event").length },
    { name: "Marketing", count: frontendTemplates.filter(t => t.category === "Marketing").length },
    { name: "Newsletter", count: frontendTemplates.filter(t => t.category === "Newsletter").length },
    { name: "Onboarding", count: frontendTemplates.filter(t => t.category === "Onboarding").length },
    { name: "Promotional", count: frontendTemplates.filter(t => t.category === "Promotional").length },
    { name: "Re-Engagement", count: frontendTemplates.filter(t => t.category === "Re-Engagement").length },
    { name: "Transactional", count: frontendTemplates.filter(t => t.category === "Transactional").length },
    { name: "Warning", count: frontendTemplates.filter(t => t.category === "Warning").length },
  ];

  const filteredTemplates = frontendTemplates.filter(template => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  /* ================= HANDLERS ================= */

  const handleSelectTemplate = (template) => {
    setCampaign((prev) => ({
      ...prev,
      templateId: template.id,
      templateName: template.name,
      subject: template.name,
      blocks: template.blocks,
    }));
    navigate("/campaign/editor");
  };

  const handleStartFromScratch = () => {
    setCampaign((prev) => ({
      ...prev,
      templateId: null,
      templateName: "Blank Template",
      subject: "",
      blocks: [],
    }));
    navigate("/campaign/editor");
  };

  /* ================= UI ================= */

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              <Zap size={18} />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">EmailSpark</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-3 mb-2">
            <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Template Categories
            </h3>
          </div>
          <nav className="space-y-1 px-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === cat.name
                    ? "bg-primary/10 text-primary border-l-3 border-primary"
                    : "text-foreground hover:bg-accent/10"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === cat.name ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <button
            onClick={() => navigate("/")}
            className="w-full btn-ghost text-left justify-start text-foreground hover:bg-accent/10"
          >
            ← Back to Campaigns
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Email Templates</h1>
            <p className="text-sm text-muted-foreground">Choose a template to get started</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-10 w-64 bg-background border-border text-foreground"
              />
            </div>
            <button onClick={handleStartFromScratch} className="btn-primary">
              + New Template
            </button>
          </div>
        </header>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Start From Scratch Card */}
          <div
            onClick={handleStartFromScratch}
            className="card mb-6 p-6 cursor-pointer hover:shadow-md transition-shadow border-2 border-dashed border-primary/30 hover:border-primary bg-primary/5 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Start From Scratch</h3>
                <p className="text-sm text-muted-foreground">
                  Create your own custom email design with our visual editor
                </p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => handleSelectTemplate(template)}
                className="card overflow-hidden cursor-pointer hover:shadow-lg hover:border-primary/50 transition-all group bg-card border border-border rounded-xl"
              >
                {/* Preview */}
                <div className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
                  <div className="relative bg-white rounded shadow-sm p-4 w-11/12 h-5/6 overflow-hidden">
                    {/* Mini Preview */}
                    <div className="space-y-2 text-xs">
                      {template.blocks.slice(0, 5).map((block, idx) => (
                        <div key={idx}>
                          {block.type === "text" && (
                            <p
                              style={{
                                fontSize: Math.max(block.data.size / 3, 8),
                                color: block.data.color,
                                fontWeight: block.data.bold ? "bold" : "normal",
                                textAlign: block.data.align,
                              }}
                              className="truncate"
                            >
                              {block.data.text.split("\n")[0]}
                            </p>
                          )}
                          {block.type === "image" && (
                            <div className="bg-gray-200 h-12 rounded"></div>
                          )}
                          {block.type === "button" && (
                            <div className="text-center">
                              <span
                                style={{
                                  background: block.data.bg,
                                  color: block.data.color,
                                }}
                                className="inline-block px-2 py-1 rounded text-xs"
                              >
                                {block.data.text}
                              </span>
                            </div>
                          )}
                          {block.type === "divider" && (
                            <hr style={{ backgroundColor: block.data.color, height: 1 }} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <button className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Use Template
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{template.name}</h3>
                    <span className="badge badge-secondary text-xs">{template.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {template.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTemplates.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No templates found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

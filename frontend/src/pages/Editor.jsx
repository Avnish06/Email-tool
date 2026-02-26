import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCampaign } from "../Context/CampaignContext";
import { v4 as uuid } from "uuid";
import CampaignLayout from "../layouts/CampaignLayout";
import React from "react";
import axios from "axios";
import { Sparkles, Loader2 } from "lucide-react";
import { AppUrl } from "../App";

/* ================= MAIN ================= */

const Editor = () => {
  const { campaign, setCampaign } = useCampaign();
  const navigate = useNavigate();

  /* ================= DEFAULT BLOCK ================= */

  const createFirstBlock = () => {
    if (campaign.content) {
      return [
        {
          id: uuid(),
          type: "text",
          data: {
            text: campaign.content,
            size: 16,
            color: "#111827",
            align: "left",
            bold: false,
            italic: false,
            underline: false,
          },
        },
      ];
    }

    return [
      {
        id: uuid(),
        type: "text",
        data: {
          text: "Start writing your email here...",
          size: 16,
          color: "#111827",
          align: "left",
          bold: false,
          italic: false,
          underline: false,
        },
      },
    ];
  };

 const [blocks, setBlocks] = useState([]);

useEffect(() => {

  if (campaign.blocks && campaign.blocks.length > 0) {
    setBlocks(campaign.blocks);
  } else {
    setBlocks(createFirstBlock());
  }

}, []);


  const [dragId, setDragId] = useState(null);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  /* ================= AUTO SAVE ================= */

  useEffect(() => {
    setCampaign({
      ...campaign,
      blocks,
    });
  }, [blocks]);

  /* ================= BLOCK TOOLS ================= */

  const addBlock = (type) => {
    const block = {
      id: uuid(),
      type,
      data: getDefault(type),
    };

    setBlocks((prev) => [...prev, block]);
  };

  const getDefault = (type) => {
    switch (type) {
      case "text":
        return {
          text: "Write something...",
          size: 16,
          color: "#1c1917",
          align: "left",
          bold: false,
          italic: false,
          underline: false,
        };

      case "image":
        return {
          url: "https://via.placeholder.com/600x300",
          width: 100,
          radius: 8,
        };

      case "button":
        return {
          text: "Click Here",
          link: "#",
          bg: "#0d9488",
          color: "#ffffff",
          radius: 8,
        };

      case "divider":
        return {
          height: 1,
          color: "#e5e7eb",
        };

      default:
        return {};
    }
  };

  /* ================= UPDATE ================= */

  const update = (id, data) => {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, data } : b))
    );
  };

  /* ================= DELETE ================= */

  const remove = (id) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  /* ================= DRAG ================= */

  const onDragStart = (id) => setDragId(id);

  const onDrop = (id) => {
    if (!dragId) return;

    const from = blocks.findIndex((b) => b.id === dragId);
    const to = blocks.findIndex((b) => b.id === id);

    if (from === -1 || to === -1) return;

    const arr = [...blocks];
    const temp = arr[from];

    arr.splice(from, 1);
    arr.splice(to, 0, temp);

    setBlocks(arr);
    setDragId(null);
  };

  /* ================= AI GENERATION ================= */

  const handleAIGenerate = async () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    try {
      const { data } = await axios.post(`${AppUrl}/ai/generate`, {
        prompt: aiPrompt,
      });

      if (data.success) {
        setBlocks(data.blocks);
        setIsAIModalOpen(false);
        setAiPrompt("");
      }
    } catch (error) {
      console.error("AI Generation failed", error);
      alert("Failed to generate template. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  /* ================= SAVE ================= */

  const save = () => {
    if (!campaign.subject || !blocks.length) {
      alert("Missing content");
      return;
    }

    setCampaign({
      ...campaign,
      blocks,
    });

    navigate("/campaign/preview");
  };

  /* ================= UI ================= */

  return (
    <CampaignLayout>
      <div className="pt-24 px-6 min-h-screen bg-background relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
        <h1 className="text-3xl font-bold text-center mb-6 text-foreground relative z-10">
          🚀 Pro Email Designer
        </h1>

        {/* SUBJECT */}
        <div className="max-w-6xl mx-auto mb-4 relative z-10">
          <input
            value={campaign.subject}
            onChange={(e) =>
              setCampaign({
                ...campaign,
                subject: e.target.value,
              })
            }
            className="w-full p-4 bg-background border border-border rounded-xl shadow focus:ring-2 focus:ring-primary text-foreground outline-none transition-all"
            placeholder="Email Subject"
          />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 relative z-10">
          {/* LEFT PANEL */}
          <div className="bg-card p-5 rounded-xl border border-border shadow-xl">
            {/* TOOLBAR */}
            <div className="flex flex-wrap gap-2 mb-5">
              <Tool onClick={() => addBlock("text")}>📝 Text</Tool>
              <Tool onClick={() => addBlock("image")}>🖼 Image</Tool>
              <Tool onClick={() => addBlock("button")}>🔘 Button</Tool>
              <Tool onClick={() => addBlock("divider")}>➖ Divider</Tool>
              <button
                onClick={() => setIsAIModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg flex items-center gap-2 font-semibold hover:shadow-lg transition-all active:scale-95"
              >
                <Sparkles size={16} /> Magic AI ✨
              </button>
            </div>

            {/* BLOCKS */}
            <div className="space-y-3">
              {blocks.map((b) => (
                <div
                  key={b.id}
                  draggable
                  onDragStart={() => onDragStart(b.id)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => onDrop(b.id)}
                  className="border border-border p-3 rounded-lg bg-background hover:shadow-md cursor-move transition-all"
                >
                  <Block block={b} update={update} remove={remove} />
                </div>
              ))}
            </div>

            <button
              onClick={save}
              className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              Save & Preview → 🚀
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-card p-4 rounded-xl border border-border shadow-xl flex justify-center">
            <MobilePreview subject={campaign.subject} blocks={blocks} />
          </div>
        </div>

        {/* AI MODAL */}
        {isAIModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
            <div className="bg-card w-full max-w-md rounded-2xl border border-border shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Magic AI Template</h3>
                    <p className="text-sm text-muted-foreground">Describe your email idea</p>
                  </div>
                </div>

                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="e.g., A professional newsletter for a tech company, or a high-converting sale announcement for a clothing store..."
                  className="w-full h-32 p-4 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none text-foreground"
                />

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setIsAIModalOpen(false)}
                    className="flex-1 py-3 px-4 rounded-xl border border-border hover:bg-muted font-semibold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAIGenerate}
                    disabled={isGenerating || !aiPrompt}
                    className="flex-[2] py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Sparkles size={18} />
                    )}
                    {isGenerating ? "Generating..." : "Generate Magic"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </CampaignLayout>
  );
};

/* ================= TOOL ================= */

const Tool = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground hover:bg-muted hover:border-primary/50 font-medium transition-all"
  >
    {children}
  </button>
);

/* ================= BLOCK ================= */

const Block = ({ block, update, remove }) => {
  const d = block.data;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <b className="capitalize">{block.type}</b>
        <button onClick={() => remove(block.id)} className="text-red-500">
          ✕
        </button>
      </div>

      {/* TEXT */}
      {block.type === "text" && (
        <div className="space-y-2">
          <textarea
            value={d.text}
            onChange={(e) =>
              update(block.id, { ...d, text: e.target.value })
            }
            className="w-full bg-background border border-border p-2 rounded text-foreground focus:border-primary outline-none"
          />

          <div className="flex flex-wrap gap-2 text-sm items-center">
            <input
              type="number"
              min="10"
              max="40"
              value={d.size}
              onChange={(e) =>
                update(block.id, { ...d, size: +e.target.value })
              }
              className="w-16 bg-background border border-border px-1 rounded text-foreground"
            />

            <input
              type="color"
              value={d.color}
              onChange={(e) =>
                update(block.id, { ...d, color: e.target.value })
              }
            />

            <select
              value={d.align}
              onChange={(e) =>
                update(block.id, { ...d, align: e.target.value })
              }
              className="bg-background border border-border rounded px-1 text-foreground"
            >
              <option value="left" className="bg-card">Left</option>
              <option value="center" className="bg-card">Center</option>
              <option value="right" className="bg-card">Right</option>
            </select>

            <button
              onClick={() => update(block.id, { ...d, bold: !d.bold })}
              className="font-bold"
            >
              B
            </button>

            <button
              onClick={() => update(block.id, { ...d, italic: !d.italic })}
              className="italic"
            >
              I
            </button>

            <button
              onClick={() =>
                update(block.id, { ...d, underline: !d.underline })
              }
              className="underline"
            >
              U
            </button>
          </div>
        </div>
      )}

      {/* IMAGE */}
      {block.type === "image" && (
        <div className="space-y-2">
          <input
            value={d.url}
            onChange={(e) => update(block.id, { ...d, url: e.target.value })}
            className="w-full border p-2 rounded"
            placeholder="Image URL"
          />

          <label className="text-sm">
            Width %
            <input
              type="range"
              min="20"
              max="100"
              value={d.width}
              onChange={(e) =>
                update(block.id, { ...d, width: +e.target.value })
              }
            />
          </label>

          <label className="text-sm">
            Radius
            <input
              type="range"
              min="0"
              max="30"
              value={d.radius}
              onChange={(e) =>
                update(block.id, { ...d, radius: +e.target.value })
              }
            />
          </label>
        </div>
      )}

      {/* BUTTON */}
      {block.type === "button" && (
        <div className="space-y-2">
          <input
            value={d.text}
            onChange={(e) => update(block.id, { ...d, text: e.target.value })}
            className="w-full border p-2 rounded"
            placeholder="Text"
          />

          <input
            value={d.link}
            onChange={(e) => update(block.id, { ...d, link: e.target.value })}
            className="w-full border p-2 rounded"
            placeholder="Link"
          />

          <div className="flex gap-2">
            <input
              type="color"
              value={d.bg}
              onChange={(e) => update(block.id, { ...d, bg: e.target.value })}
            />
            <input
              type="color"
              value={d.color}
              onChange={(e) =>
                update(block.id, { ...d, color: e.target.value })
              }
            />
          </div>

          <input
            type="range"
            min="0"
            max="30"
            value={d.radius}
            onChange={(e) =>
              update(block.id, { ...d, radius: +e.target.value })
            }
          />
        </div>
      )}

      {/* DIVIDER */}
      {block.type === "divider" && (
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min="1"
            max="10"
            value={d.height}
            onChange={(e) =>
              update(block.id, { ...d, height: +e.target.value })
            }
            className="w-16 border rounded px-1"
          />
          <input
            type="color"
            value={d.color}
            onChange={(e) =>
              update(block.id, { ...d, color: e.target.value })
            }
          />
        </div>
      )}
    </div>
  );
};

/* ================= MOBILE PREVIEW ================= */

const MobilePreview = ({ subject, blocks }) => {
  return (
    <div className="bg-gray-200 rounded-2xl p-4" style={{ width: 390 }}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="p-4 border-b">
          <h2 className="font-semibold mb-1">{subject || "No Subject"}</h2>
          <p className="text-xs text-gray-500">
            From: Your Company • Now
          </p>
        </div>

        <div className="p-4 space-y-4">
          {blocks.map((b) => {
            const d = b.data;

            return (
              <div key={b.id}>
                {b.type === "text" && (
                  <p
                    style={{
                      fontSize: d.size,
                      color: d.color,
                      fontWeight: d.bold ? "700" : "400",
                      fontStyle: d.italic ? "italic" : "normal",
                      textDecoration: d.underline ? "underline" : "none",
                      textAlign: d.align,
                      lineHeight: "1.6",
                    }}
                  >
                    {d.text}
                  </p>
                )}

                {b.type === "image" && (
                  <img
                    src={d.url}
                    style={{
                      width: `${d.width}%`,
                      borderRadius: d.radius,
                    }}
                    className="mx-auto"
                    alt=""
                  />
                )}

                {b.type === "button" && (
                  <div className="text-center">
                    <a
                      href={d.link}
                      style={{
                        background: d.bg,
                        color: d.color,
                        borderRadius: d.radius,
                      }}
                      className="inline-block px-6 py-2 text-sm shadow"
                    >
                      {d.text}
                    </a>
                  </div>
                )}

                {b.type === "divider" && (
                  <hr
                    style={{
                      height: d.height,
                      backgroundColor: d.color,
                      border: "none",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Editor;

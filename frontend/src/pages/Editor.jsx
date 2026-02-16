import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCampaign } from "../Context/CampaignContext";
import { v4 as uuid } from "uuid";
import CampaignLayout from "../layouts/CampaignLayout";
import React from "react";

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
          color: "#111827",
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
          bg: "#4f46e5",
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
      <div className="pt-24 px-6 min-h-screen bg-gradient-to-br from-teal-50 to-purple-100">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-600">
          🚀 Pro Email Designer
        </h1>

        {/* SUBJECT */}
        <div className="max-w-6xl mx-auto mb-4">
          <input
            value={campaign.subject}
            onChange={(e) =>
              setCampaign({
                ...campaign,
                subject: e.target.value,
              })
            }
            className="w-full p-4 border rounded-xl shadow focus:ring-2 focus:ring-teal-500"
            placeholder="Email Subject"
          />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* LEFT PANEL */}
          <div className="bg-white p-5 rounded-xl shadow-xl">
            {/* TOOLBAR */}
            <div className="flex flex-wrap gap-2 mb-5">
              <Tool onClick={() => addBlock("text")}>📝 Text</Tool>
              <Tool onClick={() => addBlock("image")}>🖼 Image</Tool>
              <Tool onClick={() => addBlock("button")}>🔘 Button</Tool>
              <Tool onClick={() => addBlock("divider")}>➖ Divider</Tool>
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
                  className="border p-3 rounded-lg bg-gray-50 hover:shadow cursor-move"
                >
                  <Block block={b} update={update} remove={remove} />
                </div>
              ))}
            </div>

            <button
              onClick={save}
              className="w-full mt-6 bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
            >
              Save & Preview → 🚀
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white p-4 rounded-xl shadow-xl flex justify-center">
            <MobilePreview subject={campaign.subject} blocks={blocks} />
          </div>
        </div>
      </div>
    </CampaignLayout>
  );
};

/* ================= TOOL ================= */

const Tool = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 border rounded-lg bg-teal-50 hover:bg-indigo-100 font-medium"
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
            className="w-full border p-2 rounded"
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
              className="w-16 border px-1 rounded"
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
              className="border rounded px-1"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
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

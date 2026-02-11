import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCampaign } from "../Context/CampaignContext";
import CampaignLayout from "../layouts/CampaignLayout";
import axios from "axios";
import { AppUrl } from "../App";
import { toast } from "react-toastify";
import blocksToHtml from "../utils/blocksToHtml.js";

const Preview = () => {
  const navigate = useNavigate();
  const { campaign, setCampaign } = useCampaign();

  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (
      !campaign.subject ||
      !campaign.blocks?.length ||
      campaign.contacts.length === 0
    ) {
      alert("Incomplete campaign ❌");
      return;
    }
          
    try {
      setLoading(true);
      console.log("Sending Campaign:", campaign);
      alert("Campaign Sent Successfully 🚀");
      setCampaign({
        name: "",
        contacts: [],
        type: "",
        subject: "",
        content: "",
        blocks: [],
      });
               
           let mainContent = blocksToHtml(campaign.blocks)
           console.log(campaign.block)
    let res = await axios.post(AppUrl + "/sendmail/sendemail",{email: campaign.contacts, name: campaign.name,subject:campaign.subject, content: mainContent},{withCredentials: true})
      console.log(res.data)
      toast.success("Email Send Successfully")
      navigate("/campaigns");
    } catch (err) {
      toast.error(err)
      console.log(err)
    } finally { 
      setLoading(false);
    }
  };

  const renderBlock = (b) => {
    const d = b.data;

    switch (b.type) {
      case "text":
        return (
          <p
            style={{
              fontSize: d.size,
              color: d.color,
              fontWeight: d.bold ? "700" : "400",
              fontStyle: d.italic ? "italic" : "normal",
              textAlign: d.align || "left",
              lineHeight: "1.6",
              marginBottom: "12px",
            }}
          >
            {d.text}
          </p>
        );

      case "image":
        return (
          <img
            src={d.url}
            alt=""
            className="w-full rounded-lg mb-3"
          />
        );

      case "button":
        return (
          <div className="flex justify-center my-4">
            <a
              href={d.link}
              style={{
                background:
                  d.style === "gradient"
                    ? "linear-gradient(to right,#6366f1,#ec4899)"
                    : d.style === "outline"
                    ? "transparent"
                    : d.bg,

                color:
                  d.style === "outline"
                    ? d.bg
                    : d.color,

                border:
                  d.style === "outline"
                    ? `2px solid ${d.bg}`
                    : "none",

                borderRadius: d.radius,
              }}
              className="px-6 py-2 text-sm font-medium shadow-md"
            >
              {d.text}
            </a>
          </div>
        );

      case "divider":
        return <hr className="my-4 border-gray-300" />;

      default:
        return null;
    }
  };
  return (
    <CampaignLayout>
      <div className="pt-24 min-h-screen bg-gray-100 flex justify-center px-4">

        <div className="bg-white max-w-4xl w-full p-8 rounded-xl shadow space-y-6">

          <h1 className="text-2xl font-bold text-center">
            Campaign Preview 📱
          </h1>

          {/* PHONE FRAME */}
          <div className="flex justify-center">

            <div className="bg-gray-300 rounded-[40px] p-3 shadow-xl">

              <div
                className="bg-white rounded-[30px] overflow-hidden"
                style={{ width: 390, minHeight: 700 }}
              >

                {/* STATUS BAR */}
                <div className="h-7 bg-gray-100 flex justify-between px-4 text-xs items-center">

                  <span>12:45</span>

                  <div className="flex gap-2">
                    <span>📶</span>
                    <span>📡</span>
                    <span>🔋</span>
                  </div>

                </div>

                {/* APP HEADER */}
                <div className="flex items-center gap-3 px-4 py-3 border-b">

                  <button>←</button>

                  <h2 className="font-medium truncate text-sm">
                    {campaign.subject || "No Subject"}
                  </h2>

                </div>

                {/* EMAIL HEADER */}
                <div className="p-4 border-b">

                  <h3 className="font-semibold text-base mb-1">
                    {campaign.subject || "No Subject"}
                  </h3>

                  <div className="text-xs text-gray-500 flex justify-between">

                    <span>From: Hatbaliya Tech</span>
                    <span>Now</span>

                  </div>

                  <div className="text-xs text-gray-400 mt-1">
                    To: {campaign.contacts.length} recipients
                  </div>

                </div>

                {/* EMAIL BODY */}
                <div className="p-4 bg-white text-sm">

                  {campaign.blocks?.map((b) => (
                    <div key={b.id}>
                      {renderBlock(b)}
                    </div>
                  ))}

                </div>

                {/* FOOTER */}
                <div className="border-t px-4 py-3 flex justify-between text-sm text-gray-500">

                  <button>↩ Reply</button>
                  <button>↪ Forward</button>
                  <button>⭐</button>

                </div>

              </div>

            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-4">

            <button
              onClick={() => navigate("/campaign/editor")}
              className="border px-5 py-2 rounded hover:bg-gray-100"
            >
              Edit ✏️
            </button>

            <button
              disabled={loading}
              onClick={handleSend}
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send 🚀"}
            </button>

          </div>

        </div>

      </div>
    </CampaignLayout>
  );
};

export default Preview;

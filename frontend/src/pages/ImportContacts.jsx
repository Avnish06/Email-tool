import { useState } from "react";
import { useCampaign } from "../Context/CampaignContext";
import axios from "axios";
import * as XLSX from "xlsx";
import { AppUrl } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CampaignLayout from "../layouts/CampaignLayout.jsx";
import { 
  UserPlus, 
  FileSpreadsheet, 
  Building2, 
  Factory, 
  History, 
  Download, 
  X, 
  CheckCircle2, 
  Trash2, 
  ArrowRight,
  Import,
  Mail
} from "lucide-react";

/**
 * EXTREME REDESIGN: ImportContacts
 * Focus: Modernized iconography, volumetric background, and high-end table aesthetics.
 */
const ImportContacts = () => {
  const { campaign, setCampaign } = useCampaign();
  const [method, setMethod] = useState("");
  const [manualEmail, setManualEmail] = useState("");
  const [dragging, setDragging] = useState(false);
  const navigate = useNavigate();

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
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const addManual = () => {
    if (!manualEmail) return;
    if (!manualEmail.includes("@")) {
      toast.error("Invalid Email");
      return;
    }
    if (campaign.contacts.includes(manualEmail)) {
      toast.info("Already added");
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
        .map((row) => row.Email || row.email || row.EMAIL)
        .filter(Boolean);
      if (!emails.length) {
        toast.error("No emails found in file");
        return;
      }
      const merged = [...new Set([...campaign.contacts, ...emails])];
      setCampaign({ ...campaign, contacts: merged });
      toast.success(`Imported ${emails.length} contacts`);
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
      contacts: campaign.contacts.filter((e) => e !== email),
    });
  };

  return (
    <CampaignLayout>
      <div className="page-root min-h-full flex flex-col items-center relative overflow-hidden bg-background text-foreground font-sans w-full p-6 md:p-12 transition-colors duration-500 pt-24">
        
        {/* EXTREME BACKGROUND: Volumetric Light */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[60%] h-[70%] bg-primary/10 dark:bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-20%] left-[5%] w-[50%] h-[60%] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] space-y-12">
          {/* Header Area */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-4">
              <Import size={14} />
              Step 02 — Data Ingestion
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Import Your <span className="text-primary">Network</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-[600px] mx-auto">
              Select your preferred method to bring your contacts into the campaign workflow.
            </p>
          </div>

          {/* MAIN GLASS CONTAINER */}
          <div className="bg-background/40 dark:bg-black/40 border border-border/50 rounded-[40px] p-8 md:p-12 space-y-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-[32px] relative overflow-hidden transition-all duration-500">
            {/* Top Shine */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* Method Selection */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-foreground/80 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                Select Import Method
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                <MethodCard
                  title="Manual"
                  icon={<UserPlus size={32} />}
                  active={method === "manual"}
                  onClick={() => setMethod("manual")}
                />
                <MethodCard
                  title="Excel / CSV"
                  icon={<FileSpreadsheet size={32} />}
                  active={method === "excel"}
                  onClick={() => setMethod("excel")}
                />
                <MethodCard title="CRM" icon={<Building2 size={32} />} disabled />
                <MethodCard title="ERP" icon={<Factory size={32} />} disabled />
                <MethodCard title="Previous" icon={<History size={32} />} disabled />
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="relative">
              {method === "manual" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h3 className="text-lg font-bold text-foreground">Add Manually</h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-primary transition-colors" size={20} />
                      <input
                        value={manualEmail}
                        onChange={(e) => setManualEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-background/50 border border-border/60 p-4 pl-12 rounded-2xl text-lg text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                      />
                    </div>
                    <button
                      onClick={addManual}
                      className="bg-primary text-primary-foreground px-12 py-4 rounded-2xl font-black uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[0_8px_20px_-4px_rgba(6,200,180,0.5)] active:scale-95"
                    >
                      Add to List
                    </button>
                  </div>
                </div>
              )}

              {method === "excel" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h3 className="text-lg font-bold text-foreground">Upload Dataset</h3>
                  <label
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-[32px] p-12 text-center transition-all cursor-pointer group flex flex-col items-center gap-4 ${
                      dragging ? "border-primary bg-primary/5 scale-[0.99]" : "border-border/60 hover:border-primary/40 hover:bg-primary/5"
                    }`}
                  >
                    <input type="file" accept=".xlsx,.xls,.csv" onChange={handleFile} hidden id="file-upload" />
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                      <Download size={32} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-foreground">Drop file or Browse</p>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest mt-1">.XLSX, .CSV supported</p>
                    </div>
                  </label>
                </div>
              )}
            </div>

            {/* Results Table Area */}
            {campaign.contacts.length > 0 && (
              <div className="pt-12 border-t border-border/50 space-y-8 animate-in fade-in duration-700">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Contact List</p>
                    <p className="text-2xl font-black text-foreground">{campaign.contacts.length} <span className="text-primary tracking-tight font-bold text-base">Emails Ready</span></p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-[0.15em]">
                    <CheckCircle2 size={12} />
                    Deduplicated
                  </div>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-border/60 bg-background/20 backdrop-blur-md">
                  <table className="w-full text-left">
                    <thead className="bg-muted/50 text-muted-foreground/60">
                      <tr>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em]">Pos</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em]">Email Address</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-right">Settings</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {campaign.contacts.map((email, i) => (
                        <tr key={email} className="group hover:bg-primary/5 transition-colors">
                          <td className="px-8 py-5 text-sm font-mono text-muted-foreground/40 group-hover:text-primary transition-colors">
                            {String(i + 1).padStart(2, '0')}
                          </td>
                          <td className="px-8 py-5 text-base font-bold text-foreground/80 group-hover:text-foreground transition-all">
                            {email}
                          </td>
                          <td className="px-8 py-5 text-right">
                            <button
                              onClick={() => removeEmail(email)}
                              className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-destructive/10 text-destructive hover:bg-destructive hover:text-white transition-all transform hover:rotate-12"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* FINAL ACTION BUTTONS */}
                <div className="flex flex-col md:flex-row justify-center gap-4 pt-10">
                  <button
                    onClick={storeContact}
                    className="relative px-12 h-14 bg-primary text-primary-foreground font-black uppercase tracking-widest rounded-2xl shadow-[0_8px_20px_-4px_rgba(6,200,180,0.5)] active:scale-95 transition-all overflow-hidden"
                  >
                    Save Contacts
                  </button>
                  <button 
                    onClick={() => navigate("/campaign/type")}
                    className="group px-12 h-14 bg-white/5 dark:bg-white/5 border border-border/60 hover:border-primary/40 hover:bg-primary/5 text-foreground font-black uppercase tracking-widest rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                    Configure Campaign
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CampaignLayout>
  );
};

const MethodCard = ({ title, icon, onClick, active, disabled }) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`relative group border-[1.5px] rounded-[32px] p-6 md:p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 ${
        active
          ? "border-primary bg-primary/10 shadow-[0_20px_40px_-10px_rgba(6,200,180,0.2)] scale-[1.02]"
          : "border-border/60 hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
      } ${disabled ? "opacity-30 grayscale cursor-not-allowed" : ""}`}
    >
      <div className={`p-4 rounded-2xl transition-all duration-500 ${
        active ? "bg-primary text-primary-foreground shadow-[0_0_20px_var(--primary)]" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
      }`}>
        {icon}
      </div>
      <div className="text-center">
        <p className={`font-black uppercase tracking-[0.1em] text-xs transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}>{title}</p>
        {disabled && <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mt-2">Locked</p>}
      </div>
      {active && (
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)] animate-ping" />
      )}
    </div>
  );
};

export default ImportContacts;

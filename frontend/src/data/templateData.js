import { v4 as uuid } from "uuid";

// 20 STUNNING Email Templates with WORKING Images and Animations
export const frontendTemplates = [
    // MARKETING - Savvy Finance (Inspired by design)
    {
        id: "marketing-savvy-finance",
        name: "💳 Savvy Finance",
        category: "Marketing",
        description: "Premium dark theme with holographic accents",
        blocks: [
            { id: uuid(), type: "text", data: { text: "Introducing", size: 24, color: "#94a3b8", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Savvy Finance", size: 56, color: "#6366f1", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 24 } },
            { id: uuid(), type: "text", data: { text: "Your money's new bodyguard.", size: 32, color: "#1e293b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Savvy Finance actively shields every transaction with next-generation encryption, so you can move money with total confidence.", size: 18, color: "#64748b", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 1, color: "#e2e8f0" } },
            { id: uuid(), type: "button", data: { text: "Download app", link: "#", bg: "#4f46e5", color: "#ffffff", radius: 100 } },
        ],
    },

    // ONBOARDING - FinBank (Inspired by design)
    {
        id: "onboarding-finbank",
        name: "🏦 FinBank Welcome",
        category: "Onboarding",
        description: "Clean professional bank onboarding",
        blocks: [
            { id: uuid(), type: "text", data: { text: "FinBank", size: 20, color: "#0f172a", align: "left", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/7567530/pexels-photo-7567530.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 16 } },
            { id: uuid(), type: "text", data: { text: "Welcome to FinBank", size: 48, color: "#0f172a", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "The modern way to manage your money", size: 18, color: "#64748b", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "✓ Instant payments anywhere, anytime.\n✓ Smart budgeting with real-time insights.\n✓ Bank-level security built in.", size: 16, color: "#334155", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Your account is ready", link: "#", bg: "#0f172a", color: "#ffffff", radius: 8 } },
        ],
    },

    // NEWSLETTER - Co-Lab (Inspired by design)
    {
        id: "newsletter-colab",
        name: "🤝 Co-Lab Connect",
        category: "Newsletter",
        description: "Modern coworking newsletter",
        blocks: [
            { id: uuid(), type: "text", data: { text: "Co-Lab.", size: 24, color: "#0f172a", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Work. Connect. Thrive.", size: 42, color: "#059669", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 0 } },
            { id: uuid(), type: "text", data: { text: "Find community in our coworking space.", size: 18, color: "#475569", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "LEARN MORE", link: "#", bg: "#059669", color: "#ffffff", radius: 4 } },
            { id: uuid(), type: "text", data: { text: "About Co-Lab.", size: 20, color: "#0f172a", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 1, color: "#e2e8f0" } },
        ],
    },

    // PROMOTIONAL - Bright Path (Inspired by design)
    {
        id: "promotional-brightpath",
        name: "🌱 Bright Path Foundation",
        category: "Promotional",
        description: "Charity and impact focus",
        blocks: [
            { id: uuid(), type: "text", data: { text: "Bright Path Foundation", size: 16, color: "#64748b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Where Compassion Creates Change.", size: 14, color: "#94a3b8", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 20 } },
            { id: uuid(), type: "text", data: { text: "If you want to give, support is here", size: 28, color: "#1e293b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "There's more to philanthropy than funds. Your time, talent, and compassion all create impact.", size: 16, color: "#64748b", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "GET INVOLVED", link: "#", bg: "#065f46", color: "#ffffff", radius: 4 } },
        ],
    },

    // ANNOUNCEMENT - Sanctuary (Inspired by design)
    {
        id: "announcement-sanctuary",
        name: "✨ Sanctuary of Peace",
        category: "Announcement",
        description: "Elegant, serene announcement",
        blocks: [
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1054178/pexels-photo-1054178.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 40 } },
            { id: uuid(), type: "text", data: { text: "A sanctuary of Peace in a busy Season", size: 36, color: "#ffffff", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Join us this Sunday for the Candlelight Service.", size: 16, color: "#cbd5e1", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 1, color: "#334155" } },
            { id: uuid(), type: "text", data: { text: "The Light Shines in the Darkness", size: 20, color: "#ffffff", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Dear [Name],\nThe days are getting shorter and the evenings are getting longer. In the midst of the chaos, we invite you to pause. This Sunday, join us for our annual Candlelight Service—an evening defined by quiet reflection, acoustic music, and the beautiful tradition of lighting candles together to represent hope.", size: 14, color: "#94a3b8", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "❄ What to expect", size: 24, color: "#ffffff", align: "center", bold: true, italic: false, underline: false } },
        ],
    },
    // ANNOUNCEMENT - Product Launch
    {
        id: "announcement-product-launch",
        name: "🚀 Product Launch",
        category: "Announcement",
        description: "Bold product announcement with hero image",
        blocks: [
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 0 } },
            { id: uuid(), type: "text", data: { text: "🚀 LAUNCHING SOON", size: 48, color: "#dc2626", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "The Future is Here", size: 32, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 4, color: "#dc2626" } },
            { id: uuid(), type: "text", data: { text: "Revolutionary innovation that will transform your world. Be among the first to experience it.", size: 18, color: "#4b5563", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Get Early Access →", link: "#", bg: "#dc2626", color: "#ffffff", radius: 12 } },
        ],
    },

    // ANNOUNCEMENT - Milestone
    {
        id: "announcement-milestone",
        name: "🎉 Milestone Celebration",
        category: "Announcement",
        description: "Celebrate achievements",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🎊 WE DID IT!", size: 52, color: "#7c3aed", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 16 } },
            { id: uuid(), type: "text", data: { text: "1 Million Happy Customers", size: 36, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 3, color: "#a78bfa" } },
            { id: uuid(), type: "text", data: { text: "Thank you for being part of our incredible journey!", size: 18, color: "#6b7280", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Claim Your Reward 🎁", link: "#", bg: "#7c3aed", color: "#ffffff", radius: 12 } },
        ],
    },

    // CONFIRMATION - Order
    {
        id: "confirmation-order",
        name: "✅ Order Confirmed",
        category: "Confirmation",
        description: "Premium order confirmation",
        blocks: [
            { id: uuid(), type: "text", data: { text: "✨ ORDER CONFIRMED", size: 40, color: "#059669", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 3, color: "#10b981" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 90, radius: 12 } },
            { id: uuid(), type: "text", data: { text: "Thank you for your purchase!", size: 24, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Order #2024-VIP-789\n🚚 Delivery: 2-3 Days\n📦 Express Shipping", size: 18, color: "#374151", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Track Order", link: "#", bg: "#059669", color: "#ffffff", radius: 10 } },
        ],
    },

    // CONFIRMATION - Booking
    {
        id: "confirmation-booking",
        name: "🎫 Booking Confirmed",
        category: "Confirmation",
        description: "Travel booking confirmation",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🎫 BOOKING CONFIRMED", size: 42, color: "#0ea5e9", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 0 } },
            { id: uuid(), type: "text", data: { text: "Your Adventure Awaits!", size: 28, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#0ea5e9" } },
            { id: uuid(), type: "text", data: { text: "Booking Ref: BK-2024-XYZ\nDate: March 25, 2026\nGuests: 2 Adults", size: 16, color: "#475569", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "View Details", link: "#", bg: "#0ea5e9", color: "#ffffff", radius: 8 } },
        ],
    },

    // EDUCATIONAL - Masterclass
    {
        id: "educational-masterclass",
        name: "📚 Masterclass",
        category: "Educational",
        description: "Premium educational content",
        blocks: [
            { id: uuid(), type: "text", data: { text: "📚 EXCLUSIVE MASTERCLASS", size: 38, color: "#f59e0b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 12 } },
            { id: uuid(), type: "text", data: { text: "Master Digital Marketing", size: 28, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#fbbf24" } },
            { id: uuid(), type: "text", data: { text: "✓ Live Q&A Session\n✓ Certificate Included\n✓ Exclusive Resources", size: 16, color: "#374151", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Reserve Spot", link: "#", bg: "#f59e0b", color: "#ffffff", radius: 10 } },
        ],
    },

    // EDUCATIONAL - Tips
    {
        id: "educational-tips",
        name: "💡 Pro Tips",
        category: "Educational",
        description: "Weekly learning tips",
        blocks: [
            { id: uuid(), type: "text", data: { text: "💡 PRO TIP OF THE WEEK", size: 36, color: "#8b5cf6", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 3, color: "#a78bfa" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 95, radius: 12 } },
            { id: uuid(), type: "text", data: { text: "Boost Productivity by 10x", size: 26, color: "#1f2937", align: "left", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Use the Pomodoro Technique: 25-minute focused sessions + 5-minute breaks = 300% productivity boost!", size: 16, color: "#4b5563", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "More Tips", link: "#", bg: "#8b5cf6", color: "#ffffff", radius: 8 } },
        ],
    },

    // RECEIPT - Luxury
    {
        id: "receipt-luxury",
        name: "💎 Luxury Receipt",
        category: "Receipt",
        description: "Premium gold receipt",
        blocks: [
            { id: uuid(), type: "text", data: { text: "✨ PREMIUM RECEIPT", size: 34, color: "#78350f", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#d97706" } },
            { id: uuid(), type: "text", data: { text: "Invoice #INV-2024-GOLD-001", size: 16, color: "#92400e", align: "center", bold: false, italic: true, underline: false } },
            { id: uuid(), type: "text", data: { text: "Premium Package .......... $499.00\nSupport ........................... $99.00", size: 16, color: "#374151", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#1f2937" } },
            { id: uuid(), type: "text", data: { text: "TOTAL: $598.00", size: 30, color: "#78350f", align: "right", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Paid via •••• 4242", size: 14, color: "#6b7280", align: "center", bold: false, italic: false, underline: false } },
        ],
    },

    // RECEIPT - Modern
    {
        id: "receipt-modern",
        name: "⚡ Modern Receipt",
        category: "Receipt",
        description: "Clean minimal receipt",
        blocks: [
            { id: uuid(), type: "text", data: { text: "RECEIPT", size: 32, color: "#0ea5e9", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 3, color: "#0ea5e9" } },
            { id: uuid(), type: "text", data: { text: "Digital License ............. $149.00\nSupport (1 year) ........... $49.00\nTax ................................ $19.84", size: 16, color: "#475569", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 1, color: "#cbd5e1" } },
            { id: uuid(), type: "text", data: { text: "Total: $217.84", size: 26, color: "#0ea5e9", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Download PDF", link: "#", bg: "#0ea5e9", color: "#ffffff", radius: 8 } },
        ],
    },

    // EVENT - Gala
    {
        id: "event-gala",
        name: "🌟 Gala Invitation",
        category: "Event",
        description: "Elegant gala event",
        blocks: [
            { id: uuid(), type: "text", data: { text: "✨ YOU'RE INVITED ✨", size: 44, color: "#d946ef", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 0 } },
            { id: uuid(), type: "text", data: { text: "Annual Charity Gala 2026", size: 34, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#d946ef" } },
            { id: uuid(), type: "text", data: { text: "📅 April 15, 2026\n⏰ 7:00 PM\n📍 Grand Ballroom\n👔 Black Tie", size: 16, color: "#374151", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "RSVP Now", link: "#", bg: "#d946ef", color: "#ffffff", radius: 10 } },
        ],
    },

    // EVENT - Webinar
    {
        id: "event-webinar",
        name: "💻 Live Webinar",
        category: "Event",
        description: "Virtual event invite",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🎥 LIVE WEBINAR", size: 40, color: "#06b6d4", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#22d3ee" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 95, radius: 12 } },
            { id: uuid(), type: "text", data: { text: "Future of AI in Business", size: 28, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "🗓 Tomorrow 3PM EST\n⏱ 60 minutes\n🎁 Free + Recording", size: 16, color: "#374151", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Register Free", link: "#", bg: "#06b6d4", color: "#ffffff", radius: 8 } },
        ],
    },

    // MARKETING - Mega Sale
    {
        id: "marketing-mega-sale",
        name: "🔥 Mega Sale",
        category: "Marketing",
        description: "High-energy sale",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🔥 MEGA SALE 🔥", size: 52, color: "#dc2626", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "UP TO 70% OFF", size: 42, color: "#991b1b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 4, color: "#dc2626" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 8 } },
            { id: uuid(), type: "text", data: { text: "⏰ ENDS TONIGHT", size: 26, color: "#7f1d1d", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Shop Now →", link: "#", bg: "#dc2626", color: "#ffffff", radius: 10 } },
        ],
    },

    // MARKETING - Collection
    {
        id: "marketing-collection",
        name: "✨ New Collection",
        category: "Marketing",
        description: "New product launch",
        blocks: [
            { id: uuid(), type: "text", data: { text: "✨ NEW ARRIVALS ✨", size: 40, color: "#ec4899", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Spring/Summer 2026", size: 24, color: "#9ca3af", align: "center", bold: false, italic: true, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 0 } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#f9a8d4" } },
            { id: uuid(), type: "text", data: { text: "Fresh Styles. Bold Colors.", size: 22, color: "#1f2937", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Explore", link: "#", bg: "#ec4899", color: "#ffffff", radius: 12 } },
        ],
    },

    // NEWSLETTER - Tech
    {
        id: "newsletter-tech",
        name: "📰 Tech Weekly",
        category: "Newsletter",
        description: "Tech news digest",
        blocks: [
            { id: uuid(), type: "text", data: { text: "⚡ TECH WEEKLY", size: 38, color: "#6366f1", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#818cf8" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 10 } },
            { id: uuid(), type: "text", data: { text: "🔥 AI Revolution", size: 26, color: "#1f2937", align: "left", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "How machine learning is transforming industries worldwide.", size: 16, color: "#6b7280", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Read Article", link: "#", bg: "#6366f1", color: "#ffffff", radius: 8 } },
        ],
    },

    // NEWSLETTER - Lifestyle
    {
        id: "newsletter-lifestyle",
        name: "🌿 Lifestyle Monthly",
        category: "Newsletter",
        description: "Lifestyle content",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🌿 LIFESTYLE MONTHLY", size: 36, color: "#059669", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#10b981" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 12 } },
            { id: uuid(), type: "text", data: { text: "Mindful Living in Digital Age", size: 24, color: "#1f2937", align: "left", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Find balance and reduce stress in our connected world.", size: 16, color: "#4b5563", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Read Issue", link: "#", bg: "#059669", color: "#ffffff", radius: 8 } },
        ],
    },

    // ONBOARDING - Welcome
    {
        id: "onboarding-welcome",
        name: "🎉 Welcome",
        category: "Onboarding",
        description: "VIP welcome",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🎉 WELCOME!", size: 48, color: "#f59e0b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 95, radius: 15 } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#fbbf24" } },
            { id: uuid(), type: "text", data: { text: "Your Journey Starts Here", size: 28, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "✅ Complete profile (2 min)\n✅ Take tour (5 min)\n✅ First project (10 min)", size: 16, color: "#374151", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Get Started!", link: "#", bg: "#f59e0b", color: "#ffffff", radius: 10 } },
        ],
    },

    // ONBOARDING - Day 2
    {
        id: "onboarding-day2",
        name: "🚀 Day 2 Guide",
        category: "Onboarding",
        description: "Quick wins",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🚀 Day 2: Build Momentum", size: 34, color: "#8b5cf6", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#a78bfa" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 90, radius: 10 } },
            { id: uuid(), type: "text", data: { text: "🎯 Today's Quick Wins", size: 24, color: "#1f2937", align: "left", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "1. Connect integration (3 min)\n2. Customize dashboard (5 min)\n3. Invite team (2 min)", size: 16, color: "#4b5563", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Continue", link: "#", bg: "#8b5cf6", color: "#ffffff", radius: 8 } },
        ],
    },

    // PROMOTIONAL - VIP
    {
        id: "promotional-vip",
        name: "👑 VIP Offer",
        category: "Promotional",
        description: "Exclusive VIP deal",
        blocks: [
            { id: uuid(), type: "text", data: { text: "👑 VIP EXCLUSIVE", size: 46, color: "#7c3aed", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 3, color: "#7c3aed" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 100, radius: 12 } },
            { id: uuid(), type: "text", data: { text: "40% OFF + FREE GIFTS", size: 38, color: "#7c3aed", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Code: VIP40 | Expires in 48 hours", size: 16, color: "#6b7280", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Claim Offer", link: "#", bg: "#7c3aed", color: "#ffffff", radius: 10 } },
        ],
    },

    // PROMOTIONAL - Flash
    {
        id: "promotional-flash",
        name: "⚡ Flash Deal",
        category: "Promotional",
        description: "Limited time offer",
        blocks: [
            { id: uuid(), type: "text", data: { text: "⚡ FLASH DEAL ⚡", size: 48, color: "#dc2626", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Next 6 Hours Only!", size: 24, color: "#991b1b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 3, color: "#dc2626" } },
            { id: uuid(), type: "text", data: { text: "BUY 2 GET 1 FREE", size: 40, color: "#dc2626", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 95, radius: 10 } },
            { id: uuid(), type: "button", data: { text: "Shop Now", link: "#", bg: "#dc2626", color: "#ffffff", radius: 10 } },
        ],
    },

    // RE-ENGAGEMENT - Miss You
    {
        id: "reengagement-miss",
        name: "💙 We Miss You",
        category: "Re-Engagement",
        description: "Win-back campaign",
        blocks: [
            { id: uuid(), type: "text", data: { text: "💙 We Miss You!", size: 44, color: "#0ea5e9", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 90, radius: 15 } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#0ea5e9" } },
            { id: uuid(), type: "text", data: { text: "Come back and see what's new!", size: 20, color: "#475569", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "🎁 25% OFF + Free Premium", size: 26, color: "#0ea5e9", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Claim Gift", link: "#", bg: "#0ea5e9", color: "#ffffff", radius: 10 } },
        ],
    },

    // RE-ENGAGEMENT - Last Chance
    {
        id: "reengagement-last",
        name: "⚠️ Last Chance",
        category: "Re-Engagement",
        description: "Final reminder",
        blocks: [
            { id: uuid(), type: "text", data: { text: "⚠️ LAST CHANCE", size: 40, color: "#f59e0b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#fbbf24" } },
            { id: uuid(), type: "text", data: { text: "Account downgrade in 7 days", size: 18, color: "#78350f", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "❌ Lose premium features\n❌ Lose priority support\n❌ Lose member discounts", size: 16, color: "#374151", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "🎁 Stay active: 50% off for 3 months!", size: 20, color: "#f59e0b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Keep Active", link: "#", bg: "#f59e0b", color: "#ffffff", radius: 8 } },
        ],
    },

    // TRANSACTIONAL - Password
    {
        id: "transactional-password",
        name: "🔐 Password Reset",
        category: "Transactional",
        description: "Secure reset",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🔐 Password Reset", size: 36, color: "#4f46e5", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#6366f1" } },
            { id: uuid(), type: "text", data: { text: "Reset request received. Click below to create new password.", size: 16, color: "#4b5563", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Reset Password", link: "#", bg: "#4f46e5", color: "#ffffff", radius: 8 } },
            { id: uuid(), type: "divider", data: { height: 1, color: "#e0e7ff" } },
            { id: uuid(), type: "text", data: { text: "Link expires in 1 hour. Didn't request? Ignore this email.", size: 14, color: "#9ca3af", align: "center", bold: false, italic: false, underline: false } },
        ],
    },

    // TRANSACTIONAL - Delivery
    {
        id: "transactional-delivery",
        name: "📦 Out for Delivery",
        category: "Transactional",
        description: "Delivery notification",
        blocks: [
            { id: uuid(), type: "text", data: { text: "📦 Out for Delivery!", size: 40, color: "#059669", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#10b981" } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 95, radius: 12 } },
            { id: uuid(), type: "text", data: { text: "Arrives Today by 8PM", size: 24, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Tracking: TRK-2024-XYZ\nOrder: ORD-123456", size: 16, color: "#4b5563", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Track Live", link: "#", bg: "#059669", color: "#ffffff", radius: 10 } },
        ],
    },

    // WARNING - Security
    {
        id: "warning-security",
        name: "🚨 Security Alert",
        category: "Warning",
        description: "Critical security",
        blocks: [
            { id: uuid(), type: "text", data: { text: "🚨 SECURITY ALERT", size: 40, color: "#dc2626", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 3, color: "#dc2626" } },
            { id: uuid(), type: "text", data: { text: "Unusual Login Detected", size: 28, color: "#1f2937", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "📍 Tokyo, Japan\n⏰ Feb 14, 11:30 PM\n💻 Chrome on Android", size: 16, color: "#374151", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "If this wasn't you, secure account now:", size: 16, color: "#7f1d1d", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Secure Account", link: "#", bg: "#dc2626", color: "#ffffff", radius: 8 } },
        ],
    },

    // WARNING - Subscription
    {
        id: "warning-subscription",
        name: "⏰ Subscription Expiring",
        category: "Warning",
        description: "Renewal reminder",
        blocks: [
            { id: uuid(), type: "text", data: { text: "⏰ Subscription Expiring", size: 34, color: "#f59e0b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 2, color: "#fbbf24" } },
            { id: uuid(), type: "text", data: { text: "Ends in 3 days (Feb 17, 2026)", size: 20, color: "#78350f", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "✓ Unlimited access\n✓ Priority support\n✓ Member benefits\n✓ Ad-free", size: 16, color: "#374151", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "🎁 Renew today: 20% off!", size: 20, color: "#f59e0b", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Renew Now", link: "#", bg: "#f59e0b", color: "#ffffff", radius: 8 } },
        ],
    },
    // MODERN - SaaS Analytics
    {
        id: "modern-saas-analytics",
        name: "📊 SaaS Growth Insights",
        category: "Modern",
        description: "Premium SaaS report with conceptual graphs",
        blocks: [
            { id: uuid(), type: "text", data: { text: "MONTHLY GROWTH REPORT", size: 14, color: "#6366f1", align: "left", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Your Revenue is Climbing!", size: 36, color: "#111827", align: "left", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://storage.googleapis.com/banani-generated-images/generated-images/00bd44ad-2f85-4928-9bb1-ec5c15fdce71.jpg", width: 100, radius: 12 } },
            { id: uuid(), type: "text", data: { text: "Last month, your campaigns achieved a record-breaking 45% conversion lift. Here's a deep dive into the metrics that drove this success.", size: 16, color: "#4b5563", align: "left", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "divider", data: { height: 1, color: "#e5e7eb" } },
            { id: uuid(), type: "button", data: { text: "View Full Dashboard", link: "#", bg: "#6366f1", color: "#ffffff", radius: 8 } },
        ],
    },
    // MODERN - Dark AI
    {
        id: "modern-dark-ai",
        name: "✨ AI Feature Reveal",
        category: "Modern",
        description: "Intense dark theme with AI focus",
        blocks: [
            { id: uuid(), type: "text", data: { text: "THE FUTURE IS HERE", size: 12, color: "#a855f7", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "text", data: { text: "Meet your AI Assistant", size: 48, color: "#ffffff", align: "center", bold: true, italic: false, underline: false } },
            { id: uuid(), type: "image", data: { url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200", width: 90, radius: 24 } },
            { id: uuid(), type: "text", data: { text: "Automate your entire workflow with a single click. Our new neural engine understands your needs better than ever.", size: 18, color: "#94a3b8", align: "center", bold: false, italic: false, underline: false } },
            { id: uuid(), type: "button", data: { text: "Try AI Magic", link: "#", bg: "#9333ea", color: "#ffffff", radius: 100 } },
        ],
    },
];

export interface Persona {
  name: string;
  role: string;
  age: number;
  location: string;
  quote: string;
  context: string;
  goals: string[];
  frustrations: string[];
  imageType: string; // 'business' | 'socialite'
}

export interface WireframeScreen {
  title: string;
  description: string;
  elements: string[];
}

export const CASE_STUDY = {
  title: "ZipFit",
  tagline: "30-minute quick-commerce clothing delivery.",
  overview: "ZipFit revolutionizes fashion retail by treating clothing as an on-demand necessity. Whether you spilled coffee before a major pitch or your luggage was lost in transit, ZipFit delivers perfectly sized, ready-to-wear outfits directly to your location in under 30 minutes.",
  
  research: {
    needs: [
      "Immediate Access: Users need wearable, clean clothing delivered faster than traditional same-day e-commerce can provide.",
      "Reliable Sizing: Confidence that the delivered item will fit perfectly on the first try, as there is no time for returns.",
      "Live Transparency: Real-time, minute-by-minute tracking of the courier to manage time-sensitive emergencies."
    ],
    painPoints: [
      "Traditional online shopping takes 1-3 days minimum, which doesn't solve immediate wardrobe emergencies.",
      "Going to physical stores requires abandoning current locations (office, hotel, venue), eating up valuable time.",
      "Delivery apps focus on food and groceries; no reliable network exists for fast fashion delivery."
    ],
    goals: {
      user: "To securely purchase and receive a well-fitting, situation-appropriate outfit without leaving their current location.",
      business: "To achieve hyper-local inventory turnover with an average delivery window under 30 minutes, maximizing dispatcher efficiency."
    }
  },

  personas: [
    {
      name: "Marcus Thorne",
      role: "Corporate Consultant",
      age: 34,
      location: "Frequent Traveler (NYC / Chicago)",
      quote: "I can't walk into a Fortune 500 board meeting with an espresso stain on my dress shirt.",
      context: "Marcus travels weekly. He lives out of a carry-on and his schedule is packed with back-to-back client meetings in unfamiliar cities.",
      goals: [
        "Replace a ruined piece of clothing instantly.",
        "Look professional without having to navigate a new city.",
        "Reliable quality and standard sizing."
      ],
      frustrations: [
        "Lost luggage by airlines before major presentations.",
        "Hotel dry cleaning takes 24 hours minimum.",
        "No time to visit a department store during business hours."
      ],
      imageType: "business"
    },
    {
      name: "Chloe Vance",
      role: "Marketing Executive",
      age: 26,
      location: "Los Angeles, CA",
      quote: "Plans change fast. Sometimes my day look doesn't work for a spontaneous VIP dinner.",
      context: "Chloe has a highly active social and professional life. She often transitions directly from the office to exclusive networking events or dinners.",
      goals: [
        "Upgrade an outfit on the fly for evening events.",
        "Access trendy, premium local brands instantly.",
        "Get items delivered directly to a restaurant, office, or salon."
      ],
      frustrations: [
        "Carrying a heavy garment bag around the city all day.",
        "Last-minute wardrobe malfunctions (broken zippers, torn seams).",
        "Fast-fashion quality is too low for her professional events."
      ],
      imageType: "socialite"
    }
  ] as Persona[],

  userFlow: {
    happyPathTitle: "The Emergency Outfit Purchase",
    steps: [
      { step: 1, title: "Launch & Locate", desc: "User opens app. System auto-detects GPS location to assign the nearest hyper-local micro-fulfillment center." },
      { step: 2, title: "Emergency Filter", desc: "User taps an 'Occasion' pill (e.g., 'Business Meeting', 'Date Night', 'Gym') and confirms their standard sizes." },
      { step: 3, title: "Browse <30m Inventory", desc: "Feed populates exclusively with items guaranteed to arrive in under 30 minutes. User selects a white Oxford shirt." },
      { step: 4, title: "1-Click Checkout", desc: "User skips the cart. Taps 'Buy Now'. Payment processes instantly via Apple Pay/Google Wallet." },
      { step: 5, title: "Live Tracking & Handoff", desc: "Map view engages immediately. User watches the courier icon move to their building and receives a photo of the drop-off." }
    ]
  },

  wireframes: [
    {
      title: "1. Home / Discovery",
      description: "The primary hub focused on immediate curation based on location.",
      elements: [
        "Top Bar: Live Location Selector & Profile Avatar",
        "Hero Section: 'What do you need right now?' with search bar",
        "Horizontal Scroll: Occasion Filter Pills (Meeting, Gym, Evening, Sleepwear)",
        "Section Header: 'Guaranteed under 30 mins near you'",
        "Grid Layout: Product cards (Image, Price, ETA badge)",
        "Bottom Navigation Bar: Home, Orders, Saved, Profile"
      ]
    },
    {
      title: "2. Product Detail Page (PDP)",
      description: "Optimized for extreme speed of purchase rather than endless scrolling.",
      elements: [
        "Top Navigation: Back Button, Share Icon",
        "Full-Width Image Carousel",
        "Header: Product Title, Brand, Price",
        "Urgency Badge: 'Order in 3 mins for delivery by 2:15 PM'",
        "Size Selector: Prominent toggle grid (S, M, L, XL) with 'Fit Predictor' hint",
        "Sticky Bottom Action Bar: Massive 'Swipe to Buy ($45)' slider button"
      ]
    },
    {
      title: "3. Express Checkout",
      description: "Minimal friction. Cart and checkout are unified for single-item emergencies.",
      elements: [
        "Top Navigation: 'Checkout' title, Cancel button",
        "Delivery Map Snippet: Mini-map confirming the drop-off pin",
        "Delivery Details Form: Building/Suite number input, 'Leave at door' toggle",
        "Order Summary Card: Thumbnail, Size, Item Cost, Express Fee",
        "Payment Selector: Defaulted to native OS wallet (Apple/Google Pay)",
        "Primary Button: 'Confirm & Dispatch'"
      ]
    },
    {
      title: "4. Active Tracking",
      description: "Keeps the anxious user informed second-by-second to reduce drop-off.",
      elements: [
        "Full-Screen Background: Live Google Maps view with courier icon",
        "Overlay Header: Massive countdown timer (e.g., '14:22 remaining')",
        "Status Progress Bar: Preparing -> On the Way -> Arriving",
        "Driver Detail Card: Courier Name, Photo, Vehicle type (Bicycle/Scooter)",
        "Action Buttons: 'Call Courier', 'Add Delivery Note'"
      ]
    }
  ],

  process: {
    empathize: "We began by interviewing urban professionals who had experienced a 'wardrobe emergency' in the last 12 months. The dominant emotion uncovered was anxiety—the fear of looking unprofessional or missing an opportunity due to a clothing mishap. We realized users didn't just want clothes; they wanted to buy back their confidence and time.",
    define: "Through affinity mapping, we defined the core problem: Traditional e-commerce solves for variety and price, but completely fails on absolute speed and situation-specific curation. We established our dual pillars of success: 'Frictionless Fit' (zero returns) and 'Guaranteed ETA' (dispatcher-level reliability).",
    ideate: "We ran 'Crazy 8s' sketching exercises to strip down the traditional 5-step checkout process. We hypothesized that for emergency purchases, users prefer a unified 'Swipe-to-Buy' interface over a traditional add-to-cart model. We shifted the UX focus from endless browsing to hyper-curated, location-bound inventory feeds."
  }
};

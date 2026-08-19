// Centralized site configuration.
// Update contact details, social links, and WhatsApp number here —
// every component that needs them imports from this file instead of
// hard-coding values, so there's a single source of truth.

export const siteConfig = {
  name: "Skyward Technologies",
  tagline: "Technology built for your business.",
  domain: "https://skywardtechsystems.com",

  email: "support.skywardtechnologies@gmail.com",
  phone: "+233243995107",
  phoneDisplay: "+233 24 399 5107",

  whatsappNumber: "233243995107", // digits only, no +, for wa.me links
  whatsappDefaultMessage:
    "Hi Skyward Technologies, I'd like to discuss a project.",

  location: "Sunyani, Ghana",
  serviceArea: "Serving businesses and institutions in Ghana and beyond.",

  social: {
    linkedin: "https://www.linkedin.com/in/okrah-roland-8486792aa",
    github: "https://github.com/Roland-Okrah123",
    x: "https://x.com/roland_skyward",
    // facebook, instagram, tiktok: add here once real accounts exist
  },
};

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../config/siteConfig";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Skyward Technologies on WhatsApp"
        className="
          relative
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-full
          bg-green-600
          hover:bg-green-500
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
        "
      >

        {/* Chat Icon */}
        <MessageCircle size={30} />


        {/* Active Notification Dot */}
        
<span
  className="
    absolute
    top-1
    right-1
    w-3
    h-3
    bg-red-500
    border-2
    border-white
    rounded-full
    animate-ping
    opacity-50
    motion-reduce:animate-none
  "
  aria-hidden="true"
></span>

      </a>

    </div>
  );
}

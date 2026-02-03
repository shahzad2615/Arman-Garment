import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: Phone,
    label: "Call",
    href: "tel:+919876543210",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    external: true,
  },
  {
    icon: FileText,
    label: "Get Quote",
    href: "/contact",
    external: false,
  },
];

export const MobileBottomBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary shadow-lg border-t border-primary-foreground/10"
    >
      <div className="grid grid-cols-3 divide-x divide-primary-foreground/10">
        {actions.map((action, index) => (
          action.external ? (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center py-3 hover:bg-primary-foreground/5 transition-colors"
            >
              <action.icon className="w-5 h-5 text-secondary mb-1" />
              <span className="text-xs font-medium text-primary-foreground">
                {action.label}
              </span>
            </a>
          ) : (
            <Link
              key={action.label}
              to={action.href}
              className="flex flex-col items-center justify-center py-3 hover:bg-primary-foreground/5 transition-colors"
            >
              <action.icon className="w-5 h-5 text-secondary mb-1" />
              <span className="text-xs font-medium text-primary-foreground">
                {action.label}
              </span>
            </Link>
          )
        ))}
      </div>
    </motion.div>
  );
};

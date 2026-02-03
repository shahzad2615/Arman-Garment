import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  products: [
    { name: "School Uniforms", path: "/products" },
    { name: "Corporate Wear", path: "/products" },
    { name: "Hospital Uniforms", path: "/products" },
    { name: "Hotel Staff Wear", path: "/products" },
    { name: "Industrial Wear", path: "/products" },
  ],
  services: [
    { name: "Custom Stitching", path: "/services" },
    { name: "Bulk Manufacturing", path: "/services" },
    { name: "OEM Services", path: "/services" },
    { name: "Logo Embroidery", path: "/services" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-navy font-serif font-bold text-2xl">A</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Arman Garments</h3>
                <p className="text-sm text-primary-foreground/70">Since 2018</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Premium garment manufacturing company specializing in corporate, 
              institutional, and industrial uniforms with a commitment to quality 
              and timely delivery.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif font-semibold text-lg mb-6 text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif font-semibold text-lg mb-6 text-secondary">
              Our Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-serif font-semibold text-lg mb-6 text-secondary">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  201 Pooja Industry Sonapur, Bhandup west,
                  <br />
                  Mumbai, Maharashtra 400069
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +91 8850720422
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@armangarments.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  armangarment975@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Arman Garment. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

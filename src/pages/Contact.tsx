import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@armangarments.com",
    href: "mailto:info@armangarments.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Industrial Area, Andheri East, Mumbai 400069",
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
    href: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    category: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual backend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Store in localStorage as temporary storage
    const inquiries = JSON.parse(localStorage.getItem("inquiries") || "[]");
    inquiries.push({ ...formData, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem("inquiries", JSON.stringify(inquiries));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", message: "", category: "" });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Ready to discuss your uniform requirements? Contact us today for a 
              free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-elegant relative overflow-hidden">
                {/* Floating decoration */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full"
                />

                <div className="relative z-10">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>

                  {isSuccess ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        We've received your inquiry and will respond shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="input-premium"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="input-premium"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="input-premium"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Company/Institution
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="input-premium"
                            placeholder="Your organization"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Product Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="input-premium"
                        >
                          <option value="">Select a category</option>
                          <option value="school">School Uniforms</option>
                          <option value="corporate">Corporate Wear</option>
                          <option value="hospital">Hospital Uniforms</option>
                          <option value="hotel">Hotel Staff Wear</option>
                          <option value="industrial">Industrial Wear</option>
                          <option value="custom">Custom Manufacturing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="input-premium resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-gold w-full disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-premium group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                      <item.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </motion.a>
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </motion.a>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-elegant h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64331764106!2d72.74109828991458!3d19.082522317847647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699876543210!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arman Garments Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

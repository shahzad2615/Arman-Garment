import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Award, Shield, Users, Factory, Globe, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const certifications = [
  "ISO 9001:2015 Certified",
  "OEKO-TEX Standard 100",
  "Sedex Member",
  "GOTS Certified",
];

const capabilities = [
  { icon: Factory, title: "Production Capacity", value: "50,000+ pieces/month" },
  { icon: Users, title: "Skilled Workforce", value: "100+ employees" },
  { icon: Globe, title: "Market Reach", value: "Pan-India & Export" },
  { icon: Clock, title: "Lead Time", value: "15-30 days" },
];

const CompanyProfile = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/90" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
              Company Profile
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-secondary">Arman Garments</span> at a Glance
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              A comprehensive overview of our manufacturing capabilities, 
              certifications, and commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Company <span className="text-secondary">Overview</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Arman Garments was established in 2018 with a vision to provide 
                  high-quality uniform solutions to institutions and corporations 
                  across India. Starting as a small tailoring unit in Mumbai, we 
                  have grown into a full-fledged manufacturing facility with 
                  state-of-the-art machinery and a skilled workforce.
                </p>
                <p>
                  Our 10,000+ sq. ft. facility is equipped with modern equipment 
                  including industrial sewing machines, computerized embroidery 
                  machines, and quality testing equipment. We pride ourselves on 
                  our ability to handle orders of any size while maintaining 
                  consistent quality and timely delivery.
                </p>
                <p>
                  Today, we serve over 500 clients including schools, hospitals, 
                  hotels, and industrial companies. Our commitment to quality, 
                  competitive pricing, and customer satisfaction has made us a 
                  trusted name in the garment manufacturing industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Certifications */}
              <div className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Certifications
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Quality Assurance
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  We follow strict quality control processes at every stage of 
                  production. From fabric inspection to final packaging, each 
                  garment undergoes multiple quality checks to ensure it meets 
                  our high standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Our <span className="text-secondary">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-2xl font-bold text-secondary">{cap.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Manufacturing <span className="text-secondary">Infrastructure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our facility is equipped with modern machinery to handle diverse 
              manufacturing requirements efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Industrial Sewing Machines (50+)",
              "Computerized Embroidery (10)",
              "Cutting Tables (5)",
              "Quality Check Stations (8)",
              "Steam Press Machines (15)",
              "Button Attach Machines (10)",
              "Overlock Machines (20)",
              "Fabric Storage (2000 sq.ft)",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-muted text-center"
              >
                <p className="text-sm text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyProfile;

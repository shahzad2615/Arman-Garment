import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Award, Users, Factory, Truck } from "lucide-react";

const timeline = [
  { year: "2018", title: "Company Founded", description: "Started operations in Mumbai with a vision to provide quality uniforms" },
  { year: "2019", title: "First Major Contract", description: "Secured contracts with leading schools and corporates in Maharashtra" },
  { year: "2020", title: "Factory Expansion", description: "Expanded manufacturing capacity with new machinery and workforce" },
  { year: "2021", title: "Pan-India Reach", description: "Extended delivery services to all major cities across India" },
  { year: "2022", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management" },
  { year: "2023", title: "500+ Clients", description: "Milestone of serving over 500 satisfied institutional clients" },
  { year: "2024", title: "Digital Transformation", description: "Launched online ordering and tracking systems for clients" },
];

const stats = [
  { icon: Factory, number: "10,000+", label: "Sq. Ft. Factory" },
  { icon: Users, number: "100+", label: "Skilled Workers" },
  { icon: Award, number: "7+", label: "Years Experience" },
  { icon: Truck, number: "500+", label: "Cities Served" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Crafting <span className="text-secondary">Excellence</span> Since 2018
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Arman Garments is a leading garment manufacturing company based in Mumbai, 
              specializing in corporate, institutional, and industrial uniforms. Our commitment 
              to quality and customer satisfaction has made us a trusted partner for organizations 
              across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-premium"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide organizations with high-quality uniforms that enhance their 
                professional image while ensuring comfort and durability. We aim to be 
                the most reliable uniform manufacturing partner in India, delivering 
                excellence in every stitch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-premium"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted garment manufacturing company, known 
                for innovation, quality, and timely delivery. We envision expanding 
                our reach globally while maintaining the personal touch that defines 
                our customer relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              The <span className="text-secondary">Arman Garments</span> Story
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="card-premium inline-block">
                      <span className="text-2xl font-bold text-secondary">{item.year}</span>
                      <h3 className="text-xl font-serif font-semibold text-foreground mt-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full md:-translate-x-1/2 border-4 border-background" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

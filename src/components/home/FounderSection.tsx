import { motion } from "framer-motion";
import { Quote, Award, Heart, Target, TrendingUp, Users, Sparkles } from "lucide-react";
import abbu from "../../assets/abbu.png";
import arman from "../../assets/arman.png";
import dilshad from "../../assets/dilshad.png";

// Founder images from local assets
const ownerImage = abbu;
const founderImage = arman;
const cofounderImage = dilshad;

export const FounderSection = () => {
  const founders = [
    {
      name: "Raish Ahmad",
      title: "Owner & Visionary Leader",
      image: ownerImage,
      quote: "Quality is not an act, it is a habit. Our commitment to excellence in every stitch has been the foundation of our success since day one.",
      description: "With decades of experience in the textile industry, Raish Ahmad laid the foundation for what would become one of India's most trusted garment manufacturers.",
      achievements: ["35+ Years Experience", "Industry Pioneer", "Quality Champion"],
      color: "#c1a053",
      icon: Award,
    },
    {
      name: "Arman Ali",
      title: "Founder & Managing Director",
      image: founderImage,
      quote: "Innovation meets tradition. We don't just create uniforms; we craft identities that institutions proudly wear.",
      description: "Leading the company's expansion and modernization, Arman combines traditional craftsmanship with contemporary design thinking.",
      achievements: ["500+ Clients Served", "Pan-India Presence", "Design Innovator"],
      color: "#c1a053",
      icon: Target,
    },
    {
      name: "Dilshad Ali",
      title: "Co-Founder & Operations Director",
      image: cofounderImage,
      quote: "Excellence in execution. Every order, every deadline, every promise kept - that's our operational philosophy.",
      description: "Ensuring seamless operations and maintaining the highest standards of production quality across all our manufacturing facilities.",
      achievements: ["Operational Excellence", "Quality Assurance", "Process Optimization"],
      color: "#c1a053",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#c1a053]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#c1a053]/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#c1a053]/20 to-[#c1a053]/10 text-[#c1a053] font-semibold text-sm mb-6 shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            The Visionaries Behind Our Success
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Meet Our Leadership
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            A family legacy built on trust, quality, and an unwavering commitment 
            to excellence in garment manufacturing
          </motion.p>
        </motion.div>

        {/* Founders Grid */}
        <div className="space-y-24">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <motion.div
                className={`relative flex justify-center ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {/* Decorative Background */}
                <motion.div
                  animate={{ 
                    rotate: index % 2 === 0 ? 360 : -360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, ${founder.color}30, transparent 60%, ${founder.color}20, transparent)`,
                    }}
                  />
                </motion.div>

                {/* Floating Icons */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className="absolute z-0"
                    style={{
                      top: `${20 + i * 25}%`,
                      right: i === 1 ? "5%" : "auto",
                      left: i !== 1 ? "5%" : "auto",
                    }}
                  >
                    <div 
                      className="p-3 rounded-full shadow-xl backdrop-blur-sm"
                      style={{ backgroundColor: `${founder.color}20` }}
                    >
                      <founder.icon 
                        className="w-5 h-5"
                        style={{ color: founder.color }}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <motion.div
                    animate={{ 
                      y: [-8, 8, -8],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Image with premium border */}
                    <div className="relative group">
                      <div 
                        className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        style={{ 
                          background: `radial-gradient(circle, ${founder.color}80, transparent)`,
                        }}
                      />
                      
                      <div 
                        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 bg-gradient-to-br from-slate-100 to-slate-200"
                        style={{ borderColor: founder.color }}
                      >
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover object-top"
                          style={{ objectPosition: 'center 20%' }}
                        />
                        
                        {/* Overlay gradient on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                        />
                      </div>

                      {/* Pulsing ring effect */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.15, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full border-4 pointer-events-none"
                        style={{ borderColor: founder.color }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Achievement Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <div 
                    className="px-6 py-3 rounded-full shadow-2xl backdrop-blur-md font-bold text-white text-sm sm:text-base whitespace-nowrap"
                    style={{ 
                      background: `linear-gradient(135deg, ${founder.color}, ${founder.color}CC)`,
                    }}
                  >
                    {founder.title}
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                className={index % 2 === 1 ? "lg:order-1" : ""}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Name and Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                    style={{ color: founder.color }}
                  >
                    {founder.name}
                  </h3>
                  <p className="text-xl text-slate-600 mb-8">
                    {founder.title}
                  </p>
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative mb-8"
                >
                  <Quote 
                    className="absolute -top-4 -left-2 w-12 h-12 opacity-20"
                    style={{ color: founder.color }}
                  />
                  <blockquote 
                    className="pl-8 border-l-4 py-4 text-lg sm:text-xl italic text-slate-700 leading-relaxed"
                    style={{ borderColor: founder.color }}
                  >
                    {founder.quote}
                  </blockquote>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8"
                >
                  {founder.description}
                </motion.p>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {founder.achievements.map((achievement, i) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                      }}
                      className="relative group"
                    >
                      <div 
                        className="p-4 rounded-xl shadow-lg text-center font-semibold text-sm backdrop-blur-sm border-2 transition-all duration-300"
                        style={{ 
                          backgroundColor: `${founder.color}15`,
                          borderColor: `${founder.color}40`,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${founder.color}20, transparent)`,
                          }}
                        />
                        <span className="relative z-10 text-slate-800">
                          {achievement}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Company Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-16 border-t border-slate-200"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Journey in Numbers
            </h3>
            <p className="text-lg text-slate-600">
              Building excellence together since 2018
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "2018", label: "Year Founded", icon: Award },
              { number: "500+", label: "Happy Clients", icon: Users },
              { number: "7+", label: "Years Experience", icon: TrendingUp },
              { number: "100%", label: "Quality Assured", icon: Heart },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200 text-center transition-all duration-300 group-hover:shadow-2xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `conic-gradient(from 0deg, #c1a05320, transparent, #c1a05320)`,
                    }}
                  />
                  
                  <stat.icon 
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 opacity-60"
                    style={{ color: "#c1a053" }}
                  />
                  
                  <motion.p 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                    style={{ color: "#c1a053" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.p>
                  
                  <p className="text-slate-600 text-sm sm:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-20"
              style={{
                background: `conic-gradient(from 0deg, #c1a053, transparent, #c1a053)`,
              }}
            />
            
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-[#c1a053]" />
            
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Together, We Create Excellence
            </h4>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Three generations of expertise, one unified vision: to deliver 
              unmatched quality and service in every garment we create.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
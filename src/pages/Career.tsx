import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Heart,
  Zap,
  Target,
  Upload,
  CheckCircle,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Users, title: "Team Culture", description: "Work with passionate professionals in a collaborative environment" },
  { icon: Heart, title: "Health Benefits", description: "Comprehensive health insurance for you and your family" },
  { icon: Zap, title: "Growth Opportunities", description: "Clear career progression and skill development programs" },
  { icon: Target, title: "Performance Bonus", description: "Attractive performance-based incentives and bonuses" },
];

const jobs = [
  {
    id: 1,
    title: "Senior Tailor",
    department: "Production",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹25,000 - ₹35,000",
    description: "Looking for experienced tailors with expertise in uniform stitching and quality finishing.",
    requirements: ["5+ years experience", "Expert in industrial sewing", "Attention to detail"],
  },
  {
    id: 2,
    title: "Quality Control Officer",
    department: "Quality Assurance",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹30,000 - ₹45,000",
    description: "Ensure all products meet our high quality standards before dispatch.",
    requirements: ["3+ years in garment QC", "Knowledge of fabric testing", "Strong analytical skills"],
  },
  {
    id: 3,
    title: "Sales Executive",
    department: "Sales",
    location: "Mumbai / Remote",
    type: "Full-time",
    salary: "₹35,000 - ₹50,000 + Commission",
    description: "Drive B2B sales and build relationships with institutional clients.",
    requirements: ["2+ years B2B sales", "Excellent communication", "Own vehicle preferred"],
  },
  {
    id: 4,
    title: "Production Manager",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹50,000 - ₹70,000",
    description: "Oversee daily production operations and manage the tailoring team.",
    requirements: ["7+ years in garment industry", "Team management experience", "Process optimization skills"],
  },
  {
    id: 5,
    title: "Graphic Designer",
    department: "Design",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹25,000 - ₹40,000",
    description: "Create uniform designs and marketing materials for our brand.",
    requirements: ["Proficiency in Adobe Suite", "Fashion/textile background preferred", "Creative portfolio"],
  },
];

const Career = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Store in localStorage
    const applications = JSON.parse(localStorage.getItem("applications") || "[]");
    applications.push({
      ...applicationData,
      jobId: selectedJob?.id,
      jobTitle: selectedJob?.title,
      id: Date.now(),
      date: new Date().toISOString(),
      resume: applicationData.resume?.name || "Not provided",
    });
    localStorage.setItem("applications", JSON.stringify(applications));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    setTimeout(() => {
      setSelectedJob(null);
      setIsApplying(false);
      setIsSuccess(false);
      setApplicationData({ name: "", email: "", phone: "", experience: "", resume: null });
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-20 w-32 h-32 bg-secondary/20 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/10 rounded-full hidden lg:block"
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Build Your <span className="text-secondary">Career</span> with Us
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Join Arman Garments and be part of a team that values excellence, 
              innovation, and growth. We're always looking for talented individuals 
              to join our family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Why Work <span className="text-secondary">With Us</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-premium text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </motion.div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Current <span className="text-secondary">Openings</span>
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-card rounded-2xl p-6 shadow-elegant border-l-4 border-secondary cursor-pointer"
                onClick={() => {
                  setSelectedJob(job);
                  setIsApplying(false);
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-serif font-semibold text-foreground mt-1">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-gold shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                      setIsApplying(true);
                    }}
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail / Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80"
            onClick={() => {
              setSelectedJob(null);
              setIsApplying(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-primary p-6 relative">
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setIsApplying(false);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <X className="w-5 h-5 text-primary-foreground" />
                </button>
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                  {selectedJob.department}
                </span>
                <h2 className="text-2xl font-serif font-bold text-primary-foreground mt-2">
                  {selectedJob.title}
                </h2>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-primary-foreground/70">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedJob.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {selectedJob.salary}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {isApplying ? (
                  isSuccess ? (
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
                        Application Submitted!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for your interest. We'll review your application soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleApply} className="space-y-5">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                        Apply for {selectedJob.title}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={applicationData.name}
                            onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
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
                            value={applicationData.email}
                            onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
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
                            value={applicationData.phone}
                            onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                            className="input-premium"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Years of Experience *
                          </label>
                          <input
                            type="text"
                            required
                            value={applicationData.experience}
                            onChange={(e) => setApplicationData({ ...applicationData, experience: e.target.value })}
                            className="input-premium"
                            placeholder="e.g., 3 years"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Resume (Optional)
                        </label>
                        <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-secondary transition-colors cursor-pointer">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setApplicationData({ ...applicationData, resume: e.target.files?.[0] || null })}
                            className="hidden"
                            id="resume-upload"
                          />
                          <label htmlFor="resume-upload" className="cursor-pointer">
                            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-muted-foreground text-sm">
                              {applicationData.resume 
                                ? applicationData.resume.name 
                                : "Click to upload PDF, DOC, or DOCX"}
                            </p>
                          </label>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-gold flex-1 disabled:opacity-70"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </motion.button>
                        <button
                          type="button"
                          onClick={() => setIsApplying(false)}
                          className="btn-outline-gold"
                        >
                          Back
                        </button>
                      </div>
                    </form>
                  )
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      About This Role
                    </h3>
                    <p className="text-muted-foreground mb-6">{selectedJob.description}</p>

                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Requirements
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-secondary" />
                          {req}
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsApplying(true)}
                      className="btn-gold w-full"
                    >
                      <Briefcase className="w-5 h-5 mr-2" />
                      Apply for This Position
                    </motion.button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Career;

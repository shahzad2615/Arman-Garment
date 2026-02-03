import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Sparkles, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Company Profile", path: "/company-profile" },
  { name: "Our Products", path: "/products" },
  { name: "Manufacturing", path: "/manufacturing" },
  { name: "Services", path: "/services" },
  { name: "Blogs", path: "/blogs" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Parallax effect for navbar
  const navbarY = useTransform(scrollY, [0, 100], [0, -5]);
  const navbarOpacity = useTransform(scrollY, [0, 50], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Logo animation variants
  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.08,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.3,
        },
      },
    },
  };

  // Sparkle animation for logo
  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.07,
        delayChildren: 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20, y: -10 },
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <>
      {/* Top Info Bar - Hidden on mobile, visible on larger screens */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#C9A24D] via-amber-500 to-[#C9A24D] text-white transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-10"
        }`}
      >

        <div className="container-custom h-full flex items-center justify-between text-xs">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>+91 8850720422</span>
              <span>+91 8928447795</span>
              <span>+91 8928812932</span>


            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>armangarment975@gmail.com</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="w-3 h-3 animate-pulse" />
            <span className="font-medium">Premium Quality Garments Since 2018</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        style={{ y: navbarY, opacity: navbarOpacity }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-800/50"
            : "top-0 md:top-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
        }`}
      >
        {/* Gradient top border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 origin-left"
        />

        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo with enhanced animations */}
            <Link to="/" className="relative group">
              <motion.div
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Sparkle decorations */}
                <motion.div
                  variants={sparkleVariants}
                  animate="animate"
                  className="absolute -top-1 -right-1 text-amber-500"
                >
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>

                {/* Logo */}
                <motion.img
                  src={logo}
                  alt="Arman Garments"
                  className="relative z-10 h-14 md:h-20 lg:h-24 drop-shadow-lg"
                  initial={{ filter: "brightness(1)" }}
                  whileHover={{ filter: "brightness(1.1)" }}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/50 rounded-lg transition-all duration-300"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.slice(0, 7).map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                  onHoverStart={() => setHoveredLink(link.path)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="relative"
                >
                  <Link
                    to={link.path}
                    className={`relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-lg transition-all duration-300 group ${
                      location.pathname === link.path
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>

                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredLink === link.path ? 1 : 0,
                        scale: hoveredLink === link.path ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Active indicator */}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeLink"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A24D] to-[#C9A24D]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Hover underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A24D] to-[#C9A24D] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX:
                          hoveredLink === link.path &&
                          location.pathname !== link.path
                            ? 1
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Career & Contact with special styling */}
              {[
                { name: "Career", path: "/career" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 7) * 0.05 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-lg transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-[#C9A24D] dark:hover:bg-amber-900/20"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="relative p-2 md:p-2.5 rounded-xl bg-gradient-to-br from-amber-100 to-[#C9A24D] dark:from-amber-900/30 dark:to-yellow-900/30 hover:from-amber-200 hover:to-yellow-200 dark:hover:from-amber-800/40 dark:hover:to-yellow-800/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 180, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5 text-amber-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -180, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Get Quote Button - Desktop */}
              <Link to="/contact" className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 py-2.5 font-semibold text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24D] via-[#C9A24D] to-amber-600 group-hover:from-[#C9A24D] group-hover:via-[#C9A24D] group-hover:to-[#C9A24D] transition-all duration-300" />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-2">
                    Get Quote
                    <Sparkles className="w-4 h-4" />
                  </span>
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 md:p-2.5 rounded-xl bg-gradient-to-br from-amber-100 to-[#C9A24D] dark:from-amber-900/30 dark:to-[#C9A24D] hover:from-amber-200 hover:to-[#C9A24D] dark:hover:from-amber-800/40 dark:hover:to-yellow-800/40 transition-all duration-300 shadow-lg"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              style={{ top: isScrolled ? "81px" : "121px" }}
            />

            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden fixed left-0 right-0 z-30 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto max-h-[calc(100vh-160px)]"
              style={{ top: isScrolled ? "81px" : "121px" }}
            >
              {/* Gradient divider */}
              <div className="h-1 bg-gradient-to-r from-[#C9A24D] via-yellow-500 to-[#C9A24D]" />

              <div className="container-custom py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={menuItemVariants}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 group ${
                        location.pathname === link.path
                          ? "bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 text-amber-600 dark:text-amber-400 shadow-md"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 dark:hover:from-amber-900/20 dark:hover:to-yellow-900/20"
                      }`}
                    >
                      <span className="font-medium text-base">{link.name}</span>
                      {location.pathname === link.path && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </motion.div>
                      )}
                    </Link>

                    {/* Sliding indicator */}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="mobileActiveLink"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-amber-600 to-yellow-500 rounded-r-full"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Get Quote Button - Mobile */}
                <motion.div
                  variants={menuItemVariants}
                  className="pt-4"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full relative px-6 py-4 font-bold text-white text-lg rounded-xl overflow-hidden shadow-xl group"
                    >
                      {/* Animated gradient background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          backgroundSize: "200% 100%",
                        }}
                      />

                      {/* Content */}
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Quote
                        <Sparkles className="w-5 h-5 animate-pulse" />
                      </span>

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
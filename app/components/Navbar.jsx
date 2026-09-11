
  "use client";

  import Link from "next/link";
  import { motion, AnimatePresence } from "motion/react";
  import { usePathname } from "next/navigation";
  import { useState, useEffect } from "react";

  export default function Navbar() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Skills", href: "/skills" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 30);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 z-50 w-full px-4 pt-5"
      >
        <motion.div
          animate={{
            width: scrolled
              ? "min(900px, calc(100% - 32px))"
              : "min(1150px, calc(100% - 32px))",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto overflow-hidden rounded-2xl
            border border-white/10
            bg-[#171614]/90
            backdrop-blur-xl
            shadow-[0_15px_50px_rgba(0,0,0,0.35)]
          "
        >

          {/* Top accent */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C8955B] to-transparent" />

          <div className="flex items-center justify-between px-5 py-4 md:px-7">

            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#C8955B]/60">

                <span className="font-serif text-sm text-[#E8D8C0]">
                  D
                </span>

                <span className="absolute inset-[-4px] rounded-full border border-dashed border-[#C8955B]/30" />

              </div>

              <div className="leading-none">

                <div className="font-serif text-lg tracking-wide text-[#F2E8D8]">
                  Dinesh 
                  <span className="text-[#C8955B]">Thanigaivel</span>
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/35">
                  Developer | Editing| Content Writer| Creator
                </div>

              </div>
            </Link>


            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-1 md:flex">

              {navItems.map((item) => {

          
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2"
                  >

                    {/* Active background */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="
                          absolute inset-0
                          rounded-full
                          bg-[#C8955B]/10
                          border border-[#C8955B]/20
                        "
                      />
                    )}

                    {/* Text */}
                    <span
                      className={`
                        relative z-10
                        text-[13px]
                        tracking-wide
                        transition-colors duration-300
                        ${
                          isActive
                            ? "text-[#C8955B]"
                            : "text-white/55 hover:text-[#F2E8D8]"
                        }
                      `}
                    >
                      {item.name}
                    </span>


                    {/* Active dot */}
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="
                          absolute
                          bottom-[3px]
                          left-1/2
                          h-1
                          w-1
                          -translate-x-1/2
                          rounded-full
                          bg-[#C8955B]
                        "
                      />
                    )}

                  </Link>
                );
              })}


              {/* RESUME */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="ml-3 flex gap-3">

                <Link
                  href="/resume"
                  className="
                    flex items-center gap-2
                    rounded-full
                    border border-[#C8955B]/50
                    bg-[#C8955B]
                    px-5 py-2.5
                    text-xs
                    font-medium
                    tracking-wide
                    text-[#171614]
                    transition-all
                    hover:bg-[#E0B47A]
                  "
                >
                  Resume
                  <span>↗</span>
                </Link>
              </motion.div>

            </div>


            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="
                relative flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.04]
                text-[#E8D8C0]
                md:hidden
              "
            >
              <span className="text-lg">
                {isOpen ? "×" : "☰"}
              </span>
            </button>

          </div>


          {/* MOBILE MENU */}
          <AnimatePresence>

            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden border-t border-white/[0.07] md:hidden"
              >

                <div className="px-5 py-5">

                  <div className="mb-3 flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#C8955B]" />

                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                      Navigation
                    </span>

                  </div>


                  <div className="flex flex-col">

                    {navItems.map((item, index) => {

                      const isActive = pathname === item.href;

                      return (
                        <motion.div
                          key={item.name}
                          initial={{ x: -15, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: index * 0.06,
                          }}
                        >

                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`
                              group
                              flex items-center
                              justify-between
                              border-b
                              py-4
                              transition-colors
                              ${
                                isActive
                                  ? "border-[#C8955B]/30"
                                  : "border-white/[0.06]"
                              }
                            `}
                          >

                            <div className="flex items-center gap-3">

                              {/* Active indicator */}
                              <motion.span
                                animate={{
                                  width: isActive ? 18 : 0,
                                  opacity: isActive ? 1 : 0,
                                }}
                                className="h-[1px] bg-[#C8955B]"
                              />

                              <span
                                className={`
                                  font-serif text-lg
                                  ${
                                    isActive
                                      ? "text-[#C8955B]"
                                      : "text-white/60"
                                  }
                                `}
                              >
                                {item.name}
                              </span>

                            </div>


                            {/* Active arrow */}
                            <span
                              className={`
                                transition-all
                                ${
                                  isActive
                                    ? "translate-x-0 text-[#C8955B] opacity-100"
                                    : "translate-x-2 text-white/20 opacity-0"
                                }
                              `}
                            >
                              ↗
                            </span>

                          </Link>

                        </motion.div>
                      );
                    })}

                  </div>


                  {/* Mobile Resume */}
                  {/* Mobile Admin */}
{/* <Link
  href="/admin/login"
  onClick={() => setIsOpen(false)}
  className="
    mt-5 flex
    items-center
    justify-center
    gap-2
    rounded-full
    border border-[#C8955B]/40
    bg-[#C8955B]/10
    px-5 py-3
    text-sm
    font-medium
    text-[#C8955B]
    transition-all
    hover:border-[#C8955B]/70
    hover:bg-[#C8955B]/20
  "
>
  Admin Login
  <span>↗</span>
</Link> */}
                  <Link
                    href="/resume"
                    onClick={() => setIsOpen(false)}
                    className="
                      mt-5 flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#C8955B]
                      px-5 py-3
                      text-sm
                      font-medium
                      text-[#171614]
                    "
                  >
                    View Resume
                    <span>↗</span>
                  </Link>

                </div>

              </motion.div>
            )}

          </AnimatePresence>


          {/* Bottom accent */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        </motion.div>
      </motion.nav>
    );
  }


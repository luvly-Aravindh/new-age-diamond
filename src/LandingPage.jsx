import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Clapperboard,
  Gem,
  House,
  MapPin,
  MessageCircleMore,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  UserRound,
  Video,
} from "lucide-react";

// Recovered from the production build at nad-landingpage.netlify.app. Section
// components were renamed from their minified names; markup, classes and
// animation settings are kept as they were so the output matches the live site.

const heroGirl = "/assets/hero-girl-g4a2e7Lw.png",
  banner2 = "/assets/banner-2-BJsJ6Mrd.svg",
  banner3 = "/assets/banner-3-CK9_4EKe.svg",
  heroSlides = [
    {
      image: heroGirl,
      title: "Experience Lab-Grown Diamond Jewellery at Home",
      subtitle:
        "IGI-Certified Brilliance · 09, 14, 18 Karat Gold · BIS Hallmarked Shortlist your favorite jewellery and see how they truly sparkle in your own light, and choose only when it feels right",
      button: "Book a Free Home Trial",
    },
    {
      image: banner2,
      title: "Timeless elegance crafted for every moment.",
      subtitle: "Premium Designs · Certified Quality · Lifetime Sparkle",
      button: "Explore Collection",
    },
    {
      image: banner3,
      title: "A symbol of love that lasts forever.",
      subtitle: "Handcrafted Rings · Elegant Finish · Trusted Quality",
      button: "Shop Now",
    },
  ],
  HeroSlider = () => {
    const [i, s] = useState(0),
      o = {
        hidden: {
          opacity: 0,
          y: 24,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
      },
      r = () => {
        document.getElementById("lead-form-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
    return (
      useEffect(() => {
        const c = setInterval(() => {
          s((d) => (d + 1) % heroSlides.length);
        }, 8e3);
        return () => clearInterval(c);
      }, []),
      (
        <>
          <section className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-[#e9ecef]">
            <AnimatePresence mode="wait">
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
                key={i}
              >
                <motion.img
                  src={heroSlides[i].image}
                  alt="hero"
                  className="w-full h-full object-cover object-center md:object-right"
                  initial={{
                    scale: 1,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  initial={{
                    opacity: 0.2,
                  }}
                  animate={{
                    opacity: 0.35,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/35 to-transparent"
                />
                <div className="absolute inset-0 flex items-center pt-20 md:pt-24 pb-16 md:pb-24">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
                    <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
                      <motion.h1
                        variants={o}
                        initial="hidden"
                        animate="show"
                        transition={{
                          delay: 0.25,
                        }}
                        className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-serif text-black leading-tight"
                      >
                        {heroSlides[i].title}
                      </motion.h1>
                      <motion.p
                        variants={o}
                        initial="hidden"
                        animate="show"
                        transition={{
                          delay: 0.45,
                        }}
                        className="mt-3 md:mt-4 text-sm sm:text-sm md:text-base text-gray-800 font-bold"
                      >
                        {heroSlides[i].subtitle}
                      </motion.p>
                      <motion.button
                        type="button"
                        onClick={r}
                        variants={o}
                        initial="hidden"
                        animate="show"
                        transition={{
                          delay: 0.7,
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className="mt-5 md:mt-6 px-5 md:px-6 py-2.5 md:py-3 bg-white text-black text-sm sm:text-sm font-medium shadow hover:scale-105 transition-all"
                      >
                        {heroSlides[i].button}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroSlides.map((c, d) => (
                <motion.div
                  onClick={() => s(d)}
                  animate={{
                    scale: d === i ? 1.2 : 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full cursor-pointer transition ${d === i ? "bg-black" : "bg-gray-400"}`}
                  key={d}
                />
              ))}
            </div>
          </section>
        </>
      )
    );
  };
const whyFeatures = [
    {
      icon: ShieldCheck,
      title: "IGI Certified - Every Piece",
      body: "Each diamond is independently graded by the International Gemological Institute. You receive the full certificate with complete transparency.",
    },
    {
      icon: Sparkles,
      title: "Luxury Diamonds. Lesser Cost.",
      body: "Lab-grown diamonds are physically, chemically, and optically identical to mined diamonds, at a fraction of the price.",
    },
    {
      icon: House,
      title: "Try Before You Buy",
      body: "Our stylist brings shortlisted pieces to your home. No pressure. Try in your own comfort.",
    },
    {
      icon: RefreshCcw,
      title: "80% Buyback Guarantee",
      body: "Upgrade anytime. We buy back your jewellery at 80% of the prevailing rate.",
    },
    {
      icon: Video,
      title: "Live Video Shopping",
      body: "Connect with our experts via live video for demos, styling advice, and guidance.",
    },
  ],
  WhyNewAgeDiamonds = () => (
    <section className="bg-[#f7f5f2] px-4 py-16 md:px-10 md:py-16">
      <div className="mx-auto max-w-8xl text-center">
        <h2 className="text-4xl  text-[#1f1c18] md:text-6xl">
          Why New Age Diamonds
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#6b645c] text-sm md:text-base">
          Certified brilliance, transparent value, and a home-trial experience
          designed for comfort and confidence.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyFeatures.map((i, s) => {
            const Icon = i.icon;
            return (
              <div
                className="group rounded-3xl bg-white/70 p-6 backdrop-blur-md border border-white/40 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                key={s}
              >
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f1c18] text-white">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1f1c18]">
                  {i.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6b645c]">
                  {i.body}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="rounded-full bg-[#1f1c18] px-7 py-3 text-sm lg:text-xl font-medium text-white transition hover:bg-black"
          >
            Book Home Trial
          </button>
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="rounded-full border border-[#1f1c18] px-7 py-3 text-sm lg:text-xl font-medium text-[#1f1c18] transition hover:bg-[#1f1c18] hover:text-white"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  ),
  ringsImg = "/assets/rings-V5d6SG9f.svg",
  necklaceImg = "/assets/necklace-COnRoQ5q.svg",
  coinsImg = "/assets/coins-BmBiAvbR.svg",
  mensImg = "/assets/mens-Cgp88QYV.svg",
  pendantImg = "/assets/pendant-Ck_LCtnC.svg",
  p1 = "/assets/p1-Bki1ZOHT.png",
  p2 = "/assets/p2-s6g0Z3pa.png",
  p3 = "/assets/p3-Cc9y19gx.png",
  p4 = "/assets/p4-pr8WRbFV.png",
  p5 = "/assets/p5-BnGvGrf4.png",
  p6 = "/assets/p6-DmWexxdd.png",
  p7 = "/assets/p7-TwoM729j.png",
  p8 = "/assets/p8-BVmAVEkp.png",
  categories = [
    {
      label: "Solitaires",
      image: p1,
    },
    {
      label: "Watch Jewellery",
      image: p8,
    },
    {
      label: "Men's Jewellery",
      image: mensImg,
    },
    {
      label: "Mangalsutras",
      image: necklaceImg,
    },
    {
      label: "Nose Pins",
      image: p2,
    },
    {
      label: "Kids Jewellery",
      image: p3,
    },
    {
      label: "Gold Coins",
      image: coinsImg,
    },
    {
      label: "Anklets",
      image: p4,
    },
    {
      label: "Pendants",
      image: pendantImg,
    },
    {
      label: "Necklaces",
      image: necklaceImg,
    },
    {
      label: "Rings",
      image: ringsImg,
    },
    {
      label: "Earrings",
      image: p5,
    },
    {
      label: "Bangles",
      image: p6,
    },
    {
      label: "Bracelets",
      image: p7,
    },
    {
      label: "Gold Chains",
      image: necklaceImg,
    },
    {
      label: "Kada",
      image: p2,
    },
  ];
function CategoryCarousel() {
  const [s, o] = useState(0),
    r = useMemo(
      () =>
        Array.from(
          {
            length: 10,
          },
          (f, p) => {
            const v = (s + p) % categories.length;
            return categories[v];
          },
        ),
      [s],
    ),
    c = () => {
      o((f) => (f + 10) % categories.length);
    },
    d = () => {
      o((f) => (f - 10 + categories.length) % categories.length);
    };
  return (
    useEffect(() => {
      const f = setInterval(() => {
        o((p) => (p + 10) % categories.length);
      }, 5e3);
      return () => clearInterval(f);
    }, [10]),
    (
      <section className="bg-[#f4f4f4] py-10 md:py-14 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={d}
              className="h-10 w-10 rounded-full border border-[#dccfd3] bg-white text-[#8f8a92] shadow-sm transition hover:bg-[#f7eff2]"
              aria-label="Previous categories"
            >
              ←
            </button>
            <button
              type="button"
              onClick={c}
              className="h-10 w-10 rounded-full border border-[#dccfd3] bg-white text-[#8f8a92] shadow-sm transition hover:bg-[#f7eff2]"
              aria-label="Next categories"
            >
              →
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.5,
              }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6"
              key={s}
            >
              {r.map((f, p) => (
                <motion.article
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: p * 0.02,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group flex flex-col items-center"
                  key={`${f.label}-${p}`}
                >
                  <div className="w-full h-[150px] md:h-[180px] rounded-3xl border border-[#e8dce0] bg-[#f7eff2] shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center justify-center p-5">
                    <img
                      src={f.image}
                      alt={f.label}
                      className="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm md:text-lg font-medium text-[#9d98a1] leading-tight">
                    {f.label}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    )
  );
}
const bgTexture = "/assets/bg-texture-o7nb96gM.svg",
  badgeImg = "/assets/badge-BHMzcuY8.png",
  CertifiedBrilliance = () => (
    <section
      className="w-full py-6 md:py-16 px-4 md:px-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgTexture})`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl sm:text-2xl md:text-5xl font-serif text-black mb-3 md:mb-4 leading-tight">
            Certified Brilliance!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#2f4fa2] max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
            Wear your dreams with certified lab-grown diamonds - luxury sparkle
            for every occasion.
          </p>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-6"
          >
            <img
              src={badgeImg}
              alt="badge"
              className="h-8 sm:h-10 md:h-20 object-contain"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={heroGirl}
            alt="model"
            className="w-full max-w-xs sm:max-w-sm md:max-w-xl object-cover rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  ),
  LT = [
    {
      image: p1,
      name: "Men's Solitaire Ring - 0.92 Ct · Sterling Silver",
      price: "₹52,400",
    },
    {
      image: p2,
      name: "Gold Vermeil Solitaire Drop Pendant Necklace",
      price: "₹31,800",
    },
    {
      image: p3,
      name: "Round Solitaire Stud Earrings - 1.68 Ct · Gold Vermeil",
      price: "₹47,600",
    },
    {
      image: p4,
      name: "1 CT Ascher Solitaire Pendant with Chain",
      price: "₹58,200",
    },
  ],
  YT = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  },
  SolitaireSection = () => (
    <section className="bg-[#f4f4f2] py-12 md:py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-sm sm:text-sm md:text-xl text-[#2f4fa2] mb-2"
        >
          For the Real Luxury
        </motion.p>
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-2xl sm:text-2xl md:text-5xl font-serif text-black mb-8 md:mb-14 leading-tight"
        >
          Make It a Solitaire
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 text-center">
          {LT.map((i, s) => (
            <motion.div
              variants={YT}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              custom={s}
              whileHover={{
                y: -5,
              }}
              key={s}
            >
              <div className="bg-[#e9e7e4] flex items-center justify-center h-auto sm:h-[180px] md:h-full mb-3 md:mb-4">
                <motion.img
                  src={i.image}
                  alt={i.name}
                  className="h-full object-cover"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </div>
              <p className="text-base sm:text-xs md:text-xl text-[#2f4fa2] leading-snug mb-1 md:mb-2 px-1">
                {i.name}
              </p>
              <p className="text-base sm:text-sm md:text-base font-semibold text-black">
                {i.price}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 md:mt-36 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-black text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            View Collections At Home
          </button>
        </div>
      </div>
    </section>
  ),
  _T = [
    {
      id: 1,
      name: "Solitaire Women’s rings",
      price: "₹49,900",
      image: p5,
    },
    {
      id: 2,
      name: "Charms and Pendants",
      price: "₹28,700",
      image: p6,
    },
    {
      id: 3,
      name: "Earrings",
      price: "₹44,300",
      image: p7,
    },
    {
      id: 4,
      name: "Hearts Collection",
      price: "₹36,500",
      image: p8,
    },
  ],
  kT = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
function BestsellingCollections() {
  return (
    <section className="bg-[#f3f3f3] px-2 sm:px-6 md:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0 mb-8 md:mb-10">
          <div>
            <p className="text-sm sm:text-base md:text-xl text-blue-600 mb-2">
              New & Trending
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
              Our Bestselling Collections
            </h2>
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="hidden md:block bg-white px-5 py-2 text-xl shadow hover:shadow-md transition"
          >
            Full Collection
          </motion.button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {_T.map((i, s) => (
            <motion.div
              variants={kT}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              custom={s}
              whileHover={{
                y: -6,
              }}
              className="text-center"
              key={i.id}
            >
              <div className="bg-[#EDEBE7] flex items-center justify-center h-auto sm:h-[260px] md:h-[300px]">
                <motion.img
                  src={i.image}
                  alt={i.name}
                  className="h-full object-cover"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </div>
              <h3 className="mt-4 text-base sm:text-lg md:text-xl text-blue-700 hover:underline cursor-pointer">
                {i.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base font-bold text-gray-900">
                {i.price}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-10">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="bg-white px-5 sm:px-6 py-2 text-base sm:text-lg md:text-xl shadow hover:shadow-md transition"
          >
            Luxury Collections
          </motion.button>
        </div>
      </div>
    </section>
  );
}
const logo = "/assets/logo-DJgj_Yey.png",
  XT = "/assets/icon-igi.png",
  QT = "/assets/icon-home-trial.png",
  ZT = "/assets/icon-delivery.png",
  KT = "/assets/icon-shipping.png",
  PT = "/assets/icon-video.png",
  trustBadges = [
    {
      id: 1,
      title: `IGI Certified
Jewellery`,
      icon: XT,
    },
    {
      id: 2,
      title: `Free
Home Trial`,
      icon: QT,
    },
    {
      id: 3,
      title: `3 Days
Delivery`,
      icon: ZT,
    },
    {
      id: 4,
      title: `Free
Shipping`,
      icon: KT,
    },
    {
      id: 5,
      title: `Free Video
Consultation`,
      icon: PT,
    },
  ],
  trustBadgeVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
function TrustBadges() {
  return (
    <section className="bg-[#CDDCDD] py-10 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 text-center">
          {trustBadges.map((i, s) => (
            <motion.div
              variants={trustBadgeVariants}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              custom={s}
              whileHover={{
                y: -5,
              }}
              className="flex flex-col items-center"
              key={i.id}
            >
              <div className="w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#F6F5F0] rounded-full flex items-center justify-center mb-3 md:mb-4">
                <motion.img
                  src={i.icon}
                  alt="icon"
                  className="w-16 sm:w-10 md:w-16 object-cover"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </div>
              <p className="text-xl sm:text-sm md:text-xl font-medium text-gray-900 leading-snug whitespace-pre-line">
                {i.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
const img1 = "/assets/img1-BNkUaJYn.png",
  img2 = "/assets/img2-pZOxT0u8.png",
  img3 = "/assets/img3-y0IP7yQB.png",
  receptionImg = "/assets/Reception-BManRm4O.png",
  img4 = "/assets/img4-BnfAz99z.png",
  Dc = [
    {
      img: img1,
      title: "Engagement",
    },
    {
      img: img2,
      title: "Wedding",
    },
    {
      img: img3,
      title: "Birthday",
    },
    {
      img: receptionImg,
      title: "Reception",
    },
    {
      img: img4,
      title: "Anniversary",
    },
  ],
  ew = [...Dc, ...Dc];
function OccasionSlider() {
  const [i, s] = useState(0),
    [o, r] = useState(false);
  return (
    useEffect(() => {
      const c = () => {
        r(window.innerWidth < 768);
      };
      return (
        c(),
        window.addEventListener("resize", c),
        () => window.removeEventListener("resize", c)
      );
    }, []),
    useEffect(() => {
      const c = setInterval(() => {
        s((d) => d + 1);
      }, 3e3);
      return () => clearInterval(c);
    }, []),
    useEffect(() => {
      i >= Dc.length &&
        setTimeout(() => {
          s(0);
        }, 500);
    }, [i]),
    (
      <section className="w-full bg-[#f5f5f5] py-14 md:py-20 overflow-hidden">
        <div className="w-full">
          <div className="text-center mb-10 md:mb-14 px-4">
            <p className="text-lg sm:text-sm text-gray-500 mb-2">
              Shop by Occasion
            </p>
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-serif leading-tight">
              Find the Perfect Diamond for Every Occasion
            </h2>
          </div>
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex md:gap-6 px-0 md:px-6"
              animate={{
                x: o ? `-${i * 100}%` : `-${i * (100 / 3)}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {ew.map((c, d) => (
                <div
                  className={`${o ? "flex-[0_0_100%]" : "flex-[0_0_calc(33.333%-16px)]"}`}
                  key={d}
                >
                  <div className="w-full h-auto sm:h-[320px] md:h-[380px] rounded-md overflow-hidden shadow-md bg-white">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-center mt-4 md:mt-6 text-2xl sm:text-lg md:text-2xl font-serif">
                    {c.title}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    )
  );
}
const newImg = "/assets/new-img-cR7AKmJh.png",
  Ny = [
    {
      left: img3,
      right: newImg,
      tag: "Perfect Gifts",
      title: "Give Something They'll Keep Forever",
      name: "Gold Coins",
      desc: "BIS Hallmarked 24K pure gold in beautiful gift packaging. Perfect for Diwali, weddings, and birthdays.",
      price: "₹35,000 - 50,000",
    },
    {
      left: newImg,
      right: img3,
      tag: "Luxury Picks",
      title: "Timeless Beauty in Every Piece",
      name: "Diamond Rings",
      desc: "Elegant diamond rings crafted for special moments and everlasting memories.",
      price: "₹50,000 - 1,20,000",
    },
    {
      left: img3,
      right: img1,
      tag: "Wedding",
      title: "Celebrate Love with Brilliance",
      name: "Necklace Set",
      desc: "Beautiful handcrafted necklace sets perfect for weddings and grand occasions.",
      price: "₹75,000 - 2,00,000",
    },
    {
      left: img1,
      right: newImg,
      tag: "Occasions",
      title: "Perfect Gifts for Every Moment",
      name: "Bracelets",
      desc: "Stylish gold bracelets designed for elegance and everyday luxury.",
      price: "₹25,000 - 70,000",
    },
    {
      left: newImg,
      right: img3,
      tag: "Exclusive",
      title: "Crafted to Impress",
      name: "Earrings",
      desc: "Modern and traditional earrings crafted with precision and beauty.",
      price: "₹15,000 - 60,000",
    },
  ];
function PerfectGifts() {
  const [i, s] = useState(0);
  useEffect(() => {
    const r = setInterval(() => {
      s((c) => (c === Ny.length - 1 ? 0 : c + 1));
    }, 4e3);
    return () => clearInterval(r);
  }, []);
  const o = Ny[i];
  return (
    <section className="w-full bg-[#f3f3f3] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 items-center gap-10"
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -80,
            }}
            transition={{
              duration: 0.8,
            }}
            key={i}
          >
            <motion.div
              initial={{
                scale: 0.95,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex justify-center"
            >
              <img
                src={o.left}
                alt=""
                className="w-full max-w-[420px] h-[320px] object-cover"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <p className="text-sm text-blue-600 mb-2">{o.tag}</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-snug">
                {o.title}
              </h2>
              <h3 className="text-2xl font-serif mb-3">{o.name}</h3>
              <p className="text-gray-600 mb-4">{o.desc}</p>
              <p className="text-lg font-semibold mb-6">{o.price}</p>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("lead-form-section")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="px-6 py-3 bg-white border shadow-sm hover:shadow-md transition"
              >
                Explore All Collections
              </button>
            </div>
            <motion.div
              initial={{
                scale: 0.95,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex justify-center"
            >
              <img
                src={o.right}
                alt=""
                className="w-full max-w-[300px] h-[320px] object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
const heroGirl2 = "/assets/hero-girl-2-DbGFkZru.png",
  DiamondDetail = () => (
    <section
      className="w-full py-4 md:py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgTexture})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-5">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="max-w-xl text-left md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-5 md:mb-6 text-black">
            See every detail of your diamond,
            <br className="hidden sm:block" />
            {" wherever you are."}
          </h1>
          <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-gray-700 text-sm sm:text-base md:text-lg">
            <li>• Watch your diamond in real light, in motion.</li>
            <li>• Zoom in.</li>
            <li>• Ask questions.</li>
            <li>• Get complete clarity before you choose.</li>
          </ul>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="bg-white text-black px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold tracking-wide hover:bg-gray-800 hover:text-white transition"
          >
            Schedule My Free Video Call
          </motion.button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="w-full md:w-[550px] flex justify-center md:justify-end"
        >
          <img
            src={heroGirl2}
            alt="Jewelry model"
            className="w-full max-w-xs sm:max-w-sm md:max-w-none h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  ),
  profile1 = "/assets/profile-CmSQ-HgX.png",
  profile2 = "/assets/profile-2-Cx5F5tGI.png",
  profile3 = "/assets/profile-3-By8EZvVv.png",
  starsImg = "/assets/stars-CCWcGXbd.svg",
  cw = [
    {
      name: "Rohit Malhotra,",
      location: "Gurugram",
      image: profile1,
      text: '"I compared the IGI certificate side by side with a mined stone costing ₹3.5 lakhs. New Age sold me the same grade for ₹92,000. My fiancée cried. So did my bank account, with relief."',
    },
    {
      name: "Priya Sharma",
      location: "South Delhi",
      image: profile2,
      text: '"The try-at-home was seamless. The executive arrived with 8 pieces beautifully packed. I bought a solitaire necklace and a pair of studs without stepping out once. This is how jewellery should be bought."',
    },
    {
      name: "Arvind Kapoor",
      location: "Noida",
      image: profile3,
      text: `"I gifted my wife a 0.5ct diamond bracelet for our 10th anniversary. She assumed it was from Tanishq. When I told her the price, half of what we'd normally pay, and she was more impressed, not less."`,
    },
  ],
  fw = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  },
  Testimonials = () => (
    <section className="bg-[#f5f5f5] py-14 md:py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center text-sm sm:text-lg text-[#2f4fa2] mb-2"
        >
          Real buyers. Real stories
        </motion.p>
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center text-2xl sm:text-3xl md:text-5xl font-serif text-black mb-10 md:mb-12 leading-tight"
        >
          600+ happy customers later, here's what they said
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {cw.map((i, s) => (
            <motion.div
              variants={fw}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              custom={s}
              whileHover={{
                y: -5,
              }}
              className="bg-[#e9e7e3] p-5 sm:p-6 md:p-8 rounded-sm"
              key={s}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={i.image}
                  alt={i.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm sm:text-base md:text-xl font-medium text-black">
                    {i.name}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    {i.location}
                  </p>
                </div>
              </div>
              <img src={starsImg} alt="stars" className="h-4 sm:h-5 mb-4" />
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {i.text}
              </p>
            </motion.div>
          ))}
        </div>
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                viewport={{
                  once: true,
                }}
                className="max-w-2xl"
              >
                <p className="text-sm sm:text-lg md:text-xl text-[#2f4fa2] mb-2 tracking-wide">
                  Choose Your Diamond from Home
                </p>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
                  Try it before
                  <span className="block text-[#2f4fa2]">you own it.</span>
                </h3>
                <p className="text-sm sm:text-base md:text-xl text-gray-600 leading-relaxed mb-6">
                  Skip the showroom. Skip the pressure.
                  <br />
                  We bring up to 10 of your shortlisted diamond pieces straight
                  to your home so you can experience them where it matters most.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-black font-medium tracking-wide">
                  • No deposit   • No risk   • Just clarity
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                className="relative flex justify-center items-center"
              >
                <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#2f4fa2]/10 blur-3xl" />
                <div className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
                  <img
                    src={logo}
                    alt="Brand Logo"
                    className="w-32 sm:w-40 md:w-52 object-contain"
                  />
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#2f4fa2]" />
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-gray-200" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  ),
  checkMark = "/assets/check-mark-BCLOTrU-.png",
  mw = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  },
  pw = [
    {
      number: "01",
      title: "You Shortlist. We Curate.",
      desc1:
        "Browse 2,500+ IGI-certified designs online, or book a free 20-minute video consultation with a diamond stylist.",
      desc2:
        "Ask every question you've been Googling at 1 AM we've got you. Shortlist up to 10 pieces, completely commitment-free.",
      points: ["Rings", "Earrings", "Pendants", "Bracelets", "Men’s", "Custom"],
      type: "dot",
    },
    {
      number: "02",
      title: "We Come to You.",
      desc1:
        "A verified New Age Diamonds expert arrives at your home-same day or next.",
      desc2:
        "Each piece is delivered in premium packaging, complete with its IGI certificate. Try them in your own lighting, at your own pace, with the people who matter.",
      points: [
        "Expert guidance with loupe",
        "Transparent invoice before purchase",
        "Zero pressure, always",
      ],
      type: "check",
    },
    {
      number: "03",
      title: "Love It. Keep It.",
      desc1: "Pay only for what you love-via Card, UPI, or 0% EMI.",
      desc2: "We take back the rest. No questions. No follow-ups.",
      points: [
        "IGI-certified authenticity",
        "Certificate stays with your piece",
      ],
      type: "check",
    },
  ],
  HowItWorks = () => (
    <section className="bg-[#fff] px-4 md:px-10 py-10 md:py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {pw.map((i, s) => (
          <motion.div
            variants={mw}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            custom={s}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] bg-[#F6F5F0]"
            key={s}
          >
            <div className="border-b md:border-b-0 md:border-r border-[#D9D7D0] flex flex-col items-center justify-center py-10 md:py-20">
              <p className="text-sm sm:text-base tracking-wide text-black mb-2 style-content-3">
                STEP
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-[6rem] font-serif text-black leading-none">
                {i.number}
              </h2>
            </div>
            <div className="p-5 sm:p-6 md:p-10">
              <h3 className="text-lg sm:text-xl md:text-3xl font-serif text-black mb-3 style-content-3">
                {i.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed style-content-2">
                {i.desc1}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed style-content-2">
                {i.desc2}
              </p>
              <div className="flex flex-wrap items-start gap-3 sm:gap-4 text-sm sm:text-base text-black style-content-1">
                {i.points.map((o, r) => (
                  <span className="flex items-center gap-2" key={r}>
                    {i.type === "check" ? (
                      <img
                        src={checkMark}
                        alt="check"
                        className="w-4 h-4 object-contain mt-[2px]"
                      />
                    ) : (
                      <span>•</span>
                    )}
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  ),
  BookingCta = () => (
    <section className="bg-white py-8 md:py-20 px-4 md:px-10 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif text-black mb-6 md:mb-8 leading-tight"
        >
          Book My Home Trial Now
        </motion.h2>
        <motion.button
          type="button"
          onClick={() =>
            document.getElementById("lead-form-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          viewport={{
            once: true,
          }}
          className="bg-[#F6F5F0] text-black px-5 sm:px-6 py-3 text-lg sm:text-base md:text-lg font-medium transition hover:bg-[#dedcd7]"
        >
          Book a Free Consultation Call
        </motion.button>
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 md:mt-14 grid gap-4 sm:gap-5 md:grid-cols-2 text-left"
        >
          <article className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-5 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Easy 3-Day Returns
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Hassle-free returns on all purchases within 3 days. No questions
              asked.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-sm font-medium text-black hover:underline"
            >
              Refund Policy →
            </a>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-5 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Free Pan India Shipping
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Complimentary shipping on all orders. Delivered within 5 working
              days.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-sm font-medium text-black hover:underline"
            >
              Shipping Policy →
            </a>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-5 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Secure & Insured
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              All home trial pieces are fully insured. Trusted payment partners
              for secure checkout.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-sm font-medium text-black hover:underline"
            >
              Terms of Service →
            </a>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-5 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              24/7 Support
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              WhatsApp or email anytime. Our team responds within 2 hours every
              day.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-sm font-medium text-black hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </article>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 md:mt-14 mb-6 md:mb-8 h-px w-full origin-center bg-gradient-to-r from-transparent via-gray-400 to-transparent"
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="text-sm sm:text-xs md:text-base text-gray-600 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          <span>© 2026, New Age Diamonds</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">Refund policy</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">
            Shipping policy
          </span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">
            Terms of service
          </span>
        </motion.div>
      </div>
    </section>
  );
function Preloader({ children: i }) {
  const [s, o] = useState(true);
  return (
    useEffect(() => {
      const r = setTimeout(() => {
        o(false);
      }, 2e3);
      return () => clearTimeout(r);
    }, []),
    (
      <>
        <AnimatePresence>
          {s && (
            <motion.div
              className="fixed inset-0 bg-[#f4f4f2] flex items-center justify-center z-[9999]"
              initial={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <div className="flex flex-col items-center gap-10">
                <motion.div
                  className="relative w-28 h-28 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#d4af37, #f6e27a, #c9a227, #d4af37)",
                    boxShadow:
                      "0 0 30px rgba(212,175,55,0.5), inset 0 0 10px rgba(255,255,255,0.5)",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                >
                  <div className="absolute inset-4 bg-[#f4f4f2] rounded-full" />
                </motion.div>
                <motion.div
                  className="relative w-16 h-16"
                  animate={{
                    rotateY: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 85% 25%, 100% 60%, 50% 100%, 0% 60%, 15% 25%)",
                      background:
                        "linear-gradient(145deg, #ffffff, #dfe6ee, #bfc9d9)",
                      boxShadow:
                        "0 0 20px rgba(255,255,255,0.9), inset 0 0 15px rgba(255,255,255,0.7)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/70 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-100/40 to-transparent" />
                  <motion.span
                    className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full blur-[1px]"
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  />
                  <motion.span
                    className="absolute bottom-2 right-0 w-2 h-2 bg-white rounded-full blur-[1px]"
                    animate={{
                      scale: [0.5, 1.3, 0.5],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                    }}
                  />
                </motion.div>
                <motion.h1
                  initial={{
                    opacity: 0,
                    letterSpacing: "0.5em",
                  }}
                  animate={{
                    opacity: 1,
                    letterSpacing: "0.1em",
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  className="text-2xl md:text-4xl font-serif text-black text-center"
                >
                  New Age Diamonds
                </motion.h1>
                <p className="text-sm text-gray-500 tracking-wide">
                  Precision. Purity. Perfection.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: s ? 0 : 1,
            scale: s ? 1.05 : 1,
            filter: s ? "blur(12px)" : "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
        >
          {!s && i}
        </motion.div>
      </>
    )
  );
}
const vw = [
    {
      number: "01",
      title: "Browse & Shortlist",
      desc: "Explore our IGI-certified collection online or via WhatsApp. Pick up to 5 pieces you'd like to try.",
    },
    {
      number: "02",
      title: "Book Your Trial Slot",
      desc: "Fill the form or WhatsApp us with your city, preferred date, and time. We confirm within 2 hours.",
    },
    {
      number: "03",
      title: "Experience at Home",
      desc: "Your stylist arrives with your selected pieces. Try them in your own space and lighting.",
    },
    {
      number: "04",
      title: "Keep What You Love",
      desc: "Pay only for what you keep. Return the rest effortlessly. All pieces are fully insured.",
    },
  ],
  HomeTrialIntro = () => (
    <section
      className="bg-[#f8f6f2] px-4 py-6 md:px-10 md:py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgTexture})`,
      }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-6xl  text-[#1f1c18]">
          Choose Your Diamond from Home
        </h2>
        <p className="mt-4 text-[#6b645c] max-w-2xl mx-auto">
          Try it at home before you own it.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {vw.map((i, s) => (
            <div
              className="group bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition"
              key={s}
            >
              <div className="flex justify-center md:justify-start">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#1f1c18] text-white text-lg font-semibold">
                  {i.number}
                </div>
              </div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-[#1f1c18]">
                  {i.title}
                </h3>
                <p className="mt-2 text-[#6b645c] text-sm leading-6">
                  {i.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="rounded-full bg-[#1f1c18] px-8 py-3 text-sm lg:text-xl text-white font-medium hover:bg-black transition"
          >
            Schedule My Home Trial Now
          </button>
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="rounded-full border border-[#1f1c18] px-8 py-3 text-sm lg:text-xl text-[#1f1c18] font-medium hover:bg-[#1f1c18] hover:text-white transition"
          >
            Book via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
// Each booking is emailed to this address via FormSubmit (https://formsubmit.co).
// The first submission sends a one-time activation email to this inbox; click
// the link in it, and every later submission is delivered.
const LEAD_EMAIL = "ethi@getnos.io";

function LeadForm() {
  const [i, s] = useState("home"),
    [sending, setSending] = useState(false),
    [error, setError] = useState(""),
    o = [
      "Pendants",
      "Earrings",
      "Rings",
      "Gold Coins",
      "Bracelets",
      "Men's Collections",
    ],
    r = ["Styling", "Sizing", "Product Comparison", "Gifting"],
    navigate = useNavigate(),
    // Required fields use native validation, so this only runs on a valid form.
    handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget),
        mode = i === "home" ? "Home Trial" : "Video Consultation",
        payload = {
          _subject: `New ${mode} booking – ${data.get("name")}`,
          _template: "table",
          _captcha: "false",
          Experience: mode,
          Name: data.get("name"),
          Mobile: data.get("mobile"),
          Email: data.get("email") || "-",
          City: data.get("city"),
          ...(i === "home"
            ? {
                Address: data.get("address"),
                "Landmark / Area": data.get("landmark"),
                "Pin Code": data.get("pincode"),
                "Special Request": data.get("request") || "-",
              }
            : {
                "Video Platform": data.get("platform") || "-",
                "Help With": data.getAll("helpWith").join(", ") || "-",
              }),
          "Looking For": data.getAll("lookingFor").join(", ") || "-",
        };
      if (data.get("email")) payload._replyto = data.get("email");
      setSending(true);
      setError("");
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || String(json.success) === "false")
          throw new Error(json.message || "Request failed");
        navigate("/thank-you", { state: { mode: i } });
      } catch {
        setError(
          "Sorry, we couldn't send your request. Please check your connection and try again.",
        );
        setSending(false);
      }
    };
  return (
    <section
      id="lead-form-section"
      className="relative w-full scroll-mt-24 overflow-hidden bg-[#f7f1e8] bg-cover bg-center px-4 py-12 md:px-10 md:py-16"
      style={{
        backgroundImage: `url(${bgTexture})`,
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 via-white/20 to-transparent" />
      <div className="pointer-events-none absolute -left-12 top-20 h-48 w-48 rounded-full bg-[#d4b07b]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-56 w-56 rounded-full bg-[#1f1a17]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:items-start md:gap-8">
        <div className="space-y-4 md:pr-2">
          <div className="inline-flex rounded-full border border-[#c9a97a]/50 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8c6a3e] shadow-sm backdrop-blur">
            Concierge Booking
          </div>
          <h2 className="text-center text-3xl leading-tight text-[#1f1a17] md:text-left lg:text-5xl">
            Book Your Diamond Experience
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[#5f564f]">
            Our team will confirm your Home Trial or Video Consultation within 2
            hours. No payment required.
          </p>
          <div className="grid gap-3">
            <div className="rounded-[1.35rem] border border-white/70 bg-white/80 px-4 py-3.5 shadow-[0_18px_50px_rgba(68,52,35,0.08)] backdrop-blur">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f2e4d2] text-xs font-semibold uppercase tracking-[0.24em] text-[#8c6a3e]">
                <ShieldCheck size={18} />
              </div>
              <h4 className="text-xl font-semibold leading-snug text-[#1f1a17]">
                100% Safe & Insured
              </h4>
              <p className="mt-2 text-lg leading-9 text-[#5f564f]">
                Every piece is fully insured, whether at home or shown live on
                video.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-white/70 bg-white/80 px-4 py-3.5 shadow-[0_18px_50px_rgba(68,52,35,0.08)] backdrop-blur">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f2e4d2] text-xs font-semibold uppercase tracking-[0.24em] text-[#8c6a3e]">
                <Gem size={18} />
              </div>
              <h4 className="text-xl font-semibold leading-snug text-[#1f1a17]">
                No Obligation to Purchase
              </h4>
              <p className="mt-2 text-lg leading-9 text-[#5f564f]">
                Explore at your pace. Keep only what feels right.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-white/70 bg-white/80 px-4 py-3.5 shadow-[0_18px_50px_rgba(68,52,35,0.08)] backdrop-blur">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f2e4d2] text-xs font-semibold uppercase tracking-[0.24em] text-[#8c6a3e]">
                <Sparkles size={18} />
              </div>
              <h4 className="text-xl font-semibold leading-snug text-[#1f1a17]">
                Personalised Just for You
              </h4>
              <p className="mt-2 text-lg leading-9 text-[#5f564f]">
                Your selections are curated based on your style, budget, and
                occasion.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-white/70 bg-white/80 px-4 py-3.5 shadow-[0_18px_50px_rgba(68,52,35,0.08)] backdrop-blur">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f2e4d2] text-xs font-semibold uppercase tracking-[0.24em] text-[#8c6a3e]">
                <MessageCircleMore size={18} />
              </div>
              <h4 className="text-xl font-semibold leading-snug text-[#1f1a17]">
                Quick Confirmation
              </h4>
              <p className="mt-2 text-lg leading-9 text-[#5f564f]">
                We'll call or WhatsApp to lock your slot and shortlist.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-[0_28px_80px_rgba(52,40,27,0.16)] backdrop-blur md:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-[#1f1a17]">
                  How would you like to experience?
                </h3>
                <span className="rounded-full bg-[#f3eadf] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8c6a3e]">
                  Choose One
                </span>
              </div>
              <div className="rounded-[1.6rem] bg-[#f7f1e8] p-2">
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => s("home")}
                    className={`rounded-[1.2rem] border px-4 py-4 text-left transition ${i === "home" ? "border-[#1f1a17] bg-[#1f1a17] text-white shadow-lg" : "border-transparent bg-transparent text-[#1f1a17] hover:bg-white"}`}
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-current/10">
                      <House size={18} />
                    </div>
                    <div className="font-semibold">Home Trial</div>
                    <p
                      className={`mt-1 text-sm ${i === "home" ? "text-white/75" : "text-[#5f564f]"}`}
                    >
                      We come to you. Try at leisure
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => s("video")}
                    className={`rounded-[1.2rem] border px-4 py-4 text-left transition ${i === "video" ? "border-[#1f1a17] bg-[#1f1a17] text-white shadow-lg" : "border-transparent bg-transparent text-[#1f1a17] hover:bg-white"}`}
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-current/10">
                      <Video size={18} />
                    </div>
                    <div className="font-semibold">Video Consultation</div>
                    <p
                      className={`mt-1 text-sm ${i === "video" ? "text-white/75" : "text-[#5f564f]"}`}
                    >
                      Live showcase from our studio
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-[1.6rem] border border-[#eadcc8] bg-gradient-to-br from-[#fffdfa] to-[#f7efe5] p-5">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#1f1a17]">
                  <UserRound size={18} />
                  <h3 className="text-lg font-semibold">Your Details</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-[#5b5149]">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="mt-1 w-full rounded-xl border border-[#deceb8] bg-white px-4 py-3 text-[#1f1a17] placeholder:text-[#9f9388] focus:outline-none focus:ring-2 focus:ring-[#1f1a17]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#5b5149]">
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      pattern="(\+?91[\s-]?)?[6-9]\d{9}"
                      title="Enter a valid 10-digit mobile number"
                      placeholder="+91"
                      className="mt-1 w-full rounded-xl border border-[#deceb8] bg-white px-4 py-3 text-[#1f1a17] placeholder:text-[#9f9388] focus:outline-none focus:ring-2 focus:ring-[#1f1a17]"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-[#5b5149]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="mt-1 w-full rounded-xl border border-[#deceb8] bg-white px-4 py-3 text-[#1f1a17] placeholder:text-[#9f9388] focus:outline-none focus:ring-2 focus:ring-[#1f1a17]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#5b5149]">
                      Your City*
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Enter your city"
                      className="mt-1 w-full rounded-xl border border-[#deceb8] bg-white px-4 py-3 text-[#1f1a17] placeholder:text-[#9f9388] focus:outline-none focus:ring-2 focus:ring-[#1f1a17]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {i === "home" ? (
              <div className="space-y-4 rounded-[1.6rem] border border-[#eadcc8] bg-[#fffdfa] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[#1f1a17]">
                    <MapPin size={18} />
                    <h3 className="text-lg font-semibold">
                      Experience at Home
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#f3eadf] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8c6a3e]">
                    Home Mode
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#5b5149]">
                    Home Address *
                  </label>
                  <textarea
                    rows="3"
                    name="address"
                    required
                    placeholder="Flat / House number, Building name, Street"
                    className="mt-1 w-full rounded-xl border border-[#deceb8] bg-white px-4 py-3 text-[#1f1a17] placeholder:text-[#9f9388] focus:outline-none focus:ring-2 focus:ring-[#1f1a17]"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-[#5b5149]">
                      Landmark / Area *
                    </label>
                    <input
                      type="text"
                      name="landmark"
                      required
                      placeholder="Nearest landmark or area name"
                      className="mt-1 w-full rounded-xl border border-[#deceb8] bg-white px-4 py-3 text-[#1f1a17] placeholder:text-[#9f9388] focus:outline-none focus:ring-2 focus:ring-[#1f1a17]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#5b5149]">
                      Pin Code *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      inputMode="numeric"
                      pattern="\d{6}"
                      title="Enter a 6-digit pin code"
                      placeholder="Enter pin code"
                      className="mt-1 w-full rounded-xl border border-[#deceb8] bg-white px-4 py-3 text-[#1f1a17] placeholder:text-[#9f9388] focus:outline-none focus:ring-2 focus:ring-[#1f1a17]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#5b5149]">
                    Looking For (Select all that apply)
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {o.map((c) => (
                      <label
                        className="flex items-center gap-2 rounded-xl border border-[#e7d7c4] bg-[#fffaf4] px-3 py-3 text-sm text-[#433b35] transition hover:border-[#b79062]"
                        key={c}
                      >
                        <input
                          type="checkbox"
                          name="lookingFor"
                          value={c}
                          className="h-4 w-4 accent-black"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#5b5149]">
                    Any Special Request (Optional)
                  </label>
                  <textarea
                    rows="3"
                    name="request"
                    placeholder="Styling help, occasion, surprise, or specific requirements"
                    className="mt-1 w-full rounded-xl border border-[#deceb8] bg-white px-4 py-3 text-[#1f1a17] placeholder:text-[#9f9388] focus:outline-none focus:ring-2 focus:ring-[#1f1a17]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1f1a17] py-3.5 font-semibold text-white shadow-[0_16px_40px_rgba(31,26,23,0.22)] transition hover:bg-[#332b26] disabled:cursor-wait disabled:opacity-70"
                >
                  <House size={18} />
                  <span>
                    {sending ? "Sending..." : "Continue to Schedule Home Trial"}
                  </span>
                  <ArrowRight size={18} />
                </button>
                {error && (
                  <p role="alert" className="text-center text-sm text-red-700">
                    {error}
                  </p>
                )}
                <p className="text-center text-xs text-[#7e746d]">
                  Your details are private. We only contact you to personalise
                  and confirm your experience.
                </p>
              </div>
            ) : (
              <div className="space-y-4 rounded-[1.6rem] border border-[#eadcc8] bg-[#fffdfa] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[#1f1a17]">
                    <Clapperboard size={18} />
                    <h3 className="text-lg font-semibold">
                      Experience on Video
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#f3eadf] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8c6a3e]">
                    Video Mode
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#5b5149]">
                    Preferred Video Platform
                  </label>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {["WhatsApp Video", "Zoom", "Google Meet"].map((c) => (
                      <label
                        className="flex items-center gap-2 rounded-xl border border-[#e7d7c4] bg-[#fffaf4] px-3 py-3 text-sm text-[#433b35] transition hover:border-[#b79062]"
                        key={c}
                      >
                        <input
                          type="radio"
                          name="platform"
                          value={c}
                          className="h-4 w-4 accent-black"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#5b5149]">
                    Looking For (Select all that apply)
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {o.map((c) => (
                      <label
                        className="flex items-center gap-2 rounded-xl border border-[#e7d7c4] bg-[#fffaf4] px-3 py-3 text-sm text-[#433b35] transition hover:border-[#b79062]"
                        key={c}
                      >
                        <input
                          type="checkbox"
                          name="lookingFor"
                          value={c}
                          className="h-4 w-4 accent-black"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#5b5149]">
                    What would you like help with
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.map((c) => (
                      <label
                        className="flex items-center gap-2 rounded-full border border-[#e7d7c4] bg-[#fffaf4] px-4 py-2.5 text-sm text-[#433b35] transition hover:border-[#b79062]"
                        key={c}
                      >
                        <input
                          type="checkbox"
                          name="helpWith"
                          value={c}
                          className="h-4 w-4 accent-black"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1f1a17] py-3.5 font-semibold text-white shadow-[0_16px_40px_rgba(31,26,23,0.22)] transition hover:bg-[#332b26] disabled:cursor-wait disabled:opacity-70"
                >
                  <Video size={18} />
                  <span>
                    {sending ? "Sending..." : "Continue to Book Video Call"}
                  </span>
                  <ArrowRight size={18} />
                </button>
                {error && (
                  <p role="alert" className="text-center text-sm text-red-700">
                    {error}
                  </p>
                )}
                <p className="text-center text-xs text-[#7e746d]">
                  Your details are private. We only contact you to personalise
                  and confirm your experience.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
const consultVideo = "/assets/sequence-01-C5oY7jYt.mp4";
function VideoConsultation() {
  return (
    <section className="w-full bg-[#f3f3f3] text-gray-900 py-4 md:py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center">
        <div className="space-y-6 md:space-y-7 md:pr-6">
          <h2 className="text-3xl lg:text-5xl md:text-4xl leading-tight text-center md:text-left">
            {"View Designs Instantly "}
            <br />
            {" On a Video Call"}
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Can't schedule a home visit? Our certified jewellery consultants
            walk you through the full collection live. Get exclusive
            personalised picks with honest answers and zero sales pressure.
            Available Pan India.
          </p>
          <ul className="space-y-4 text-sm md:text-base text-gray-700 text-center md:text-left">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="font-semibold text-gray-900">+</span>
              {" 30-minute expert session"}
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="font-semibold text-gray-900">+</span>
              {" Live product demonstration"}
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="font-semibold text-gray-900">+</span>
              {" Styling and sizing guidance"}
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="font-semibold text-gray-900">+</span>
              {" Available Pan-India, any day"}
            </li>
          </ul>
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="mt-5 mx-auto md:mx-0 block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            View Designs Instantly
          </button>
        </div>
        <div className="bg-[#f8f8f8] border border-gray-200 rounded-2xl p-7 md:p-10 shadow-sm">
          <div className="relative aspect-video bg-white border border-gray-200 rounded-xl overflow-hidden">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={consultVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-700">Zoom Consultation Preview</p>
            <p className="text-xs text-gray-500">
              Join a live Zoom call to review jewellery options with our expert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
const LogoBar = () => (
  <section className="w-full  px-4 pt-4 md:px-10 md:pt-0">
    <div className="mx-auto flex max-w-7xl justify-center  px-6 py-4  backdrop-blur md:px-8 md:py-5">
      <img src={logo} alt="logo" className="h-14 object-contain md:h-16" />
    </div>
  </section>
);
function LandingPage() {
  const Reveal = ({ children: s, delay: o = 0 }) => (
    <motion.div
      initial={{
        opacity: 0,
        y: 36,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.65,
        delay: o,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {s}
    </motion.div>
  );
  return (
    <Preloader>
      <Reveal>
        <LogoBar />
        <HeroSlider />
        <CategoryCarousel delay={0.03} />
      </Reveal>
      <Reveal delay={0.05}>
        <WhyNewAgeDiamonds />
      </Reveal>
      <Reveal delay={0.07}>
        <HomeTrialIntro />
      </Reveal>
      <Reveal delay={0.11}>
        <CertifiedBrilliance />
      </Reveal>
      <Reveal delay={0.13}>
        <SolitaireSection />
      </Reveal>
      <Reveal delay={0.15}>
        <VideoConsultation />
      </Reveal>
      <Reveal delay={0.17}>
        <BestsellingCollections />
      </Reveal>
      <Reveal delay={0.19}>
        <TrustBadges />
      </Reveal>
      <Reveal delay={0.21}>
        <OccasionSlider />
      </Reveal>
      <Reveal delay={0.23}>
        <PerfectGifts />
      </Reveal>
      <Reveal delay={0.25}>
        <DiamondDetail />
      </Reveal>
      <Reveal delay={0.27}>
        <Testimonials />
      </Reveal>
      <Reveal delay={0.29}>
        <LeadForm />
      </Reveal>
      <Reveal delay={0.31}>
        <HowItWorks />
      </Reveal>
      <Reveal delay={0.33}>
        <BookingCta />
      </Reveal>
    </Preloader>
  );
}

export default LandingPage;

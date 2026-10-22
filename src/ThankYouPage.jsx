import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, Gem, PhoneCall, Sparkles } from "lucide-react";

// Content from nad-thankyoupage.netlify.app, restyled with the landing page's
// fonts, palette, texture background and step cards.

const logo = "/assets/logo-DJgj_Yey.png",
  bgTexture = "/assets/bg-texture-o7nb96gM.svg",
  steps = [
    {
      number: "01",
      icon: PhoneCall,
      title: "We Confirm",
      body: "A quick call or WhatsApp to lock your preferred time and shortlist.",
    },
    {
      number: "02",
      icon: Gem,
      title: "You Experience",
      body: "At home or on video, guided, personalised, and effortless.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "You Decide",
      body: "Keep what you love. Leave the rest with complete comfort.",
    },
  ],
  requestLabel = {
    home: "Home Trial",
    video: "Video Call",
  },
  fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

function ThankYouPage() {
  const { state } = useLocation(),
    label = requestLabel[state?.mode] ?? "Home Trial / Video Call";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-[#f7f1e8] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 via-white/20 to-transparent" />
      <div className="pointer-events-none absolute -left-12 top-40 h-48 w-48 rounded-full bg-[#d4b07b]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-56 w-56 rounded-full bg-[#1f1a17]/10 blur-3xl" />

      <header className="relative w-full px-4 pt-4 md:px-10 md:pt-0">
        <div className="mx-auto flex max-w-7xl justify-center px-6 py-4 md:px-8 md:py-5">
          <Link to="/" aria-label="New Age Diamonds home">
            <img src={logo} alt="logo" className="h-14 object-contain md:h-16" />
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 md:px-10 md:pb-24 md:pt-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1f1a17] text-white shadow-[0_16px_40px_rgba(31,26,23,0.22)] md:h-20 md:w-20"
          >
            <CircleCheck size={34} />
          </motion.div>
          <div className="inline-flex rounded-full border border-[#c9a97a]/50 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8c6a3e] shadow-sm backdrop-blur">
            Diamond Boutique
          </div>
          <h1 className="mt-5 text-4xl leading-tight text-[#1f1a17] sm:text-5xl md:text-6xl lg:text-7xl">
            Thank You
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5f564f] sm:text-lg md:text-xl">
            Your {label} request has been received. We’ll confirm your slot
            within 2 hours.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={i + 1}
                whileHover={{ y: -5 }}
                className="flex flex-col rounded-[1.6rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(68,52,35,0.08)] backdrop-blur lg:p-8"
                key={step.number}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2e4d2] text-[#8c6a3e]">
                    <Icon size={20} />
                  </div>
                  <div className="text-right">
                    <p className="text-xs tracking-wide text-[#8c6a3e] style-content-3">
                      STEP
                    </p>
                    <p className="font-serif text-3xl leading-none text-[#1f1a17] md:text-4xl">
                      {step.number}
                    </p>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1f1a17] md:text-2xl style-content-3">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f564f] sm:text-base style-content-2">
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-16"
        >
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1f1a17] px-7 py-3 text-sm font-medium text-white transition hover:bg-black sm:w-auto lg:text-lg"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>
        </motion.div>
        <p className="mt-6 text-center text-xs text-[#7e746d]">
          Your details are private. We only contact you to personalise and
          confirm your experience.
        </p>
      </section>
    </main>
  );
}

export default ThankYouPage;

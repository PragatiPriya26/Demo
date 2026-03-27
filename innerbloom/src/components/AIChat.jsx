import { motion } from "framer-motion";

const messages = [
  { type: "ai", text: "Hey Naina 🌸 I noticed you logged \"a little low\" this morning. Want to talk about what's on your mind?" },
  { type: "user", text: "Yeah, I've just been feeling overwhelmed with work lately." },
  { type: "ai", text: "That makes sense — overwhelm is so common when there's no clear boundary between work and rest. Can I ask — when did you last take a real break, just for yourself?" },
  { type: "user", text: "Honestly, I can't remember..." },
  { type: "ai", text: "Let's start small. What's one thing, even 5 minutes long, that brings you peace? 🌿" },
];

const features = [
  { icon: "🧠", title: "Mood-aware conversations", desc: "Bloom adapts its tone based on how you've been feeling. Anxious days get gentler responses.", bg: "bg-[#D4EDD8]" },
  { icon: "📓", title: "Memory & context", desc: "It remembers what you've shared across sessions, so you never have to start from scratch.", bg: "bg-lavender-light" },
  { icon: "🔒", title: "Private by design", desc: "All conversations are end-to-end encrypted. Your thoughts stay yours, always.", bg: "bg-blush-light" },
  { icon: "🌿", title: "Crisis-aware & safe", desc: "If Bloom detects distress, it gently connects you to a real human counsellor immediately.", bg: "bg-[#FDF0D0]" },
];

const AICompanionSection = () => (
  <section className="px-6 md:px-12 py-16 md:py-20 bg-[#EAF1E8]">
    <p className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase text-sage-dark mb-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-sage-dark before:block">
      AI & Support
    </p>
    <h2 className="font-display text-[clamp(26px,4vw,38px)] text-ink leading-tight mb-2.5">
      Meet <em className="text-sage-dark italic">Bloom</em>, your AI companion
    </h2>
    <p className="text-[15px] text-mid max-w-[520px] leading-relaxed mb-10">
      Available 24/7, Bloom listens without judgment, remembers what you share, and gently guides you toward clarity.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
      <motion.div
        className="bg-card rounded-xl p-7 shadow-[0_4px_28px_rgba(0,0,0,0.07)] border border-lavender/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-lavender flex items-center justify-center text-lg">🌸</div>
          <div>
            <p className="font-medium text-[15px] text-ink">Bloom</p>
            <p className="text-[11px] text-sage-dark">● Online — always here for you</p>
          </div>
        </div>
        <div className="flex flex-col gap-3.5 mb-5">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.type === "ai"
                  ? "bg-lavender-light text-ink rounded-bl-sm self-start"
                  : "bg-sage-dark text-primary-foreground rounded-br-sm self-end"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2.5 items-center">
          <input
            type="text"
            placeholder="Type something…"
            className="flex-1 px-4 py-3 border-[1.5px] border-sage/40 rounded-full bg-warm text-sm text-ink outline-none focus:border-sage-dark transition-colors"
          />
          <button className="w-10 h-10 rounded-full bg-sage-dark text-primary-foreground flex items-center justify-center text-base hover:bg-ink hover:scale-105 transition-all">
            ➤
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col gap-5">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="flex gap-4 items-start bg-card rounded-2xl p-5 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-xl shrink-0 ${f.bg}`}>
              {f.icon}
            </div>
            <div>
              <p className="font-medium text-[15px] text-ink mb-1">{f.title}</p>
              <p className="text-[13px] text-mid leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AICompanionSection;

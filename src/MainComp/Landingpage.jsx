import { useState } from "react";
import DreamSmiles from "./DreamSmile";
import Header from "../Comp/Header";
import Footer from "../Comp/Footer";

// SVG Icons
const CheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#22C55E"/>
    <path d="M7 12l3.5 3.5L17 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#EF4444"/>
    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const faqData = [
  { q: "What are Aligners?", a: "Aligners are clear, removable dental devices that gradually straighten teeth. They are custom-made to fit your teeth and are nearly invisible." },
  { q: "How do Aligners work?", a: "Aligners apply gentle, constant pressure to your teeth, slowly moving them into the correct position. You switch to a new set every 10 days." },
  { q: "Can any dentist do irregular teeth treatment?", a: "Irregular teeth treatment should ideally be done by an Orthodontist, a specialist in tooth alignment. Whistle partners exclusively with Clove Dental Orthodontists." },
  { q: "Are there any restriction on eating or drinking?", a: "You should remove aligners when eating or drinking anything other than water. This keeps them clean and prevents staining." },
  { q: "How long does the treatment take?", a: "Treatment duration varies by case complexity. Most cases are completed within 6–18 months." },
];

const compareRows = [
  { feature: "Easy to complex cases", whistle: "Yes, mild to complex", other: "No, only mild to moderate", type: "text" },
  { feature: "Clear-cut Pricing", whistle: true, other: false, type: "bool" },
  { feature: "Aligner Change", whistle: "Every 10 days", other: "Every 2 weeks", type: "text" },
  { feature: "Clinical Partnership", whistle: true, other: false, type: "bool" },
  { feature: "Movement Between Cities", whistle: true, other: false, type: "bool" },
  { feature: "Complimentary Teeth Scaling", whistle: true, other: false, type: "bool" },
];
const results = [
  {
    concern: "Gaps",
    duration: "8 months",
    beforeImg: "/img/4.jpg",
    afterImg: "/img/5.jpg",
  },
  {
    concern: "Crooked Teeth",
    duration: "8 months",
    beforeImg: "/img/6.jpg",
    afterImg: "/img/7.jpg",
  },
  {
    concern: "Open Bite",
    duration: "8 months",
    beforeImg: "/img/8.jpg",
    afterImg: "/img/9.jpg",
  },
  {
    concern: "Protruding Teeth",
    duration: "8 months",
    beforeImg: "/img/10.jpg",
    afterImg: "/img/11.jpg",
  },
];
const whyCards = [
  {
    title: "Custom-made & invisible",
    desc: "Tailored for your teeth and smile with a clear, discreet appearance.",
    img: "/img/12.png",
  },
  {
    title: "Predictable results",
    desc: "Advanced 3D modeling and AI-technology for precise planning and predictable results.",
    img: "/img/13.png",
  },
  {
    title: "Partnership with Clove Dental",
    desc: "Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.",
    img: "/img/14.png",
  },
  {
    title: "Unlimited Aligners*",
    desc: "Unlimited aligners and doctor consults at no extra cost.",
    img: "/img/15.png",
  },
];

export default function WhistleLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [teethGap, setTeethGap] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <>
<Header/>
      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero - Invisible Aligners">
        <div className="hero-content">
            <div className="hero-bgc"></div>
          <h1>Invisible Aligners for a dream smile</h1>
          <p>Book a Scan and avail a free<br />Orthodontist Consult <span>worth ₹1500</span></p>
        </div>
       
       
      </section>

      {/* ── FORM ── */}
      <section className="form-section" aria-label="Book a Free Scan">
        <h2>Do you have Teeth Gaps or Crooked Teeth?</h2>
        <div className="radio-group" role="radiogroup">
          <label><input type="radio" name="teeth" value="yes" checked={teethGap === "yes"} onChange={() => setTeethGap("yes")} /> Yes</label>
          <label><input type="radio" name="teeth" value="no" checked={teethGap === "no"} onChange={() => setTeethGap("no")} /> No</label>
        </div>
        <div className="form-row">
          <input type="text" placeholder="Full Name*" value={name} onChange={e => setName(e.target.value)} aria-label="Full Name" />
          <div className="phone-wrap">
            <span className="phone-prefix">+91</span>
            <input type="tel" placeholder="Mobile number*" value={phone} onChange={e => setPhone(e.target.value)} aria-label="Mobile number" />
          </div>
          <button className="btn-cta" aria-label="Book a Free Scan">Book a Free Scan</button>
        </div>
        <div className="consent-row">
          <input type="checkbox" id="consent" checked={consent} onChange={e => setConsent(e.target.checked)} />
          <span>I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.</span>
        </div>
      </section>

      {/* ── CLINIC BANNER ── */}
      <div className="clinic-banner" aria-label="Find a Clove Dental Clinic">
        <h3>Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.</h3>
        <div className="clinic-right">
         <div className="clove-logo">
  <div className="clove-text">
    clove<span>:)</span>
  </div>
  <small>DENTAL</small>
</div>
          <button className="find-clinic-btn" aria-label="Find Clinic">Find Clinic ▾</button>
        </div>
      </div>

      {/* ── TICKER ── */}
      <div className="ticker" role="marquee" aria-label="Promotional offers">
        <div className="ticker-inner">
          {[...Array(4)].map((_, i) => (
            <span key={i} style={{ display: "inline-flex", gap: "60px" }}>
              <span className="ticker-item">Our inaugural launch benefit</span>
              <span className="ticker-item"><strong>Free teeth scan</strong> worth ₹500</span>
              <span className="ticker-item"><strong>Free orthodontic consultation</strong> worth ₹1500</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── DREAM SMILES ── */}
     <DreamSmiles/>

      {/* ── RESULTS ── */}
      <section className="results-section" aria-label="Patient Results">
  <h2>Results You'll Love</h2>

  <div className="results-grid">
    {results.map((r, i) => (
      <div className="result-card" key={i}>
        <div className="before-after">
          <img
            src={r.beforeImg}
            alt={`${r.concern} before`}
            className="before-after-image"
          />
          <img
            src={r.afterImg}
            alt={`${r.concern} after`}
            className="before-after-image"
          />
        </div>

        <div className="ba-labels">
          <span>Before</span>
          <span>After</span>
        </div>

        <div className="result-meta">
          <span>Concern</span>
          <span>{r.concern}</span>
        </div>

        <div className="result-meta" style={{ marginTop: 4 }}>
          <span>Treatment Duration</span>
          <span>{r.duration}</span>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ── WHY WHISTLE ── */}
     <section className="why-section" aria-label="Why choose Whistle">
  <h2>Why Whistle?</h2>

  <div className="why-grid">
    {whyCards.map((c, i) => (
      <article className="why-card" key={i}>
        <div className="why-card-img">
          <img src={c.img} alt={c.title} />
        </div>

        <div className="why-card-body">
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
        </div>
      </article>
    ))}
  </div>
</section>

      {/* ── WHISTLE DIFFERENCE ── */}
      <section className="diff-section" aria-label="The Whistle Difference">
        <div className="diff-left">
          <h2>The Whistle Difference</h2>
          <div className="diff-items">
            {[
              { icon: "/img/24.png", title: "Next-Gen", desc: "Crafted with top-notch 3D printing, laser tech, and Zendura FLX material." },
              { icon: "/img/25.png", title: "Hassle-Free", desc: "Predictable, comfortable & lifestyle-friendly for an easy smile transformation." },
              { icon: "/img/23.png", title: "Transparent Pricing", desc: "Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs." },
            ].map((d, i) => (
              <div className="diff-item" key={i}>
                <div className="diff-icon"><span style={{ fontSize: "1.6rem" }}><img
    src={d.icon}
    
  /></span></div>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="diff-right">
  <div className="diff-img">
    <img
      src="/img/16.png"
      alt="Difference"
      className="diff-image"
    />
  </div>
</div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="compare-section" aria-label="Whistle vs Other Brands">
        <h2>What sets Whistle apart?</h2>
        <div className="compare-table">
          <table>
            <thead>
              <tr>
                <th className="feature-col">Features</th>
                <th className="whistle-col-header" style={{ background: "#F5F0FF" }}>whistle</th>
                <th>Other Brands</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={i}>
                  <td className="feature-col">{row.feature} <span className="chevron">›</span></td>
                  <td className="whistle-col">
                    {row.type === "bool"
                      ? (row.whistle ? <CheckCircle /> : <XCircle />)
                      : <span style={{ fontSize: "0.82rem", color: "#333" }}>{row.whistle}</span>
                    }
                  </td>
                  <td>
                    {row.type === "bool"
                      ? (row.other ? <CheckCircle /> : <XCircle />)
                      : <span style={{ fontSize: "0.82rem", color: "#555" }}>{row.other}</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="steps-section" aria-label="How to get your perfect smile">
        <div className="steps-left">
          <h2>Get your perfect smile in four simple steps</h2>
          <div className="steps-grid">
            {[
              { n: 1, title: "Scan", desc: "We use an AI-powered scanner to take a detailed 3D image of your teeth." },
              { n: 2, title: "Plan", desc: "Our Orthodontists design your customized smile enhancement plan using highly advanced software." },
              { n: 3, title: "Fabricate", desc: "We manufacture your custom aligners leveraging 3D printing & laser technology." },
              { n: 4, title: "Wear", desc: "Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey." },
            ].map(s => (
              <div className="step-item" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div><h3 className="steps-h1">{s.title}</h3><p className="step-p">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="steps-right">
          <div className="video-placeholder" role="button" aria-label="Play how it works video" tabIndex={0}>
            
    <img
      src="/img/17.png"
      alt="Difference"
      className="step-image"
    />
  
          </div>
        </div>
      </section>

      {/* ── DOCTOR LED ── */}
      <section className="doctor-section" aria-label="Doctor-led treatment">
        <div className="doctor-left">
          <h2>We are Doctor-led, not direct-to-customers</h2>
          <p>We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+ clinics nationwide.</p>
          <button className="btn-callback" aria-label="Get a Callback">Get a Callback</button>
        </div>
        <div className="doctor-right">
          <div className="doctor-img-placeholder" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
             <img
      src="/img/18.png"
      alt="Difference"
      className="doctor-image"
    />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
     <section className="testimonials-section">
  <h2>Happy Smilers!</h2>

  <div className="testimonial-scroll">
    <img
      src="/img/19.gif"
      alt="Testimonials"
      className="testi-image"
    />
  </div>
</section>

      {/* ── FAQ ── */}
      <section className="faq-section" aria-label="Frequently Asked Questions">
        <h2><span>Got Questions?</span> We've got answers</h2>
        <div className="faq-list" role="list">
          {faqData.map((item, i) => (
            <div className="faq-item" key={i} role="listitem">
              <button
                className="faq-btn"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                aria-controls={`faq-answer-${i}`}
              >
                {item.q}
                <span className={`faq-plus${openFaq === i ? " open" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="faq-answer" id={`faq-answer-${i}`} role="region">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

     <Footer/>
    </>
  );
}
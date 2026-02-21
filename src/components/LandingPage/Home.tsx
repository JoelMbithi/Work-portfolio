import { useState, useEffect, useRef } from "react";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { TbPencilHeart } from "react-icons/tb";
import { TbFileCv } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { LiaLinkSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";
import { FiDownload } from 'react-icons/fi';


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --navy: #1e3a5f;
    --slate: #2d4a6e;
    --steel: #4a6a8a;
    --gray-light: #f8fafc;
    --gray-medium: #e2e8f0;
    --gray-dark: #334155;
    --charcoal: #1e293b;
    --white: #ffffff;
    --border-light: #e9eef2;
    --text-primary: #1e293b;
    --text-secondary: #475569;
    --text-muted: #64748b;
    --accent: #2d4a6e;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--gray-light);
    color: var(--text-primary);
    line-height: 1.6;
    font-size: 16px;
    font-weight: 400;
    overflow-x: hidden;
  }

  .portfolio {
    min-height: 100vh;
  }

  /* NAV */
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 20px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--border-light);
  }

  .nav-name {
    font-family: 'Merriweather', serif;
    font-size: 18px;
    color: var(--navy);
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  .nav-links {
    display: flex;
    gap: 40px;
    list-style: none;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 400;
    transition: color 0.2s;
    position: relative;
  }

  .nav-links a:hover {
    color: var(--navy);
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--navy);
    transition: width 0.2s;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  /* HERO */
  .hero {
    padding: 160px 48px 80px;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    align-items: center;
    min-height: 90vh;
  }

  .hero-left {
    padding-right: 20px;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--steel);
    font-weight: 400;
    margin-bottom: 24px;
  }

  .hero-tag::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--steel);
    opacity: 0.3;
  }

  .hero-name {
    font-family: 'Merriweather', serif;
    font-size: clamp(48px, 5vw, 68px);
    line-height: 1.2;
    color: var(--navy);
    margin-bottom: 16px;
    font-weight: 300;
    letter-spacing: -0.02em;
  }

  .hero-name .first-name {
    display: block;
    font-weight: 300;
  }

  .hero-name .last-name {
    display: block;
    font-style: italic;
    color: var(--steel);
    font-weight: 300;
    margin-top: 4px;
  }

  .hero-title {
    font-family: 'Source Serif 4', serif;
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 24px;
    line-height: 1.6;
    font-weight: 400;
  }

  .hero-bio {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-muted);
    max-width: 500px;
    margin-bottom: 40px;
    font-weight: 300;
  }

  .hero-bio strong {
    color: var(--navy);
    font-weight: 500;
  }

  .hero-actions {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .btn-primary {
    padding: 14px 32px;
    background: var(--navy);
    color: white;
    border: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.02em;
  }

  .btn-primary:hover {
    background: var(--slate);
  }

  .btn-outline {
    padding: 14px 32px;
    background: transparent;
    color: var(--navy);
    border: 1px solid var(--border-light);
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-outline:hover {
    border-color: var(--navy);
  }

  /* Hero Right - Photo with image */
  .hero-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .photo-container {
    position: relative;
    width: 340px;
    height: 420px;
  }

  .photo-bg {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    background: var(--steel);
    opacity: 0.1;
  }

  .photo-image {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid var(--border-light);
    background: var(--white);
  }

  /* Floating elements */
  .float-element {
    position: absolute;
    background: white;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    border: 1px solid var(--border-light);
  }

  .float-1 {
    bottom: 20px;
    left: -40px;
  }

  .float-2 {
    top: 40px;
    right: -40px;
  }

  .float-label {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .float-value {
    font-family: 'Merriweather', serif;
    font-size: 20px;
    color: var(--navy);
    font-weight: 400;
  }

  .float-sub {
    font-size: 11px;
    color: var(--text-muted);
  }

  /* Status indicator */
  .status-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--steel);
    animation: pulse 2s infinite;
    margin-right: 8px;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* SECTION STYLES */
  .section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 100px 48px;
  }

  .section-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--steel);
    font-weight: 400;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border-light);
    max-width: 60px;
  }

  .section-heading {
    font-family: 'Merriweather', serif;
    font-size: clamp(32px, 3.5vw, 48px);
    line-height: 1.3;
    color: var(--navy);
    margin-bottom: 48px;
    font-weight: 300;
    letter-spacing: -0.02em;
  }

  .section-heading em {
    font-style: italic;
    color: var(--steel);
    font-weight: 300;
  }

  /* DIVIDER */
  .divider {
    border: none;
    border-top: 1px solid var(--border-light);
    max-width: 1100px;
    margin: 0 auto;
  }

  /* ABOUT */
  .about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    align-items: start;
  }

  .about-text p {
    font-family: 'Source Serif 4', serif;
    font-size: 16px;
    line-height: 1.9;
    color: var(--text-secondary);
    margin-bottom: 24px;
    font-weight: 400;
  }

  .about-aside {
    padding-top: 8px;
  }

  .aside-block {
    border-left: 2px solid var(--steel);
    padding-left: 20px;
    margin-bottom: 32px;
  }

  .aside-block-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 4px;
  }

  .aside-block-value {
    font-size: 15px;
    color: var(--text-primary);
    line-height: 1.6;
    font-weight: 400;
  }

  .aside-block-value a {
    color: var(--navy);
    text-decoration: none;
    border-bottom: 1px dotted var(--border-light);
  }

  .quote-block {
    border-left: 2px solid var(--steel);
    padding-left: 24px;
    margin: 40px 0 0;
    font-style: italic;
    color: var(--text-muted);
    font-size: 15px;
    line-height: 1.8;
  }

  /* EXPERIENCE */
  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .exp-item {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 48px;
    padding: 48px 0;
    border-bottom: 1px solid var(--border-light);
  }

  .exp-item:first-child { padding-top: 0; }
  .exp-item:last-child { border-bottom: none; }

  .exp-period {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 6px;
    font-weight: 300;
  }

  .exp-company {
    font-size: 14px;
    font-weight: 500;
    color: var(--navy);
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }

  .exp-location {
    font-size: 12px;
    color: var(--text-muted);
  }

  .exp-role {
    font-family: 'Merriweather', serif;
    font-size: 22px;
    color: var(--navy);
    margin-bottom: 16px;
    line-height: 1.4;
    font-weight: 400;
  }

  .exp-desc {
    font-size: 15px;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 20px;
    max-width: 700px;
    font-weight: 300;
  }

  .exp-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .exp-highlight {
    font-size: 12px;
    padding: 4px 12px;
    border: 1px solid var(--border-light);
    color: var(--text-secondary);
    background: var(--white);
  }

  /* SKILLS */
  .skills-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }

  .skills-intro {
    font-family: 'Source Serif 4', serif;
    font-size: 16px;
    line-height: 1.9;
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  .skill-category {
    margin-bottom: 32px;
  }

  .skill-cat-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: 16px;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-tag {
    font-size: 13px;
    padding: 6px 14px;
    background: var(--white);
    color: var(--text-secondary);
    border: 1px solid var(--border-light);
    transition: all 0.2s;
    cursor: default;
  }

  .skill-tag:hover {
    border-color: var(--steel);
  }

  .big-skills {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .big-skill-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .big-skill-name {
    font-size: 14px;
    color: var(--text-primary);
    display: flex;
    justify-content: space-between;
    font-weight: 400;
  }

  .big-skill-name span { 
    color: var(--text-muted); 
    font-size: 13px; 
    font-weight: 300; 
  }

  .big-skill-bar {
    height: 2px;
    background: var(--border-light);
    overflow: hidden;
  }

  .big-skill-fill {
    height: 100%;
    background: var(--navy);
    transition: width 1s ease;
  }

  /* EDUCATION */
  .edu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .edu-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    padding: 24px;
    transition: all 0.2s;
  }

  .edu-card:hover {
    border-color: var(--steel);
  }

  .edu-year {
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 8px;
    font-weight: 300;
  }

  .edu-degree {
    font-family: 'Merriweather', serif;
    font-size: 18px;
    color: var(--navy);
    margin-bottom: 4px;
    line-height: 1.5;
    font-weight: 400;
  }

  .edu-school {
    font-size: 13px;
    color: var(--text-secondary);
    font-weight: 300;
  }

  /* CONTACT */
  .contact-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }

  .contact-left p {
    font-family: 'Source Serif 4', serif;
    font-size: 16px;
    line-height: 1.9;
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .contact-link-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: var(--white);
    border: 1px solid var(--border-light);
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.2s;
  }

  .contact-link-item:hover {
    border-color: var(--navy);
  }

  .contact-icon {
    width: 40px;
    height: 40px;
    background: var(--gray-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: var(--navy);
  }

  .contact-link-text small {
    display: block;
    font-size: 11px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 2px;
  }

  .contact-link-text strong {
    font-size: 15px;
    font-weight: 400;
    color: var(--text-primary);
  }

  /* FORM */
  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 6px;
    font-weight: 400;
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 12px 16px;
    background: var(--white);
    border: 1px solid var(--border-light);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: var(--text-primary);
    transition: border-color 0.2s;
    font-weight: 300;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--navy);
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  /* FOOTER */
  .footer {
    background: var(--navy);
    color: white;
    padding: 48px;
    margin-top: 60px;
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-name {
    font-family: 'Merriweather', serif;
    font-size: 18px;
    color: white;
    font-weight: 300;
    margin-bottom: 4px;
    opacity: 0.9;
  }

  .footer-right {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .nav { padding: 16px 24px; }
    .nav-links { display: none; }
    .hero { grid-template-columns: 1fr; padding: 120px 24px 60px; gap: 40px; min-height: auto; }
    .hero-right { display: none; }
    .section { padding: 60px 24px; }
    .about-grid, .contact-wrap, .skills-layout { grid-template-columns: 1fr; gap: 40px; }
    .exp-item { grid-template-columns: 1fr; gap: 16px; }
    .edu-grid { grid-template-columns: 1fr; }
    .footer-inner { flex-direction: column; gap: 16px; text-align: center; }
  }
`;

export default function Portfolio() {
  
  const [sent, setSent] = useState(false);
  const [barsVisible, setBarsVisible] = useState(false);
  const skillsRef = useRef(null);
const [isSubmitting, setIsSubmitting] = useState(false);
const [formData, setFormData] = useState({ 
  name: "", 
  email: "", 
  subject: "", 
  message: "" 
});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarsVisible(true); },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const data = new FormData();
  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("subject", formData.subject);
  data.append("message", formData.message);

  try {
    const response = await fetch("https://formspree.io/f/xqeddonv", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const coreSkills = [
    { name: "Procurement & Sourcing", pct: 88 },
    { name: "Asset Management", pct: 92 },
    { name: "Vendor Relations", pct: 85 },
    { name: "Supply Chain Analytics", pct: 80 },
    { name: "Contract Management", pct: 82 },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio">

        {/* NAV */}
       <nav className="nav">
  {/* Logo */}
  <a href="#home" className="flex items-center gap-3 group">
    <div className="relative">
      <img 
        src="/images/logo.png" 
        alt="Boniface Mutuku"
        className="w-10 h-10 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 rounded-full bg-navy/0 group-hover:bg-navy/5 transition-all duration-300"></div>
    </div>
    <div>
      <span className="nav-name block">Boniface Mutuku</span>
      <span className="text-[10px] text-steel/60 hidden sm:block">Supply Chain Professional</span>
    </div>
  </a>
  
  <ul className="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Work</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-tag">
              <span className="status-dot"></span>
              Available for opportunities
            </div>
            <h1 className="hero-name">
              <span className="first-name">Boniface Muasya</span>
              <span className="last-name">Mutuku</span>
            </h1>
            <p className="hero-title">Supply Chain & Procurement Professional</p>
            <p className="hero-bio">
              Based in <strong>Nairobi, Kenya</strong> with 3+ years experience in asset management, 
              procurement operations, and vendor relations across East Africa.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Contact me →</a>
              <a href="#experience" className="btn-outline">View experience</a>
               <a
              href="/Boniface Muasya Mutuku CV.pdf"
              download
             className="btn-primary"
            >
              <FiDownload />
              Download CV
            </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="photo-container">
              <div className="photo-bg"></div>
              <img 
                src="/images/bon2.png" 
                alt="Boniface Muasya Mutuku"
                className="photo-image"
                /* onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/340x420?text=BM";
                }} */
              />
            </div>
            
            <div className="float-element float-1">
              <div className="float-label">Experience</div>
              <div className="float-value">3+ years</div>
              <div className="float-sub">Supply chain</div>
            </div>
            
            <div className="float-element float-2">
              <div className="float-label">Education</div>
              <div className="float-value">BSc + CPSP</div>
              <div className="float-sub">In progress</div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-label">About</div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I grew up in Makueni County — where resourcefulness isn't just a skill, it's a way of life. 
                That background shapes how I approach supply chain work: every resource has value, 
                relationships matter more than transactions, and precision prevents problems.
              </p>
              <p>
                I studied Supply Chain Management at JKUAT, then spent three years learning from 
                three very different organizations — GDC, KETRACO, and Watu Credit. Each taught me 
                something distinct about how supply chains operate under real-world pressure.
              </p>
              <div className="quote-block">
                "Good procurement isn't about finding the cheapest supplier — 
                it's about building relationships that hold when things get complicated."
              </div>
            </div>
            <div className="about-aside">
              <div className="aside-block">
                <div className="aside-block-label">Based in</div>
                <div className="aside-block-value">Nairobi, Kenya · Open to remote</div>
              </div>
              <div className="aside-block">
                <div className="aside-block-label">Email</div>
                <div className="aside-block-value">
                  <a href="mailto:bonifacemuasya29@gmail.com">bonifacemuasya29@gmail.com</a>
                </div>
              </div>
              <div className="aside-block">
                <div className="aside-block-label">Phone</div>
                <div className="aside-block-value">
                  <a href="tel:+254716394036">+254 716 394 036</a>
                </div>
              </div>
              <div className="aside-block">
                <div className="aside-block-label">Languages</div>
                <div className="aside-block-value">English · Kiswahili · Kikamba</div>
              </div>
              <div className="aside-block">
                <div className="aside-block-label">Currently</div>
                <div className="aside-block-value">CPSP-K Certification (KISM)</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-label">Experience</div>
          <h2 className="section-heading">Where I've <em>worked</em></h2>

          <div className="experience-list">
            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-period">2024 — 2025</div>
                <div className="exp-company">Watu Credit</div>
                <div className="exp-location">Nairobi</div>
              </div>
              <div className="exp-content">
                <h3 className="exp-role">Contract Officer — Operations & Asset Management</h3>
                <p className="exp-desc">
                  Managed end-to-end asset financing for 500+ clients, coordinated with sales and warehouse teams, 
                  and developed operational reports that improved decision-making across branches.
                </p>
                <div className="exp-highlights">
                  <span className="exp-highlight">Asset Financing</span>
                  <span className="exp-highlight">Contract Management</span>
                  <span className="exp-highlight">Operations Reporting</span>
                  <span className="exp-highlight">Cross-functional Coordination</span>
                </div>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-period">2023</div>
                <div className="exp-company">KETRACO</div>
                <div className="exp-location">Nairobi</div>
              </div>
              <div className="exp-content">
                <h3 className="exp-role">Supply Chain Intern</h3>
                <p className="exp-desc">
                  Supported procurement operations, analyzed supply chain data, assisted in vendor evaluations, 
                  and conducted market research for supplier identification.
                </p>
                <div className="exp-highlights">
                  <span className="exp-highlight">Government Procurement</span>
                  <span className="exp-highlight">Vendor Evaluation</span>
                  <span className="exp-highlight">Market Research</span>
                  <span className="exp-highlight">Data Analysis</span>
                </div>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-period">2020</div>
                <div className="exp-company">GDC</div>
                <div className="exp-location">Nairobi</div>
              </div>
              <div className="exp-content">
                <h3 className="exp-role">Supply Chain Attachee</h3>
                <p className="exp-desc">
                  Assisted with procurement research, inventory monitoring, and supplier sourcing at 
                  Geothermal Development Company.
                </p>
                <div className="exp-highlights">
                  <span className="exp-highlight">Inventory Management</span>
                  <span className="exp-highlight">Procurement Research</span>
                  <span className="exp-highlight">Supplier Sourcing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CRAFT - What I can build for you */}
        <section id="craft" className="section">
          <div className="section-label">Craft</div>
          <h2 className="section-heading">What I can <em>build for you</em></h2>

          <div className="craft-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {/* Writing */}
            <div className="craft-card" style={{
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
              padding: '32px 24px',
              transition: 'all 0.2s'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '20px',
                color: 'var(--navy)'
              }}><TbPencilHeart /></div>
              <h3 style={{
                fontFamily: 'Merriweather, serif',
                fontSize: '20px',
                color: 'var(--navy)',
                marginBottom: '16px',
                fontWeight: 400
              }}>Writing</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                fontWeight: 300
              }}>
                Proposals, reports, and professional communication — turning complex ideas into words that land.
              </p>
              <div className="exp-highlights" style={{ gap: '6px' }}>
                <span className="exp-highlight">Proposals</span>
                <span className="exp-highlight">Reports</span>
                <span className="exp-highlight">Business writing</span>
                <span className="exp-highlight">Editing</span>
              </div>
            </div>

            {/* CV Building */}
            <div className="craft-card" style={{
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
              padding: '32px 24px',
              transition: 'all 0.2s'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '20px',
                color: 'var(--navy)'
              }}><TbFileCv />
              </div>
              <h3 style={{
                fontFamily: 'Merriweather, serif',
                fontSize: '20px',
                color: 'var(--navy)',
                marginBottom: '16px',
                fontWeight: 400
              }}>CV Building</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                fontWeight: 300
              }}>
                Hundreds of applications reviewed — I know what hiring managers look for. Let me help you tell your story.
              </p>
              <div className="exp-highlights" style={{ gap: '6px' }}>
                <span className="exp-highlight">CV strategy</span>
                <span className="exp-highlight">Cover letters</span>
                <span className="exp-highlight">LinkedIn profiles</span>
                <span className="exp-highlight">Interview prep</span>
              </div>
            </div>

            {/* Research & Analysis */}
            <div className="craft-card" style={{
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
              padding: '32px 24px',
              transition: 'all 0.2s'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '20px',
                color: 'var(--navy)'
              }}><VscGraph /></div>
              <h3 style={{
                fontFamily: 'Merriweather, serif',
                fontSize: '20px',
                color: 'var(--navy)',
                marginBottom: '16px',
                fontWeight: 400
              }}>Research & Analysis</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                fontWeight: 300
              }}>
                Market research, data analysis, and competitive intelligence to inform better decisions.
              </p>
              <div className="exp-highlights" style={{ gap: '6px' }}>
                <span className="exp-highlight">Market research</span>
                <span className="exp-highlight">Data analysis</span>
                <span className="exp-highlight">Competitor mapping</span>
                <span className="exp-highlight">Trend analysis</span>
              </div>
            </div>

            {/* Process Documentation */}
            <div className="craft-card" style={{
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
              padding: '32px 24px',
              transition: 'all 0.2s'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '20px',
                color: 'var(--navy)'
              }}><IoDocumentAttachOutline /></div>
              <h3 style={{
                fontFamily: 'Merriweather, serif',
                fontSize: '20px',
                color: 'var(--navy)',
                marginBottom: '16px',
                fontWeight: 400
              }}>Process Documentation</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                fontWeight: 300
              }}>
                SOPs, workflows, and operational manuals designed to be used, not just filed away.
              </p>
              <div className="exp-highlights" style={{ gap: '6px' }}>
                <span className="exp-highlight">SOP writing</span>
                <span className="exp-highlight">Workflow design</span>
                <span className="exp-highlight">Training materials</span>
                <span className="exp-highlight">Process mapping</span>
              </div>
            </div>

            {/* Supply Chain Consulting */}
            <div className="craft-card" style={{
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
              padding: '32px 24px',
              transition: 'all 0.2s'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '20px',
                color: 'var(--navy)'
              }}><LiaLinkSolid />
              </div>
              <h3 style={{
                fontFamily: 'Merriweather, serif',
                fontSize: '20px',
                color: 'var(--navy)',
                marginBottom: '16px',
                fontWeight: 400
              }}>Supply Chain Consulting</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                fontWeight: 300
              }}>
                Practical advice on procurement, vendor management, and operations — drawn from real experience.
              </p>
              <div className="exp-highlights" style={{ gap: '6px' }}>
                <span className="exp-highlight">Process review</span>
                <span className="exp-highlight">Vendor strategy</span>
                <span className="exp-highlight">Operations audit</span>
                <span className="exp-highlight">Training</span>
              </div>
            </div>

            {/* Professional Development */}
            <div className="craft-card" style={{
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
              padding: '32px 24px',
              transition: 'all 0.2s'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '20px',
                color: 'var(--navy)'
              }}><RiTeamLine /></div>
              <h3 style={{
                fontFamily: 'Merriweather, serif',
                fontSize: '20px',
                color: 'var(--navy)',
                marginBottom: '16px',
                fontWeight: 400
              }}>Professional Development</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                fontWeight: 300
              }}>
                One-on-one guidance for supply chain professionals — from interview prep to career strategy.
              </p>
              <div className="exp-highlights" style={{ gap: '6px' }}>
                <span className="exp-highlight">Career coaching</span>
                <span className="exp-highlight">Interview prep</span>
                <span className="exp-highlight">Skill assessment</span>
                <span className="exp-highlight">Industry guidance</span>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div style={{
            marginTop: '48px',
            padding: '32px',
            background: 'var(--gray-light)',
            border: '1px solid var(--border-light)',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Not sure what you need? Let's talk about what I can help you build.
            </p>
            <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              Start a conversation →
            </a>
          </div>
        </section>

        <hr className="divider" />

        {/* SKILLS */}
        <section id="skills" className="section" ref={skillsRef}>
          <div className="section-label">Skills</div>
          <h2 className="section-heading">Core <em>competencies</em></h2>

          <div className="skills-layout">
            <div>
              <p className="skills-intro">
                Three years across different organizations have built a balanced skill set — 
                from strategic procurement to day-to-day operations.
              </p>

              <div className="big-skills">
                {coreSkills.map((skill) => (
                  <div className="big-skill-item" key={skill.name}>
                    <div className="big-skill-name">
                      {skill.name}
                      <span>{skill.pct}%</span>
                    </div>
                    <div className="big-skill-bar">
                      <div
                        className="big-skill-fill"
                        style={{ width: barsVisible ? `${skill.pct}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="skill-category">
                <div className="skill-cat-label">Procurement</div>
                <div className="skill-tags">
                  {["Strategic Sourcing", "RFx Process", "Contract Negotiation", "Supplier Evaluation", "Cost Analysis", "Purchase Orders"].map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-cat-label">Operations</div>
                <div className="skill-tags">
                  {["Inventory Management", "Asset Tracking", "Logistics Coordination", "Demand Forecasting", "ERP Systems", "Data Reporting"].map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-cat-label">Professional</div>
                <div className="skill-tags">
                  {["Vendor Relations", "Cross-functional Collaboration", "Problem Solving", "Attention to Detail", "Adaptability"].map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .craft-card:hover {
            border-color: var(--steel) !important;
            transform: translateY(-2px);
            transition: all 0.2s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          }
          
          @media (max-width: 900px) {
            .craft-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
        <hr className="divider" />

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="section-label">Education</div>
          <h2 className="section-heading">Academic <em>background</em></h2>
          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-year">2017 — 2022</div>
              <div className="edu-degree">BSc. Supply Chain Management</div>
              <div className="edu-school">JKUAT</div>
            </div>
            <div className="edu-card">
              <div className="edu-year">2023 — Present</div>
              <div className="edu-degree">CPSP-K Certification</div>
              <div className="edu-school">Kenya Institute of Supplies Management</div>
            </div>
            <div className="edu-card">
              <div className="edu-year">2013 — 2016</div>
              <div className="edu-degree">KCSE</div>
              <div className="edu-school">Mukaa Boys High School</div>
            </div>
            <div className="edu-card">
              <div className="edu-year">2003 — 2012</div>
              <div className="edu-degree">KCPE</div>
              <div className="edu-school">St. Teresia Kilungu Academy</div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CONTACT */}
       <section id="contact" className="section">
  <div className="section-label">Contact</div>
  <h2 className="section-heading">Get in <em>touch</em></h2>

  <div className="contact-wrap">
    <div className="contact-left">
      <p>
        Whether you have a role that might fit, want to discuss supply chain challenges, 
        or simply want to connect — I'd be glad to hear from you.
      </p>
      <div className="contact-links">
        <a href="mailto:bonifacemuasya29@gmail.com" className="contact-link-item">
          <div className="contact-icon"><TfiEmail  /></div>
          <div className="contact-link-text">
            <small>Email</small>
            <strong>bonifacemuasya29@gmail.com</strong>
          </div>
        </a>
        <a href="tel:+254716394036" className="contact-link-item">
          <div className="contact-icon"><LuPhone /></div>
          <div className="contact-link-text">
            <small>Phone / WhatsApp</small>
            <strong>+254 716 394 036</strong>
          </div>
        </a>
        <div className="contact-link-item">
          <div className="contact-icon"><CiLocationOn className="text-xl" />
          </div>
          <div className="contact-link-text">
            <small>Location</small>
            <strong>Nairobi, Kenya</strong>
          </div>
        </div>
      </div>
    </div>

    <div>
      {sent ? (
        <div style={{ padding: "48px", textAlign: "center", background: "var(--white)", border: "1px solid var(--border-light)" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px", color: "var(--navy)" }}>✓</div>
          <p style={{ fontFamily: "Merriweather, serif", fontSize: "18px", color: "var(--navy)" }}>
            Message received — I'll respond within 48 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Boniface Mutuku"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="bonifacemuasya29@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              type="text"
              name="subject"
              className="form-input"
              placeholder="Job Opportunity"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Tell me about your opportunity..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send message →'}
          </button>
        </form>
      )}
    </div>
  </div>
</section>

        {/* FOOTER */}
        <footer className="footer">
  <div className="footer-inner" style={{ flexDirection: 'column', gap: '32px' }}>
    {/* Top - Brand & CTA */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr auto',
      alignItems: 'center',
      gap: '40px',
      width: '100%'
    }}>
      <div>
        <div className="footer-name" style={{ fontSize: '22px', marginBottom: '4px' }}>Boniface Mutuku</div>
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
          Supply Chain & Procurement
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        <input 
          type="email" 
          placeholder="Your email" 
          style={{ 
            padding: '10px 16px', 
            background: 'rgba(255,255,255,0.1)', 
            border: '1px solid rgba(255,255,255,0.2)', 
            color: 'white',
            fontSize: '13px',
            width: '220px'
          }}
        />
        <button style={{ 
          padding: '10px 20px', 
          background: 'white', 
          color: 'var(--navy)', 
          border: 'none',
          fontSize: '13px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Connect
        </button>
      </div>
    </div>

    {/* Bottom - Navigation & Copyright */}
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingTop: '24px',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="#about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none' }}>About</a>
        <a href="#experience" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none' }}>Work</a>
        <a href="#skills" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none' }}>Skills</a>
        <a href="#contact" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none' }}>Contact</a>
      </div>
      
      <div className="footer-right" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
        © {new Date().getFullYear()} Boniface Mutuku
      </div>
    </div>
  </div>
</footer>

      </div>
    </>
  );
}
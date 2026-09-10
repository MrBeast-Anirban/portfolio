/* ==========================================================================
   SHARED DATA — single source of truth for both GUI and Terminal views
   ========================================================================== */
const PROFILE = {
  name: "Anirban Maitra",
  role: "Data Scientist / AI/ML Engineer",
  location: "Raebareli, Uttar Pradesh, India",
  availability: "Open to full-time opportunities",
  email: "maitraanirban25@gmail.com",
  phone: "+91 98397 06161",
  github: "https://github.com/MrBeast-Anirban",
  linkedin: "https://www.linkedin.com/in/maitraanirban/",
  twitter: "https://x.com/AnirbanMaitra11",
  resume: "assets/Anirban_Maitra_Resume.pdf",
  headline: "I build AI systems that read, reason, and act. From Raebareli, India, open to new opportunities.",
};

const ABOUT = [
  "I finished my M.Tech in Artificial Intelligence at IIT Jodhpur in 2025, and I've spent the time since building the kind of systems that used to only live in research papers — agents that use tools, retrieval pipelines that actually cite their sources, models fine-tuned until they stop guessing.",
  "At Turing, most of my work has sat at the intersection of data science and applied GenAI: designing evaluation frameworks for LLMs, authoring SFT datasets that measurably improved tool-use and multi-step reasoning on a 15B-parameter model, and building the internal tooling that made all of it repeatable rather than one-off.",
  "What actually drives me is turning ambiguity into something testable. Most interesting ML problems aren't modeling problems — they're the fuzzy human ones underneath: what \"correct\" means here, how you measure it, how you get two teams to agree on it. I like working exactly there, between the whiteboard and the notebook, and shipping something that holds up.",
];

const EDUCATION = [
  { label: "M.Tech, Artificial Intelligence", meta: "IIT Jodhpur · 2025" },
  { label: "B.Tech, Computer Science & Engineering", meta: "Dr. A.P.J. Abdul Kalam Technical University · 2021" },
  { label: "GATE CS/IT — 96.5 percentile", meta: "2023" },
];

const EXPERIENCE = [
  {
    role: "Data Scientist",
    org: "Turing Global India Pvt. Ltd.",
    time: "Jun 2025 – Jul 2026",
    bullets: [
      "Cut manual trajectory-capture effort by 60% by building Pygame-based viewport tooling and VM orchestration for an SFT data-collection pipeline.",
      "Standardized QA criteria across teams, resolving correctness disagreements with client stakeholders.",
      "Designed evaluation frameworks and correctness-validation criteria from ambiguous, unstructured evaluation questions.",
      "Authored and validated SFT datasets targeting tool-use and multi-step reasoning on a 15B-parameter LLM, lifting agentic reasoning to a 52 Artificial Analysis score (IFBench 62, TauBench 68) — matching Gemini 2.5 Flash on single-GPU inference.",
    ],
  },
];

const PROJECTS = [
  {
    title: "AI Customer Call Sentiment Analyzer",
    desc: "A pipeline that transcribes support calls with OpenAI Whisper and scores customer/agent sentiment turn-by-turn with GPT-4o-mini, with a Streamlit dashboard for real-time review and escalation alerts.",
    stack: ["Python", "Whisper API", "GPT-4o-mini", "Streamlit", "Pydub"],
    repo: "https://github.com/MrBeast-Anirban/AI-Customer-Call-Sentiment-Analyzer",
    demo: null,
    glyph: "waveform",
  },
  {
    title: "Enterprise Document Intelligence RAG Agent",
    desc: "A GenAI agent that parses, indexes, and answers complex queries over unformatted PDFs and markdown at scale, with a Qdrant vector store tuned for semantic-search latency and robust rate-limit handling.",
    stack: ["Python", "LlamaIndex", "Qdrant", "OpenAI API"],
    repo: "https://github.com/MrBeast-Anirban/Enterprise_Document_Intelligence_RAG_Agent",
    demo: null,
    glyph: "nodes",
  },
  {
    title: "Credit Card Fraud Detection",
    desc: "An XGBoost classifier trained on a highly imbalanced dataset (0.17% fraud rate), lifting fraud recall from 75% to 98% at a 0.99 AUC, with thresholds tuned to business risk tolerance.",
    stack: ["Python", "XGBoost", "Scikit-Learn", "Pandas"],
    repo: "https://github.com/MrBeast-Anirban/Credit-Card-Fraud-Detection-XGBoost",
    demo: null,
    glyph: "bars",
  },
  {
    title: "Generative AI Playground",
    desc: "A growing collection of applied GenAI notebooks and experiments — agent orchestration, tool-calling, and retrieval patterns built with LangChain, LangGraph, and the Model Context Protocol.",
    stack: ["LangChain", "LangGraph", "MCP", "LlamaIndex"],
    repo: "https://github.com/MrBeast-Anirban/Generative-AI",
    demo: null,
    glyph: "spiral",
  },
  {
    title: "Real-Time Data Analytics Platform",
    desc: "A Hadoop-based platform for batch and real-time analysis of streaming Reddit data, built to classify high-volume text streams as they arrive.",
    stack: ["Hadoop", "Python", "Streaming Data"],
    repo: "https://github.com/MrBeast-Anirban/Hadoop-Based-Platform-for-Batch-and-Real-Time-Data-Analysis-and-Classification",
    demo: null,
    glyph: "grid",
  },
];

const SKILLS = [
  {
    title: "languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    title: "ml & statistical modeling",
    items: ["Regression", "Classification", "Clustering", "Decision Trees", "XGBoost / Boosting", "Feature Engineering", "Hypothesis Testing", "NumPy", "Pandas", "Scikit-Learn"],
  },
  {
    title: "deep learning & genai",
    items: ["PyTorch", "TensorFlow", "LLMs", "Agentic AI", "RAG", "Fine-Tuning (SFT, LoRA/QLoRA)", "LangChain", "LangGraph", "MCP", "Vector Databases"],
  },
  {
    title: "tools & infrastructure",
    items: ["Git / GitHub", "FastAPI", "Docker", "AWS"],
  },
  {
    title: "working with people",
    items: ["Problem Solving", "Stakeholder Management", "Executive Communication", "Leadership"],
  },
];

/* ==========================================================================
   PROJECT PREVIEW GLYPHS — small generative SVGs instead of stock imagery
   ========================================================================== */
function previewSVG(glyph) {
  const stroke = "#2E3A38";
  const accent = "#FFB020";
  const accent2 = "#5FD4C4";
  const common = `viewBox="0 0 300 128" xmlns="http://www.w3.org/2000/svg"`;
  const bg = `<rect width="300" height="128" fill="#12181A"/>`;

  const glyphs = {
    waveform: `
      <line x1="0" y1="64" x2="300" y2="64" stroke="${stroke}" stroke-width="1"/>
      <path d="M0 64 L20 64 L30 40 L40 90 L50 20 L60 100 L70 64 L90 64 L100 48 L110 80 L120 64 L300 64"
        fill="none" stroke="${accent}" stroke-width="1.6"/>
      <path d="M0 64 L40 64 L48 50 L56 78 L64 64 L300 64"
        fill="none" stroke="${accent2}" stroke-width="1" opacity="0.5"/>`,
    nodes: `
      <g stroke="${stroke}" stroke-width="1">
        <line x1="60" y1="40" x2="150" y2="64"/><line x1="60" y1="88" x2="150" y2="64"/>
        <line x1="150" y1="64" x2="230" y2="30"/><line x1="150" y1="64" x2="230" y2="64"/><line x1="150" y1="64" x2="230" y2="98"/>
      </g>
      <circle cx="60" cy="40" r="5" fill="${accent2}"/>
      <circle cx="60" cy="88" r="5" fill="${accent2}"/>
      <circle cx="150" cy="64" r="7" fill="${accent}"/>
      <circle cx="230" cy="30" r="4" fill="#5C6D67"/>
      <circle cx="230" cy="64" r="4" fill="#5C6D67"/>
      <circle cx="230" cy="98" r="4" fill="#5C6D67"/>`,
    bars: `
      <g fill="${accent}">
        <rect x="30" y="80" width="18" height="30"/>
        <rect x="60" y="60" width="18" height="50"/>
        <rect x="90" y="30" width="18" height="80" opacity="0.9"/>
        <rect x="120" y="70" width="18" height="40" fill="${accent2}"/>
        <rect x="150" y="20" width="18" height="90"/>
        <rect x="180" y="55" width="18" height="55" opacity="0.6"/>
        <rect x="210" y="45" width="18" height="65" fill="${accent2}" opacity="0.7"/>
      </g>
      <line x1="20" y1="110" x2="250" y2="110" stroke="${stroke}"/>`,
    spiral: `
      <g fill="none" stroke="${accent2}" stroke-width="1.3">
        <path d="M150 64 m-10,0 a10,10 0 1,1 20,0 a10,10 0 1,1 -20,0"/>
        <path d="M150 64 m-24,0 a24,24 0 1,1 48,0 a24,24 0 1,1 -48,0" opacity="0.6"/>
        <path d="M150 64 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" opacity="0.3" stroke="${accent}"/>
      </g>
      <circle cx="150" cy="64" r="3" fill="${accent}"/>`,
    grid: `
      <g stroke="${stroke}" stroke-width="1">
        ${Array.from({length: 7}).map((_,i)=>`<line x1="${30+i*35}" y1="20" x2="${30+i*35}" y2="108"/>`).join("")}
        ${Array.from({length: 4}).map((_,i)=>`<line x1="15" y1="${30+i*26}" x2="270" y2="${30+i*26}"/>`).join("")}
      </g>
      <rect x="65" y="56" width="35" height="26" fill="${accent}" opacity="0.85"/>
      <rect x="170" y="30" width="35" height="26" fill="${accent2}" opacity="0.7"/>
      <rect x="205" y="82" width="35" height="26" fill="${accent}" opacity="0.4"/>`,
  };

  return `<svg ${common}>${bg}${glyphs[glyph] || glyphs.grid}</svg>`;
}

/* ==========================================================================
   GUI RENDERING
   ========================================================================== */
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card">
      <div class="project-card__preview">${previewSVG(p.glyph)}</div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <div class="project-card__stack">
          ${p.stack.map(s => `<span class="tag">${s}</span>`).join("")}
        </div>
        <div class="project-card__links">
          <a href="${p.repo}" target="_blank" rel="noopener">source</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">live demo</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(g => `
    <div class="skill-group">
      <p class="skill-group__title">ls <span>${g.title.replace(/ /g, "-")}/</span></p>
      <ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function typeHeadline() {
  const target = document.getElementById("typeTarget");
  const text = PROFILE.headline;
  let i = 0;
  const speed = 24;
  function step() {
    if (i <= text.length) {
      target.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

function wireContactForm() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });
}

/* ==========================================================================
   MODE SWITCHING
   ========================================================================== */
function setMode(mode) {
  document.body.setAttribute("data-mode", mode);
  document.getElementById("btn-gui").setAttribute("aria-selected", mode === "gui");
  document.getElementById("btn-terminal").setAttribute("aria-selected", mode === "terminal");
  document.getElementById("terminal-view").setAttribute("aria-hidden", mode !== "terminal");
  if (mode === "terminal") {
    Terminal.focusInput();
    Terminal.bootOnce();
  }
  try { localStorage.setItem("portfolio-mode", mode); } catch (e) {}
}

function wireModeSwitch() {
  document.getElementById("btn-gui").addEventListener("click", () => setMode("gui"));
  document.getElementById("btn-terminal").addEventListener("click", () => setMode("terminal"));
}

/* ==========================================================================
   TERMINAL ENGINE
   ========================================================================== */
const Terminal = (() => {
  const outputEl = () => document.getElementById("terminalOutput");
  let history = [];
  let historyIdx = -1;
  let booted = false;

  function println(html, cls) {
    const div = document.createElement("div");
    div.className = "line" + (cls ? ` line--${cls}` : "");
    div.innerHTML = html;
    outputEl().appendChild(div);
  }

  function printBlock(lines) {
    lines.forEach(l => println(l.text, l.cls));
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  const COMMANDS = {
    help() {
      printBlock([
        { text: "available commands:", cls: "heading" },
        { text: "  about        — who I am and how I work" },
        { text: "  experience   — work history" },
        { text: "  projects     — featured builds, with links" },
        { text: "  skills       — technical skill inventory" },
        { text: "  education    — degrees and scores" },
        { text: "  contact      — how to reach me" },
        { text: "  social       — GitHub, LinkedIn, X" },
        { text: "  resume       — download résumé (PDF)" },
        { text: "  gui          — switch to the GUI view" },
        { text: "  clear        — clear the screen" },
        { text: "  whoami       — one-line summary" },
      ]);
    },
    whoami() {
      println(`${PROFILE.name} — ${PROFILE.role}, ${PROFILE.location}.`);
    },
    about() {
      println("about.txt", "heading");
      ABOUT.forEach(p => { println(p); println("&nbsp;"); });
    },
    experience() {
      println("experience.log", "heading");
      EXPERIENCE.forEach(e => {
        println(`${e.role} — ${e.org}`, "amber");
        println(e.time, "muted");
        e.bullets.forEach(b => println(`  • ${b}`));
        println("&nbsp;");
      });
    },
    projects() {
      println("./projects", "heading");
      PROJECTS.forEach((p, i) => {
        println(`[${i + 1}] ${p.title}`, "amber");
        println(`    ${p.desc}`);
        println(`    stack: ${p.stack.join(", ")}`, "muted");
        println(`    repo:  <a href="${p.repo}" target="_blank" rel="noopener">${p.repo}</a>`, "cyan");
        println("&nbsp;");
      });
    },
    skills() {
      println("skills.yaml", "heading");
      SKILLS.forEach(g => {
        println(`${g.title}:`, "amber");
        println(`  ${g.items.join(" · ")}`);
        println("&nbsp;");
      });
    },
    education() {
      println("education.json", "heading");
      EDUCATION.forEach(e => println(`  ${e.label} — ${e.meta}`));
    },
    contact() {
      println("contact.card", "heading");
      println(`  email : <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>`, "cyan");
      println(`  phone : ${PROFILE.phone}`);
      println(`  status: ${PROFILE.availability}`, "muted");
    },
    social() {
      println("social.links", "heading");
      println(`  github   : <a href="${PROFILE.github}" target="_blank" rel="noopener">${PROFILE.github}</a>`, "cyan");
      println(`  linkedin : <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">${PROFILE.linkedin}</a>`, "cyan");
      println(`  x        : <a href="${PROFILE.twitter}" target="_blank" rel="noopener">${PROFILE.twitter}</a>`, "cyan");
    },
    resume() {
      println(`opening résumé — if the download doesn't start, <a href="${PROFILE.resume}" target="_blank" rel="noopener">click here</a>.`, "cyan");
      const a = document.createElement("a");
      a.href = PROFILE.resume;
      a.download = "";
      a.click();
    },
    gui() {
      println("switching to GUI view…", "muted");
      setTimeout(() => setMode("gui"), 300);
    },
    clear() {
      outputEl().innerHTML = "";
    },
    date() {
      println(new Date().toString(), "muted");
    },
    echo(args) {
      println(args.join(" ") || "&nbsp;");
    },
    ls() {
      COMMANDS.projects();
    },
    "sudo make-me-a-sandwich": null, // handled specially below
  };

  function bootOnce() {
    if (booted) return;
    booted = true;
    printBlock([
      { text: `Anirban Maitra — terminal portfolio v1.0`, cls: "heading" },
      { text: `type 'help' to see available commands.`, cls: "muted" },
      { text: "&nbsp;" },
    ]);
  }

  function runCommand(raw) {
    const trimmed = raw.trim();
    println(`<span class="prompt-echo">${escapeHtml(trimmed)}</span>`);
    if (!trimmed) return;

    history.push(trimmed);
    historyIdx = history.length;

    const lower = trimmed.toLowerCase();

    if (lower === "sudo make-me-a-sandwich" || lower === "sudo make me a sandwich") {
      println("okay.", "amber");
      return;
    }
    if (lower.startsWith("sudo")) {
      println("nice try. permission denied — this terminal runs as 'visitor'.", "error");
      return;
    }

    const [cmd, ...args] = trimmed.split(/\s+/);
    const fn = COMMANDS[cmd.toLowerCase()];

    if (typeof fn === "function") {
      fn(args);
    } else {
      println(`command not found: ${escapeHtml(cmd)} — type 'help' for a list of commands.`, "error");
    }
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function wireInput() {
    const input = document.getElementById("terminalInput");
    const wrap = document.getElementById("terminal");

    wrap.addEventListener("click", () => input.focus());

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const val = input.value;
        input.value = "";
        runCommand(val);
        scrollToBottom();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length) {
          historyIdx = Math.max(0, historyIdx - 1);
          input.value = history[historyIdx] || "";
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (history.length) {
          historyIdx = Math.min(history.length, historyIdx + 1);
          input.value = history[historyIdx] || "";
        }
      }
    });
  }

  function focusInput() {
    const input = document.getElementById("terminalInput");
    if (input) setTimeout(() => input.focus(), 50);
  }

  return { bootOnce, focusInput, wireInput };
})();

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderProjects();
  renderSkills();
  wireContactForm();
  wireModeSwitch();
  Terminal.wireInput();
  typeHeadline();

  let saved = null;
  try { saved = localStorage.getItem("portfolio-mode"); } catch (e) {}
  if (saved === "terminal") setMode("terminal");
});

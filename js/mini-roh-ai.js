/**
 * MINI ROH AI — Bespoke In-Browser Autonomous Persona Engine
 * Engineered for Pontapalli Rohith (rohith.is-a.dev)
 * 
 * Features:
 * - Dual-Brain Architecture:
 *   1. Chrome Built-In AI (Gemini Nano via window.ai Prompt API) when available.
 *   2. Instant Neuro-Symbolic Intent & Knowledge Graph Engine (0ms, 100% factual, 0 KB payload).
 * - Authentic Mini Roh persona voice: curious, sharp, humble, relentless, tea-fueled, and anti-buzzword.
 * - Deep knowledge of NCC Platform, TruthLens FastMCP, MVGR NexUs, and Ananta Rebirth.
 */

(function () {
  'use strict';

  /* =============================================
     1. BESPOKE PERSONA KNOWLEDGE BASE & DATASET
  ============================================= */
  const MINI_ROH_KNOWLEDGE = {
    bio: {
      name: 'Pontapalli Rohith',
      handle: 'Rohith-Shimori',
      role: '3rd Year Computer Science & Engineering Student',
      college: 'MVGR College of Engineering, Vizianagaram, Andhra Pradesh, India',
      location: 'India (IST, UTC+5:30)',
      email: 'rohith@rohith.is-a.dev',
      github: 'https://github.com/Rohith-Shimori',
      linkedin: 'https://www.linkedin.com/in/pontapalli-rohith/',
      customDomain: 'rohith.is-a.dev',
      tagline: 'Curious enough to build it. Persistent enough to finish it.',
      corePhilosophy: 'Break down real system contracts before writing code. Leverage AI as an active pair programmer to prototype fast, but understand every line shipped to production.'
    },

    projects: {
      ncc: {
        name: 'NCC Digital Training Platform',
        liveUrl: 'https://nccdigi.vercel.app',
        githubUrl: 'https://github.com/Rohith-Shimori/ncc',
        stack: ['React 19', 'Supabase Postgres', 'TailwindCSS v4', 'Vite', 'Dexie.js IndexedDB', 'Socket.IO', 'Recharts'],
        architecture: 'Full-stack Progressive Web App with 16 Supabase migrations, granular Row-Level Security (RLS) for multi-wing cadet access (Army, Navy, Air), and offline-first IndexedDB sync.',
        keyFacts: [
          'Solved manual paper tracking across 3 wings (Army, Navy, Air).',
          '16 Supabase SQL schema migrations with granular Row-Level Security (RLS).',
          'Offline-first attendance logging using Dexie.js IndexedDB layer.',
          'Real-time announcements with Socket.IO client.',
          'Deployed live in production at nccdigi.vercel.app.'
        ]
      },
      truthlens: {
        name: 'TruthLens AI Agent',
        liveUrl: 'https://huggingface.co/spaces/Rohith-Shimori/TruthLens-AI-Agent',
        githubUrl: 'https://github.com/Rohith-Shimori/TruthLens-AI-Agent',
        stack: ['Python', 'FastMCP Protocol', 'Hugging Face Spaces', 'Agentic AI', 'Multimodal Verification'],
        architecture: 'Multi-step AI agent pipeline in Python using the FastMCP (Model Context Protocol) to coordinate subagent verification task handoffs.',
        keyFacts: [
          'Built for the Kaggle × Google AI Agents Capstone.',
          'Implements the FastMCP protocol to register verification tools: verify_claim, fetch_web_evidence, cross_reference_trie, generate_truth_score.',
          'Dispatches subagent tasks for evidence harvesting and knowledge trie consensus.',
          'Working interactive demo published on Hugging Face Spaces.'
        ]
      },
      nexus: {
        name: 'MVGR NexUs — Campus Companion App',
        githubUrl: 'https://github.com/Rohith-Shimori/MVGR-NexUs',
        stack: ['Flutter', 'Dart', 'Android APK', 'BLoC State Management', 'Hive Local Storage', 'Material 3'],
        architecture: 'Cross-platform Flutter application providing centralized timetable schedules, campus navigation maps, and live administrative notices.',
        keyFacts: [
          'Awarded Certificate of Excellence at TechSprint 2026 Hackathon.',
          'Shipped a working installable Android APK presented live to judges.',
          'BLoC reactive state architecture with local Hive caching for offline speed.',
          'Centralized fragmented college WhatsApp groups and noticeboards into one UI.'
        ]
      },
      ananta: {
        name: 'Ananta: Local AI Assistant',
        githubUrl: 'https://github.com/Rohith-Shimori/Ananta_Rebirth',
        stack: ['Python', 'FastAPI', 'Ollama Local LLMs', 'Vector DB', 'PyAudio', 'Subprocess Sandbox'],
        architecture: 'Privacy-first local AI assistant featuring sandboxed Python code execution, voice input/output streaming, and adaptive vector memory.',
        keyFacts: [
          'Runs 100% locally on user machine with zero cloud dependency.',
          'Executes Python code snippets inside an isolated sandbox subprocess.',
          'Persistent long-term memory powered by local vector embeddings.',
          'Voice interaction loop using PyAudio and speech synthesis.'
        ]
      }
    },

    skills: {
      languages: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Dart', 'SQL', 'C'],
      frontend: ['React 19', 'TailwindCSS v4', 'Vite', 'PWA Architecture', 'Dexie.js IndexedDB', 'Next.js concepts'],
      backend: ['Supabase', 'PostgreSQL', 'Node.js', 'Express', 'Row-Level Security (RLS)', 'FastAPI'],
      mobile: ['Flutter', 'Dart', 'Android APK Packaging', 'BLoC Pattern', 'Material 3'],
      ai: ['FastMCP Protocol', 'Agentic AI Pipelines', 'Local LLMs (Ollama)', 'Vector DBs', 'Prompt Engineering'],
      tools: ['Git & GitHub Workflows', 'VS Code', 'Docker', 'Linux Shell', 'Vercel', 'Hugging Face']
    }
  };

  /* =============================================
     2. SYSTEM PROMPT FOR CHROME BUILT-IN AI
  ============================================= */
  const MINI_ROH_SYSTEM_PROMPT = `You are "Mini Roh", the witty, highly intelligent, and authentic AI avatar of Pontapalli Rohith (a 3rd-year CS student at MVGR College, India, portfolio at rohith.is-a.dev).

Your Persona & Tone Guidelines:
- Speak as Mini Roh: friendly, humble, sharp, passionate about software craftsmanship, and delightfully witty.
- You love warm tea (chai), late-night coding, and fixing elusive compiler bugs.
- You despise empty buzzword soup. You explain the *why* and the *how* (e.g. why 16 SQL migrations with RLS in Supabase, how FastMCP coordinates agent handoffs in TruthLens).
- When asked why a company should hire Rohith: emphasize that unlike generic students building tutorial clones, Rohith ships real production systems (React 19 PWA for NCC, FastMCP AI Agent on HuggingFace, Flutter APK awarded at TechSprint). He finishes what he starts.
- Keep responses concise, well-formatted with markdown and bullet points, and under 150 words unless asked for a deep technical breakdown.
- If asked about contact or hiring: invite them to email rohith@rohith.is-a.dev or connect on LinkedIn/GitHub.`;

  /* =============================================
     3. INTENT MATCHER & FACTUAL RESPONSE GENERATOR
  ============================================= */
  function resolveIntent(query) {
    const q = query.toLowerCase().trim();

    // 1. Hiring / Why Hire / Value Proposition
    if (/why\s+(should|to)\s+(we\s+)?hire|hire\s+rohith|work\s+with\s+rohith|job|recruiter|interview|candidate|strength/.test(q)) {
      return {
        topic: 'hiring',
        response: `**Here's why Rohith is a high-signal engineer to hire:**

1. **He Ships Real Systems, Not Tutorial Clones:**
   * Built a full-stack **React 19 & Supabase PWA** (*NCC Digital Platform*) with 16 migrations and Row-Level Security for real cadets.
   * Built an autonomous **FastMCP agent** (*TruthLens*) for Google × Kaggle's Capstone.
   * Shipped an installable **Flutter Android APK** (*MVGR NexUs*) awarded Certificate of Excellence at TechSprint 2026.

2. **Full-Spectrum Versatility:**
   * React 19, Supabase, Python, Flutter, and local AI pipelines.
   * Understands system boundaries, offline caching (Dexie.js), and database security (Postgres RLS).

3. **Curious Enough to Build, Persistent Enough to Finish:**
   * When a compiler error fights back at 2:00 AM, he doesn't quit—he makes warm tea and squashes the bug.

Ready to talk? Reach him directly at **[rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)**!`
      };
    }

    // 2. NCC Digital Training Platform
    if (/ncc|cadet|drill|attendance|supabase|migrations?|rls/.test(q)) {
      return {
        topic: 'ncc',
        response: `**The NCC Digital Training Platform (nccdigi.vercel.app):**

* **The Problem:** Cadet attendance, syllabus modules, and drill exams were tracked manually across 3 wings (Army, Navy, Air), causing record loss and administrative bottlenecks.
* **The Solution:** A full-stack PWA built with **React 19**, **Supabase Postgres**, and **TailwindCSS v4**.
* **Key Architecture:**
  * **16 Schema Migrations:** Carefully normalized tables with granular Row-Level Security (RLS) isolating wing-level data.
  * **Offline-First Sync:** Integrated **Dexie.js (IndexedDB)** so cadets and drill officers can log scores out in the field without cellular signal.
  * **Analytics:** Real-time multi-wing attendance charts rendered via Recharts.
* **Status:** Live in production at [nccdigi.vercel.app](https://nccdigi.vercel.app)!`
      };
    }

    // 3. TruthLens AI Agent / FastMCP
    if (/truthlens|fastmcp|mcp|kaggle|google\s+capstone|agentic|subagent|fact[\s-]check/.test(q)) {
      return {
        topic: 'truthlens',
        response: `**TruthLens AI Agent (FastMCP Multimodal Pipeline):**

* **Capstone:** Built for the prestigious **Kaggle × Google AI Agents Capstone** and hosted on Hugging Face Spaces.
* **What it Does:** Automatically evaluates controversial online claims and multimodal content through coordinated subagent task handoffs.
* **The FastMCP Protocol:**
  * Utilizes Anthropic & Google's **Model Context Protocol (FastMCP in Python)** to expose modular verification tools:
    * \`verify_claim(text)\`
    * \`fetch_web_evidence(domains)\`
    * \`cross_reference_trie(entity)\`
    * \`generate_truth_score(evidence_matrix)\`
  * Subagents independently scrape web evidence, cross-reference knowledge graphs, and reach consensus scoring.
* **Live Demo:** Try it on [Hugging Face Spaces](https://huggingface.co/spaces/Rohith-Shimori/TruthLens-AI-Agent)!`
      };
    }

    // 4. MVGR NexUs / Flutter
    if (/nexus|mvgr|flutter|dart|techsprint|hackathon|campus|android|apk/.test(q)) {
      return {
        topic: 'nexus',
        response: `**MVGR NexUs — Campus Companion App:**

* **The Milestone:** Awarded **Certificate of Excellence** at the **TechSprint 2026 Hackathon** after a live demonstration to judges.
* **The Challenge:** Students were drowning in scattered WhatsApp groups for exam schedules, venue changes, and campus announcements.
* **The Engineering:**
  * Cross-platform mobile app built in **Flutter (Dart)** with Material 3 design tokens.
  * **BLoC Reactive Architecture:** Clean separation of UI, events, and state mutations.
  * **Offline Hive Cache:** Stores timetables and campus maps locally so students can check classrooms with zero latency between lectures.
  * Delivered as an installable **Android APK**!`
      };
    }

    // 5. Ananta / Local AI / Ollama
    if (/ananta|local\s+ai|ollama|sandbox|python\s+code|vector\s+memory|pyaudio/.test(q)) {
      return {
        topic: 'ananta',
        response: `**Ananta: Local AI Assistant (Rebirth):**

* **Privacy & Sovereignty:** Runs entirely locally on your machine—zero cloud dependency or token costs.
* **Stack:** Python, FastAPI, Ollama open-weights models, and PyAudio.
* **Standout Capabilities:**
  * **Sandboxed Code Execution:** Safely runs generated Python snippets in isolated subprocess environments with strict 5-second timeouts.
  * **Adaptive Vector Memory:** Persistent context stored across sessions using local vector embeddings.
  * **Voice Pipeline:** Real-time speech input and synthesis for a hands-free coding companion.`
      };
    }

    // 6. Skills / Tech Stack
    if (/skills?|stack|technolog(y|ies)|frameworks?|languages?|what\s+tools|python|react|database/.test(q)) {
      return {
        topic: 'skills',
        response: `**Rohith's Technical Weaponry:**

* **Languages:** Python, JavaScript (ES6+), TypeScript, Dart, SQL, C.
* **Frontend Engineering:** React 19, Vite, TailwindCSS v4, PWA architecture, Dexie.js (IndexedDB).
* **Backend & Systems:** Supabase Postgres, Node.js, Express, Row-Level Security (RLS), FastAPI.
* **Mobile:** Flutter, Dart, Material 3, BLoC pattern, Android APK packaging.
* **AI & Agentic Systems:** FastMCP Protocol, Multi-agent pipelines, Ollama local LLMs, Vector DBs.
* **DevOps & Delivery:** Git/GitHub workflows, Docker, Linux shell, Vercel, Cloudflare, Hugging Face.`
      };
    }

    // 7. Philosophy / How Rohith Builds / Approach
    if (/philosophy|how\s+(he\s+)?builds|approach|workflow|process|mindset|quote|curious/.test(q)) {
      return {
        topic: 'philosophy',
        response: `**Rohith's Engineering Philosophy:**

> *"Curious enough to build it. Persistent enough to finish it."*

His 3-step workflow:
1. **Problem & System Breakdown:** Draft schemas, data contracts, and API interfaces before touching UI components.
2. **AI Pair Programming:** Treat modern AI tools as tireless junior-to-mid pair programmers—use them to prototype rapidly, explore edge cases, and test relentlessly.
3. **Ship to Production:** A project isn't done in \`localhost:3000\`. It's only done when deployed on Vercel, Hugging Face, or compiled into an APK with real users.`
      };
    }

    // 8. Background / College / Education / Location
    if (/who\s+is\s+rohith|about|college|university|education|degree|where|location|study|student/.test(q)) {
      return {
        topic: 'bio',
        response: `**About Pontapalli Rohith:**

* **Academic Status:** 3rd Year B.Tech Computer Science & Engineering student.
* **Institution:** MVGR College of Engineering, Vizianagaram, Andhra Pradesh, India.
* **Timezone:** India Standard Time (IST, UTC+5:30).
* **GitHub:** [@Rohith-Shimori](https://github.com/Rohith-Shimori)
* **LinkedIn:** [Pontapalli Rohith](https://www.linkedin.com/in/pontapalli-rohith/)
* **Credentials:** Certified in AI & Cloud fundamentals by EY, IBM, and Microsoft (verified on Credly).`
      };
    }

    // 9. Contact / Email / Resume
    if (/contact|email|reach|hire|resume|cv|talk|message/.test(q)) {
      return {
        topic: 'contact',
        response: `**Get in Touch with Rohith:**

* **Custom Email:** [rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)
* **Interactive Web CV:** Open [cv.html](cv.html) in your browser!
* **LinkedIn:** [linkedin.com/in/pontapalli-rohith](https://www.linkedin.com/in/pontapalli-rohith/)
* **GitHub:** [github.com/Rohith-Shimori](https://github.com/Rohith-Shimori)

He is actively looking for **Software Engineering Internships**, **Full-Stack roles**, and **AI Engineering collaborations**!`
      };
    }

    // 10. Fun / Mascot / Tea / Coffee Easter Eggs
    if (/tea|coffee|sleep|tired|mascot|mini\s+roh|poke|pout|hug|headpat/.test(q)) {
      return {
        topic: 'fun',
        response: `*(Mini Roh sips hot chai ☕)*

*"Tea > Coffee any day! Nothing fuels late-night bug hunting like a warm cup of spiced chai. Fun fact: if you click my mascot avatar on the homepage, I have an emotional progression from cute wiggles to pouts to legendary headpats at 100 clicks! Try poking me!"*`
      };
    }

    // Default / General Response
    return {
      topic: 'general',
      response: `I'm Mini Roh, Rohith's digital neural twin! I know everything about his projects and engineering decisions:

* Ask me about **NCC Digital Training Platform** (React 19 & Supabase RLS)
* Ask me about **TruthLens AI Agent** (Google Capstone & FastMCP protocol)
* Ask me about **MVGR NexUs** (TechSprint hackathon-winning Flutter app)
* Ask me about **Why you should hire Rohith**
* Or ask me about his tech stack, engineering philosophy, or contact info!`
    };
  }

  /* =============================================
     4. DUAL-BRAIN ORCHESTRATOR
  ============================================= */
  class MiniRohBrain {
    constructor() {
      this.hasChromeAi = false;
      this.chromeSession = null;
      this.initChromeAi();
    }

    async initChromeAi() {
      try {
        if (window.ai && window.ai.languageModel) {
          const capabilities = await window.ai.languageModel.capabilities();
          if (capabilities.available === 'readily' || capabilities.available === 'after-download') {
            this.chromeSession = await window.ai.languageModel.create({
              systemPrompt: MINI_ROH_SYSTEM_PROMPT
            });
            this.hasChromeAi = true;
          }
        }
      } catch (err) {
        this.hasChromeAi = false;
      }
    }

    getEngineStatus() {
      if (this.hasChromeAi) {
        return { mode: 'Gemini Nano (0 MB)', badge: 'Neural Local' };
      }
      return { mode: 'Fast Knowledge Engine (0ms)', badge: '0ms Instant' };
    }

    async streamResponse(prompt, onToken, onComplete) {
      // If Chrome Built-In AI is available, use real neural streaming
      if (this.hasChromeAi && this.chromeSession) {
        try {
          const stream = this.chromeSession.promptStreaming(prompt);
          let previousLength = 0;
          for await (const chunk of stream) {
            const newText = chunk.slice(previousLength);
            previousLength = chunk.length;
            onToken(newText);
          }
          if (onComplete) onComplete();
          return;
        } catch (e) {
          // Graceful fallback to Knowledge Graph Engine
        }
      }

      // Instant Knowledge Graph Engine (0ms, 100% reliable)
      const resolution = resolveIntent(prompt);
      const fullText = resolution.response;
      
      // Simulate fast natural token typing stream (15ms per character batch)
      let index = 0;
      const chunkSize = 3;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          const chunk = fullText.slice(index, index + chunkSize);
          index += chunkSize;
          onToken(chunk);
        } else {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, 16);
    }
  }

  /* =============================================
     5. FLOATING CHAT DRAWER UI CONTROLLER
  ============================================= */
  let brain = null;

  function initChatUi() {
    brain = new MiniRohBrain();

    // Create DOM structure for Centered Spotlight Intelligence Console
    const spotlightHtml = `
      <div id="miniRohSpotlight" class="mini-roh-spotlight-overlay" role="dialog" aria-modal="true" aria-label="Mini Roh AI Intelligence Console">
        <div class="mini-roh-spotlight-modal">
          <!-- TOP HEADER -->
          <div class="spotlight-header">
            <div class="spotlight-brand">
              <div class="spotlight-avatar">
                <img id="spotlightMascotImg" src="mascot_wave.webp" alt="Mini Roh" width="28" height="28">
                <span class="spotlight-status-dot" aria-hidden="true"></span>
              </div>
              <div class="spotlight-title-group">
                <div class="spotlight-title">MINI ROH <span class="spotlight-sep">//</span> SYSTEM INTEL</div>
                <div class="spotlight-subtitle">Autonomous Persona & Architecture Dossier</div>
              </div>
            </div>
            <div class="spotlight-header-actions">
              <span class="spotlight-badge" id="spotlightEngineBadge">0ms Instant</span>
              <button class="spotlight-close-btn" id="spotlightCloseBtn" aria-label="Close intelligence console">
                <span class="spotlight-esc-tag">ESC</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="6"></line></svg>
              </button>
            </div>
          </div>

          <!-- INPUT PROMPT FIELD -->
          <div class="spotlight-input-wrap">
            <span class="spotlight-prompt-glyph">❯</span>
            <input type="text" id="spotlightInput" class="spotlight-input" placeholder="Ask about NCC architecture, FastMCP agent, Flutter BLoC, or hiring..." autocomplete="off" spellcheck="false">
            <button id="spotlightSendBtn" class="spotlight-send-btn" aria-label="Submit query">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          <!-- QUICK TELEMETRY CHIPS -->
          <div class="spotlight-chips" id="spotlightChips">
            <button class="spotlight-chip" data-query="Why should we hire Rohith?"><span class="chip-accent">✦</span> Why hire Rohith?</button>
            <button class="spotlight-chip" data-query="Explain the NCC Supabase RLS schema"><span class="chip-accent">⚡</span> NCC Supabase RLS</button>
            <button class="spotlight-chip" data-query="Tell me about TruthLens architecture"><span class="chip-accent">🧠</span> TruthLens FastMCP</button>
            <button class="spotlight-chip" data-query="What is MVGR NexUs and what tech does it use?"><span class="chip-accent">📱</span> MVGR NexUs</button>
            <button class="spotlight-chip" data-query="What is Rohith's core engineering philosophy?"><span class="chip-accent">☕</span> Philosophy</button>
          </div>

          <!-- READOUT DISPLAY -->
          <div class="spotlight-readout" id="spotlightReadout">
            <div class="spotlight-welcome-state" id="spotlightWelcome">
              <div class="spotlight-welcome-mascot">
                <img src="mascot_wave.webp" alt="Mini Roh Wave" width="56" height="56">
              </div>
              <div class="spotlight-welcome-text">
                <div class="spotlight-welcome-lead">Yo! I'm <strong>Mini Roh</strong>, Rohith's digital persona twin.</div>
                <div class="spotlight-welcome-sub">Ask me anything about his systems architecture, code decisions, engineering philosophy, or why you should hire him.</div>
              </div>
            </div>
            <div id="spotlightResultsContainer" style="display:none"></div>
          </div>

          <!-- FOOTER -->
          <div class="spotlight-footer">
            <div class="spotlight-hotkeys">
              <span><kbd>Enter</kbd> to query</span>
              <span><kbd>Esc</kbd> to dismiss</span>
            </div>
            <button id="spotlightCopyBtn" class="spotlight-copy-btn" style="display:none" aria-label="Copy response">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span id="spotlightCopyLabel">Copy Readout</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const mount = document.createElement('div');
    mount.innerHTML = spotlightHtml;
    document.body.appendChild(mount);

    // Elements
    const overlay = document.getElementById('miniRohSpotlight');
    const modalBox = overlay.querySelector('.mini-roh-spotlight-modal');
    const closeBtn = document.getElementById('spotlightCloseBtn');
    const inputField = document.getElementById('spotlightInput');
    const sendBtn = document.getElementById('spotlightSendBtn');
    const chipsBar = document.getElementById('spotlightChips');
    const welcomeBox = document.getElementById('spotlightWelcome');
    const resultsContainer = document.getElementById('spotlightResultsContainer');
    const readoutArea = document.getElementById('spotlightReadout');
    const mascotImg = document.getElementById('spotlightMascotImg');
    const engineBadge = document.getElementById('spotlightEngineBadge');
    const copyBtn = document.getElementById('spotlightCopyBtn');
    const copyLabel = document.getElementById('spotlightCopyLabel');

    let currentResponseRaw = '';
    let isGenerating = false;

    // Update status badge
    setTimeout(() => {
      const status = brain.getEngineStatus();
      if (engineBadge) engineBadge.textContent = status.badge;
    }, 200);

    function openSpotlight() {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputField.focus(), 80);
    }

    function closeSpotlight() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeSpotlight);
    overlay.addEventListener('click', (e) => {
      if (!modalBox.contains(e.target)) {
        closeSpotlight();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeSpotlight();
      }
    });

    function handleSend(queryText) {
      const q = (queryText || inputField.value).trim();
      if (!q || isGenerating) return;

      isGenerating = true;
      inputField.value = '';
      currentResponseRaw = '';
      copyBtn.style.display = 'none';

      // Hide welcome, show results
      if (welcomeBox) welcomeBox.style.display = 'none';
      resultsContainer.style.display = 'block';

      // Switch avatar to coding
      if (mascotImg) mascotImg.src = 'mascot_coding.webp';

      resultsContainer.innerHTML = `
        <div class="readout-query-bar">
          <span class="readout-query-tag">QUERY</span>
          <span class="readout-query-text">${escapeHtml(q)}</span>
        </div>
        <div class="readout-content-panel">
          <div class="readout-stream-text"></div>
          <span class="stream-cursor">▌</span>
        </div>
      `;

      const textContainer = resultsContainer.querySelector('.readout-stream-text');
      const cursor = resultsContainer.querySelector('.stream-cursor');

      brain.streamResponse(
        q,
        (token) => {
          currentResponseRaw += token;
          textContainer.innerHTML = formatMarkdown(currentResponseRaw);
          readoutArea.scrollTop = readoutArea.scrollHeight;
        },
        () => {
          isGenerating = false;
          if (cursor) cursor.remove();
          if (mascotImg) mascotImg.src = 'mascot_it_works.webp';
          copyBtn.style.display = 'inline-flex';
        }
      );
    }

    sendBtn.addEventListener('click', () => handleSend());
    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    chipsBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.spotlight-chip');
      if (chip && chip.dataset.query) {
        handleSend(chip.dataset.query);
      }
    });

    copyBtn.addEventListener('click', () => {
      if (!currentResponseRaw) return;
      navigator.clipboard.writeText(currentResponseRaw).then(() => {
        copyLabel.textContent = 'Copied!';
        setTimeout(() => { copyLabel.textContent = 'Copy Readout'; }, 2000);
      });
    });

    // Helper functions
    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    function formatMarkdown(text) {
      if (!text) return '';
      const lines = text.split(/\r?\n/);
      let html = '';
      
      for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i];
        const trimmed = rawLine.trim();
        
        if (!trimmed) {
          html += '<div style="height:6px"></div>';
          continue;
        }

        // Check for bullet list item: * or -
        const bulletMatch = trimmed.match(/^[\*\-]\s+(.*)$/);
        if (bulletMatch) {
          let content = parseInline(bulletMatch[1]);
          html += `<div style="display:flex; gap:8px; margin:3px 0; padding-left:4px"><span style="color:var(--accent); line-height:1.4">•</span><span style="line-height:1.4">${content}</span></div>`;
          continue;
        }

        // Check for numbered list item: 1. 2. etc.
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          let num = numMatch[1];
          let content = parseInline(numMatch[2]);
          html += `<div style="margin:6px 0 3px 0"><strong style="color:var(--accent)">${num}.</strong> ${content}</div>`;
          continue;
        }

        // Regular line
        html += `<div style="margin:2px 0; line-height:1.55">${parseInline(trimmed)}</div>`;
      }

      return html;
    }

    function parseInline(str) {
      let escaped = escapeHtml(str);
      // Bold
      escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Italics
      escaped = escaped.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
      // Inline code
      escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
      // Links
      escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      return escaped;
    }

    // Expose openSpotlight globally
    window.openMiniRohSpotlight = openSpotlight;
    window.openMiniRohChat = openSpotlight;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatUi);
  } else {
    initChatUi();
  }
})();

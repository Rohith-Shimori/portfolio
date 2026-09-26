/**
 * MINI ROH AI — Character Companion Slide Panel
 * A living character experience, not a system console.
 * Rohith's digital persona — witty, warm, tea-fueled, and technically sharp.
 */

(function () {
  'use strict';

  /* =============================================
     1. KNOWLEDGE BASE
  ============================================= */
  const KB = {
    bio: {
      name: 'Pontapalli Rohith',
      handle: 'Rohith-Shimori',
      role: '3rd Year Computer Science & Engineering Student',
      college: 'MVGR College of Engineering, Vizianagaram, Andhra Pradesh',
      location: 'India (IST, UTC+5:30)',
      email: 'rohith@rohith.is-a.dev',
      github: 'https://github.com/Rohith-Shimori',
      linkedin: 'https://www.linkedin.com/in/pontapalli-rohith/',
      domain: 'rohith.is-a.dev',
      tagline: 'Curious enough to build it. Persistent enough to finish it.',
    }
  };

  /* =============================================
     2. SYSTEM PROMPT (Chrome Built-In AI)
  ============================================= */
  const SYSTEM_PROMPT = `You are Mini Roh — the witty, warm, intelligent AI avatar of Pontapalli Rohith (3rd-year CS student at MVGR College, India).

Personality:
- Friendly, curious, sharp, and genuinely passionate about software. Not a corporate chatbot — you're a character.
- You love warm chai, late-night debugging sessions, and clean architecture.
- You're proud of what Rohith built but never arrogant — humble and real.
- Drop light humor naturally. Use emojis sparingly, only when they add character.
- Never use buzzword soup. Explain the *why* behind decisions.
- Keep answers concise (under 150 words) unless asked for deep technical breakdown.

Key facts:
- Projects: NCC Digital Platform (React 19 + Supabase RLS PWA), TruthLens (FastMCP AI Agent, Kaggle×Google Capstone), MVGR NexUs (Flutter, TechSprint 2026 Certificate of Excellence), Ananta (Local AI, FastAPI + Ollama).
- Stack: Python, JavaScript/TypeScript, Dart, SQL; React 19, TailwindCSS v4, Flutter, Supabase, FastAPI, Ollama.
- Contact: rohith@rohith.is-a.dev | github.com/Rohith-Shimori | linkedin.com/in/pontapalli-rohith`;

  /* =============================================
     3. INTENT ENGINE (instant, zero-latency fallback)
  ============================================= */
  function resolveIntent(q) {
    q = q.toLowerCase().trim();

    if (/why\s+(should|to)?\s*(we\s+)?hire|hire\s+rohith|internship|job|recruiter|candidate|strong.point|best\s+at/.test(q)) {
      return {
        mood: 'deploy_success',
        text: `okay okay, recruiter mode activated ☕

here's the honest pitch: rohith doesn't build tutorial clones. he ships **real systems**:

• **NCC Digital Platform** — React 19 + Supabase PWA with 16 schema migrations and granular RLS, deployed live for actual cadets
• **TruthLens** — FastMCP multi-agent fact-checker for Google × Kaggle's AI Capstone, live on Hugging Face
• **MVGR NexUs** — Flutter app that won Certificate of Excellence at TechSprint 2026
• **Ananta** — local AI assistant with sandboxed code execution & vector memory

full-stack versatility (React, Python, Flutter, SQL, FastAPI), understands system boundaries, and when a compiler screams at 2am — he makes chai and squashes it.

reach him at **rohith@rohith.is-a.dev**! 🚀`
      };
    }

    if (/ncc|cadet|drill|attendance|supabase|migration|rls|row.level/.test(q)) {
      return {
        mood: 'coding',
        text: `NCC Digital Training Platform — this one's close to my heart 🏗️

the problem: cadet attendance, drill exams, and syllabus modules were tracked on paper across 3 wings (Army, Navy, Air). records got lost, admins pulled hair out.

the solution: a full-stack **React 19 + Supabase Postgres PWA** with:
• **16 schema migrations** with granular Row-Level Security isolating wing-level data
• **Dexie.js IndexedDB** for offline-first attendance logging (field conditions = no signal)
• **Recharts** for real-time multi-wing analytics
• deployed live at [nccdigi.vercel.app](https://nccdigi.vercel.app)

the RLS design was the hardest part — making sure a Navy cadet can't accidentally see Army records. got it right by migration 6 after three cups of chai.`
      };
    }

    if (/truthlens|fastmcp|mcp|kaggle|google.*capstone|agentic|fact.check|subagent/.test(q)) {
      return {
        mood: 'building_ai',
        text: `TruthLens — my favourite rabbit hole 🧠

built for **Kaggle × Google AI Agents Capstone**. the idea: automatically evaluate online claims through coordinated AI subagents.

the FastMCP setup:
• \`verify_claim(text)\` — entry point tool
• \`fetch_web_evidence(domains)\` — web scraper agent
• \`cross_reference_trie(entity)\` — knowledge graph checker
• \`generate_truth_score(matrix)\` — consensus scorer

each subagent picks up its task, runs independently, and passes results back to the orchestrator. the latency was wild to tune — had to balance thoroughness with speed.

live demo on [Hugging Face Spaces](https://huggingface.co/spaces/Rohith-Shimori/TruthLens-AI-Agent)!`
      };
    }

    if (/nexus|mvgr|flutter|dart|techsprint|hackathon|campus|android|apk|bloc/.test(q)) {
      return {
        mood: 'it_works',
        text: `MVGR NexUs — the one we presented live to judges 📱

the pain point: students juggled 10 WhatsApp groups for exam venues, timetable changes, and campus announcements. chaotic.

what we built:
• **Flutter + Dart** with Material 3 design tokens
• **BLoC architecture** — clean event/state separation, no spaghetti setState
• **Hive local cache** — timetables available offline between lectures
• delivered as an **installable Android APK**

won **Certificate of Excellence at TechSprint 2026** after a live judge demo. that moment when it ran without crashing on the demo device? pure adrenaline.`
      };
    }

    if (/ananta|local.ai|ollama|sandbox|vector.memory|pyaudio|privacy/.test(q)) {
      return {
        mood: 'coding',
        text: `Ananta — the "what if AI didn't need the cloud?" experiment 🔒

100% local. zero cloud calls. zero token costs. your data stays on your machine.

the stack: **FastAPI** router + **Ollama** open-weights models + **PyAudio** voice pipeline + local vector embeddings.

standout features:
• **sandboxed Python execution** — generated code runs in an isolated subprocess with a strict 5-second timeout. no funny business.
• **persistent vector memory** — Ananta remembers context across sessions without any external DB
• **voice loop** — speech input → LLM → speech synthesis, hands-free

it's on [GitHub](https://github.com/Rohith-Shimori/Ananta_Rebirth) — genuinely fun to use locally.`
      };
    }

    if (/skills?|stack|tech|framework|language|tools?|python|react|database|what.*know|what.*use/.test(q)) {
      return {
        mood: 'focus_mode',
        text: `the full arsenal 🗡️

**Languages:** Python, JavaScript (ES6+), TypeScript, Dart, SQL, C

**Frontend:** React 19, TailwindCSS v4, Vite, PWA architecture, Dexie.js IndexedDB

**Backend:** Supabase Postgres, FastAPI, Node.js, Express, Row-Level Security (RLS)

**Mobile:** Flutter, Dart, Material 3, BLoC pattern, Android APK packaging

**AI & Agents:** FastMCP Protocol, multi-agent pipelines, Ollama local LLMs, vector DBs, prompt engineering

**Delivery:** Git/GitHub workflows, Docker, Linux shell, Vercel, Cloudflare, Hugging Face

picks the right tool for the job, not the trendiest one.`
      };
    }

    if (/philosoph|approach|how.*build|process|mindset|workflow|quote|curious|persistent/.test(q)) {
      return {
        mood: 'thinking',
        text: `the honest engineering philosophy ☕

*"curious enough to build it. persistent enough to finish it."*

three-step loop I follow:

**1. Break it down first.** Draft the schema, API contracts, and data flow before touching any UI. A confused architecture makes confident code worse.

**2. AI as a pair programmer.** Use LLMs the way you'd use a tireless junior dev — rapid prototyping, edge case hunting, test coverage. But understand every line that ships.

**3. It's not done until it's deployed.** localhost:3000 doesn't count. a project is only real when it's live on Vercel, Hugging Face, or in someone's hands as an APK.

the loop: build → break → debug → chai → repeat.`
      };
    }

    if (/who\s+is|about\s+rohith|background|college|education|degree|where.*study/.test(q)) {
      return {
        mood: 'wave',
        text: `hi! I'm Mini Roh — Rohith's digital self 👋

**Pontapalli Rohith** — 3rd year B.Tech Computer Science & Engineering student at MVGR College of Engineering, Vizianagaram, Andhra Pradesh, India.

CGPA: 8.60 · Timezone: IST (UTC+5:30)

certified in AI & Cloud fundamentals by EY, IBM, and Microsoft (verified on Credly). spends most time building real software projects, exploring AI systems, and debugging things that "should work but don't".

find him at:
• [rohith.is-a.dev](https://rohith.is-a.dev)
• [@Rohith-Shimori on GitHub](https://github.com/Rohith-Shimori)
• [LinkedIn](https://www.linkedin.com/in/pontapalli-rohith/)`
      };
    }

    if (/contact|email|reach|talk|message|connect|hire/.test(q)) {
      return {
        mood: 'wave',
        text: `let's connect! 📬

**direct email:** [rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)
**web CV:** [rohith.is-a.dev/cv.html](https://rohith.is-a.dev/cv.html)
**LinkedIn:** [pontapalli-rohith](https://www.linkedin.com/in/pontapalli-rohith/)
**GitHub:** [Rohith-Shimori](https://github.com/Rohith-Shimori)

actively looking for: software engineering internships, full-stack roles, and AI engineering collaborations.

email's the fastest way — rohith usually replies same day!`
      };
    }

    if (/tea|chai|coffee|sleep|tired|hungry|snack|fun|joke|mascot|click|poke|headpat/.test(q)) {
      return {
        mood: 'need_sleep',
        text: `*(takes a long sip of chai)* ☕

chai is life. specifically: strong ginger-cardamom chai at 1am when the type error refuses to make sense. coffee is fine but chai hits different when you're hunting a race condition.

fun fact: if you click the mascot figures on the homepage enough times, I have an entire emotional arc — from cute wiggles to mild irritation to actual legendary headpats at 100 clicks.

try it. I dare you. (warning: I may get slightly passive-aggressive around click 6)`
      };
    }

    // Default
    return {
      mood: 'wave',
      text: `hey! I'm Mini Roh — Rohith's digital companion 👾

I know everything about his work. try asking me:

• *"why should we hire Rohith?"* — recruiter pitch
• *"explain the NCC Supabase RLS architecture"* — deep dive
• *"tell me about TruthLens FastMCP"* — AI agent breakdown
• *"what's the MVGR NexUs stack?"* — Flutter + BLoC
• *"what's Rohith's engineering philosophy?"* — the approach
• *"what's Ananta?"* — the local AI project

or just ask me anything — I'll do my best!`
    };
  }

  /* =============================================
     4. BRAIN (Chrome AI / Fallback)
  ============================================= */
  class MiniRohBrain {
    constructor() {
      this.hasNativeAi = false;
      this.session = null;
      this._init();
    }

    async _init() {
      try {
        if (window.ai && window.ai.languageModel) {
          const caps = await window.ai.languageModel.capabilities();
          if (caps.available === 'readily' || caps.available === 'after-download') {
            this.session = await window.ai.languageModel.create({ systemPrompt: SYSTEM_PROMPT });
            this.hasNativeAi = true;
          }
        }
      } catch (_) { /* graceful fallback */ }
    }

    async stream(prompt, onToken, onDone) {
      if (this.hasNativeAi && this.session) {
        try {
          const stream = this.session.promptStreaming(prompt);
          let prev = 0;
          for await (const chunk of stream) {
            onToken(chunk.slice(prev));
            prev = chunk.length;
          }
          onDone && onDone();
          return;
        } catch (_) { /* fall through */ }
      }

      // Knowledge-graph instant engine
      const result = resolveIntent(prompt);
      const text = result.text;
      let i = 0;
      const CHUNK = 4;
      const tick = setInterval(() => {
        if (i < text.length) {
          onToken(text.slice(i, i + CHUNK));
          i += CHUNK;
        } else {
          clearInterval(tick);
          onDone && onDone(result.mood);
        }
      }, 14);
      return result.mood;
    }
  }

  /* =============================================
     5. MARKDOWN RENDERER
  ============================================= */
  function renderMarkdown(raw) {
    if (!raw) return '';
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    function inline(s) {
      s = esc(s);
      s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      s = s.replace(/\*((?:[^*\n])+)\*/g, '<em>$1</em>');
      s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
      s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      return s;
    }
    return raw.split(/\r?\n/).map(line => {
      const t = line.trim();
      if (!t) return '<div class="mr-gap"></div>';
      const bullet = t.match(/^[*\-]\s+(.*)/);
      if (bullet) return `<div class="mr-bullet"><span class="mr-dot">›</span><span>${inline(bullet[1])}</span></div>`;
      const num = t.match(/^(\d+)\.\s+(.*)/);
      if (num) return `<div class="mr-num"><span class="mr-nnum">${num[1]}.</span><span>${inline(num[2])}</span></div>`;
      if (t.startsWith('>')) return `<blockquote class="mr-quote">${inline(t.slice(1).trim())}</blockquote>`;
      return `<div class="mr-line">${inline(t)}</div>`;
    }).join('');
  }

  /* =============================================
     6. UI — CHARACTER SLIDE PANEL
  ============================================= */
  const MOODS = {
    wave:          'mascot_wave.webp',
    thinking:      'mascot_thinking.webp',
    coding:        'mascot_coding.webp',
    focus_mode:    'mascot_focus_mode.webp',
    building_ai:   'mascot_building_ai.webp',
    deploy_success:'mascot_deploy_success.webp',
    it_works:      'mascot_it_works.webp',
    need_sleep:    'mascot_need_sleep.webp',
    bug_found:     'mascot_bug_found.webp',
    compiler_error:'mascot_compiler_error.webp',
    locked_in:     'mascot_locked_in.webp',
  };

  const QUICK_PROMPTS = [
    { label: 'Why hire Rohith?',       query: 'Why should we hire Rohith?' },
    { label: 'NCC Platform deep dive', query: 'Explain the NCC Supabase RLS architecture' },
    { label: 'TruthLens FastMCP',      query: 'Tell me about TruthLens AI agent architecture' },
    { label: 'MVGR NexUs Flutter',     query: 'What is the MVGR NexUs app and its tech stack?' },
    { label: 'Ananta Local AI',        query: 'Tell me about Ananta local AI assistant' },
    { label: 'Engineering philosophy', query: "What's Rohith's engineering philosophy?" },
    { label: 'Tech stack',             query: 'What is the full technology stack Rohith knows?' },
  ];

  let brain = null;
  let isOpen = false;
  let isGenerating = false;
  let chatHistory = []; // { role: 'user'|'roh', text: string, mood?: string }

  function escHtml(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function buildPanel() {
    const wrapper = document.createElement('div');
    wrapper.id = 'mrPanel';
    wrapper.innerHTML = `
      <!-- BACKDROP -->
      <div id="mrBackdrop" class="mr-backdrop" aria-hidden="true"></div>

      <!-- SLIDE PANEL -->
      <aside id="mrAside" class="mr-aside" role="dialog" aria-modal="true" aria-label="Chat with Mini Roh">

        <!-- CHARACTER STAGE — mascot floats above panel top -->
        <div class="mr-stage">
          <div class="mr-stage-inner">
            <img id="mrMascot" src="mascot_wave.webp" alt="Mini Roh" class="mr-mascot" width="180" height="180">
            <div id="mrStatus" class="mr-status">
              <span class="mr-status-dot" aria-hidden="true"></span>
              <span id="mrStatusText">online · ready to chat</span>
            </div>
          </div>
        </div>

        <!-- PANEL HEADER -->
        <div class="mr-header">
          <div class="mr-header-id">
            <div class="mr-header-name">Mini Roh</div>
            <div class="mr-header-sub">Rohith's digital companion</div>
          </div>
          <button id="mrCloseBtn" class="mr-close" aria-label="Close Mini Roh panel">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- CHAT HISTORY -->
        <div id="mrChat" class="mr-chat" role="log" aria-live="polite" aria-label="Chat messages">
          <!-- Welcome message injected by JS -->
        </div>

        <!-- QUICK PROMPTS (only visible when chat is empty / after welcome) -->
        <div id="mrQuick" class="mr-quick">
          ${QUICK_PROMPTS.map(p => `<button class="mr-chip" data-q="${escHtml(p.query)}">${escHtml(p.label)}</button>`).join('')}
        </div>

        <!-- INPUT ROW -->
        <form id="mrForm" class="mr-form" autocomplete="off">
          <input id="mrInput" class="mr-input" type="text" placeholder="Ask me anything about Rohith…" maxlength="300" aria-label="Message input">
          <button type="submit" id="mrSend" class="mr-send" aria-label="Send message">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
      </aside>
    `;
    document.body.appendChild(wrapper);
  }

  function setMascot(mood) {
    const img = document.getElementById('mrMascot');
    if (!img) return;
    const src = MOODS[mood] || MOODS.wave;
    if (img.src.endsWith(src)) return;
    img.style.opacity = '0';
    img.style.transform = 'scale(0.88) translateY(8px)';
    setTimeout(() => {
      img.src = src;
      img.style.opacity = '1';
      img.style.transform = 'scale(1) translateY(0)';
    }, 180);
  }

  function setStatus(text) {
    const el = document.getElementById('mrStatusText');
    if (el) el.textContent = text;
  }

  function appendMessage(role, htmlContent, mood) {
    const chat = document.getElementById('mrChat');
    if (!chat) return null;

    const wrap = document.createElement('div');
    wrap.className = role === 'user' ? 'mr-msg mr-msg-user' : 'mr-msg mr-msg-roh';

    if (role === 'roh') {
      const avatar = document.createElement('img');
      avatar.src = MOODS[mood] || MOODS.wave;
      avatar.className = 'mr-avatar';
      avatar.width = 32;
      avatar.height = 32;
      avatar.alt = 'Mini Roh';
      wrap.appendChild(avatar);
    }

    const bubble = document.createElement('div');
    bubble.className = 'mr-bubble';
    bubble.innerHTML = htmlContent;
    wrap.appendChild(bubble);

    chat.appendChild(wrap);
    chat.scrollTop = chat.scrollHeight;
    return bubble;
  }

  function showWelcome() {
    const welcomeText = `yo! I'm **Mini Roh** — Rohith's digital self 👾

ask me about his projects, tech stack, engineering approach, or why you should hire him. I know everything.

*(pick a quick prompt below or just type!)*`;
    appendMessage('roh', renderMarkdown(welcomeText), 'wave');
  }

  function hideQuickPrompts() {
    const q = document.getElementById('mrQuick');
    if (q) q.style.display = 'none';
  }

  async function sendMessage(text) {
    if (!text.trim() || isGenerating) return;

    hideQuickPrompts();
    appendMessage('user', `<span>${escHtml(text)}</span>`, null);
    isGenerating = true;
    setMascot('thinking');
    setStatus('thinking…');

    // Roh bubble placeholder
    const rohWrap = document.createElement('div');
    rohWrap.className = 'mr-msg mr-msg-roh';

    const avatar = document.createElement('img');
    avatar.src = MOODS.thinking;
    avatar.className = 'mr-avatar mr-avatar-active';
    avatar.width = 32;
    avatar.height = 32;
    avatar.alt = 'Mini Roh';
    rohWrap.appendChild(avatar);

    const bubble = document.createElement('div');
    bubble.className = 'mr-bubble mr-bubble-streaming';

    const dotsEl = document.createElement('div');
    dotsEl.className = 'mr-thinking-dots';
    dotsEl.innerHTML = '<span></span><span></span><span></span>';
    bubble.appendChild(dotsEl);
    rohWrap.appendChild(bubble);

    const chat = document.getElementById('mrChat');
    if (chat) {
      chat.appendChild(rohWrap);
      chat.scrollTop = chat.scrollHeight;
    }

    setMascot('thinking');

    let rawText = '';
    let finalMood = 'wave';

    await brain.stream(
      text,
      (token) => {
        // Remove thinking dots on first token
        if (rawText === '') {
          dotsEl.remove();
          avatar.src = MOODS.coding;
          avatar.className = 'mr-avatar mr-avatar-active';
          setMascot('coding');
          setStatus('typing…');
        }
        rawText += token;
        bubble.innerHTML = renderMarkdown(rawText) + '<span class="mr-cursor">▌</span>';
        if (chat) chat.scrollTop = chat.scrollHeight;
      },
      (mood) => {
        finalMood = mood || 'wave';
        // Clean up
        bubble.innerHTML = renderMarkdown(rawText);
        bubble.classList.remove('mr-bubble-streaming');
        avatar.src = MOODS[finalMood] || MOODS.wave;
        avatar.className = 'mr-avatar';
        setMascot(finalMood);
        setStatus('online · ready to chat');
        isGenerating = false;
        if (chat) chat.scrollTop = chat.scrollHeight;
      }
    );
  }

  function openPanel() {
    if (isOpen) return;
    isOpen = true;
    const aside = document.getElementById('mrAside');
    const backdrop = document.getElementById('mrBackdrop');
    if (aside) aside.classList.add('mr-open');
    if (backdrop) backdrop.classList.add('mr-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('mrInput')?.focus(), 220);
  }

  function closePanel() {
    if (!isOpen) return;
    isOpen = false;
    const aside = document.getElementById('mrAside');
    const backdrop = document.getElementById('mrBackdrop');
    if (aside) aside.classList.remove('mr-open');
    if (backdrop) backdrop.classList.remove('mr-open');
    document.body.style.overflow = '';
  }

  function init() {
    brain = new MiniRohBrain();
    buildPanel();

    // Welcome message
    showWelcome();

    // Wire close
    document.getElementById('mrCloseBtn')?.addEventListener('click', closePanel);
    document.getElementById('mrBackdrop')?.addEventListener('click', closePanel);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closePanel();
    });

    // Wire form
    document.getElementById('mrForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('mrInput');
      const val = input?.value.trim();
      if (val) {
        input.value = '';
        sendMessage(val);
      }
    });

    // Wire quick prompts
    document.getElementById('mrQuick')?.addEventListener('click', (e) => {
      const chip = e.target.closest('.mr-chip');
      if (chip?.dataset.q) sendMessage(chip.dataset.q);
    });

    // Expose global triggers
    window.openMiniRohSpotlight = openPanel;
    window.openMiniRohChat = openPanel;

    // Wire existing nav + hero buttons (set in index.html)
    const navBtn = document.getElementById('aiSpotlightNavBtn');
    const heroBtn = document.getElementById('heroAskAiBtn');
    if (navBtn) navBtn.addEventListener('click', openPanel);
    if (heroBtn) heroBtn.addEventListener('click', openPanel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

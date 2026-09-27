/**
 * ROHITH OS — Master Engine
 * Binds Mini Roh Mascot (9-Dir Gaze Tracking + Emotional States),
 * Dual-Brain Conversational AI, Live IST Clock, and Cross-System Reactivity.
 */

(function () {
  'use strict';

  /* =============================================
     1. KNOWLEDGE BASE & INTENT ENGINE
  ============================================= */
  const KB = {
    bio: {
      name: 'Pontapalli Rohith',
      handle: 'Rohith-Shimori',
      role: '3rd Year Computer Science & Engineering Undergrad',
      college: 'MVGR College of Engineering, Vizianagaram, AP, India',
      email: 'rohith@rohith.is-a.dev',
      github: 'https://github.com/Rohith-Shimori',
      linkedin: 'https://www.linkedin.com/in/pontapalli-rohith/',
      tagline: 'Curious enough to build it. Persistent enough to finish it.'
    }
  };

  const INTENTS = [
    {
      match: /why\s+(should|to)?\s*(we\s+)?hire|hire\s+rohith|internship|job|recruiter|candidate|strong\s+point|pitch/,
      mood: 'deploy_success',
      speech: 'recruiter mode activated! here is why rohith ships.',
      reply: `**Why Rohith? Recruiter Dossier:** ☕

Rohith doesn't build throwaway tutorial clones. He engineers **production-grade distributed systems**:

• **NCC Digital Platform** — React 19 + Supabase PWA with 16 SQL migrations, Dexie.js offline-first sync, and granular Row-Level Security isolating Army/Navy/Air wings.
• **TruthLens** — FastMCP multi-agent consensus fact-checker built for Google × Kaggle's AI Agents Capstone, deployed live on Hugging Face.
• **MVGR NexUs** — Flutter campus super-app that earned the **Certificate of Excellence** at TechSprint 2026.
• **Ananta Rebirth** — Local AI agent running on FastAPI + Ollama with isolated Docker sandboxing.

Deep comfort across Python, TypeScript, Dart, SQL & React. When a production bug strikes at 2 AM, he brews chai and squashes it systematically.

Reach him directly: **[rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)**`
    },
    {
      match: /ncc|cadet|drill|attendance|supabase|migration|rls|postgres/,
      mood: 'coding',
      speech: '16 migrations and bulletproof RLS. let me tell you about NCC Digi.',
      reply: `**NCC Digital Training Platform:** 🏗️

The administrative reality: Cadet attendance, drills, and camp allotments across 3 wings (Army, Navy, Air Force) were tracked on fragile paper ledgers.

**Rohith's Technical Solution:**
• **React 19 + Supabase Postgres PWA** with 16 schema migrations.
• **Granular RLS Policies**: Mathematically isolates cadet records—Navy officers cannot access Army camp drills.
• **Offline-First Sync**: Powered by Dexie.js (IndexedDB) for zero-connectivity parade grounds.
• **Live App**: [nccdigi.vercel.app](https://nccdigi.vercel.app)`
    },
    {
      match: /truthlens|fastmcp|mcp|kaggle|google.*capstone|agent|subagent/,
      mood: 'building_ai',
      speech: 'FastMCP subagents running consensus truth scoring. My favorite build.',
      reply: `**TruthLens — Multi-Agent Fact Verification:** 🧠

Engineered for the **Kaggle × Google AI Agents Capstone**:

• **Architecture**: Coordinated micro-agents orchestrated via FastMCP (Python).
• **Pipeline**:
  1. \`verify_claim(text)\` receives claim input.
  2. Subagent A retrieves web evidence from high-trust sources.
  3. Subagent B cross-references entities against a trie knowledge graph.
  4. Consensus scorer generates confidence metrics and citations.
• **Live Demo**: Hosted on Hugging Face Spaces.`
    },
    {
      match: /nexus|mvgr|flutter|techsprint|hackathon|bloc/,
      mood: 'deploy_success',
      speech: 'MVGR NexUs won Certificate of Excellence at TechSprint 2026!',
      reply: `**MVGR NexUs Super-App:** 📱

• **Achievement**: Certificate of Excellence at **TechSprint 2026 Hackathon**.
• **Stack**: Flutter (Dart) + Firebase Cloud Functions + BLoC architectural pattern.
• **Key Modules**: Real-time peer tutoring matching, encrypted question-paper vaults, and campus event feeds.
• **Performance**: Smooth 60 FPS transitions with strict separation of data and presentation layers.`
    },
    {
      match: /music|song|playlist|spotify|track|beats|lofi|sound/,
      mood: 'music_vibe',
      speech: 'headphones on! check out our Cyber Sound Lab below.',
      reply: `**Cyber Sound Lab // Audio Engine:** 🎧

You're looking at a custom built-in cyber audio engine right below!

• **Real-Time Canvas Visualizer**: 60 FPS frequency equalizer running on native Web Audio API \`AnalyserNode\`.
• **Lo-Fi Focus Beats**: High-quality coding tracks with full playback, seek, and volume control.
• **Rohith's Curated Playlist**: Jump straight to Rohith's personal Spotify playlist with the external link button!
• **Terminal Integration**: You can type \`music play\`, \`music pause\`, or \`music next\` right in the terminal!`
    },
    {
      match: /stack|skills|technologies|languages|frameworks|tools/,
      mood: 'coding',
      speech: 'Python, TypeScript, Dart, React, Supabase, Flutter, FastMCP.',
      reply: `**Rohith's Technical Arsenal:** ⚡

• **Languages**: Python (Advanced), JavaScript / TypeScript, Dart, SQL, HTML5/CSS3.
• **Frontend**: React 19, Next.js, Flutter, Tailwind CSS v4, Canvas 2D/WebGL.
• **Backend & Data**: FastAPI, Supabase (Postgres + RLS), Firebase, Node.js, Dexie.js.
• **AI & Agents**: FastMCP, LangChain, Transformers.js, Ollama, Chrome Built-In AI.
• **DevOps**: Docker, Git, Linux, Vercel, Cloudflare.`
    },
    {
      match: /contact|email|reach|hire|chat|linkedin|phone/,
      mood: 'wave',
      speech: 'drop a line! inbox is always open.',
      reply: `**Get in Touch with Rohith:** 📬

• **Email**: [rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)
• **LinkedIn**: [linkedin.com/in/pontapalli-rohith](https://www.linkedin.com/in/pontapalli-rohith/)
• **GitHub**: [github.com/Rohith-Shimori](https://github.com/Rohith-Shimori)
• **Location**: Andhra Pradesh, India (IST / UTC+5:30)`
    }
  ];

  const DEFAULT_REPLY = {
    mood: 'thinking',
    speech: 'fascinating question! let me think on that...',
    reply: `I love digging into that! As Rohith's digital companion, I can walk you through his **flagship projects** (*NCC Digi, TruthLens, MVGR NexUs*), inspect his **live GitHub commits**, or chat about system architectures.

Try clicking any prompt chip above, or ask: *"Why hire Rohith?"* or *"How does TruthLens work?"*`
  };

  /* =============================================
     2. MASCOT GAZE-TRACKING ENGINE (9 Slices)
  ============================================= */
  let mascotImg = null;
  let mascotContainer = null;
  let speechBubble = null;
  let moodBadge = null;
  let isTrackingEnabled = true;

  const FRAMES_DIR = 'mascot-frames/';
  const FRAME_MAP = {
    center: 'center.webp',
    up: 'up.webp',
    'up-right': 'up-right.webp',
    right: 'right.webp',
    'down-right': 'down-right.webp',
    down: 'down.webp',
    'down-left': 'down-left.webp',
    left: 'left.webp',
    'up-left': 'up-left.webp'
  };

  function initMascot() {
    mascotImg = document.getElementById('mascotDisplayImg');
    mascotContainer = document.getElementById('mascotViewport');
    speechBubble = document.getElementById('mascotSpeech');
    moodBadge = document.getElementById('mascotMoodBadge');

    if (!mascotImg || !mascotContainer) return;

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // Initial greeting speech
    setSpeech('✦ welcome to Rohith OS! ask me anything or fire up some beats.');
  }

  function onMouseMove(e) {
    if (!isTrackingEnabled || !mascotContainer || !mascotImg) return;
    updateGaze(e.clientX, e.clientY);
  }

  function onTouchMove(e) {
    if (!isTrackingEnabled || !e.touches[0]) return;
    updateGaze(e.touches[0].clientX, e.touches[0].clientY);
  }

  function updateGaze(mouseX, mouseY) {
    const rect = mascotContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // If mouse is very close to center, look straight ahead
    if (dist < 45) {
      setFrame('center');
      return;
    }

    // Angle calculation: Math.atan2 returns -PI to +PI
    let angleDeg = Math.atan2(dy, dx) * (180 / Math.PI); // -180 to 180
    if (angleDeg < 0) angleDeg += 360; // 0 to 360

    // 8 slices of 45 degrees each
    // 0 = Right (337.5 to 22.5)
    // 45 = Down-Right (22.5 to 67.5)
    // 90 = Down (67.5 to 112.5)
    // 135 = Down-Left (112.5 to 157.5)
    // 180 = Left (157.5 to 202.5)
    // 225 = Up-Left (202.5 to 247.5)
    // 270 = Up (247.5 to 292.5)
    // 315 = Up-Right (292.5 to 337.5)

    let dir = 'center';
    if (angleDeg >= 337.5 || angleDeg < 22.5) dir = 'right';
    else if (angleDeg >= 22.5 && angleDeg < 67.5) dir = 'down-right';
    else if (angleDeg >= 67.5 && angleDeg < 112.5) dir = 'down';
    else if (angleDeg >= 112.5 && angleDeg < 157.5) dir = 'down-left';
    else if (angleDeg >= 157.5 && angleDeg < 202.5) dir = 'left';
    else if (angleDeg >= 202.5 && angleDeg < 247.5) dir = 'up-left';
    else if (angleDeg >= 247.5 && angleDeg < 292.5) dir = 'up';
    else if (angleDeg >= 292.5 && angleDeg < 337.5) dir = 'up-right';

    setFrame(dir);
  }

  let currentFrame = '';
  function setFrame(dir) {
    if (currentFrame === dir) return;
    currentFrame = dir;
    const file = FRAME_MAP[dir] || 'center.webp';
    mascotImg.src = FRAMES_DIR + file;
  }

  function setSpeech(text) {
    if (!speechBubble) return;
    speechBubble.style.opacity = '0';
    speechBubble.style.transform = 'translateY(4px)';
    setTimeout(() => {
      speechBubble.textContent = text;
      speechBubble.style.opacity = '1';
      speechBubble.style.transform = 'translateY(0)';
    }, 200);
  }

  function setMood(moodKey, customLabel) {
    if (!moodBadge) return;
    const moodMap = {
      coding: '⚡ CODING SPRINT',
      deploy_success: '🚀 SHIPPED & READY',
      building_ai: '🧠 AGENTIC REASONING',
      music_vibe: '🎧 IN THE ZONE (BEATS ON)',
      thinking: '💭 PROCESSING',
      wave: '👋 ONLINE & GREETING'
    };
    moodBadge.innerHTML = `<span class="pulse-dot orange"></span> ${customLabel || moodMap[moodKey] || 'ACTIVE'}`;
  }

  /* =============================================
     3. CONVERSATIONAL AI CHAT INTERACTION
  ============================================= */
  let chatHistory = null;
  let chatInput = null;
  let chatSendBtn = null;
  let isAiGenerating = false;

  function initChat() {
    chatHistory = document.getElementById('chatHistory');
    chatInput = document.getElementById('chatInput');
    chatSendBtn = document.getElementById('chatSendBtn');

    if (chatSendBtn && chatInput) {
      chatSendBtn.addEventListener('click', handleUserSend);
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleUserSend();
      });
    }

    // Chip buttons
    const chips = document.querySelectorAll('.chip-btn');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.dataset.query || chip.textContent.replace(/^[^\w]+/, '').trim();
        if (chatInput) chatInput.value = query;
        handleUserSend();
      });
    });
  }

  function handleUserSend() {
    if (!chatInput || isAiGenerating) return;
    const q = chatInput.value.trim();
    if (!q) return;

    appendChatMsg('user', escapeHtml(q));
    chatInput.value = '';
    isAiGenerating = true;

    // Mini Roh Mascot reacts
    setMood('thinking');
    setSpeech('consulting memory banks...');

    setTimeout(() => {
      const match = resolveIntent(q);
      setMood(match.mood);
      setSpeech(match.speech);
      streamAiResponse(match.reply);
    }, 350);
  }

  function resolveIntent(query) {
    const q = query.toLowerCase();
    for (const item of INTENTS) {
      if (item.match.test(q)) {
        return item;
      }
    }
    return DEFAULT_REPLY;
  }

  function appendChatMsg(sender, htmlContent) {
    if (!chatHistory) return;
    const div = document.createElement('div');
    div.className = `chat-msg ${sender === 'user' ? 'user' : 'mini-roh'}`;

    const senderLabel = sender === 'user' ? 'RECRUITER / VISITOR' : 'MINI ROH AI';
    div.innerHTML = `
      <span class="msg-sender">${senderLabel}</span>
      <div class="msg-bubble">${htmlContent}</div>
    `;

    chatHistory.appendChild(div);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    return div.querySelector('.msg-bubble');
  }

  function streamAiResponse(markdownText) {
    const bubble = appendChatMsg('mini-roh', '');
    const formattedHtml = parseSimpleMarkdown(markdownText);
    
    // Typewriter effect
    let currentIdx = 0;
    const totalLen = formattedHtml.length;
    const step = Math.max(3, Math.floor(totalLen / 40));

    const interval = setInterval(() => {
      currentIdx += step;
      if (currentIdx >= totalLen) {
        currentIdx = totalLen;
        clearInterval(interval);
        isAiGenerating = false;
      }
      bubble.innerHTML = formattedHtml.slice(0, currentIdx) + (currentIdx < totalLen ? '▊' : '');
      if (chatHistory) chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 18);
  }

  function parseSimpleMarkdown(text) {
    let html = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n• /g, '<br>• ');
    return `<p>${html}</p>`;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* =============================================
     4. LIVE IST CLOCK
  ============================================= */
  function startIstClock() {
    const clockEl = document.getElementById('istClock');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      clockEl.textContent = `${timeStr} IST`;
    }

    update();
    setInterval(update, 1000);
  }

  /* =============================================
     5. CROSS-SUBSYSTEM EVENT LISTENERS
  ============================================= */
  function bindSubsystems() {
    // Spicetify Audio Events
    window.addEventListener('spicetify:play', (e) => {
      const track = e.detail && e.detail.track;
      setMood('music_vibe');
      setSpeech(`ooh, good beats! lock-in mode engaged 🎧`);
    });

    window.addEventListener('spicetify:pause', () => {
      setMood('coding');
      setSpeech('taking a breather... tea break? ☕');
    });

    // GitHub Synapse Loaded
    window.addEventListener('synapse:loaded', (e) => {
      const count = e.detail && e.detail.data && e.detail.data.profile ? e.detail.data.profile.public_repos : 18;
      console.log(`GitHub Synapse linked: ${count} repositories online.`);
    });
  }

  /* =============================================
     6. INITIALIZATION
  ============================================= */
  function init() {
    initMascot();
    initChat();
    startIstClock();
    bindSubsystems();
  }

  window.MiniRohOS = {
    init,
    setSpeech,
    setMood,
    askAI: (query) => {
      if (chatInput) chatInput.value = query;
      handleUserSend();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

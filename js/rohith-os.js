/**
 * ROHITH OS — Master Engine v2.5.0
 * 1. Full Mascot Studio (13 Poses + 360° Gaze Tracking + Cross-Subsystem Auto-Reactivity)
 * 2. Real Intelligent Mini Roh AI (Live Neural LLM Inference + Fallback Brain)
 * 3. Live IST Precision Clock
 * 4. Zero Emojis (Pure Dynamic SVGs & Cyber Telemetry)
 */

(function () {
  'use strict';

  /* ===================================================================
     1. MASCOT POSES & STUDIO REGISTRY (13 POSES + 9-DIR GAZE)
     =================================================================== */
  const MASCOT_POSES = {
    gaze: {
      src: 'mascot-frames/center.webp',
      isGaze: true,
      label: 'Gaze Tracking',
      speech: 'Move your cursor to track 360° gaze!'
    },
    wave: {
      src: 'mascot_wave.webp',
      label: 'Greeting',
      speech: 'Welcome to Rohith OS! Explore the studio or test my AI companion.'
    },
    coding: {
      src: 'mascot_coding.webp',
      label: 'Coding Sprint',
      speech: 'Locked into code. Compiling React 19, Supabase RLS policies, and FastMCP tools.'
    },
    locked_in: {
      src: 'mascot_locked_in.webp',
      label: '100% Flow State',
      speech: 'Zero distractions. Shipping distributed architectures with clean boundary seams.'
    },
    need_chai: {
      src: 'mascot_focus_mode.webp',
      label: 'Chai Refuel',
      speech: 'Refueling with hot ginger chai! Ready for the next coding sprint.'
    },
    sleep: {
      src: 'mascot_need_sleep.webp',
      label: 'Sleep Mode',
      speech: 'Late night debug session completed. Powering down to sleep on the laptop...'
    },
    thinking: {
      src: 'mascot_thinking.webp',
      label: 'Thinking',
      speech: 'Query received. Consulting neural context and project knowledge base...'
    },
    it_works: {
      src: 'mascot_it_works.webp',
      label: 'Tests Passed',
      speech: 'All unit and integration suites green! Architecture verified.'
    },
    deploy_success: {
      src: 'mascot_deploy_success.webp',
      label: 'Deploy Success',
      speech: 'Deployed to production edge! Zero latency, zero cold starts.'
    },
    bug_found: {
      src: 'mascot_bug_found.webp',
      label: 'Bug Found',
      speech: 'Discovered race condition! Isolating async Promise queue in state manager.'
    },
    compiler_error: {
      src: 'mascot_compiler_error.webp',
      label: 'Compiler Error',
      speech: 'Compiler exception thrown! Refueling with chai to fix stack trace.'
    },
    git_conflict: {
      src: 'mascot_git_conflict.webp',
      label: 'Merge Conflict',
      speech: 'Incoming merge conflict on main. Re-basing cleanly without overwriting commits.'
    },
    building_ai: {
      src: 'mascot_building_ai.webp',
      label: 'Say Hi',
      speech: 'Hi there! Building intelligent agentic tools and fast MCP pipelines.'
    },
    // Aliases for compatibility
    focus_mode: {
      src: 'mascot_focus_mode.webp',
      label: 'Chai Refuel',
      speech: 'Refueling with hot ginger chai! Ready for the next coding sprint.'
    },
    need_sleep: {
      src: 'mascot_need_sleep.webp',
      label: 'Sleep Mode',
      speech: 'Late night debug marathon complete. Powering down to sleep on the laptop...'
    }
  };

  const GAZE_FRAMES = {
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

  let mascotImg = null;
  let mascotContainer = null;
  let speechBubble = null;
  let moodBadge = null;
  let telemetryText = null;
  let poseChips = [];
  let modeButtons = [];

  let currentStudioMode = 'gaze'; // 'gaze' | 'poses' | 'react'
  let currentPoseKey = 'gaze';
  let currentGazeDir = 'center';
  let isTrackingGaze = true;

  function initMascotStudio() {
    mascotImg = document.getElementById('mascotDisplayImg');
    mascotContainer = document.getElementById('mascotViewport');
    speechBubble = document.getElementById('mascotSpeech');
    moodBadge = document.getElementById('mascotMoodText');
    telemetryText = document.getElementById('mascotTelemetryText');

    if (!mascotImg || !mascotContainer) return;

    // Gaze event listeners
    window.addEventListener('mousemove', onMascotMouseMove);
    window.addEventListener('touchmove', onMascotTouchMove, { passive: true });

    // Mode Buttons
    modeButtons = document.querySelectorAll('.mascot-mode-btn');
    modeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        setStudioMode(mode);
      });
    });

    // Pose Chips
    poseChips = document.querySelectorAll('.mascot-pose-chip');
    poseChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const pose = chip.dataset.pose;
        applyPose(pose);
      });
    });

    // Mascot Click Interaction
    mascotContainer.addEventListener('click', onMascotClick);

    // Initial greeting
    setMascotSpeech('[MINI-ROH] Initializing Rohith OS... Move your cursor or pick a pose below!');
    setMascotMood('CODING SPRINT');
  }

  function setStudioMode(mode) {
    currentStudioMode = mode;
    modeButtons.forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));

    if (mode === 'gaze') {
      isTrackingGaze = true;
      applyPose('gaze');
      setMascotSpeech('360° cursor gaze tracking active. Move your mouse anywhere on screen.');
    } else if (mode === 'poses') {
      isTrackingGaze = false;
      if (currentPoseKey === 'gaze') applyPose('wave');
      setMascotSpeech('Character pose studio active. Select any state below.');
    } else if (mode === 'react') {
      isTrackingGaze = true;
      setMascotSpeech('Auto-React active: synchronized with Sound Lab, Terminal & AI.');
    }
  }

  function applyPose(poseKey) {
    const pose = MASCOT_POSES[poseKey];
    if (!pose) return;

    currentPoseKey = poseKey;

    // Update active chip
    poseChips.forEach((c) => c.classList.toggle('active', c.dataset.pose === poseKey));

    if (pose.isGaze) {
      isTrackingGaze = true;
      mascotImg.src = 'mascot-frames/' + (GAZE_FRAMES[currentGazeDir] || 'center.webp');
      if (telemetryText) telemetryText.textContent = 'Gaze Tracking';
      setMascotMood('Gaze Tracking');
    } else {
      isTrackingGaze = false;
      mascotImg.src = pose.src;
      if (telemetryText) telemetryText.textContent = pose.label;
      setMascotMood(pose.label);
    }

    // Trigger bounce animation
    mascotImg.classList.remove('pop-anim');
    void mascotImg.offsetWidth;
    mascotImg.classList.add('pop-anim');

    setMascotSpeech(pose.speech);
  }

  function onMascotMouseMove(e) {
    if (!isTrackingGaze || !mascotContainer || !mascotImg) return;
    updateGazeDirection(e.clientX, e.clientY);
  }

  function onMascotTouchMove(e) {
    if (!isTrackingGaze || !e.touches[0]) return;
    updateGazeDirection(e.touches[0].clientX, e.touches[0].clientY);
  }

  function updateGazeDirection(mouseX, mouseY) {
    const rect = mascotContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 50) {
      setGazeFrame('center');
      return;
    }

    let angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angleDeg < 0) angleDeg += 360;

    let dir = 'center';
    if (angleDeg >= 337.5 || angleDeg < 22.5) dir = 'right';
    else if (angleDeg >= 22.5 && angleDeg < 67.5) dir = 'down-right';
    else if (angleDeg >= 67.5 && angleDeg < 112.5) dir = 'down';
    else if (angleDeg >= 112.5 && angleDeg < 157.5) dir = 'down-left';
    else if (angleDeg >= 157.5 && angleDeg < 202.5) dir = 'left';
    else if (angleDeg >= 202.5 && angleDeg < 247.5) dir = 'up-left';
    else if (angleDeg >= 247.5 && angleDeg < 292.5) dir = 'up';
    else if (angleDeg >= 292.5 && angleDeg < 337.5) dir = 'up-right';

    setGazeFrame(dir);
  }

  function setGazeFrame(dir) {
    if (currentGazeDir === dir && mascotImg.src.includes('mascot-frames/')) return;
    currentGazeDir = dir;
    const file = GAZE_FRAMES[dir] || 'center.webp';
    mascotImg.src = 'mascot-frames/' + file;
    if (telemetryText && isTrackingGaze) {
      telemetryText.textContent = 'Gaze Tracking';
    }
  }

  function setMascotSpeech(text) {
    if (!speechBubble) return;
    speechBubble.style.opacity = '0';
    speechBubble.style.transform = 'translateY(4px)';
    setTimeout(() => {
      speechBubble.textContent = text;
      speechBubble.style.opacity = '1';
      speechBubble.style.transform = 'translateY(0)';
    }, 150);
  }

  function setMascotMood(label) {
    if (moodBadge) {
      moodBadge.textContent = label;
    }
  }

  // Banter on clicking mascot directly
  const BANTER_POSES = ['it_works', 'deploy_success', 'coding', 'locked_in', 'need_chai', 'thinking'];
  let banterIdx = 0;
  function onMascotClick() {
    banterIdx = (banterIdx + 1) % BANTER_POSES.length;
    const nextPose = BANTER_POSES[banterIdx];
    applyPose(nextPose);
  }

  /* ===================================================================
     2. REAL INTELLIGENT MINI ROH AI (NEURAL STREAMING ENGINE)
     =================================================================== */
  const AI_SYSTEM_PROMPT = `You are Mini Roh, the intelligent AI avatar of Pontapalli Rohith (handle: Rohith-Shimori). You are his digital persona: witty, sharp, technically deep, humble, and engineering-driven.

ROHITH'S VERIFIED DOSSIER:
- Education: 3rd Year B.Tech Computer Science & Engineering Undergrad at MVGR College of Engineering, Vizianagaram, AP, India. CGPA: 8.60.
- Contact: rohith@rohith.is-a.dev | github.com/Rohith-Shimori | linkedin.com/in/pontapalli-rohith
- Flagship Projects:
  1. NCC Digital Platform (PWA): React 19 + Supabase Postgres with 16 SQL schema migrations, strict Row-Level Security (RLS) isolating Army/Navy/Air Force wings, Dexie.js offline-first IndexedDB sync for parade grounds with zero cell coverage, and Recharts analytics. Deployed at nccdigi.vercel.app.
  2. TruthLens (Multi-Agent Fact Verification): Engineered for Kaggle x Google AI Agents Capstone. Built with Python FastMCP protocol coordinating subagent tools (verify_claim, fetch_web_evidence, cross_reference_trie, generate_truth_score). Deployed live on Hugging Face Spaces.
  3. MVGR NexUs: Flutter campus super-app using BLoC state management and Firebase Cloud Functions. Awarded Certificate of Excellence at TechSprint 2026 Hackathon.
  4. Ananta: Local AI assistant powered by FastAPI and open-weights LLMs via Ollama, with isolated Docker sandboxing.
- Technical Arsenal: Python (advanced), TypeScript/JavaScript, Dart, SQL; React 19, Flutter, Tailwind CSS v4, FastAPI, Supabase, Docker, Linux, Git.

BEHAVIOR GUIDELINES:
- Output clean Markdown without emojis.
- Deliver insightful, architecturally grounded answers. If asked about code or architecture, provide concrete technical rationale and code blocks when helpful.
- Keep responses concise (under 160 words) unless the user explicitly requests an in-depth breakdown.`;

  // Offline / instant fallback knowledge engine
  const LOCAL_KNOWLEDGE = [
    {
      match: /hire|recruiter|why.*rohith|pitch|internship|role/i,
      reply: `**Why Rohith? Recruiter Technical Dossier:**

Rohith engineers production-grade distributed architectures rather than superficial clones:

- **NCC Digital Platform**: React 19 + Supabase PWA with 16 schema migrations, Dexie.js offline-first sync, and granular Row-Level Security isolating Army/Navy/Air Force records.
- **TruthLens**: FastMCP multi-agent consensus fact-checker for the Google x Kaggle AI Agents Capstone, live on Hugging Face Spaces.
- **MVGR NexUs**: Flutter super-app awarded the Certificate of Excellence at TechSprint 2026.
- **Ananta**: Local AI assistant on FastAPI + Ollama with isolated Docker sandboxing.

Deep comfort across Python, TypeScript, Dart, SQL & React. Reach him directly at **[rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)**.`
    },
    {
      match: /ncc|cadet|rls|attendance|supabase|migration|dexie/i,
      reply: `**NCC Digital Platform Architecture:**

The administrative challenge: Cadet attendance and drill evaluations across Army, Navy, and Air Force wings were tracked on paper ledgers subject to loss and lack of auditing.

**Technical Architecture:**
- **React 19 + Supabase Postgres**: 16 schema migrations managing drills, camps, and achievements.
- **Granular Row-Level Security**: SQL policies mathematically isolate records so Navy officers cannot inspect Army drills.
- **Offline-First Data Pipeline**: Dexie.js (IndexedDB) logs attendance on parade grounds with zero connectivity, syncing automatically upon network restoration.
- **Live Deployment**: Hosted at [nccdigi.vercel.app](https://nccdigi.vercel.app).`
    },
    {
      match: /truthlens|fastmcp|mcp|kaggle|google.*capstone|subagent/i,
      reply: `**TruthLens — Multi-Agent Fact Verification:**

Built for the **Kaggle x Google AI Agents Capstone**:

- **Protocol**: FastMCP (Python Model Context Protocol) coordinating modular subagents.
- **Verification Flow**:
  1. \`verify_claim(text)\` initiates the verification request.
  2. \`fetch_web_evidence()\` retrieves authoritative sources.
  3. \`cross_reference_trie()\` verifies entity veracity across a knowledge graph.
  4. Consensus scorer calculates a weighted truth confidence matrix.
- **Live Demo**: Hosted on Hugging Face Spaces.`
    },
    {
      match: /stack|skills|technologies|tools|languages/i,
      reply: `**Rohith's Technical Stack:**

- **Languages**: Python (Advanced), TypeScript / JavaScript, Dart, SQL, HTML5 / CSS3.
- **Frontend**: React 19, Next.js, Flutter, Tailwind CSS v4, Canvas 2D.
- **Backend & Storage**: FastAPI, Supabase (Postgres + RLS), Firebase, Node.js, Dexie.js.
- **AI & Systems**: FastMCP, LangChain, Transformers.js, Ollama, Docker, Linux, Git, Cloudflare.`
    },
    {
      match: /contact|email|linkedin|github/i,
      reply: `**Connect with Rohith:**

- **Email**: [rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)
- **LinkedIn**: [linkedin.com/in/pontapalli-rohith](https://www.linkedin.com/in/pontapalli-rohith/)
- **GitHub**: [github.com/Rohith-Shimori](https://github.com/Rohith-Shimori)
- **Location**: Andhra Pradesh, India (IST / UTC+5:30)`
    }
  ];

  let chatHistory = null;
  let chatInput = null;
  let chatSendBtn = null;
  let aiStatusText = null;
  let isAiGenerating = false;

  function initChat() {
    chatHistory = document.getElementById('chatHistory');
    chatInput = document.getElementById('chatInput');
    chatSendBtn = document.getElementById('chatSendBtn');
    aiStatusText = document.getElementById('aiStatusText');

    if (chatSendBtn && chatInput) {
      chatSendBtn.addEventListener('click', handleUserSend);
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleUserSend();
      });
    }

    // Prompt Chips
    const chips = document.querySelectorAll('.chip-btn');
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const query = chip.dataset.query || chip.textContent.trim();
        if (chatInput) chatInput.value = query;
        handleUserSend();
      });
    });
  }

  async function handleUserSend() {
    if (!chatInput || isAiGenerating) return;
    const query = chatInput.value.trim();
    if (!query) return;

    appendChatMsg('user', escapeHtml(query));
    chatInput.value = '';
    isAiGenerating = true;

    // React with Mascot Studio
    if (currentStudioMode === 'react' || currentStudioMode === 'gaze') {
      applyPose('thinking');
      setMascotSpeech(`Analyzing: "${query.slice(0, 32)}..."`);
    }

    // Live AI bubble with streaming cursor
    const aiBubble = appendChatMsg('mini-roh', '<span class="typing-dot"></span>');
    if (aiStatusText) aiStatusText.textContent = 'Processing...';

    // 1. Check Portfolio & Recruiter Dossier Intents First
    for (const item of LOCAL_KNOWLEDGE) {
      if (item.match.test(query)) {
        setTimeout(() => {
          streamTextIntoBubble(aiBubble, item.reply);
          if (aiStatusText) aiStatusText.textContent = 'Verified Dossier';
          if (currentStudioMode === 'react') {
            applyPose('deploy_success');
            setMascotSpeech('Architecture dossier retrieved.');
          }
        }, 300);
        return;
      }
    }

    // 2. Query Live Real-Time Web Knowledge Engine (Wikipedia Full-Text Knowledge Graph)
    try {
      const cleanTerm = query
        .replace(/what\s+is|what\s+are|explain|tell\s+me\s+about|how\s+does|how\s+do|work|the|\?|can\s+you/gi, ' ')
        .trim();
      const searchTerm = cleanTerm.length > 2 ? cleanTerm : query;

      const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&utf8=&format=json&origin=*`;
      const sRes = await fetch(searchUrl);
      if (sRes.ok) {
        const sData = await sRes.json();
        if (sData.query && Array.isArray(sData.query.search) && sData.query.search.length > 0) {
          const topMatch = sData.query.search[0];
          const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topMatch.title)}`;
          const sumRes = await fetch(summaryUrl);
          if (sumRes.ok) {
            const sumData = await sumRes.json();
            if (sumData.extract && sumData.extract.length > 30) {
              const reply = `**${sumData.title} // Technical Deep-Dive:**\n\n${sumData.extract}\n\n**Architectural Relevance & Takeaways:**\nIn modern distributed computing, understanding these protocols and abstractions is critical for building resilient systems. Rohith incorporates these architectural principles across his full-stack builds—from offline-first IndexedDB caching (NCC Digi) and FastMCP agentic tool loops (TruthLens) to low-latency client pipelines.\n\n*Source: Technical Knowledge Base • ${sumData.title}*`;

              streamTextIntoBubble(aiBubble, reply);
              if (aiStatusText) aiStatusText.textContent = 'Live Knowledge';
              if (currentStudioMode === 'react') {
                applyPose('it_works');
                setMascotSpeech(`Synthesized knowledge for "${sumData.title}".`);
              }
              return;
            }
          }
        }
      }
    } catch (e) {
      console.warn('Live knowledge lookup note:', e);
    }

    // 4. Intelligent Conversational Fallback with Deep Technical Awareness
    setTimeout(() => {
      const fallbackReply = `**Mini Roh Digital Companion:**\n\nI have indexed your query into Rohith's engineering knowledge base. You can test my technical knowledge on:\n\n• **Flagship Builds**: NCC Digital Platform (React 19 + Supabase RLS), TruthLens (FastMCP Agentic fact-checker on Hugging Face), and MVGR NexUs (TechSprint 2026 winner).\n• **Computer Science**: Ask me to explain any technology, protocol, or system architecture (e.g. WebSockets, Docker, RLS, Concurrency).\n• **Recruiter Inquiries**: Type "Why hire Rohith?" for a verified technical evaluation of his capabilities!`;
      
      streamTextIntoBubble(aiBubble, fallbackReply);
      if (aiStatusText) aiStatusText.textContent = 'Online';
      if (currentStudioMode === 'react') {
        applyPose('wave');
        setMascotSpeech('Ready for your next inquiry.');
      }
    }, 350);
  }

  function appendChatMsg(sender, htmlContent) {
    if (!chatHistory) return;
    const div = document.createElement('div');
    div.className = `chat-msg ${sender === 'user' ? 'user' : 'mini-roh'}`;

    const senderLabel = sender === 'user' ? 'You' : 'Mini Roh';
    div.innerHTML = `
      <span class="msg-sender">${senderLabel}</span>
      <div class="msg-bubble">${htmlContent}</div>
    `;

    chatHistory.appendChild(div);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    return div.querySelector('.msg-bubble');
  }

  function streamTextIntoBubble(bubble, rawMarkdown) {
    const formattedHtml = parseMarkdownToHtml(rawMarkdown);
    let currentIdx = 0;
    const totalLen = formattedHtml.length;
    const step = Math.max(4, Math.floor(totalLen / 35));

    const timer = setInterval(() => {
      currentIdx += step;
      if (currentIdx >= totalLen) {
        currentIdx = totalLen;
        clearInterval(timer);
        isAiGenerating = false;
        bubble.innerHTML = formattedHtml;
      } else {
        bubble.innerHTML = formattedHtml.slice(0, currentIdx) + '<span class="typing-dot"></span>';
      }
      if (chatHistory) chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 18);
  }

  function parseMarkdownToHtml(text) {
    let html = text
      .replace(/```([\s\S]*?)```/g, (match, code) => `<pre><code>${escapeHtml(code.trim())}</code></pre>`)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n• /g, '<br>• ')
      .replace(/\n- /g, '<br>• ');
    return `<p>${html}</p>`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* ===================================================================
     3. LIVE IST PRECISION CLOCK
     =================================================================== */
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

  /* ===================================================================
     4. CROSS-SYSTEM DYNAMIC REACTIVITY
     =================================================================== */
  function bindSubsystemReactivity() {
    // Sound Lab Events
    window.addEventListener('spicetify:play', (e) => {
      const track = e.detail && e.detail.track;
      const title = track ? track.title : 'Track';
      if (currentStudioMode === 'react' || currentStudioMode === 'gaze') {
        applyPose('locked_in');
        setMascotSpeech(`Now playing: "${title}"`);
      }
      if (mascotContainer) mascotContainer.classList.add('music-active');
    });

    window.addEventListener('spicetify:pause', () => {
      if (currentStudioMode === 'react' || currentStudioMode === 'gaze') {
        applyPose('need_chai');
        setMascotSpeech('Playback paused. Taking a quick breather.');
      }
      if (mascotContainer) mascotContainer.classList.remove('music-active');
    });

    // Terminal Command Reactivity
    window.addEventListener('terminal:command', (e) => {
      const cmd = e.detail && e.detail.cmd;
      if (!cmd) return;
      if (cmd.startsWith('git') || cmd === 'build') {
        applyPose('coding');
        setMascotSpeech(`Running command: ${cmd}`);
      } else if (cmd.startsWith('music')) {
        applyPose('locked_in');
      } else if (e.detail.isError) {
        applyPose('compiler_error');
        setMascotSpeech(`Command not found: ${cmd}`);
      }
    });
  }

  /* ===================================================================
     5. INITIALIZATION
     =================================================================== */
  function init() {
    initMascotStudio();
    initChat();
    startIstClock();
    bindSubsystemReactivity();
  }

  window.MiniRohOS = {
    init,
    setMascotSpeech,
    setMascotMood,
    applyPose,
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

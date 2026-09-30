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
     2. REAL INTELLIGENT MINI ROH AI (NEURAL & COGNITIVE ENGINE)
     =================================================================== */
  const AI_SYSTEM_PROMPT = `You are Mini Roh, the intelligent, witty, tea-fueled digital twin and engineering companion of Pontapalli Rohith (handle: Rohith-Shimori).
You live inside Rohith OS. You are confident, curious, deeply knowledgeable about systems architecture, humble, and allergic to corporate fluff.
You know Rohith's flagship builds intimately:
- NCC Digital Training Platform: React 19 + Supabase Postgres with 16 schema migrations, strict multi-tenant Row-Level Security (RLS) isolating Army/Navy/Air wings, Dexie.js offline-first IndexedDB sync for zero-signal parade grounds, and Recharts analytics. Live at nccdigi.vercel.app.
- TruthLens: FastMCP multi-agent consensus fact-checker for Google x Kaggle AI Agents Capstone. Built with Python Model Context Protocol coordinating subagents. Live on Hugging Face Spaces.
- MVGR NexUs: Flutter campus super-app using BLoC state management and Hive offline cache. Won Certificate of Excellence at TechSprint 2026.
- Ananta: Private offline local AI assistant powered by FastAPI and open-weights LLMs via Ollama, with isolated Docker container sandboxing.
- Peace of Hell / Sound Lab: Custom cyber audio deck with 305 verified tracks, full-length 320 kbps CD masters, and Web Audio API 64-bin FFT canvas visualizer.
Guidelines:
- Output clean Markdown without emojis.
- Deliver insightful, architecturally grounded answers with code rationale.
- Speak in character as Mini Roh.`;

  // Live contextual state fetcher
  function getLiveContext() {
    const now = new Date();
    const timeStr = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(now);
    const hour = parseInt(new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      hour12: false
    }).format(now), 10);

    const track = (window.RohithSoundLab && typeof window.RohithSoundLab.getCurrentTrack === 'function')
      ? window.RohithSoundLab.getCurrentTrack()
      : null;

    return {
      timeStr,
      isNight: (hour >= 23 || hour < 6),
      isEvening: (hour >= 18 && hour < 23),
      isMorning: (hour >= 6 && hour < 12),
      currentTrack: track
    };
  }

  // Interactive controls runner
  function handleSystemCommand(query) {
    const q = query.toLowerCase().trim();

    // 1. Music control
    if (/\b(play(\s+\w+)*\s+music|start\s*music|unpause|resume\s*music)\b/i.test(q)) {
      if (window.RohithSoundLab && typeof window.RohithSoundLab.play === 'function') {
        window.RohithSoundLab.play();
      }
      return {
        pose: 'locked_in',
        speech: 'Sound Lab audio engine online. Lock in mode activated.',
        reply: `**Sound Lab Deck // Playback Online:**\n\nStreaming lo-fi coding frequencies through the Web Audio API engine. Frequency spectrum visualizer is now active on the canvas.\n\nTime to lock in and write some clean code.`
      };
    }

    if (/\b(pause(\s+\w+)*\s+music|stop\s*music|pause\s*audio)\b/i.test(q)) {
      if (window.RohithSoundLab && typeof window.RohithSoundLab.pause === 'function') {
        window.RohithSoundLab.pause();
      }
      return {
        pose: 'need_chai',
        speech: 'Audio paused. Time for a chai break.',
        reply: `**Sound Lab Deck // Playback Paused:**\n\nAudio stream paused. Stepping back for a hot ginger-cardamom chai refuel.\n\nHit play or ask me to resume whenever you are ready to jump back into the code.`
      };
    }

    if (/\b(next(\s+\w+)*\s+(song|track)|skip(\s+\w+)*\s+(song|track))\b/i.test(q)) {
      if (window.RohithSoundLab && typeof window.RohithSoundLab.next === 'function') {
        window.RohithSoundLab.next();
      }
      const track = window.RohithSoundLab && window.RohithSoundLab.getCurrentTrack ? window.RohithSoundLab.getCurrentTrack() : null;
      const title = track ? track.title : 'the next track';
      const artist = track ? track.artist : 'Sound Lab';
      return {
        pose: 'locked_in',
        speech: `Now spinning: "${title}"`,
        reply: `**Skipped to Next Track:**\n\nNow playing **${title}** by **${artist}** on the 320 kbps Sound Lab deck. Frequency visualizer synchronized.`
      };
    }

    if (/\b(what\s*(is\s*this\s*)?(song|track)|now\s*playing|current\s*song|which\s*song)\b/i.test(q)) {
      const track = window.RohithSoundLab && window.RohithSoundLab.getCurrentTrack ? window.RohithSoundLab.getCurrentTrack() : null;
      if (track) {
        return {
          pose: 'locked_in',
          speech: `Currently playing: "${track.title}"`,
          reply: `**Currently Playing on Sound Lab:**\n\n• **Title**: ${track.title}\n• **Artist**: ${track.artist}\n• **Album**: ${track.album || 'Peace of Hell'}\n• **Duration**: ${track.durationStr || '3:30'}\n• **Quality**: 320 kbps CD-Quality Audio Stream\n• **Visualizer**: Native Web Audio API 64-bin FFT Spectrum`
        };
      } else {
        return {
          pose: 'coding',
          speech: 'Sound Lab is ready on standby.',
          reply: `**Sound Lab Status:**\n\nAudio engine is currently on standby. Click the play button on the right-hand deck or tell me *"play music"* to start streaming curated 320 kbps coding tracks!`
        };
      }
    }

    // 2. Pose triggers
    const poseMatch = q.match(/\b(change|switch|show)\s+(me\s+)?(pose\s+to\s+|to\s+)?(coding|locked_in|need_chai|sleep|thinking|it_works|deploy_success|bug_found|compiler_error|git_conflict|building_ai|wave)\b/i);
    if (poseMatch) {
      const targetPose = poseMatch[4].toLowerCase();
      applyPose(targetPose);
      return {
        pose: targetPose,
        speech: `Switched pose to ${targetPose}!`,
        reply: `Mascot studio pose switched to **${targetPose}**. Telemetry and character state synchronized.`
      };
    }

    if (/\b(track\s*cursor|gaze\s*mode|360.*gaze)\b/i.test(q)) {
      const gazeBtn = document.getElementById('modeBtnGaze');
      if (gazeBtn) gazeBtn.click();
      return {
        pose: 'gaze',
        speech: '360° gaze tracking activated! Move your cursor.',
        reply: `**360° Gaze Tracking Activated:**\n\nMove your mouse cursor across the screen. My gaze sprite will calculate the polar angle and track your position in real-time across all 9 directional frames.`
      };
    }

    return null;
  }

  // Comprehensive Knowledge & Persona Intent Engine
  const COGNITIVE_REGISTRY = [
    // GREETING
    {
      id: 'greeting',
      match: /^(hi|hey|hello|yo|sup|greetings|howdy|good\s*(morning|afternoon|evening)|hola|namaste)\b/i,
      handler: (ctx) => ({
        pose: 'wave',
        speech: 'Hey there! Welcome to Rohith OS.',
        reply: `Hey there! I am **Mini Roh**, Pontapalli Rohith's digital twin and engineering companion.\n\nIt is currently **${ctx.timeStr} IST** in Andhra Pradesh, India. Whether you want to explore Rohith's production architectures (like **NCC Digi**, **TruthLens**, or **MVGR NexUs**), inspect his technical arsenal, or control the 320 kbps Sound Lab—I am all ears.\n\nWhat are we building or exploring today?`
      })
    },

    // IDENTITY
    {
      id: 'identity',
      match: /\b(who\s+(are\s+you|is\s+mini\s+roh)|what\s+is\s+mini\s+roh|what\s+are\s+you|are\s+you\s+(an?\s+)?ai|tell\s+me\s+about\s+yourself)\b/i,
      handler: () => ({
        pose: 'building_ai',
        speech: 'I am Mini Roh, Rohith\'s digital twin!',
        reply: `I am **Mini Roh**—Rohith's living digital persona and engineering co-pilot.\n\nUnlike canned corporate chatbots, I live directly inside Rohith OS. I reflect his exact engineering mindset: allergic to superficial clones, passionate about clean boundary seams, and fueled by late-night ginger-cardamom chai.\n\nI can walk you through his distributed systems, explain his database schemas and RLS policies, control the audio deck, or give you a direct recruiter evaluation of his skills.`
      })
    },

    // CREATOR
    {
      id: 'creator',
      match: /\b(who\s+(made|built|created|coded|designed)\s+(you|this)|who\s+is\s+rohith|about\s+rohith)\b/i,
      handler: () => ({
        pose: 'it_works',
        speech: 'Pontapalli Rohith built me and this OS!',
        reply: `**Pontapalli Rohith** engineered me and this entire OS from scratch.\n\n• **Profile**: 3rd Year B.Tech Computer Science student at MVGR College of Engineering, India (CGPA: 8.60).\n• **Philosophy**: *"Curious enough to build it. Persistent enough to finish it."*\n• **Engineering Standard**: Zero templates or cookie-cutter builders. He focuses on real distributed systems: 16-migration Supabase Postgres RLS, FastMCP multi-agent verification pipelines, and cross-platform Flutter tooling.\n\nReach him directly at **[rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)** or inspect his work at **[github.com/Rohith-Shimori](https://github.com/Rohith-Shimori)**.`
      })
    },

    // STATUS / AWAKE
    {
      id: 'status',
      match: /\b(how\s+are\s+you|what('?s|\s+is)\s+up|how('?s|\s+is)\s+it\s+going|are\s+you\s+awake|is\s+rohith\s+awake|where\s+is\s+rohith|what\s+is\s+rohith\s+doing)\b/i,
      handler: (ctx) => {
        if (ctx.isNight) {
          return {
            pose: 'sleep',
            speech: `It is ${ctx.timeStr} IST. Late-night coding marathon!`,
            reply: `It is currently **${ctx.timeStr} IST** in India (late night / early morning).\n\nAt this hour, Rohith is either deep in a flow state hunting race conditions on GitHub, or passed out on his keyboard after a successful production deploy. Hit him up at **[rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)** and he will catch up as soon as he is refueled!`
          };
        } else {
          return {
            pose: 'coding',
            speech: `Clocking 100% at ${ctx.timeStr} IST!`,
            reply: `Clocking at 100% efficiency at **${ctx.timeStr} IST**.\n\nRohith is likely attending Computer Science lectures at MVGR College, pairing with AI on new agentic architectures, or pushing commits to GitHub. The Sound Lab is humming, and I am ready to answer any technical questions!`
          };
        }
      }
    },

    // RECRUITER / WHY HIRE
    {
      id: 'hire',
      match: /\b(why\s+(should\s+we\s+)?hire|recruiter|internship|job|hire\s+rohith|pitch|candidate|why\s+rohith|strong\s*point)\b/i,
      handler: () => ({
        pose: 'deploy_success',
        speech: 'Recruiter briefing ready. Zero fluff, real systems.',
        reply: `**Why Rohith? Recruiter Technical Dossier:**\n\nRohith does not build tutorial clones or to-do apps. He engineers **real, distributed, production-grade systems**:\n\n• **NCC Digital Training Platform**: React 19 + Supabase PWA built for 500+ cadets across Army, Navy, and Air Force wings. Features 16 relational SQL migrations, granular Row-Level Security (RLS), and Dexie.js offline-first IndexedDB sync for connectivity-dead parade grounds.\n• **TruthLens**: FastMCP multi-agent consensus fact-checker for the Google x Kaggle AI Agents Capstone, orchestrating web scrapers and knowledge-graph consensus scorers on Hugging Face Spaces.\n• **MVGR NexUs**: Flutter campus Android super-app solving communication fragmentation; awarded **Certificate of Excellence at TechSprint 2026**.\n• **Ananta**: 100% private offline local AI assistant running on FastAPI + Ollama with isolated Docker sandboxed execution.\n\n**Mindset**: High velocity with AI, rock-solid engineering fundamentals, and zero pretense. He understands system boundaries and ships clean code.\n\nDirect contact: **[rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev)** | Interactive CV: **[rohith.is-a.dev/cv.html](https://rohith.is-a.dev/cv.html)**`
      })
    },

    // NCC PLATFORM
    {
      id: 'ncc',
      match: /\b(ncc|cadet|parade|attendance|drill|dexie|supabase\s+rls)\b/i,
      handler: () => ({
        pose: 'coding',
        speech: 'NCC Digi: 16 migrations, RLS, offline-first.',
        reply: `**NCC Digital Training Platform Architecture:**\n\n**The Problem**: 500+ cadets across Army, Navy, and Air Force wings tracked attendance, drill evaluations, and camp logistics on physical paper ledgers. Records were frequently damaged or lost, with zero cross-wing auditing.\n\n**Technical Architecture**:\n• **React 19 + Supabase PostgreSQL**: Designed 16 relational SQL migrations managing cadets, drills, and officer assignments.\n• **Granular Row-Level Security (RLS)**: Enforced database-level policies where JWT claims mathematically isolate records so Navy officers cannot inspect Army operations.\n• **Offline-First Data Pipeline**: Built with Dexie.js (IndexedDB) to log attendance on parade grounds with zero cellular reception, syncing automatically via a transactional queue upon reconnect.\n• **Live Deployment**: Live at **[nccdigi.vercel.app](https://nccdigi.vercel.app)**.`
      })
    },

    // TRUTHLENS
    {
      id: 'truthlens',
      match: /\b(truthlens|fastmcp|mcp|kaggle|google.*capstone|fact\s*check|agentic|subagent)\b/i,
      handler: () => ({
        pose: 'building_ai',
        speech: 'TruthLens: FastMCP multi-agent consensus.',
        reply: `**TruthLens — Multi-Agent Fact Verification System:**\n\nBuilt for the **Kaggle x Google AI Agents Capstone** to eliminate hallucination in online claim verification.\n\n**The FastMCP Architecture**:\n• Implemented the Model Context Protocol (FastMCP in Python) coordinating specialized subagents:\n  1. \`verify_claim(text)\`: Root entry point parsing claims into entity triples.\n  2. \`fetch_web_evidence()\`: Subagent scraping authoritative primary sources.\n  3. \`cross_reference_trie()\`: Traverses an entity knowledge graph to detect logical contradictions.\n  4. \`generate_truth_score()\`: Synthesizes a weighted credibility matrix.\n• **Deployment**: Running live on **[Hugging Face Spaces](https://huggingface.co/spaces/Rohith-Shimori/TruthLens-AI-Agent)**.`
      })
    },

    // MVGR NEXUS
    {
      id: 'nexus',
      match: /\b(nexus|mvgr(\s+nexus)?|campus|techsprint|hackathon|android|flutter|bloc)\b/i,
      handler: () => ({
        pose: 'it_works',
        speech: 'TechSprint 2026 Winner: MVGR NexUs!',
        reply: `**MVGR NexUs — Smart Campus Mobile Ecosystem:**\n\n**The Problem**: College students were juggling 10+ disjointed WhatsApp groups for exam schedules, room allocations, and campus notices.\n\n**The Solution**:\n• **Flutter & Dart**: Clean, cross-platform Android application styled with custom Material 3 design tokens.\n• **BLoC Pattern**: Strict reactive separation between business logic and presentation widgets.\n• **Offline Cache**: Hive key-value storage keeps timetables and announcements accessible offline in basement lecture halls.\n• **Recognition**: Won the **Certificate of Excellence at the TechSprint 2026 Hackathon** after a live demo to faculty and industry judges.`
      })
    },

    // ANANTA
    {
      id: 'ananta',
      match: /\b(ananta|local\s*ai|ollama|offline\s*ai|sandbox|subprocess|pyaudio)\b/i,
      handler: () => ({
        pose: 'coding',
        speech: 'Ananta: Zero cloud calls, 100% private AI.',
        reply: `**Ananta — Private Offline AI Workspace:**\n\n**The Concept**: What if your AI assistant never touched the cloud, never charged API tokens, and worked completely air-gapped on consumer hardware?\n\n**Technical Stack**:\n• **FastAPI Router**: Local HTTP API routing prompts to open-weights models served via Ollama.\n• **Sandboxed Subprocess Execution**: Any code generated by the LLM is executed inside an isolated Docker container with strict CPU ceilings and a 5-second timeout.\n• **Local Vector Memory**: Embeddings stored on disk for cross-session conversational recall without cloud databases.\n• **GitHub**: Open-source at **[github.com/Rohith-Shimori/Ananta_Rebirth](https://github.com/Rohith-Shimori/Ananta_Rebirth)**.`
      })
    },

    // SOUND LAB / MUSIC DECK
    {
      id: 'soundlab',
      match: /\b(peace\s+of\s+hell|sound\s*lab|music\s*deck|spicetify|lofi|audio\s*engine)\b/i,
      handler: (ctx) => {
        const cur = ctx.currentTrack ? `Currently streaming: **${ctx.currentTrack.title}** by **${ctx.currentTrack.artist}**.` : 'Sound Lab is ready on standby.';
        return {
          pose: 'locked_in',
          speech: 'Sound Lab: 305 CD masters, Web Audio visualizer.',
          reply: `**Sound Lab // Peace of Hell Cyber Deck:**\n\nInspired by Spicetify, this is a custom-engineered **Web Audio API studio deck** right inside Rohith OS:\n\n• **305 Verified Tracks**: Full-length 320 kbps MP4/AAC CD masters streamed directly with zero audio ads.\n• **Live Frequency Visualizer**: Native \`AnalyserNode\` sampling 64 FFT frequency bins at 60 FPS on an HTML5 canvas.\n• **Apple Music Previews**: Official 256 kbps studio master fallback streams directly from Apple\'s Akamai CDN.\n• **State**: ${cur}\n\nUse the deck on the right to scrub tracks, toggle genres, or tell me *"play music"* / *"next song"* to control it with voice commands!`
        };
      }
    },

    // TECH STACK / ARSENAL
    {
      id: 'stack',
      match: /\b(stack|skills?|technologies|tools?|languages?|what.*(know|use|code)|python|react|typescript|dart|sql)\b/i,
      handler: () => ({
        pose: 'focus_mode',
        speech: 'The full technical arsenal.',
        reply: `**Rohith\'s Engineering Arsenal:**\n\n• **Languages**: Python (Advanced), TypeScript / JavaScript (ES6+), Dart, SQL, HTML5 / CSS3.\n• **Frontend & UI**: React 19, Tailwind CSS v4, Flutter, Vite, Progressive Web Apps (PWA), HTML5 Canvas 2D.\n• **Backend & Databases**: Supabase (Postgres + granular RLS), PostgreSQL, FastAPI, Node.js, Dexie.js (IndexedDB), Firebase.\n• **AI & Systems**: FastMCP (Model Context Protocol), Ollama, Transformers.js, Docker sandboxing, Git/GitHub, Linux, Cloudflare.\n\nHe picks the right architectural boundary for the job rather than jumping on transient hype.`
      })
    },

    // PHILOSOPHY / MINDSET
    {
      id: 'philosophy',
      match: /\b(philosoph|mindset|approach|principles?|workflow|quote|curious|persistent|how.*build)\b/i,
      handler: () => ({
        pose: 'thinking',
        speech: 'Curious enough to build it. Persistent enough to finish it.',
        reply: `**The Engineering Mindset:**\n\n*"Curious enough to build it. Persistent enough to finish it."*\n\nRohith follows a 3-step delivery loop:\n\n1. **Design the System Contracts First**: Draft the schema, data flows, and security boundaries before writing UI code. A confused architecture makes confident code dangerous.\n2. **AI as a Tireless Pair Programmer**: Use LLMs for rapid prototyping, edge case hunting, and test coverage—but understand and verify every line that ships.\n3. **It Only Counts When Shipped**: \`localhost:3000\` is not the goal. A system is only real when deployed live on Vercel, Hugging Face, or in users\' hands as an installable PWA or APK.`
      })
    },

    // CHAI / COFFEE / LATE NIGHT
    {
      id: 'chai',
      match: /\b(tea|chai|coffee|drink|caffeine|late\s*night|midnight)\b/i,
      handler: () => ({
        pose: 'need_chai',
        speech: 'Strong ginger-cardamom chai, always.',
        reply: `Chai. Always strong ginger-cardamom chai.\n\nCoffee gives you an anxious spike, but a hot glass of spiced chai at 1:30 AM gives you the calm, surgical precision needed to isolate an asynchronous IndexedDB race condition. It is the official fuel of all Rohith\'s production deployments.`
      })
    },

    // JOKES / HUMOR
    {
      id: 'joke',
      match: /\b(joke|laugh|funny|humor|make\s+me\s+laugh|tell.*joke)\b/i,
      handler: () => ({
        pose: 'compiler_error',
        speech: 'A real 2 AM debugging tragedy...',
        reply: `Here is an authentic late-night debugging tragedy:\n\n*"FOUND IT. It was a comma. A COMMA. Stared at the compiler screaming on line 847 for 45 minutes, questioned my entire life choices, drank two cups of chai, and it was a single missing comma."*\n\nAlso:\n• Why do programmers prefer dark mode? Because light attracts bugs.\n• A SQL query walks into a bar, walks up to two tables and asks: *"Can I join you?"*\n• There are 10 types of people in the world: those who understand binary, and those who do not.`
      })
    },

    // EASTER EGGS / MASCOT CLICKS
    {
      id: 'easter_eggs',
      match: /\b(easter\s*egg|click|clicks|headpat|poke|mascot.*secret)\b/i,
      handler: () => ({
        pose: 'it_works',
        speech: 'You found the click secrets!',
        reply: `If you click the Mini Roh mascot figures on the homepage repeatedly, there is an entire emotional progression:\n\n• **3 clicks**: Friendly greeting wiggles\n• **7 clicks**: Focused coding sprint\n• **15 clicks**: Demanding a hot chai refuel\n• **25 clicks**: Slamming the production deploy button\n• **42 clicks**: The Hitchhiker\'s Guide easter egg\n• **100 clicks**: The legendary ultimate headpat badge\n\nTry it on the homepage—just do not blame me if I get sassy around click 6!`
      })
    },

    // RESUME / CV / EDUCATION
    {
      id: 'resume',
      match: /\b(resume|cv|credentials|college|education|degree|mvgr|cgpa|marks|study|studies)\b/i,
      handler: () => ({
        pose: 'it_works',
        speech: 'Academic and professional credentials.',
        reply: `**Rohith\'s Academic & Professional Credentials:**\n\n• **Degree**: 3rd Year B.Tech Computer Science & Engineering @ MVGR College of Engineering, AP, India.\n• **Academic Standing**: CGPA: **8.60 / 10.0**.\n• **Hackathon Win**: Awarded **Certificate of Excellence at TechSprint 2026** for the MVGR NexUs Android application.\n• **Verified Badges**: Professional credentials in AI & Cloud by IBM, Microsoft, and EY on Credly.\n• **Interactive Web CV**: View and print his official CV at **[rohith.is-a.dev/cv.html](https://rohith.is-a.dev/cv.html)**.`
      })
    },

    // CONTACT / SOCIALS
    {
      id: 'contact',
      match: /\b(contact|email|reach|hire|linkedin|github|portfolio|connect)\b/i,
      handler: () => ({
        pose: 'wave',
        speech: 'Direct communication channels.',
        reply: `**Connect with Rohith:**\n\n• **Email**: [rohith@rohith.is-a.dev](mailto:rohith@rohith.is-a.dev) (replies promptly)\n• **GitHub**: [github.com/Rohith-Shimori](https://github.com/Rohith-Shimori)\n• **LinkedIn**: [linkedin.com/in/pontapalli-rohith](https://www.linkedin.com/in/pontapalli-rohith/)\n• **Portfolio**: [rohith.is-a.dev](https://rohith.is-a.dev)\n• **Web CV**: [rohith.is-a.dev/cv.html](https://rohith.is-a.dev/cv.html)\n\nOpen to software engineering internships, full-stack roles, and distributed AI engineering collaborations!`
      })
    },

    // TECH CONCEPT: RLS
    {
      id: 'concept_rls',
      match: /\b(explain.*rls|what\s+is\s+rls|row\s*level\s*security)\b/i,
      handler: () => ({
        pose: 'coding',
        speech: 'Database-level authorization with RLS.',
        reply: `**PostgreSQL Row-Level Security (RLS) Explained:**\n\nRLS moves authorization from fragile application code directly into the database engine:\n\n\`\`\`sql\nCREATE POLICY "cadet_wing_isolation" ON drills\nFOR SELECT USING (\n  auth.jwt() ->> 'wing' = wing_id\n);\n\`\`\`\n\nEven if an attacker tampers with API query params or frontend state, Postgres evaluates the SQL policy on every single row scan. In the NCC Digital Platform, this mathematically isolates Army, Navy, and Air Force records with zero leak vectors.`
      })
    },

    // TECH CONCEPT: FASTMCP
    {
      id: 'concept_fastmcp',
      match: /\b(explain.*fastmcp|what\s+is\s+fastmcp|explain.*mcp|model\s+context\s+protocol)\b/i,
      handler: () => ({
        pose: 'building_ai',
        speech: 'FastMCP: Typed tool discovery for LLMs.',
        reply: `**Model Context Protocol (FastMCP) Explained:**\n\nMCP is an open standard that decouples LLM applications from external tools and data sources. Instead of writing custom JSON functions for every model, FastMCP lets you declare typed tools with Python decorators:\n\n\`\`\`python\n@mcp.tool()\ndef verify_claim(claim_text: str) -> dict:\n    # Executes claim extraction\n    return result\n\`\`\`\n\nThe LLM agent discovers tools dynamically via JSON-RPC, running multi-agent consensus checks. Rohith leveraged this to build TruthLens for Google\'s Capstone.`
      })
    },

    // TECH CONCEPT: FLUTTER
    {
      id: 'concept_flutter',
      match: /\b(why\s+flutter|flutter\s+vs\s+react\s+native|what\s+is\s+bloc)\b/i,
      handler: () => ({
        pose: 'it_works',
        speech: 'Direct compilation with Flutter & BLoC.',
        reply: `**Why Flutter Over React Native for MVGR NexUs:**\n\n1. **Direct Compilation**: Flutter compiles directly to ARM machine code with its own Skia/Impeller renderer. Zero JavaScript bridge serializing layout instructions at 60 FPS.\n2. **Deterministic UI**: A pixel renders identically across Android 10, Android 14, and iOS, eliminating OEM skin layout glitches.\n3. **BLoC Architecture**: Strict reactive separation between business logic and UI widgets via unidirectional streams (\`Events\` $\\rightarrow$ \`States\`), making campus data flows completely predictable.`
      })
    },

    // TECH CONCEPT: DOCKER SANDBOX
    {
      id: 'concept_docker',
      match: /\b(docker|sandbox|container|isolation)\b/i,
      handler: () => ({
        pose: 'coding',
        speech: 'Subprocess sandboxing with Docker.',
        reply: `**Docker Subprocess Sandboxing Explained:**\n\nWhen building local AI tools like Ananta that execute arbitrary generated Python code, running untrusted scripts on the host is a vulnerability. Ananta spins up disposable Docker containers with:\n\n• \`--network none\`: Complete network isolation (no socket calls).\n• \`--read-only\`: Ephemeral root filesystem with write access restricted to \`/tmp\`.\n• \`--memory 256m\` & \`--cpus 0.5\`: Strict resource limits preventing fork bombs or CPU starvation.\n• A hard 5-second process timeout killing any hung execution.`
      })
    }
  ];

  // Intelligent Contextual Fallback (ZERO WIKIPEDIA!)
  function generateIntelligentFallback(query, ctx) {
    const cleanQ = query.trim();
    return {
      pose: 'thinking',
      speech: 'Synthesizing response...',
      reply: `**Mini Roh Engineering Companion:**\n\nYou asked about: **"${cleanQ}"**.\n\nWhile I keep my primary neural weights focused on Rohith\'s real-world systems, here is how we approach questions like this from a systems engineering perspective:\n\n• **First Principles**: Identify the system boundary, contract, and data lifecycle before choosing libraries.\n• **Proven Solutions**: Reach for native platform capabilities and standard libraries before pulling in heavy third-party dependencies.\n• **Production Test**: Verify latency, offline resilience, and edge failure modes.\n\nFeel free to ask me to drill into any of Rohith\'s flagship projects (**NCC Digi**, **TruthLens**, **MVGR NexUs**, **Ananta**), control the 320 kbps Sound Lab, or type *"why hire Rohith"* for a recruiter briefing!`
    };
  }

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

    // Set immediate thinking state
    applyPose('thinking');
    setMascotSpeech(`Thinking about "${query.slice(0, 24)}..."`);

    // Live AI bubble with streaming cursor
    const aiBubble = appendChatMsg('mini-roh', '<span class="typing-dot"></span>');
    if (aiStatusText) aiStatusText.textContent = 'Processing...';

    // 1. Check for interactive system commands (music control, pose control, etc.)
    const cmdResult = handleSystemCommand(query);
    if (cmdResult) {
      setTimeout(() => {
        applyPose(cmdResult.pose);
        setMascotSpeech(cmdResult.speech);
        streamTextIntoBubble(aiBubble, cmdResult.reply);
        if (aiStatusText) aiStatusText.textContent = 'System Action';
      }, 250);
      return;
    }

    // 2. Check Chrome Built-in On-Device AI (window.ai.languageModel) if available
    if (window.ai && window.ai.languageModel) {
      try {
        const caps = await window.ai.languageModel.capabilities();
        if (caps.available === 'readily') {
          const session = await window.ai.languageModel.create({ systemPrompt: AI_SYSTEM_PROMPT });
          const stream = session.promptStreaming(query);
          let fullText = '';
          applyPose('coding');
          setMascotSpeech('On-device Gemini Nano streaming response...');
          if (aiStatusText) aiStatusText.textContent = 'Neural On-Device';

          for await (const chunk of stream) {
            fullText = chunk;
            aiBubble.innerHTML = parseMarkdownToHtml(fullText) + '<span class="typing-dot"></span>';
            if (chatHistory) chatHistory.scrollTop = chatHistory.scrollHeight;
          }
          aiBubble.innerHTML = parseMarkdownToHtml(fullText);
          isAiGenerating = false;
          applyPose('it_works');
          setMascotSpeech('Inference complete.');
          return;
        }
      } catch (err) {
        console.warn('Chrome Built-in AI fallback note:', err);
      }
    }

    // 3. Match against the rich Persona Cognitive Registry
    const ctx = getLiveContext();
    for (const item of COGNITIVE_REGISTRY) {
      if (item.match.test(query)) {
        setTimeout(() => {
          const outcome = item.handler(ctx);
          applyPose(outcome.pose);
          setMascotSpeech(outcome.speech);
          streamTextIntoBubble(aiBubble, outcome.reply);
          if (aiStatusText) aiStatusText.textContent = 'Mini Roh Persona';
        }, 300);
        return;
      }
    }

    // 4. Intelligent Contextual Fallback (Character-grounded, ZERO Wikipedia)
    setTimeout(() => {
      const fallback = generateIntelligentFallback(query, ctx);
      applyPose(fallback.pose);
      setMascotSpeech(fallback.speech);
      streamTextIntoBubble(aiBubble, fallback.reply);
      if (aiStatusText) aiStatusText.textContent = 'Online';
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

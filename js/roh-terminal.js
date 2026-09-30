/**
 * THE HACKER TERMINAL (roh-sh)
 * Authentic aerospace command deck with inline active prompt & zero wasted space.
 */

(function () {
  'use strict';

  const COMMANDS = [
    'help',
    'git status',
    'git log',
    'ls projects',
    'cat ncc',
    'cat truthlens',
    'cat nexus',
    'cat ananta',
    'music play',
    'music pause',
    'music next',
    'music prev',
    'whoami',
    'ask',
    'date',
    'clear'
  ];

  const PROJECT_DOSSIERS = {
    ncc: `[NCC DIGITAL PLATFORM] — Full-Stack Cadet Training Management System
----------------------------------------------------------------
• Stack: React 19, Supabase Postgres, Dexie.js (Offline IndexedDB), Recharts
• Key Feat: 16 schema migrations with granular Row-Level Security (RLS)
• Defense: Isolates Navy, Army & Air wings at database level
• Deployed: Live at https://nccdigi.vercel.app for active cadet corps`,

    truthlens: `[TRUTHLENS] — FastMCP Multi-Agent Autonomous Fact-Checker
----------------------------------------------------------------
• Built for: Kaggle x Google AI Agents Capstone
• Architecture: Coordinated subagent triage orchestrating web scrapers,
  knowledge-graph trie cross-referencing, and consensus truth scoring
• Framework: FastMCP Python + Hugging Face Spaces deployment`,

    nexus: `[MVGR NEXUS] — Campus Community Super-App
----------------------------------------------------------------
• Stack: Flutter (Dart), Firebase, Cloud Functions, BLoC Architecture
• Recognition: Certificate of Excellence @ TechSprint 2026 Hackathon
• Highlights: Real-time peer tutoring forums, lost & found neural search`,

    ananta: `[ANANTA REBIRTH] — Local Autonomous Agentic Assistant
----------------------------------------------------------------
• Stack: Python, FastAPI, Local Ollama Models, Docker Sandbox
• Features: Sandboxed safe code execution, vector memory persistence`
  };

  let history = [];
  let historyIdx = -1;

  const dom = {
    card: null,
    body: null,
    log: null,
    input: null
  };

  function init() {
    dom.card = document.getElementById('terminalCard');
    dom.body = document.getElementById('terminalBody');
    dom.log = document.getElementById('terminalLog');
    dom.input = document.getElementById('terminalInput');

    if (!dom.input || !dom.body) return;

    dom.input.addEventListener('keydown', handleKeyDown);

    // Clicking anywhere in terminal focuses the prompt input
    if (dom.card) {
      dom.card.addEventListener('click', () => dom.input.focus());
    }

    printWelcome();
  }

  function printWelcome() {
    if (!dom.log) return;
    appendLine('system', `╔══════════════════════════════════════════════════════════════╗
║  ROHITH OS (roh-sh) v2.4.0-release [x86_64-aerospace-darwin] ║
║  Host: Pontapalli Rohith (AP, India) • Shell: roh-sh         ║
║  Type "help" for manual, or "music play" to launch beats.    ║
╚══════════════════════════════════════════════════════════════╝`);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      const raw = dom.input.value.trim();
      if (!raw) return;

      history.push(raw);
      historyIdx = history.length;

      executeCommand(raw);
      dom.input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIdx > 0) {
        historyIdx--;
        dom.input.value = history[historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx < history.length - 1) {
        historyIdx++;
        dom.input.value = history[historyIdx];
      } else {
        historyIdx = history.length;
        dom.input.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = dom.input.value.trim().toLowerCase();
      const match = COMMANDS.find(c => c.startsWith(current));
      if (match) {
        dom.input.value = match;
      }
    }
  }

  function executeCommand(raw) {
    appendLine('cmd', `<span class="prompt-user">mini-roh@rohith-os</span>:<span class="prompt-path">~</span>$ ${escapeHtml(raw)}`);

    const parts = raw.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    switch (cmd) {
      case 'help':
        appendLine('output', `Available system commands:
  help              Show this system command directory
  git status        Display live GitHub branch & commit telemetry
  git log           Stream latest commit log history
  ls projects       List flagship engineering repositories
  cat <project>     Inspect system architecture (ncc, truthlens, nexus, ananta)
  music <cmd>       Control audio deck (play, pause, next, prev, vol <0-100>)
  ask <query>       Send question directly to Mini Roh AI brain
  whoami            Print engineer credentials & resume dossier
  date              Display current system time in IST
  clear             Clear terminal scrollback`);
        break;

      case 'git':
        if (arg === 'status') {
          appendLine('success', `On branch main\nYour branch is up to date with 'origin/main'.\nStatus: [OK] 0 merge conflicts, 9 public repos, continuous shipping.`);
        } else if (arg === 'log') {
          appendLine('accent', `commit 2f12982 (HEAD -> main, origin/main)
Author: Pontapalli Rohith <rohith@rohith.is-a.dev>
Date:   Recent Push
    feat: restore signature aerospace ticker, bento glow & cursor follower

commit 8a4c699
Author: Pontapalli Rohith <rohith@rohith.is-a.dev>
Date:   Past Sprint
    feat: implement 9-direction sprite gaze tracking engine`);
        } else {
          appendLine('error', `git: '${arg}' is not a recognized git subcommand. Try 'git status' or 'git log'.`);
        }
        break;

      case 'ls':
        if (arg === 'projects' || arg === '') {
          appendLine('accent', `[FLAGSHIP PROJECTS]
  ncc/           -> React 19 + Supabase RLS cadet management PWA
  truthlens/     -> FastMCP multi-agent fact checker (Kaggle x Google)
  nexus/         -> Flutter + BLoC student super-app (TechSprint '26)
  ananta/        -> Local autonomous AI assistant with Ollama`);
        } else {
          appendLine('error', `ls: cannot access '${arg}': No such file or directory`);
        }
        break;

      case 'cat':
        const projKey = arg.toLowerCase().replace(/[\/\\]/g, '');
        if (PROJECT_DOSSIERS[projKey]) {
          appendLine('output', PROJECT_DOSSIERS[projKey]);
        } else {
          appendLine('error', `cat: '${arg}': File not found. Try: cat ncc, cat truthlens, cat nexus, cat ananta`);
        }
        break;

      case 'music':
        handleMusicCommand(arg);
        break;

      case 'whoami':
        appendLine('output', `USER: Recruiter / Engineering Leader
HOST: Pontapalli Rohith (Rohith-Shimori)
ROLE: Full-Stack & Agentic AI Systems Architect
ACADEMICS: 3rd Year B.Tech CSE @ MVGR College of Engineering, AP, India
CONTACT: rohith@rohith.is-a.dev | https://linkedin.com/in/pontapalli-rohith`);
        break;

      case 'ask':
        if (!arg) {
          appendLine('error', 'Usage: ask <your question here>');
        } else {
          appendLine('accent', `[Piping to Mini Roh AI brain]: "${escapeHtml(arg)}"`);
          if (window.MiniRohOS && window.MiniRohOS.askAI) {
            window.MiniRohOS.askAI(arg);
          }
        }
        break;

      case 'date':
        const now = new Date();
        const ist = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium'
        }).format(now);
        appendLine('output', `IST: ${ist}`);
        break;

      case 'clear':
        if (dom.log) dom.log.innerHTML = '';
        printWelcome();
        return;

      default:
        appendLine('error', `roh-sh: command not found: ${escapeHtml(cmd)}. Type 'help' for directory.`);
    }

    scrollToBottom();
  }

  function handleMusicCommand(arg) {
    const player = window.RohithSoundLab || window.CyberAudio || window.SpicetifyPlayer;
    if (!player) {
      appendLine('error', 'Audio Engine not initialized.');
      return;
    }

    const sub = arg.toLowerCase().trim();
    if (sub === 'play') {
      player.play();
      const track = player.getCurrentTrack ? player.getCurrentTrack() : null;
      appendLine('success', '[PLAY] Audio: Playing "' + (track ? track.title : 'Track') + '"');
    } else if (sub === 'pause') {
      player.pause();
      appendLine('output', '[PAUSE] Audio: Playback paused.');
    } else if (sub === 'next') {
      player.next();
      const track = player.getCurrentTrack ? player.getCurrentTrack() : null;
      appendLine('success', '[NEXT] Audio: Switched to "' + (track ? track.title : 'Track') + '"');
    } else if (sub === 'prev') {
      player.prev();
      const track = player.getCurrentTrack ? player.getCurrentTrack() : null;
      appendLine('success', '[PREV] Audio: Switched to "' + (track ? track.title : 'Track') + '"');
    } else if (sub === 'playlist') {
      if (player.switchChannel) player.switchChannel('playlist');
      else if (player.setSource) player.setSource('playlist');
      appendLine('success', '[CHANNEL] Switched to Sound Lab (307 Tracks)');
    } else if (sub === 'lofi') {
      if (player.switchChannel) player.switchChannel('lofi');
      else if (player.setSource) player.setSource('lofi');
      appendLine('success', '[CHANNEL] Switched to Focus Lo-Fi Radio');
    } else if (sub.startsWith('vol')) {
      const num = parseInt(sub.split(/\s+/)[1], 10);
      if (!isNaN(num)) {
        player.setVolume(num);
        appendLine('output', `[VOL] Volume adjusted to ${num}%`);
      } else {
        appendLine('error', 'Usage: music vol <0-100>');
      }
    } else {
      appendLine('output', `Audio command options:
  music play            Start / resume playback
  music pause           Pause current track
  music next            Skip to next track
  music prev            Return to previous track
  music playlist        Switch to Sound Lab (307 tracks)
  music lofi            Switch to Focus Lo-Fi Radio
  music vol <0-100>     Adjust volume`);
    }
  }

  function appendLine(type, html) {
    if (!dom.log) return;
    const div = document.createElement('div');
    div.className = `term-line ${type}`;
    div.innerHTML = html;
    dom.log.appendChild(div);
  }

  function scrollToBottom() {
    if (dom.body) {
      dom.body.scrollTop = dom.body.scrollHeight;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  window.RohTerminal = {
    init,
    appendLine,
    executeCommand
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

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
        handleGitCommand(arg);
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

  function handleGitCommand(arg) {
    const rawArg = (arg || '').trim();
    const parts = rawArg.split(/\s+/);
    const sub = parts[0] ? parts[0].toLowerCase() : '';
    const telemetry = window.GitHubSynapse && window.GitHubSynapse.getTelemetry ? window.GitHubSynapse.getTelemetry() : null;
    const commits = (telemetry && Array.isArray(telemetry.commits) && telemetry.commits.length > 0)
      ? telemetry.commits
      : [
          { sha: '7da2d4f', message: 'chore(music): auto-sync live Spotify playlist Peace of Hell', date: '2026-10-03T02:42:11Z', author: 'github-actions[bot]', repo: 'Rohith-Shimori/portfolio' },
          { sha: 'ac400a8', message: 'feat(ai): overhaul Mini Roh AI cognitive engine and connect interactive OS controls', date: '2026-10-01T00:21:00+05:30', author: 'Rohith-Shimori', repo: 'Rohith-Shimori/portfolio' },
          { sha: '0a433e3', message: 'seo: update sitemap lastmod timestamps to 2026-09-30', date: '2026-09-30T23:43:05+05:30', author: 'Rohith-Shimori', repo: 'Rohith-Shimori/portfolio' },
          { sha: '7ea2deb', message: 'perf & a11y: enforce strict artist stream matching, cut 5.8MB payload, and achieve 100/100/100/100 Lighthouse & Agentic Browsing', date: '2026-09-30T23:37:51+05:30', author: 'Rohith-Shimori', repo: 'Rohith-Shimori/portfolio' }
        ];

    if (!sub || sub === 'status') {
      const pubRepos = (telemetry && telemetry.profile && telemetry.profile.public_repos !== undefined) ? telemetry.profile.public_repos : 8;
      const head = commits[0] || { sha: '7da2d4f', message: 'chore(music): auto-sync live Spotify playlist Peace of Hell' };
      appendLine('success', `On branch main\nYour branch is up to date with 'origin/main'.\n\nTracking: https://github.com/Rohith-Shimori/portfolio.git\nHEAD commit: ${head.sha} (${escapeHtml(head.message)})\nPublic repositories: ${pubRepos} tracked via GitHub Synapse\nWorking tree: clean, zero merge conflicts, CI/CD automated.`);
      return;
    }

    if (sub === 'log') {
      const isOneLine = parts.includes('--oneline');
      let limit = 5;
      const nIdx = parts.indexOf('-n');
      if (nIdx !== -1 && parts[nIdx + 1]) {
        const parsed = parseInt(parts[nIdx + 1], 10);
        if (!isNaN(parsed) && parsed > 0) limit = Math.min(parsed, commits.length);
      } else {
        const numPart = parts.find(p => /^-\d+$/.test(p));
        if (numPart) {
          const parsed = parseInt(numPart.slice(1), 10);
          if (!isNaN(parsed) && parsed > 0) limit = Math.min(parsed, commits.length);
        }
      }

      const list = commits.slice(0, limit);
      if (isOneLine) {
        const text = list.map(c => `<span style="color:var(--accent); font-weight:700;">${c.sha}</span> ${escapeHtml(c.message)}`).join('\n');
        appendLine('output', text);
      } else {
        const text = list.map((c, idx) => {
          const headTag = idx === 0 ? ' (HEAD -> main, origin/main)' : '';
          return `commit ${c.sha}${headTag}
Author: ${escapeHtml(c.author || 'Rohith-Shimori')} &lt;rohith@rohith.is-a.dev&gt;
Date:   ${c.date || 'Recent Push'}

    ${escapeHtml(c.message)}`;
        }).join('\n\n');
        appendLine('accent', text);
      }
      return;
    }

    if (sub === 'remote') {
      if (parts.includes('-v') || parts.includes('--verbose')) {
        appendLine('output', `origin  https://github.com/Rohith-Shimori/portfolio.git (fetch)\norigin  https://github.com/Rohith-Shimori/portfolio.git (push)`);
      } else {
        appendLine('output', 'origin');
      }
      return;
    }

    if (sub === 'branch') {
      if (parts.includes('-a') || parts.includes('--all')) {
        appendLine('output', `* <span style="color:#22C55E; font-weight:700;">main</span>\n  remotes/origin/main`);
      } else {
        appendLine('output', `* <span style="color:#22C55E; font-weight:700;">main</span>`);
      }
      return;
    }

    if (sub === 'diff') {
      appendLine('output', `diff --git a/working-tree b/working-tree\nZero unstaged modifications. Working tree completely in sync with origin/main.`);
      return;
    }

    if (sub === 'show') {
      const head = commits[0];
      appendLine('output', `commit ${head.full_sha || head.sha} (HEAD -> main, origin/main)\nAuthor: ${escapeHtml(head.author || 'Rohith-Shimori')} &lt;rohith@rohith.is-a.dev&gt;\nDate:   ${head.date}\n\n    ${escapeHtml(head.message)}\n\nRepository: ${head.repo}\nVerified live commit.`);
      return;
    }

    appendLine('error', `git: '${escapeHtml(rawArg)}' is not a recognized git subcommand. Try: git status, git log, git log --oneline, git remote -v, git branch, git show`);
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

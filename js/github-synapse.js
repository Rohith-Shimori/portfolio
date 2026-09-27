/**
 * GITHUB SYNAPSE — Live Public Telemetry & Language DNA
 * Pulls real GitHub activity for Rohith-Shimori with 30-min localStorage cache
 * Designed for Rohith OS (rohith-os.html)
 */

(function () {
  'use strict';

  const GITHUB_USER = 'Rohith-Shimori';
  const CACHE_KEY = 'rohith_os_github_synapse';
  const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

  // High-fidelity fallback snapshot if rate-limited (HTTP 403) or offline
  const SNAPSHOT_DATA = {
    profile: {
      public_repos: 9,
      followers: 0,
      primary_stack: 'Python • TS • Dart',
      bio: 'Engineering clean architectures & agentic systems. Builder of TruthLens & NCC Digital Platform.'
    },
    events: [
      { repo: 'Rohith-Shimori/portfolio', message: 'feat: launch Rohith OS & Cyber Sound Deck', time: '1 hour ago', url: 'https://github.com/Rohith-Shimori/portfolio' },
      { repo: 'Rohith-Shimori/portfolio', message: 'refactor: restore signature orange ticker & bento buttons', time: '4 hours ago', url: 'https://github.com/Rohith-Shimori/portfolio' },
      { repo: 'Rohith-Shimori/TruthLens-AI-Agent', message: 'feat: optimize FastMCP subagent triage pipeline', time: '2 days ago', url: 'https://github.com/Rohith-Shimori/TruthLens-AI-Agent' },
      { repo: 'Rohith-Shimori/ncc', message: 'feat: migration 16 RLS security rule for multi-wing cadets', time: '4 days ago', url: 'https://github.com/Rohith-Shimori/ncc' },
      { repo: 'Rohith-Shimori/MVGR-NexUs', message: 'fix: BLoC state provider race condition on feed sync', time: '1 week ago', url: 'https://github.com/Rohith-Shimori/MVGR-NexUs' }
    ],
    languages: {
      python: 42,
      typescript: 28,
      javascript: 14,
      dart: 12,
      other: 4
    }
  };

  const dom = {
    repoCount: null,
    followerCount: null,
    latestCommitEl: null,
    commitFeed: null,
    dnaBar: null,
    dnaLegend: null,
    statusDot: null
  };

  function init() {
    dom.repoCount = document.getElementById('statRepoCount');
    dom.followerCount = document.getElementById('statFollowerCount');
    dom.latestCommitEl = document.getElementById('statLatestPush');
    dom.commitFeed = document.getElementById('commitFeed');
    dom.dnaBar = document.getElementById('dnaBarTrack');
    dom.dnaLegend = document.getElementById('dnaLegend');
    dom.statusDot = document.getElementById('githubStatusDot');

    loadTelemetry();
  }

  async function loadTelemetry() {
    const cached = getCachedData();
    if (cached) {
      render(cached, true);
      return;
    }

    try {
      const [profileRes, eventsRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USER}`),
        fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=15`),
        fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=10`)
      ]);

      if (!profileRes.ok || !eventsRes.ok) {
        throw new Error('GitHub API rate limit or error: ' + profileRes.status);
      }

      const profile = await profileRes.json();
      const rawEvents = await eventsRes.json();
      const repos = reposRes.ok ? await reposRes.json() : [];

      const parsedEvents = parsePushEvents(rawEvents);
      const languages = calculateLanguages(repos);

      const payload = {
        profile: {
          public_repos: profile.public_repos || SNAPSHOT_DATA.profile.public_repos,
          followers: profile.followers || SNAPSHOT_DATA.profile.followers,
          bio: profile.bio || SNAPSHOT_DATA.profile.bio
        },
        events: parsedEvents.length > 0 ? parsedEvents : SNAPSHOT_DATA.events,
        languages: Object.keys(languages).length > 0 ? languages : SNAPSHOT_DATA.languages,
        timestamp: Date.now()
      };

      saveCachedData(payload);
      render(payload, false);
    } catch (err) {
      console.warn('Using Synapse offline snapshot telemetry:', err.message);
      render(SNAPSHOT_DATA, true);
    }
  }

  function parsePushEvents(events) {
    if (!Array.isArray(events)) return [];
    const list = [];
    for (const ev of events) {
      if (ev.type === 'PushEvent' && ev.payload && ev.payload.commits) {
        const repoName = ev.repo.name;
        for (const commit of ev.payload.commits) {
          list.push({
            repo: repoName,
            message: commit.message.split('\n')[0],
            time: formatTimeAgo(new Date(ev.created_at)),
            url: `https://github.com/${repoName}/commit/${commit.sha}`
          });
          if (list.length >= 6) break;
        }
      }
      if (list.length >= 6) break;
    }
    return list;
  }

  function calculateLanguages(repos) {
    if (!Array.isArray(repos) || repos.length === 0) return SNAPSHOT_DATA.languages;
    const counts = {};
    let total = 0;
    for (const repo of repos) {
      if (repo.language) {
        const lang = repo.language.toLowerCase();
        counts[lang] = (counts[lang] || 0) + 1;
        total++;
      }
    }
    if (total === 0) return SNAPSHOT_DATA.languages;

    const result = {};
    for (const [lang, cnt] of Object.entries(counts)) {
      result[lang] = Math.round((cnt / total) * 100);
    }
    return result;
  }

  function formatTimeAgo(date) {
    const diffSec = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffSec < 60) return 'just now';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr}h ago`;
    const diffDay = Math.floor(diffHr / 24);
    return `${diffDay}d ago`;
  }

  function getCachedData() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (Date.now() - data.timestamp < CACHE_TTL_MS) {
        return data;
      }
    } catch (e) {}
    return null;
  }

  function saveCachedData(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function render(data, isCached) {
    if (dom.repoCount) dom.repoCount.textContent = data.profile.public_repos !== undefined ? data.profile.public_repos : '9';
    if (dom.followerCount) dom.followerCount.textContent = data.profile.followers !== undefined ? data.profile.followers : '0';
    if (dom.latestCommitEl && data.events && data.events[0]) {
      dom.latestCommitEl.textContent = data.events[0].time;
    }

    // Render Commits
    if (dom.commitFeed && Array.isArray(data.events)) {
      dom.commitFeed.innerHTML = data.events.map(ev => `
        <a href="${ev.url}" target="_blank" rel="noopener noreferrer" class="commit-item">
          <span class="commit-repo">${ev.repo.replace('Rohith-Shimori/', '')}</span>
          <span class="commit-msg">${escapeHtml(ev.message)}</span>
          <span class="commit-time">${ev.time}</span>
        </a>
      `).join('');
    }

    // Render Language DNA
    if (dom.dnaBar && data.languages) {
      renderLanguageDNA(data.languages);
    }

    // Status indicator
    if (dom.statusDot) {
      dom.statusDot.title = isCached ? 'GitHub Synapse: Cached Telemetry (30m TTL)' : 'GitHub Synapse: Live Telemetry';
    }

    // Broadcast telemetry to Mini Roh OS
    window.dispatchEvent(new CustomEvent('synapse:loaded', {
      detail: { data, isCached }
    }));
  }

  function renderLanguageDNA(langs) {
    const keys = Object.keys(langs);
    let barHtml = '';
    let legendHtml = '';

    const colorMap = {
      python: '#3572A5',
      typescript: '#3178C6',
      javascript: '#F7DF1E',
      dart: '#00B4AB',
      html: '#E34F26',
      css: '#563D7C'
    };

    keys.forEach(k => {
      const pct = langs[k] || 10;
      const color = colorMap[k] || '#E05315';
      barHtml += `<div class="dna-segment" style="width: ${pct}%; background: ${color}" title="${k}: ${pct}%"></div>`;
      legendHtml += `
        <span class="dna-key">
          <span class="dna-dot" style="background: ${color}"></span>
          ${k.toUpperCase()} (${pct}%)
        </span>
      `;
    });

    dom.dnaBar.innerHTML = barHtml;
    if (dom.dnaLegend) dom.dnaLegend.innerHTML = legendHtml;
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

  // Public Interface
  window.GitHubSynapse = {
    init,
    reload: () => {
      localStorage.removeItem(CACHE_KEY);
      loadTelemetry();
    },
    getSnapshot: () => SNAPSHOT_DATA
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

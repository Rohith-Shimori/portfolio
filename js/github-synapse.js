/**
 * GITHUB SYNAPSE — Live Public Telemetry & Real Language DNA
 * Pulls genuine, verified GitHub activity for Rohith-Shimori.
 * Prioritizes zero fake data: authentic commit SHAs, genuine repository
 * commits, real multi-language spectrum, and instant fallback resiliency.
 * Designed for Rohith OS (rohith-os.html)
 */

(function () {
  'use strict';

  const GITHUB_USER = 'Rohith-Shimori';
  const CACHE_KEY = 'rohith_os_github_synapse_v2';
  const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes cache

  // Verified real telemetry baseline (100% genuine commits authored by Rohith & automated bots)
  const SNAPSHOT_DATA = {
    user: GITHUB_USER,
    profile: {
      public_repos: 8,
      followers: 0,
      bio: 'Engineering clean architectures and agentic systems.',
      avatar_url: 'https://avatars.githubusercontent.com/u/228351330?v=4',
      html_url: `https://github.com/${GITHUB_USER}`
    },
    commits: [
      {
        repo: 'Rohith-Shimori/portfolio',
        sha: '7da2d4f',
        full_sha: '7da2d4fd602621eadc62f231378d058404c6b7e0',
        message: 'chore(music): auto-sync live Spotify playlist Peace of Hell',
        date: '2026-10-03T02:42:11Z',
        author: 'github-actions[bot]',
        url: 'https://github.com/Rohith-Shimori/portfolio/commit/7da2d4fd602621eadc62f231378d058404c6b7e0'
      },
      {
        repo: 'Rohith-Shimori/portfolio',
        sha: 'ac400a8',
        full_sha: 'ac400a80a76eecacd68a65fec7e0a95436845009',
        message: 'feat(ai): overhaul Mini Roh AI cognitive engine and connect interactive OS controls',
        date: '2026-10-01T00:21:00+05:30',
        author: 'Rohith-Shimori',
        url: 'https://github.com/Rohith-Shimori/portfolio/commit/ac400a80a76eecacd68a65fec7e0a95436845009'
      },
      {
        repo: 'Rohith-Shimori/portfolio',
        sha: '0a433e3',
        full_sha: '0a433e319bb5e7714a3053b7f95f24a0b92362fe',
        message: 'seo: update sitemap lastmod timestamps to 2026-09-30',
        date: '2026-09-30T23:43:05+05:30',
        author: 'Rohith-Shimori',
        url: 'https://github.com/Rohith-Shimori/portfolio/commit/0a433e319bb5e7714a3053b7f95f24a0b92362fe'
      },
      {
        repo: 'Rohith-Shimori/portfolio',
        sha: '7ea2deb',
        full_sha: '7ea2debe9a132c9e907eb021efa9bb540592c967',
        message: 'perf & a11y: enforce strict artist stream matching, cut 5.8MB payload, and achieve 100/100/100/100 Lighthouse & Agentic Browsing',
        date: '2026-09-30T23:37:51+05:30',
        author: 'Rohith-Shimori',
        url: 'https://github.com/Rohith-Shimori/portfolio/commit/7ea2debe9a132c9e907eb021efa9bb540592c967'
      },
      {
        repo: 'Rohith-Shimori/portfolio',
        sha: 'bc07a52',
        full_sha: 'bc07a52a4aa50a75fd9633fe5526bcd7f8d7ccb6',
        message: 'perf(audit): achieve 100 SEO & 100 Best Practices with accessible labels and contrast',
        date: '2026-09-29T23:06:21+05:30',
        author: 'Rohith-Shimori',
        url: 'https://github.com/Rohith-Shimori/portfolio/commit/bc07a52a4aa50a75fd9633fe5526bcd7f8d7ccb6'
      },
      {
        repo: 'Rohith-Shimori/portfolio',
        sha: 'ce143cc',
        full_sha: 'ce143cc53f86cdb1536385bd900528d773b06876',
        message: 'fix(seo): clean Host header format in robots.txt',
        date: '2026-09-29T22:52:17+05:30',
        author: 'Rohith-Shimori',
        url: 'https://github.com/Rohith-Shimori/portfolio/commit/ce143cc53f86cdb1536385bd900528d773b06876'
      },
      {
        repo: 'Rohith-Shimori/TruthLens-AI-Agent',
        sha: '90f7ecc',
        full_sha: '90f7ecc36092141dc65d0e0654559f5e6a2f8f62',
        message: 'Update YouTube demo badge in README',
        date: '2026-07-07T15:22:07Z',
        author: 'Pontapalli Rohith',
        url: 'https://github.com/Rohith-Shimori/TruthLens-AI-Agent/commit/90f7ecc36092141dc65d0e0654559f5e6a2f8f62'
      },
      {
        repo: 'Rohith-Shimori/TruthLens-AI-Agent',
        sha: 'c35f8c9',
        full_sha: 'c35f8c9292be842c9eb2aa3e5a52a4b0c66c3aca',
        message: 'Add YouTube demo link to README',
        date: '2026-07-07T15:19:04Z',
        author: 'Pontapalli Rohith',
        url: 'https://github.com/Rohith-Shimori/TruthLens-AI-Agent/commit/c35f8c9292be842c9eb2aa3e5a52a4b0c66c3aca'
      },
      {
        repo: 'Rohith-Shimori/MVGR-NexUs',
        sha: '01fa002',
        full_sha: '01fa0028a2a89c8fa7270e5b72e505ea58ce1051',
        message: 'feat: initial commit - MVGR NexUs v1.0.0',
        date: '2026-03-14T19:13:29Z',
        author: 'Rohith-Shimori',
        url: 'https://github.com/Rohith-Shimori/MVGR-NexUs/commit/01fa0028a2a89c8fa7270e5b72e505ea58ce1051'
      }
    ],
    languages: {
      dart: 60.1,
      javascript: 14.1,
      html: 13.1,
      python: 5.4,
      css: 3.9,
      plpgsql: 3.4
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

  let activeTelemetry = SNAPSHOT_DATA;

  function init() {
    dom.repoCount = document.getElementById('statRepoCount');
    dom.followerCount = document.getElementById('statFollowerCount');
    dom.latestCommitEl = document.getElementById('statLatestPush');
    dom.commitFeed = document.getElementById('commitFeed');
    dom.dnaBar = document.getElementById('dnaBarTrack');
    dom.dnaLegend = document.getElementById('dnaLegend');
    dom.statusDot = document.getElementById('githubStatusDot');

    // 1. Initial fast paint: Check memory / snapshot / localStorage
    const cached = getCachedData();
    if (cached) {
      activeTelemetry = cached;
      render(cached, 'cached');
    } else if (window.ROHITH_GITHUB_SNAPSHOT) {
      activeTelemetry = window.ROHITH_GITHUB_SNAPSHOT;
      render(window.ROHITH_GITHUB_SNAPSHOT, 'synced');
    } else {
      render(SNAPSHOT_DATA, 'synced');
    }

    // 2. Refresh asynchronously
    loadTelemetry();
  }

  async function loadTelemetry() {
    // Priority A: Try local github-data.json (fast, zero rate-limit, 100% genuine)
    try {
      const localRes = await fetch('js/github-data.json?v=' + Date.now(), { cache: 'no-cache' });
      if (localRes.ok) {
        const localData = await localRes.json();
        if (localData && Array.isArray(localData.commits) && localData.commits.length > 0) {
          activeTelemetry = localData;
          saveCachedData(localData);
          render(localData, 'synced');
        }
      }
    } catch (e) {
      // Ignore local fetch error and continue to live check
    }

    // Priority B: Query live GitHub REST API for real-time updates
    try {
      const [profileRes, commitsRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USER}`, {
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        }),
        fetch(`https://api.github.com/repos/${GITHUB_USER}/portfolio/commits?per_page=10`, {
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        })
      ]);

      if (profileRes.status === 403 || commitsRes.status === 403) {
        // Unauthenticated rate-limit hit: Keep synced telemetry gracefully
        return;
      }

      if (!profileRes.ok && !commitsRes.ok) {
        return;
      }

      let profile = activeTelemetry.profile;
      if (profileRes.ok) {
        const pJson = await profileRes.json();
        profile = {
          public_repos: pJson.public_repos !== undefined ? pJson.public_repos : activeTelemetry.profile.public_repos,
          followers: pJson.followers !== undefined ? pJson.followers : activeTelemetry.profile.followers,
          bio: pJson.bio || activeTelemetry.profile.bio,
          avatar_url: pJson.avatar_url || activeTelemetry.profile.avatar_url,
          html_url: pJson.html_url || activeTelemetry.profile.html_url
        };
      }

      let liveCommits = [];
      if (commitsRes.ok) {
        const cJson = await commitsRes.json();
        if (Array.isArray(cJson)) {
          liveCommits = cJson.map(c => ({
            repo: `${GITHUB_USER}/portfolio`,
            sha: c.sha ? c.sha.slice(0, 7) : 'head',
            full_sha: c.sha || '',
            message: (c.commit && c.commit.message) ? c.commit.message.split('\n')[0].trim() : 'commit',
            date: (c.commit && c.commit.author && c.commit.author.date) || new Date().toISOString(),
            author: (c.commit && c.commit.author && c.commit.author.name) || GITHUB_USER,
            url: `https://github.com/${GITHUB_USER}/portfolio/commit/${c.sha}`
          }));
        }
      }

      // Merge with non-portfolio active commits (e.g. TruthLens, MVGR-NexUs)
      const nonPortfolio = (activeTelemetry.commits || []).filter(c => !c.repo.endsWith('/portfolio'));
      const combinedCommits = [...liveCommits, ...nonPortfolio];
      combinedCommits.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

      const payload = {
        user: GITHUB_USER,
        profile: profile,
        commits: combinedCommits.slice(0, 12),
        languages: activeTelemetry.languages || SNAPSHOT_DATA.languages,
        timestamp: Date.now()
      };

      activeTelemetry = payload;
      saveCachedData(payload);
      render(payload, 'live');
    } catch (err) {
      console.warn('GitHub live telemetry note:', err.message);
    }
  }

  function formatTimeAgo(dateInput) {
    if (!dateInput) return 'recent';
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return 'recent';

    const diffSec = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffSec < 60) return 'just now';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr}h ago`;
    const diffDay = Math.floor(diffHr / 24);
    if (diffDay < 30) return `${diffDay}d ago`;
    const diffMo = Math.floor(diffDay / 30);
    if (diffMo < 12) return `${diffMo}mo ago`;
    return `${Math.floor(diffDay / 365)}y ago`;
  }

  function getCachedData() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (Date.now() - (data.timestamp || 0) < CACHE_TTL_MS) {
        return data;
      }
    } catch (e) {}
    return null;
  }

  function saveCachedData(data) {
    try {
      data.timestamp = Date.now();
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function render(data, statusType) {
    if (!data) return;

    // 1. Stats Strip
    const pubRepos = data.profile && data.profile.public_repos !== undefined ? data.profile.public_repos : 8;
    const followers = data.profile && data.profile.followers !== undefined ? data.profile.followers : 0;
    
    if (dom.repoCount) dom.repoCount.textContent = pubRepos;
    if (dom.followerCount) dom.followerCount.textContent = followers;
    
    const latestCommit = data.commits && data.commits[0];
    if (dom.latestCommitEl && latestCommit) {
      dom.latestCommitEl.textContent = formatTimeAgo(latestCommit.date);
      dom.latestCommitEl.title = `${latestCommit.message} (${latestCommit.date})`;
    }

    // 2. Commit Feed (Real Repos, Real Messages, Real URLs)
    if (dom.commitFeed && Array.isArray(data.commits)) {
      dom.commitFeed.innerHTML = data.commits.slice(0, 7).map(c => {
        const repoClean = (c.repo || 'portfolio').replace(`${GITHUB_USER}/`, '');
        const timeAgo = formatTimeAgo(c.date);
        const safeMsg = escapeHtml(c.message || 'commit');
        const shortSha = escapeHtml(c.sha || 'sha');

        return `
          <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="commit-item" title="${safeMsg} (${shortSha})">
            <span class="commit-repo">${repoClean}</span>
            <span class="commit-msg">${safeMsg}</span>
            <span class="commit-time">${timeAgo}</span>
          </a>
        `;
      }).join('');
    }

    // 3. Language DNA Spectrum
    if (dom.dnaBar && data.languages) {
      renderLanguageDNA(data.languages);
    }

    // 4. Status Indicator Dot
    if (dom.statusDot) {
      dom.statusDot.classList.remove('live', 'cached', 'synced');
      dom.statusDot.classList.add(statusType || 'synced');

      if (statusType === 'live') {
        dom.statusDot.title = 'GitHub Synapse: Live Telemetry via GitHub API';
      } else if (statusType === 'cached') {
        dom.statusDot.title = 'GitHub Synapse: Client Cached Telemetry';
      } else {
        dom.statusDot.title = 'GitHub Synapse: Verified Production Synced Telemetry';
      }
    }

    // Broadcast telemetry to Mini Roh OS and terminal
    window.dispatchEvent(new CustomEvent('synapse:loaded', {
      detail: { data, statusType }
    }));
  }

  function renderLanguageDNA(langs) {
    const keys = Object.keys(langs);
    let barHtml = '';
    let legendHtml = '';

    const colorMap = {
      dart: '#00B4AB',
      javascript: '#F7DF1E',
      html: '#E34F26',
      python: '#3572A5',
      css: '#563D7C',
      plpgsql: '#336791',
      sql: '#336791',
      typescript: '#3178C6'
    };

    const labelMap = {
      plpgsql: 'SQL / RLS',
      dart: 'DART',
      javascript: 'JAVASCRIPT',
      html: 'HTML5',
      python: 'PYTHON',
      css: 'CSS3'
    };

    keys.forEach(k => {
      const pct = langs[k] || 1;
      const color = colorMap[k] || '#E05315';
      const label = labelMap[k] || k.toUpperCase();

      barHtml += `<div class="dna-segment" style="width: ${pct}%; background: ${color}" title="${label}: ${pct}%"></div>`;
      legendHtml += `
        <span class="dna-key">
          <span class="dna-dot" style="background: ${color}"></span>
          ${label} (${pct}%)
        </span>
      `;
    });

    if (dom.dnaBar) dom.dnaBar.innerHTML = barHtml;
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
    getTelemetry: () => activeTelemetry,
    getSnapshot: () => SNAPSHOT_DATA
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

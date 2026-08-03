/* =============================================
       DATA ENGINE
    ============================================= */
    const PORTFOLIO_DATA = {
      email: 'rohith@rohith.is-a.dev',
      github: 'https://github.com/Rohith-Shimori',
      linkedin: 'https://www.linkedin.com/in/pontapalli-rohith/',
      tickerItems: [
        '3rd Year Computer Science Student',
        'Building Software & Exploring AI',
        'Curious enough to build it. Persistent enough to finish it.',
        'Custom Domain: rohith.is-a.dev',
        'Live Platform: nccdigi.vercel.app',
        'TruthLens Kaggle Capstone (FastMCP)',
        'React 19 & Supabase Stack',
        'MVGR NexUs Campus App (Flutter)'
      ],
      filters: ['All', 'Live', 'AI', 'Full-Stack', 'Mobile'],
      projects: [
        {
          id: 'ncc',
          number: '01',
          categories: ['live', 'full-stack'],
          featured: true,
          title: 'NCC Digital Training Platform',
          summary: 'Full-stack React 19 & Supabase PWA digitizing National Cadet Corps training operations — syllabus tracking, drill exams, wing analytics, and offline sync.',
          description: 'Problem: Cadet attendance and drill progress were tracked manually on paper across 3 wings (Army, Navy, Air), causing record delays and loss of training data.\n\nSolution: Built a full-stack progressive web application with React 19 and Supabase Postgres featuring 16 migration tables and granular Row Level Security (RLS).\n\nTechnologies: React 19, Supabase, Postgres SQL, TailwindCSS v4, Vite, Dexie.js IndexedDB, Socket.IO.\n\nOutcome: Deployed live at nccdigi.vercel.app with multi-wing attendance analytics and offline-first IndexedDB sync.',
          tags: ['React 19', 'Supabase', 'Postgres SQL', 'TailwindCSS v4', 'Vite', 'PWA', 'Recharts'],
          highlights: [
            'Live production deployment on Vercel at nccdigi.vercel.app',
            '16 Supabase SQL schema migrations with granular Row-Level Security (RLS)',
            'Multi-wing (Army, Navy, Air) cadet tracking with Recharts analytics',
            'Offline-first PWA sync using Dexie.js IndexedDB layer',
            'Real-time notifications powered by Socket.IO client'
          ],
          githubUrl: 'https://github.com/Rohith-Shimori/ncc',
          demoUrl: 'https://nccdigi.vercel.app',
          coverImage: 'ncc_real.png',
          isLive: true
        },
        {
          id: 'truthlens',
          number: '02',
          categories: ['live', 'ai'],
          featured: true,
          title: 'TruthLens AI Agent',
          summary: 'Multi-step AI agent pipeline in Python for flagging potentially misleading multimodal content using FastMCP protocol.',
          description: 'Problem: Unverified online claims and manipulated media spread rapidly without instant contextual verification.\n\nSolution: Designed a multi-step AI agent pipeline in Python using the FastMCP protocol to coordinate subagent verification task handoffs.\n\nTechnologies: Python, FastMCP Protocol, Hugging Face Spaces, Agentic AI.\n\nOutcome: Published an interactive working demo on Hugging Face Spaces for the Kaggle × Google AI Agents Capstone.',
          tags: ['Python', 'FastMCP', 'Google AI Capstone', 'HuggingFace', 'Agentic AI'],
          highlights: [
            'Kaggle × Google AI Agents Capstone project',
            'Multi-step agent pipeline for multimodal content verification',
            'FastMCP protocol integration for agent-to-agent task handoffs',
            'Published working demo on Hugging Face Spaces'
          ],
          githubUrl: 'https://github.com/Rohith-Shimori/TruthLens-AI-Agent',
          demoUrl: 'https://huggingface.co/spaces/Rohith-Shimori/TruthLens-AI-Agent',
          coverImage: 'truthlens_real.png',
          isLive: true
        },
        {
          id: 'nexus',
          number: '03',
          categories: ['mobile'],
          title: 'MVGR NexUs — Campus Companion App',
          summary: 'Flutter-based Android app centralizing campus information for MVGR students (TechSprint 2026 Certificate of Excellence).',
          description: 'Problem: Campus event announcements, academic timetables, and venue maps were scattered across multiple unofficial channels.\n\nSolution: Created a cross-platform Flutter application that unifies announcements, academic resources, and campus maps in a clean mobile interface.\n\nTechnologies: Flutter, Dart, Android APK, Material 3 UI.\n\nOutcome: Delivered a working Android APK and presented live to hackathon judges; awarded Certificate of Excellence at TechSprint 2026.',
          tags: ['Flutter', 'Dart', 'Android APK', 'Hackathon Award'],
          highlights: [
            'Certificate of Excellence — TechSprint 2026 Hackathon',
            'Flutter-based Android app shipping a working, installable APK',
            'Event announcements & academic resource access',
            'Campus navigation & live judge demonstration'
          ],
          githubUrl: 'https://github.com/Rohith-Shimori/MVGR-NexUs'
        },
        {
          id: 'ananta',
          number: '04',
          categories: ['ai'],
          title: 'Ananta: Local AI Assistant',
          summary: 'Local AI assistant with sandboxed Python code execution, voice interaction, and adaptive vector memory.',
          description: 'Problem: Cloud-dependent AI coding tools often suffer from network latency, privacy concerns, and lack of persistent local context.\n\nSolution: Built a lightweight local AI assistant powered by FastAPI and open-weights LLMs via Ollama, featuring sandboxed code execution and vector memory.\n\nTechnologies: Python, FastAPI, Ollama, Vector DB, PyAudio, Local LLMs.\n\nOutcome: Functional local assistant capable of running Python code snippets in a local environment with long-term memory.',
          tags: ['Python', 'FastAPI', 'Ollama', 'Vector DB', 'PyAudio', 'Local LLMs'],
          highlights: [
            'Real-time sandboxed code execution',
            'Adaptive vector memory for long-term user context',
            'Voice input & speech synthesis pipeline'
          ],
          githubUrl: 'https://github.com/Rohith-Shimori/Ananta_Rebirth'
        }
      ],
      skillsA: [
        { name: 'Core Languages', tags: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Dart', 'SQL', 'C'], projects: ['ncc', 'truthlens', 'nexus', 'ananta'] },
        { name: 'Frontend Engineering', tags: ['React 19', 'Vite', 'TailwindCSS v4', 'Mobile-First PWA', 'Dexie.js'], projects: ['ncc'] },
        { name: 'Mobile Development', tags: ['Flutter', 'Dart', 'Android APK', 'Material 3'], projects: ['nexus'] },
        { name: 'UI / UX Architecture', tags: ['Responsive CSS', 'Design Systems', 'WCAG 2.1 AA', 'Accessibility'], projects: ['ncc', 'nexus'] }
      ],
      skillsB: [
        { name: 'Backend & Database Systems', tags: ['Supabase', 'PostgreSQL', 'Node.js', 'Express', 'Row Level Security (RLS)'], projects: ['ncc'] },
        { name: 'AI & Multi-Agent Protocols', tags: ['FastMCP Protocol', 'Agentic AI Pipelines', 'Hugging Face Spaces', 'Ollama Local LLMs'], projects: ['truthlens', 'ananta'] },
        { name: 'DevOps & Cloud Hosting', tags: ['Vercel PWA', 'Cloudflare Edge', 'GitHub Actions', 'Docker'], projects: ['ncc', 'truthlens'] },
        { name: 'Tooling & Methodology', tags: ['Git & GitHub Workflows', 'VS Code', 'AI-Assisted Pair Programming', 'Linux Shell'], projects: ['ncc', 'truthlens', 'nexus', 'ananta'] }
      ]
    };

    /* =============================================
       UTILITIES
    ============================================= */
    const $ = s => document.querySelector(s);
    const $$ = s => document.querySelectorAll(s);

    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    function showToast(msg) {
      const toast = document.createElement('div');
      toast.className = 'toast-msg';
      toast.innerHTML = '<span>◆</span> ' + escapeHtml(msg);
      $('#toastContainer').appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.2s ease';
        setTimeout(() => toast.remove(), 200);
      }, 3200);
    }

    function smoothScrollTo(selector) {
      const target = document.querySelector(selector);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }

    /* =============================================
       TICKER SETUP
    ============================================= */
    (function initTicker() {
      const track = $('#tickerTrack');
      const items = [...PORTFOLIO_DATA.tickerItems, ...PORTFOLIO_DATA.tickerItems];
      items.forEach(text => {
        const span = document.createElement('span');
        span.textContent = text;
        track.appendChild(span);
      });
    })();

    /* =============================================
       SCROLL REVEAL OBSERVER
    ============================================= */
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach(el => revealObserver.observe(el));

    /* =============================================
       PROJECTS ENGINE
    ============================================= */
    let currentCategoryFilter = 'all';
    let currentSearchQuery = '';

    (function initFilters() {
      const container = $('#filterPillsGroup');
      PORTFOLIO_DATA.filters.forEach((filter, index) => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn' + (index === 0 ? ' active' : '');
        btn.textContent = filter;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        btn.addEventListener('click', () => {
          currentCategoryFilter = filter.toLowerCase();
          container.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          renderProjects();
        });
        container.appendChild(btn);
      });
    })();

    $('#projectSearchInput').addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });

    function renderProjects() {
      const grid = $('#projectsContainer');
      grid.innerHTML = '';

      const filtered = PORTFOLIO_DATA.projects.filter(p => {
        const matchCategory = currentCategoryFilter === 'all' || p.categories.includes(currentCategoryFilter);
        const matchSearch = !currentSearchQuery ||
          p.title.toLowerCase().includes(currentSearchQuery) ||
          (p.summary && p.summary.toLowerCase().includes(currentSearchQuery)) ||
          p.tags.some(t => t.toLowerCase().includes(currentSearchQuery));
        return matchCategory && matchSearch;
      });

      filtered.forEach(p => {
        const card = document.createElement('article');
        card.className = 'project-card' + (p.featured ? ' featured' : '');
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'View details for ' + p.title);

        let html = '';

        if (p.featured && p.coverImage) {
          // Cover Header for Featured
          html += '<div class="card-cover">';
          html += '<img src="' + p.coverImage + '" alt="Preview of ' + escapeHtml(p.title) + '" loading="lazy">';
          html += '<div class="card-cover-overlay">';
          if (p.isLive) {
            html += '<span class="card-live-badge">● LIVE DEPLOYED</span>';
          }
          html += '</div></div>';

          // Card Content
          html += '<div class="card-content">';
          html += '<div>';
          html += '<div class="card-meta-top">';
          html += '<span class="card-number">' + p.number + ' // FEATURED</span>';
          html += '</div>';
          html += '<div class="card-title">' + escapeHtml(p.title) + '</div>';
          html += '<div class="card-desc">' + escapeHtml(p.summary || p.desc) + '</div>';
          html += '<div class="card-tags-list">' + p.tags.map(t => '<span class="card-tag">' + escapeHtml(t) + '</span>').join('') + '</div>';
          html += '</div>';
          html += '<div class="card-actions">';
          if (p.demoUrl) {
            html += '<a href="' + p.demoUrl + '" target="_blank" rel="noopener" class="card-btn btn-accent" onclick="event.stopPropagation()">Live Demo ↗</a>';
          }
          html += '<a href="' + p.githubUrl + '" target="_blank" rel="noopener" class="card-btn" onclick="event.stopPropagation()">GitHub ↗</a>';
          html += '<button class="card-btn" onclick="event.stopPropagation(); openProjectModal(\'' + p.id + '\')">Architecture Details</button>';
          html += '</div>';
          html += '</div>';
        } else {
          // Regular Cards
          html += '<div class="card-content" style="height:100%; min-height:240px">';
          html += '<div>';
          html += '<div class="card-meta-top">';
          html += '<span class="card-number">' + p.number + '</span>';
          if (p.isLive) {
            html += '<span class="card-live-badge">● LIVE</span>';
          } else {
            html += '<span class="card-status-text">IN DEVELOPMENT</span>';
          }
          if (p.id === 'truthlens') {
            html += '<div class="mascot-interactive-wrap" style="position:absolute; top:-38px; right:16px; z-index:10">';
            html += '<div class="mascot-speech-bubble" id="truthlensBubble">building autonomous AI agents! <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 15h.01M16 15h.01"/></svg></div>';
            html += '<img src="mascot_building_ai.png" alt="Building AI Mascot" class="mascot-interactive" style="height:65px; width:auto; filter:drop-shadow(0 0 12px rgba(224,83,21,0.45)); animation:floatCute 3.5s ease-in-out infinite" onclick="event.stopPropagation(); triggerMascotClick(this, \'truthlensBubble\', \'multi-agent verification protocol live! <svg class=\\\'b-icon\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'var(--accent)\\\'><path d=\\\'M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z\\\'/></svg>\')">';
            html += '</div>';
          }
          html += '</div>';
          html += '<div class="card-title">' + escapeHtml(p.title) + '</div>';
          html += '<div class="card-desc">' + escapeHtml(p.summary || p.desc) + '</div>';
          html += '<div class="card-tags-list">' + p.tags.map(t => '<span class="card-tag">' + escapeHtml(t) + '</span>').join('') + '</div>';
          html += '</div>';
          html += '<div class="card-actions">';
          if (p.demoUrl) {
            html += '<a href="' + p.demoUrl + '" target="_blank" rel="noopener" class="card-btn btn-accent" onclick="event.stopPropagation()">Live Demo ↗</a>';
          }
          html += '<a href="' + p.githubUrl + '" target="_blank" rel="noopener" class="card-btn" onclick="event.stopPropagation()">GitHub ↗</a>';
          html += '<button class="card-btn" onclick="event.stopPropagation(); openProjectModal(\'' + p.id + '\')">Details</button>';
          html += '</div>';
          html += '</div>';
        }

        card.innerHTML = html;
        card.addEventListener('click', () => openProjectModal(p.id));
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openProjectModal(p.id); });
        grid.appendChild(card);
      });
    }
    renderProjects();

    /* =============================================
       MODAL DIALOG (WITH FOCUS TRAP)
    ============================================= */
    let lastActiveElement = null;

    function openProjectModal(id) {
      const p = PORTFOLIO_DATA.projects.find(x => x.id === id);
      if (!p) return;

      lastActiveElement = document.activeElement;

      let bodyHtml = '<div style="font-family:var(--mono); font-size:0.65rem; color:var(--accent); font-weight:700; margin-bottom:8px">PROJECT //' + p.number + '</div>';
      bodyHtml += '<div style="font-family:var(--display); font-size:1.4rem; font-weight:800; color:var(--paper); margin-bottom:12px; line-height:1.3">' + escapeHtml(p.title) + '</div>';
      if (p.isLive) {
        bodyHtml += '<div style="margin-bottom:16px"><span class="card-live-badge">● LIVE PRODUCTION SYSTEM</span></div>';
      }
      bodyHtml += '<div style="font-size:0.82rem; color:var(--text-muted); line-height:1.8; margin-bottom:24px; white-space:pre-line">' + escapeHtml(p.description) + '</div>';

      bodyHtml += '<div style="font-family:var(--mono); font-size:0.6rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-dim); margin-bottom:12px">Key Features &amp; Architecture</div>';
      bodyHtml += '<ul style="list-style:none; display:flex; flex-direction:column; gap:8px; margin-bottom:24px">';
      p.highlights.forEach(h => {
        bodyHtml += '<li style="font-size:0.8rem; color:var(--paper); display:flex; gap:10px"><span style="color:var(--accent)">◆</span> ' + escapeHtml(h) + '</li>';
      });
      bodyHtml += '</ul>';

      bodyHtml += '<div style="font-family:var(--mono); font-size:0.6rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-dim); margin-bottom:12px">Tech Stack</div>';
      bodyHtml += '<div class="card-tags-list" style="margin-bottom:28px">';
      p.tags.forEach(t => {
        bodyHtml += '<span class="card-tag">' + escapeHtml(t) + '</span>';
      });
      bodyHtml += '</div>';

      bodyHtml += '<div style="display:flex; gap:12px; flex-wrap:wrap">';
      bodyHtml += '<a href="' + p.githubUrl + '" target="_blank" rel="noopener" class="btn btn-primary">View GitHub Repository ↗</a>';
      if (p.demoUrl) {
        bodyHtml += '<a href="' + p.demoUrl + '" target="_blank" rel="noopener" class="btn btn-secondary">Open Live Application ↗</a>';
      }
      bodyHtml += '</div>';

      $('#modalCardBody').innerHTML = bodyHtml;
      $('#projectModal').classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => $('#modalCloseBtn').focus(), 60);
    }

    function closeProjectModal() {
      $('#projectModal').classList.remove('active');
      document.body.style.overflow = '';
      if (lastActiveElement) lastActiveElement.focus();
    }

    $('#modalCloseBtn').addEventListener('click', closeProjectModal);
    $('#projectModal').addEventListener('click', (e) => {
      if (e.target === $('#projectModal')) closeProjectModal();
    });

    // Modal Focus Trap & ESC key listener
    $('#projectModal').addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { closeProjectModal(); return; }
      if (e.key !== 'Tab') return;
      const focusables = $('#modalContentCard').querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    /* =============================================
       SKILLS RENDERING (CLEAN 2-COLUMN LAYOUT)
    ============================================= */
    function renderSkillsGroup(containerId, skillsList) {
      const container = $('#' + containerId);
      if (!container) return;
      container.innerHTML = '';
      skillsList.forEach(sk => {
        const row = document.createElement('div');
        row.className = 'skill-row';
        row.tabIndex = 0;
        row.dataset.projects = JSON.stringify(sk.projects);
        row.setAttribute('role', 'button');
        row.setAttribute('aria-label', sk.name + ': ' + sk.tags.join(', '));

        let html = '<div style="display:flex; flex-direction:column; gap:4px; flex:1">';
        html += '<span class="skill-name" style="font-size:0.85rem; font-weight:700; color:var(--paper)">' + escapeHtml(sk.name) + '</span>';
        html += '<div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:4px">';
        sk.tags.forEach(t => {
          html += '<span class="card-tag" style="font-size:0.58rem; padding:3px 8px; background:var(--surface-2); border-color:var(--border)">' + escapeHtml(t) + '</span>';
        });
        html += '</div></div>';

        row.innerHTML = html;
        row.addEventListener('click', () => handleSkillHighlight(sk));
        row.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSkillHighlight(sk); });
        container.appendChild(row);
      });
    }
    renderSkillsGroup('skillsColA', PORTFOLIO_DATA.skillsA);
    renderSkillsGroup('skillsColB', PORTFOLIO_DATA.skillsB);

    function handleSkillHighlight(skill) {
      $$('.skill-row').forEach(r => r.classList.remove('highlighted'));
      $$('.project-card').forEach(c => { c.style.boxShadow = ''; c.style.opacity = ''; });

      $$('.skill-row').forEach(r => {
        try {
          const p = JSON.parse(r.dataset.projects || '[]');
          if (p.some(x => skill.projects.includes(x))) r.classList.add('highlighted');
        } catch (e) { }
      });

      $$('.project-card').forEach(c => {
        const titleEl = c.querySelector('.card-title');
        if (!titleEl) return;
        const proj = PORTFOLIO_DATA.projects.find(p => p.title === titleEl.textContent);
        if (proj && skill.projects.includes(proj.id)) {
          c.style.boxShadow = '0 0 0 2px var(--accent), 0 12px 32px var(--accent-glow)';
        } else {
          c.style.opacity = '0.35';
        }
      });

      smoothScrollTo('#projects');
      showToast('Highlighted projects using ' + skill.name);

      setTimeout(() => {
        $$('.skill-row').forEach(r => r.classList.remove('highlighted'));
        $$('.project-card').forEach(c => { c.style.boxShadow = ''; c.style.opacity = ''; });
      }, 4500);
    }

    /* =============================================
       COMMAND PALETTE ENGINE
    ============================================= */
    /* =============================================
       UNIVERSAL REAL-TIME SEARCH ENGINE
    ============================================= */
    function buildSearchIndex() {
      const items = [];
      
      // 1. Projects
      if (PORTFOLIO_DATA.projects) {
        PORTFOLIO_DATA.projects.forEach(p => {
          items.push({
            id: 'project-' + p.id,
            label: p.title,
            subtext: 'Project • ' + p.summary,
            category: 'Project',
            keywords: (p.title + ' ' + p.summary + ' ' + p.description + ' ' + (p.tags ? p.tags.join(' ') : '')).toLowerCase(),
            action: () => openProjectModal(p.id)
          });
        });
      }

      // 2. Skills
      const allSkills = [...(PORTFOLIO_DATA.skillsA || []), ...(PORTFOLIO_DATA.skillsB || [])];
      allSkills.forEach(s => {
        items.push({
          id: 'skill-' + s.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
          label: s.name + ' (' + s.level + ')',
          subtext: 'Capability / Tech Stack',
          category: 'Skill',
          keywords: (s.name + ' ' + s.level).toLowerCase(),
          action: () => smoothScrollTo('#skills')
        });
      });

      // 3. Pages & Sections
      items.push(
        { id: 'page-cv', label: 'Interactive Web CV (Curriculum Vitae)', subtext: 'Page • Open cv.html', category: 'Page', keywords: 'cv resume web cv curriculum vitae experience education credentials', action: () => window.open('cv.html', '_blank') },
        { id: 'nav-projects', label: 'Featured Projects Bench', subtext: 'Section • #projects', category: 'Section', keywords: 'projects work portfolio systems apps ncc truthlens nexus ananta', action: () => smoothScrollTo('#projects') },
        { id: 'nav-about', label: 'About & Identity', subtext: 'Section • #about', category: 'Section', keywords: 'about identity bio background student student status', action: () => smoothScrollTo('#about') },
        { id: 'nav-approach', label: 'Engineering Workflow / How I Build', subtext: 'Section • #approach', category: 'Section', keywords: 'approach workflow build stack process mascots blueprint', action: () => smoothScrollTo('#approach') },
        { id: 'nav-skills', label: 'Capabilities & Tech Matrix', subtext: 'Section • #skills', category: 'Section', keywords: 'skills capabilities tech stack languages tools frameworks python react flutter supabase', action: () => smoothScrollTo('#skills') },
        { id: 'nav-contact', label: 'Bento Contact & Social Cards', subtext: 'Section • #contact', category: 'Section', keywords: 'contact email linkedin github credly message reach out', action: () => smoothScrollTo('#contact') }
      );

      // 4. Direct Actions & Links
      items.push(
        { id: 'live-ncc', label: 'NCC Digital Training Platform (Live App)', subtext: 'Live • nccdigi.vercel.app', category: 'Live Demo', keywords: 'ncc cadet live vercel pwa react supabase', action: () => window.open('https://nccdigi.vercel.app', '_blank') },
        { id: 'live-truthlens', label: 'TruthLens AI Agent (HuggingFace Space)', subtext: 'Live • huggingface.co', category: 'Live Demo', keywords: 'truthlens ai agent space huggingface fastmcp python', action: () => window.open('https://huggingface.co/spaces/Rohith-Shimori/TruthLens-AI-Agent', '_blank') },
        { id: 'copy-email', label: 'Copy Custom Email (rohith@rohith.is-a.dev)', subtext: 'Action • Copy to clipboard', category: 'Action', keywords: 'copy email mail address contact rohith', action: () => copyEmailToClipboard() },
        { id: 'request-resume', label: 'Request Official Resume Document', subtext: 'Action • Email request link', category: 'Action', keywords: 'request resume doc document email mailto', action: () => window.open('mailto:rohith@rohith.is-a.dev?subject=Resume%20Request%20-%20Pontapalli%20Rohith') },
        { id: 'open-github', label: 'GitHub Profile (@Rohith-Shimori)', subtext: 'Social • github.com/Rohith-Shimori', category: 'Social', keywords: 'github code repo profile repositories', action: () => window.open(PORTFOLIO_DATA.github, '_blank') },
        { id: 'open-linkedin', label: 'LinkedIn Profile (Pontapalli Rohith)', subtext: 'Social • linkedin.com', category: 'Social', keywords: 'linkedin network profile connection', action: () => window.open(PORTFOLIO_DATA.linkedin, '_blank') },
        { id: 'open-credly', label: 'Credly Certifications (EY, IBM, Microsoft)', subtext: 'Credentials • credly.com', category: 'Credentials', keywords: 'credly certifications badges ey ibm microsoft', action: () => window.open('https://www.credly.com/users/rohith-pontapalli', '_blank') }
      );

      return items;
    }

    let selectedCommandIndex = 0;

    function getMatchingSearchResults() {
      const query = $('#cmdInputField') ? $('#cmdInputField').value.toLowerCase().trim() : '';
      const allItems = buildSearchIndex();
      if (!query) return allItems;

      return allItems.filter(item => {
        return item.label.toLowerCase().includes(query) ||
               item.subtext.toLowerCase().includes(query) ||
               item.category.toLowerCase().includes(query) ||
               item.keywords.includes(query);
      });
    }

    function openCommandPalette() {
      $('#cmdOverlay').classList.add('active');
      $('#cmdInputField').value = '';
      selectedCommandIndex = 0;
      renderCommandList();
      document.body.style.overflow = 'hidden';
      setTimeout(() => $('#cmdInputField').focus(), 50);
    }

    function closeCommandPalette() {
      $('#cmdOverlay').classList.remove('active');
      document.body.style.overflow = '';
    }

    function renderCommandList() {
      const query = $('#cmdInputField') ? $('#cmdInputField').value.toLowerCase().trim() : '';
      const listContainer = $('#cmdItemsList');
      const matches = getMatchingSearchResults();

      if (selectedCommandIndex >= matches.length) selectedCommandIndex = Math.max(0, matches.length - 1);
      listContainer.innerHTML = '';

      if (!matches.length) {
        listContainer.innerHTML = '<div style="padding:24px; text-align:center; color:var(--text-dim); font-family:var(--mono); font-size:0.8rem">No search results matching "' + escapeHtml(query) + '"</div>';
        return;
      }

      matches.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'cmd-item-row' + (idx === selectedCommandIndex ? ' selected' : '');
        row.setAttribute('role', 'option');
        row.setAttribute('aria-selected', idx === selectedCommandIndex ? 'true' : 'false');
        row.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:2px; text-align:left">
            <span style="font-weight:600; color:var(--paper); font-size:0.88rem">${escapeHtml(item.label)}</span>
            <span style="font-size:0.72rem; color:var(--text-dim)">${escapeHtml(item.subtext)}</span>
          </div>
          <span class="cmd-key-tag" style="font-size:0.65rem; background:rgba(224,83,21,0.15); color:var(--accent); border:1px solid var(--accent); padding:2px 8px; border-radius:4px">${escapeHtml(item.category)}</span>
        `;
        row.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          closeCommandPalette();
          setTimeout(() => item.action(), 50);
        });
        row.addEventListener('mouseenter', () => {
          selectedCommandIndex = idx;
          $$('.cmd-item-row').forEach((r, i) => r.classList.toggle('selected', i === idx));
        });
        listContainer.appendChild(row);
      });
    }

    if ($('#cmdInputField')) {
      $('#cmdInputField').addEventListener('input', () => {
        selectedCommandIndex = 0;
        renderCommandList();
      });

      $('#cmdInputField').addEventListener('keydown', (e) => {
        const matches = getMatchingSearchResults();
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedCommandIndex = Math.min(selectedCommandIndex + 1, matches.length - 1);
          renderCommandList();
          $$('.cmd-item-row.selected')[0]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedCommandIndex = Math.max(selectedCommandIndex - 1, 0);
          renderCommandList();
          $$('.cmd-item-row.selected')[0]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (matches[selectedCommandIndex]) {
            closeCommandPalette();
            matches[selectedCommandIndex].action();
          }
        }
      });
    }

    if ($('#cmdToggleBtn')) $('#cmdToggleBtn').addEventListener('click', openCommandPalette);
    if ($('#cmdOverlay')) $('#cmdOverlay').addEventListener('click', (e) => { if (e.target === $('#cmdOverlay')) closeCommandPalette(); });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openCommandPalette();
      }
      if (e.key === 'Escape') {
        if ($('#cmdOverlay').classList.contains('active')) closeCommandPalette();
        else if ($('#projectModal').classList.contains('active')) closeProjectModal();
      }
    });

    /* Reset theme to 100% Dark Mode */
    try {
      localStorage.removeItem('portfolio-theme');
      document.body.classList.remove('light-theme');
    } catch(e) {}

    /* =============================================
       CONTACT FORM & EMAIL ACTION
    ============================================= */
    if ($('#contactForm')) {
      $('#contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('#inputName') ? $('#inputName').value : '';
        const email = $('#inputEmail') ? $('#inputEmail').value : '';
        const msg = $('#inputMessage') ? $('#inputMessage').value : '';

        const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
        const body = encodeURIComponent('From: ' + name + ' (' + email + ')\n\nMessage:\n' + msg);
        window.open('mailto:' + PORTFOLIO_DATA.email + '?subject=' + subject + '&body=' + body);

        showToast('Opening email client — thank you, ' + name + '!');
        $('#contactForm').reset();
      });
    }

    function copyEmailToClipboard() {
      navigator.clipboard.writeText(PORTFOLIO_DATA.email)
        .then(() => showToast('Copied ' + PORTFOLIO_DATA.email + ' to clipboard!'))
        .catch(() => showToast('Email: ' + PORTFOLIO_DATA.email));
    }

    /* =============================================
       CANVAS BACKGROUND PARTICLES
    ============================================= */
    (function initParticles() {
      const canvas = $('#particles-bg');
      const ctx = canvas.getContext('2d');
      let width, height, particles = [];

      function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5
        });
      }

      function render() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#E05315';

        particles.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.strokeStyle = 'rgba(224, 83, 21, 0.08)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            if (dx * dx + dy * dy < 24000) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(render);
      }

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        render();
      }
    })();

    // MINI ROH MASCOT 5-POSE INTERACTIVE STATE SWITCHER
    (function () {
      const mascotPoses = [
        { img: 'mini_roh_wave_hd.png', text: '"Hi! Ready to build together"', sub: 'Mode: 01. Waving Hello' },
        { img: 'mini_roh_lockedin_hd.png', text: '"Intense coding mode activated"', sub: 'Mode: 02. Locked In' },
        { img: 'mini_roh_building_ai_hd.png', text: '"Designing AI systems & agents"', sub: 'Mode: 03. Building AI' },
        { img: 'mini_roh_deploy_success_hd.png', text: '"Deployment success live on Vercel"', sub: 'Mode: 04. Deployed Live' },
        { img: 'mini_roh_it_works_hd.png', text: '"Zero bugs, clean code!"', sub: 'Mode: 05. It Works!' }
      ];

      let currentMascotIndex = 0;

      window.setMascotPose = function (index) {
        currentMascotIndex = index;
        const pose = mascotPoses[index];
        const mascotImg = document.getElementById('mascotMainImg');
        const statusText = document.getElementById('mascotStatusText');
        const modeSub = document.getElementById('mascotModeSub');

        if (mascotImg) {
          mascotImg.style.opacity = '0';
          mascotImg.style.transform = 'scale(0.9)';
          setTimeout(() => {
            mascotImg.src = pose.img;
            mascotImg.style.opacity = '1';
            mascotImg.style.transform = 'scale(1)';
          }, 200);
        }
        if (statusText) statusText.textContent = pose.text;
        if (modeSub) modeSub.textContent = pose.sub;

        for (let i = 0; i < 5; i++) {
          const btn = document.getElementById(`mpill-${i}`);
          if (btn) {
            if (i === index) {
              btn.style.background = 'rgba(224,83,21,0.25)';
              btn.style.borderColor = 'rgba(224,83,21,0.5)';
              btn.style.color = 'var(--paper)';
            } else {
              btn.style.background = 'rgba(255,255,255,0.03)';
              btn.style.borderColor = 'rgba(255,255,255,0.1)';
              btn.style.color = 'var(--text-muted)';
            }
          }
        }
      };

      // FOOTER MASCOT LIVE POSE SWITCHER
      window.setFooterPose = function (index) {
        const fposes = [
          { img: 'mascot_need_sleep.png', text: '"Zzz... Rest mode activated. Ready to build!"' },
          { img: 'mascot_wave.png', text: '"Hi! Welcome to my portfolio 👋"' },
          { img: 'mascot_locked_in.png', text: '"Intense coding mode activated 💻"' },
          { img: 'mascot_compiler_error.png', text: '"Squashing edge-case bugs & compiler errors 🤯"' },
          { img: 'mascot_deploy_success.png', text: '"Deployment success live on Vercel 🚀"' }
        ];
        const mascotImg = document.getElementById('footerMascotImg');
        const statusText = document.getElementById('footerStatusText');
        if (mascotImg) {
          mascotImg.style.opacity = '0';
          mascotImg.style.transform = 'scale(0.85)';
          setTimeout(() => {
            mascotImg.src = fposes[index].img;
            mascotImg.style.opacity = '1';
            mascotImg.style.transform = 'scale(1)';
          }, 180);
        }
        if (statusText) statusText.textContent = fposes[index].text;
        for (let i = 0; i < 5; i++) {
          const btn = document.getElementById(`fpose-${i}`);
          if (btn) {
            if (i === index) {
              btn.style.background = 'rgba(224,83,21,0.25)';
              btn.style.borderColor = 'rgba(224,83,21,0.5)';
              btn.style.color = 'var(--paper)';
            } else {
              btn.style.background = 'rgba(255,255,255,0.04)';
              btn.style.borderColor = 'rgba(255,255,255,0.1)';
              btn.style.color = 'var(--text-muted)';
            }
          }
        }
      };

      setInterval(() => {
        currentMascotIndex = (currentMascotIndex + 1) % 5;
        window.setMascotPose(currentMascotIndex);
      }, 4000);
    })();

    /* =============================================
       MASCOT CLICK COUNTER + MILESTONE POPUP SYSTEM
    ============================================= */
    (function() {
      let totalClicks = 0;
      const milestones = [
        { at: 3,  img: 'mascot_wave.png',           title: 'Mini Roh notices you!',       msg: 'you\'re actually clicking me! most people just scroll past <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5 1.5 4 1.5 4-1.5 4-1.5"/><circle cx="9" cy="9" r="1" fill="var(--accent)"/><circle cx="15" cy="9" r="1" fill="var(--accent)"/></svg>' },
        { at: 7,  img: 'mascot_it_works.png',        title: 'Getting warmer...',           msg: 'ok we\'re definitely vibing now. 7 clicks and counting! <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>' },
        { at: 15, img: 'mascot_coding.png',          title: 'Click Enthusiast! <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"/></svg>',        msg: '15 clicks?! you\'re more dedicated than my git commit streak <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
        { at: 25, img: 'mascot_deploy_success.png',  title: 'Certified Clicker! <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 23c-4.97 0-9-3.58-9-8 0-4.06 3.02-7.5 7-9.5 0 2 2 3.5 3 4 1.5-2.5 1-6 1-6s4 3 4 8c0 1.5-.5 3-1.5 4.5-.5-1.5-1.5-2.5-2.5-3 0 2-1 3.5-2 4z"/></svg>',       msg: '25! at this point you should just hire me already <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' },
        { at: 42, img: 'mascot_locked_in.png',       title: 'The Answer is 42 <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>',         msg: 'you found the answer to life, the universe, and everything. also you really like clicking.' },
        { at: 69, img: 'mascot_focus_mode.png',       title: 'Nice. <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M2 10h20M4 10a4 4 0 0 0 8 0M12 10a4 4 0 0 0 8 0"/><line x1="2" y1="10" x2="4" y2="16"/><line x1="22" y1="10" x2="20" y2="16"/></svg>',                   msg: 'nice.' },
        { at: 100,img: 'mascot_need_sleep.png',      title: 'LEGENDARY CLICKER <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',    msg: 'ONE HUNDRED CLICKS. you absolute legend. Mini Roh is honored. you deserve a nap. we both do. <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' }
      ];
      let nextMilestoneIdx = 0;

      let popup;
      function initPopup() {
        if (!popup && document.body) {
          popup = document.createElement('div');
          popup.className = 'mascot-milestone-popup';
          popup.innerHTML = '<img id="milestoneImg" src=""><div class="milestone-title" id="milestoneTitle"></div><div class="milestone-msg" id="milestoneMsg"></div><div class="milestone-counter" id="milestoneCounter"></div>';
          document.body.appendChild(popup);
          popup.addEventListener('click', () => {
            popup.classList.remove('active');
          });
        }
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPopup);
      } else {
        initPopup();
      }

      function showMilestone(m) {
        document.getElementById('milestoneImg').src = m.img;
        document.getElementById('milestoneTitle').innerHTML = m.title;
        document.getElementById('milestoneMsg').innerHTML = m.msg;
        document.getElementById('milestoneCounter').textContent = 'total mascot clicks: ' + totalClicks;
        popup.classList.add('active');

        // Burst confetti SVG stars
        for (let i = 0; i < 12; i++) {
          const span = document.createElement('span');
          span.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>';
          span.style.cssText = 'position:fixed;z-index:10001;pointer-events:none;animation:confettiBurst 1.2s ease-out forwards;'
            + 'left:' + (30 + Math.random() * 40) + '%;top:' + (40 + Math.random() * 20) + '%;';
          document.body.appendChild(span);
          setTimeout(() => span.remove(), 1300);
        }

        // Auto-dismiss after 5s
        setTimeout(() => popup.classList.remove('active'), 5000);
      }

      function updateFooterCounter() {
        const el = document.getElementById('footerClickDisplay');
        if (el && totalClicks > 0) {
          el.style.opacity = '1';
          el.innerHTML = 'mascot clicks: ' + totalClicks + (totalClicks >= 100 ? ' <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>' : totalClicks >= 25 ? ' <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 23c-4.97 0-9-3.58-9-8 0-4.06 3.02-7.5 7-9.5 0 2 2 3.5 3 4 1.5-2.5 1-6 1-6s4 3 4 8c0 1.5-.5 3-1.5 4.5-.5-1.5-1.5-2.5-2.5-3 0 2-1 3.5-2 4z"/></svg>' : totalClicks >= 10 ? ' <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>' : '');
        }
      }

      window.triggerMascotClick = function (imgEl, bubbleId, defaultMsg) {
        totalClicks++;

        // Track per-mascot click progression count
        if (!imgEl._clicks) imgEl._clicks = 0;
        imgEl._clicks++;

        const c = imgEl._clicks;
        let displayMsg = defaultMsg;
        let animName = 'mascotWiggle';

        // Playful / Irritated / Headpat Emotional Progression
        if (c === 4) {
          displayMsg = 'hey hey! that tickles! <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>';
          animName = 'mascotWiggle';
        } else if (c === 5) {
          displayMsg = 'whoa, fast clicks! testing my event listeners? <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>';
          animName = 'mascotWiggle';
        } else if (c === 6) {
          displayMsg = 'you really like poking me, don\'t you? <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5 2 4 2 4-2 4-2"/></svg>';
          animName = 'mascotWiggle';
        } else if (c === 7) {
          displayMsg = 'hmph! I\'m trying to write clean code here! <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>';
          animName = 'mascotPout';
        } else if (c === 8) {
          displayMsg = 'pout mode activated! stop poking me! <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>';
          animName = 'mascotPout';
        } else if (c === 9) {
          displayMsg = 'okay okay, I\'m taking a coffee break! <svg class="b-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>';
          animName = 'mascotPout';
        } else if (c >= 10) {
          displayMsg = 'okay fine... headpats accepted! Mini Roh loves you! <svg class="b-icon" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
          animName = 'mascotPat';

          // Spawn floating headpat heart above mascot
          if (imgEl && imgEl.parentElement) {
            const h = document.createElement('span');
            h.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
            h.style.cssText = 'position:absolute; top:0; left:50%; transform:translateX(-50%); z-index:100; pointer-events:none; animation:patHeartFloat 1.2s ease-out forwards; filter:drop-shadow(0 0 10px rgba(224,83,21,0.8));';
            imgEl.parentElement.appendChild(h);
            setTimeout(() => h.remove(), 1300);
          }
        }

        // Show bubble with innerHTML to support SVG icons & top navbar collision prevention
        const bubble = document.getElementById(bubbleId);
        if (bubble) {
          bubble.innerHTML = displayMsg;
          bubble.style.opacity = '1';

          // Reset positioning overrides
          bubble.style.top = '';
          bubble.style.bottom = '';

          // Check if top edge gets cut off by fixed navbar (< 75px from viewport top)
          const rect = bubble.getBoundingClientRect();
          if (rect.top < 75) {
            // Flip downward if top is cut off
            bubble.style.bottom = 'auto';
            bubble.style.top = '105%';
          } else {
            bubble.style.bottom = '100%';
            bubble.style.top = 'auto';
          }

          const isRightAligned = bubble.style.left === 'auto';
          if (!isRightAligned) {
            bubble.style.transform = 'translateX(-50%) translateY(-10px) scale(1.05)';
            setTimeout(() => { bubble.style.transform = 'translateX(-50%) translateY(-6px) scale(1)'; }, 280);
          } else {
            bubble.style.transform = 'translateY(-4px)';
            setTimeout(() => { bubble.style.transform = 'none'; }, 280);
          }
        }

        // Apply corresponding mascot animation (Wiggle / Pout / Headpat)
        if (imgEl) {
          imgEl.style.animation = 'none';
          void imgEl.offsetWidth; // Force reflow
          imgEl.style.animation = animName + ' 0.6s ease-in-out';
          setTimeout(() => {
            imgEl.style.animation = 'floatCute 3.5s ease-in-out infinite';
          }, 650);
        }

        // Check milestones
        if (nextMilestoneIdx < milestones.length && totalClicks >= milestones[nextMilestoneIdx].at) {
          showMilestone(milestones[nextMilestoneIdx]);
          nextMilestoneIdx++;
        }

        updateFooterCounter();
      };
    })();
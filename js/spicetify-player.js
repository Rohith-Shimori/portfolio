/**
 * CYBER SOUND LAB — High-Fidelity Audio Engine, 307-Track Master Playlist & 60FPS Visualizer
 * Features:
 * 1. Complete 307-Track "Peace of Hell" Master Playlist (Curated by Shimorikichiri / Rohith)
 * 2. Authentic Lo-Fi Chillhop Radio: 10 real legendary artists (Idealism, Jinsang, potsu, Kupla, The Deli, etc.)
 * 3. 60FPS Real-Time Web Audio API Canvas Visualizer (Dynamic FFT Spectrum Analyzer)
 * 4. Dual Playback Engine: 
 *    - Instant 60FPS High-Bitrate Web Audio Preview (Zero-latency direct CDN streaming)
 *    - Headless Full-Length Track Streamer (Zero UI clutter)
 * 5. Dynamic Ambient Mesh Lighting & Pure Vector SVGs (Zero emojis, zero third-party branding)
 * 6. Responsive Volume Controls, Scrubber, Real-Time Search Filtering & Channel Switcher
 */

(function () {
  'use strict';

  // 1. Curated Authentic Lo-Fi Station (100% Real Acclaimed Artists & Certified Audio Streams)
  const LOFI_TRACKS = [
    {
      index: 1,
      title: 'controlla',
      artist: 'Idealism',
      album: 'controlla',
      durationStr: '2:10',
      duration: 130,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/35/45/98/3545986a-4e35-473f-2fc6-784cc06a8aa6/mzaf_1484411353781049225.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/b5/26/b8b526e2-956e-bb51-dd2a-f24961a34820/artwork.jpg/600x600bb.jpg',
      youtubeId: 'qj8a61KqPfs',
      palette: ['#E05315', '#FA243C', '#FFAA40']
    },
    {
      index: 2,
      title: 'Affection',
      artist: 'Jinsang',
      album: 'Solitude',
      durationStr: '2:40',
      duration: 160,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/27/7f/5a/277f5a90-6ca3-a8e8-931c-8dd7c1d472fd/mzaf_4569701282117560653.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/33/a5/2f/33a52fc2-d77b-9408-6d5b-af389ee28c43/cover_4018939360092.jpg/600x600bb.jpg',
      youtubeId: '81W93vW403o',
      palette: ['#8B5CF6', '#6366F1', '#EC4899']
    },
    {
      index: 3,
      title: "I'm Closing My Eyes (feat. Shiloh)",
      artist: 'potsu',
      album: "I'm Closing My Eyes",
      durationStr: '2:05',
      duration: 125,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/92/46/17/924617d7-5f7d-38ee-6015-6f967e58d63e/mzaf_2929103300763082961.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/1c/40/f41c40ff-730f-e190-ed5c-0049cbf46b4b/053000718956_cover.jpg/600x600bb.jpg',
      youtubeId: '2q9P0zT3LdI',
      palette: ['#3B82F6', '#60A5FA', '#93C5FD']
    },
    {
      index: 4,
      title: 'Dew',
      artist: 'Kupla',
      album: 'Kingdom in Blue',
      durationStr: '2:30',
      duration: 150,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/00/a0/6e/00a06e06-74c6-0e24-8847-ed2dece39e23/mzaf_4847907914674305719.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f2/15/8d/f2158dec-ee67-6052-42c4-d044cede0436/859737277243.jpg/600x600bb.jpg',
      youtubeId: 'WwXGg1eL2sM',
      palette: ['#10B981', '#06B6D4', '#3B82F6']
    },
    {
      index: 5,
      title: '5:32Pm',
      artist: 'The Deli',
      album: 'Vibes 2',
      durationStr: '2:15',
      duration: 135,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/29/b8/3e/29b83ee0-764f-be52-2d26-eb6f1e652ef7/mzaf_17755339005137464274.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/09/c5/e209c539-b762-951a-ff82-c414537b2d01/180772.jpg/600x600bb.jpg',
      youtubeId: 'a8uQ4H-m7oM',
      palette: ['#F59E0B', '#EF4444', '#E05315']
    },
    {
      index: 6,
      title: "I'm Tired of Feeling This Way",
      artist: 'Elijah Who',
      album: 'Gentle Boy',
      durationStr: '2:20',
      duration: 140,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a9/e7/d2/a9e7d266-2bd5-478d-0ecf-3c43aa284a79/mzaf_4364363870639493888.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/3a/43/a7/3a43a72f-edb7-d891-97c4-8c0a41b64fb2/artwork.jpg/600x600bb.jpg',
      youtubeId: 'bA45qVf_vC8',
      palette: ['#EC4899', '#8B5CF6', '#3B82F6']
    },
    {
      index: 7,
      title: 'Emotional Crank',
      artist: 'tomppabeats',
      album: 'Harbor LP',
      durationStr: '1:55',
      duration: 115,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/d9/c6/81d9c65a-362b-cf96-a466-341b5c289762/mzaf_14037826462937616939.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a2/ec/13/a2ec13cf-9ee3-0b86-b69e-fb654e02736d/cover_4018939299866.jpg/600x600bb.jpg',
      youtubeId: 'q8M7gA4nO90',
      palette: ['#06B6D4', '#3B82F6', '#6366F1']
    },
    {
      index: 8,
      title: 'Again',
      artist: 'Wun Two',
      album: 'Penthouse',
      durationStr: '2:00',
      duration: 120,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d7/c5/d8/d7c5d870-6122-d416-f882-96cdc9478eef/mzaf_4862885232149679616.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/29/33/f52933c9-8143-b0d2-b180-8d92f9a36922/cover_4062851259545.jpg/600x600bb.jpg',
      youtubeId: 't3c9sL91_j8',
      palette: ['#D97706', '#B45309', '#78350F']
    },
    {
      index: 9,
      title: 'Novocaine',
      artist: 'Shiloh Dynasty & Sleepy Dawg',
      album: 'Novocaine',
      durationStr: '2:05',
      duration: 125,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ac/50/5c/ac505c85-0aa6-545b-c5a5-c44f4e55efef/mzaf_6538965673320000541.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a9/20/d5/a920d5d2-1927-0cf8-4ad9-7a9f4266660e/cover.jpg/600x600bb.jpg',
      youtubeId: '5Z1sB-a9q9Y',
      palette: ['#6366F1', '#4F46E5', '#312E81']
    },
    {
      index: 10,
      title: 'Steven Universe',
      artist: 'L.Dre',
      album: 'Steven Universe Lofi',
      durationStr: '2:10',
      duration: 130,
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/27/71/40/27714022-bf39-c709-8ca4-96c6168992df/mzaf_12333765880357727723.plus.aac.p.m4a',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8e/6c/e1/8e6ce16a-908f-c76a-1c65-6e35d15689b5/artwork.jpg/600x600bb.jpg',
      youtubeId: '4B3t1Q2v0kE',
      palette: ['#F43F5E', '#FB7185', '#FDA4AF']
    }
  ];

  // 2. Playback State
  let currentSource = 'playlist'; // 'playlist' or 'lofi'
  let currentEngine = 'preview';  // 'preview' or 'full'
  let currentTrackIdx = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isLoop = false;
  let currentVolume = 0.8;
  let previousVolume = 0.8;
  let searchQuery = '';
  let currentGenre = 'all';

  // Web Audio Graph & 60FPS Visualizer
  let audioContext = null;
  let masterGain = null;
  let analyserNode = null;
  let sourceNode = null;
  let audioElement = null;
  let visualizerAnimId = null;
  let fullSongTicker = null;
  let fullSongElapsed = 0;

  // DOM Elements cache
  const dom = {};

  function init() {
    cacheDom();
    setupAudioElement();
    setupWaveformCanvas();
    bindEvents();
    setupScrubberEvents();
    renderTracklist();
    updateTrackDisplay();
    setVolume(80);
    startWaveformLoop();
  }

  function cacheDom() {
    dom.deck = document.getElementById('appleMusicDeck');
    dom.ambientMesh = document.getElementById('amAmbientMesh');
    dom.activeChannelTag = document.getElementById('amActiveChannelTag');
    dom.liveStatus = document.getElementById('amLiveStatus');
    dom.statusText = document.getElementById('amStatusText');

    // Artwork & Physical Vinyl Disc
    dom.artworkStack = document.getElementById('amArtworkStack');
    dom.artworkFrame = document.getElementById('amArtworkFrame');
    dom.albumArt = document.getElementById('amAlbumArt');
    dom.vinylDisc = document.getElementById('amVinylDisc');
    dom.vinylCenterImg = document.getElementById('amVinylCenterImg');

    dom.songTitle = document.getElementById('amSongTitle');
    dom.songArtist = document.getElementById('amSongArtist');
    dom.albumName = document.getElementById('amAlbumName');
    dom.equalizer = document.getElementById('amEqualizer');

    // Integrated Interactive Audio Visualizer (Zero Separate Box)
    dom.visualizerCanvas = document.getElementById('amVisualizerCanvas') || document.getElementById('amWaveformCanvas');
    dom.waveformCanvas = dom.visualizerCanvas;
    if (dom.visualizerCanvas) {
      dom.waveformCtx = dom.visualizerCanvas.getContext('2d');
    }
    dom.progressSlider = document.getElementById('amProgressSlider');
    dom.qualityBadge = document.getElementById('amQualityBadge');
    dom.timeElapsed = document.getElementById('amTimeElapsed');
    dom.timeRemaining = document.getElementById('amTimeRemaining');

    dom.playBtn = document.getElementById('amPlayBtn');
    dom.prevBtn = document.getElementById('amPrevBtn');
    dom.nextBtn = document.getElementById('amNextBtn');
    dom.shuffleBtn = document.getElementById('amShuffleBtn');
    dom.loopBtn = document.getElementById('amLoopBtn');

    dom.volIcon = document.getElementById('amVolIcon');
    dom.volSvg = document.getElementById('amVolSvg');
    dom.volSlider = document.getElementById('amVolSlider');
    dom.volVal = document.getElementById('amVolVal');

    dom.modePreview = document.getElementById('amModePreview');
    dom.modeFull = document.getElementById('amModeFull');
    dom.spotifyLink = document.getElementById('amSpotifyLink');

    dom.playlistThumb = document.getElementById('amPlaylistThumb');
    dom.playlistTitle = document.getElementById('amPlaylistTitle');
    dom.playlistCurator = document.getElementById('amPlaylistCurator');

    dom.chanPlaylist = document.getElementById('amChanPlaylist');
    dom.chanLofi = document.getElementById('amChanLofi');
    dom.searchInput = document.getElementById('amSearchInput');
    dom.genreFilters = document.getElementById('amGenreFilters');
    dom.tracklistContainer = document.getElementById('amTracklistContainer');

    // Anchored Telemetry Footer
    dom.footerCount = document.getElementById('amFooterCount');
    dom.footerDuration = document.getElementById('amFooterDuration');
    dom.footerEngine = document.getElementById('amFooterEngine');
    dom.scrollTopBtn = document.getElementById('amScrollTopBtn');

    dom.headlessPlayer = document.getElementById('amHeadlessPlayer');
    dom.headlessIframe = document.getElementById('amHeadlessIframe');
  }

  function getActiveTracks() {
    if (currentSource === 'lofi') {
      return LOFI_TRACKS;
    }
    const data = window.ROHITH_PLAYLIST_DATA;
    if (data && Array.isArray(data.tracks) && data.tracks.length > 0) {
      return data.tracks;
    }
    return LOFI_TRACKS;
  }

  function getCurrentTrack() {
    const list = getActiveTracks();
    if (currentTrackIdx < 0) currentTrackIdx = 0;
    if (currentTrackIdx >= list.length) currentTrackIdx = list.length - 1;
    return list[currentTrackIdx] || list[0];
  }

  // 3. Audio Element & Web Audio Graph
  function setupAudioElement() {
    if (!audioElement) {
      audioElement = new Audio();
      audioElement.crossOrigin = 'anonymous';
      audioElement.preload = 'metadata';
      audioElement.volume = currentVolume;
    }

    audioElement.addEventListener('timeupdate', onAudioTimeUpdate);
    audioElement.addEventListener('ended', onTrackEnded);
    audioElement.addEventListener('play', () => setPlayingUI(true));
    audioElement.addEventListener('pause', () => {
      if (currentEngine === 'preview') setPlayingUI(false);
    });
    audioElement.addEventListener('error', (e) => {
      console.warn('Audio stream preview note:', e);
      if (isPlaying && currentEngine === 'preview') {
        switchEngine('full');
      }
    });
  }

  function initWebAudio() {
    if (audioContext) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioContext = new AudioCtx();

      analyserNode = audioContext.createAnalyser();
      analyserNode.fftSize = 64;
      analyserNode.smoothingTimeConstant = 0.8;

      masterGain = audioContext.createGain();
      masterGain.gain.setValueAtTime(1.0, audioContext.currentTime);

      try {
        sourceNode = audioContext.createMediaElementSource(audioElement);
        sourceNode.connect(analyserNode);
        analyserNode.connect(audioContext.destination);
      } catch (err) {
        console.info('Direct MediaElement audio connect fallback:', err);
      }
    } catch (e) {
      console.warn('Web Audio init note:', e);
    }
  }

  // 4. 60FPS Interactive Audio Waveform Scrubber Engine (Zero Separate Box)
  const NUM_WAVEFORM_BARS = 48;
  let isScrubbing = false;
  let hoverPct = null;

  function setupWaveformCanvas() {
    if (!dom.waveformCanvas) return;
    const rect = dom.waveformCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    dom.waveformCanvas.width = (rect.width || 315) * dpr;
    dom.waveformCanvas.height = (rect.height || 36) * dpr;
    if (dom.waveformCtx) {
      if (dom.waveformCtx.resetTransform) {
        dom.waveformCtx.resetTransform();
      } else {
        dom.waveformCtx.setTransform(1, 0, 0, 1, 0, 0);
      }
      dom.waveformCtx.scale(dpr, dpr);
    }
  }

  // Precompute organic waveform fingerprint based on track identity
  function getTrackWaveProfile(track) {
    if (!track) return Array(NUM_WAVEFORM_BARS).fill(0.5);
    const seedStr = (track.title || '') + (track.artist || '');
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
      hash = (hash << 5) - hash + seedStr.charCodeAt(i);
      hash |= 0;
    }
    const profile = [];
    for (let i = 0; i < NUM_WAVEFORM_BARS; i++) {
      const angle = (i / NUM_WAVEFORM_BARS) * Math.PI * 2;
      const s1 = Math.sin(angle * 3 + hash * 0.015);
      const s2 = Math.cos(angle * 6 - hash * 0.02);
      const s3 = Math.sin(angle * 11 + hash * 0.005);
      const base = 0.28 + 0.45 * Math.abs((s1 + s2 + s3) / 3);
      profile.push(Math.max(0.18, Math.min(0.95, base)));
    }
    return profile;
  }

  function startWaveformLoop() {
    window.addEventListener('resize', setupWaveformCanvas);
    const freqData = new Uint8Array(64);

    function renderWaveform() {
      visualizerAnimId = requestAnimationFrame(renderWaveform);
      if (!dom.waveformCanvas || !dom.waveformCtx) return;

      const ctx = dom.waveformCtx;
      const w = dom.waveformCanvas.offsetWidth || 315;
      const h = dom.waveformCanvas.offsetHeight || 36;
      ctx.clearRect(0, 0, w, h);

      if (isPlaying && analyserNode && currentEngine === 'preview') {
        try {
          analyserNode.getByteFrequencyData(freqData);
        } catch (e) {}
      }

      const track = getCurrentTrack();
      const waveProfile = getTrackWaveProfile(track);
      const spacing = 2.5;
      const barWidth = Math.max(2.5, (w - (NUM_WAVEFORM_BARS - 1) * spacing) / NUM_WAVEFORM_BARS);
      const now = Date.now() * 0.0035;
      const centerY = h / 2;

      for (let i = 0; i < NUM_WAVEFORM_BARS; i++) {
        let dynamicScale = 1.0;
        if (isPlaying) {
          if (currentEngine === 'preview' && analyserNode) {
            const freqVal = (freqData[i % 32] || 0) / 255;
            dynamicScale = 0.3 + 1.35 * freqVal;
          } else {
            const pulse = (Math.sin(now * 4 + i * 0.35) + Math.cos(now * 2.2 - i * 0.2) + 2) / 4;
            dynamicScale = 0.35 + 0.9 * pulse;
          }
        } else {
          // Resting subtle wave
          const breathe = (Math.sin(now * 0.9 + i * 0.18) + 1) / 2;
          dynamicScale = 0.3 + 0.15 * breathe;
        }

        const barFraction = Math.max(0.12, Math.min(1.0, waveProfile[i] * dynamicScale));
        const barHeight = Math.max(4, barFraction * (h - 4));
        const x = i * (barWidth + spacing);
        const y = centerY - barHeight / 2;

        // Clean modern studio audio gradient (Zero candle flame blur)
        const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
        if (isPlaying) {
          grad.addColorStop(0, '#FFA534');
          grad.addColorStop(0.5, '#E05315');
          grad.addColorStop(1, '#C23E08');
        } else {
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.32)');
          grad.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
        }

        ctx.fillStyle = grad;
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;

        // Draw symmetrical rounded pill soundwave bar
        const r = Math.min(barWidth / 2, 2);
        if (typeof ctx.roundRect === 'function') {
          ctx.beginPath();
          ctx.roundRect(x, y, barWidth, barHeight, r);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(x + r, y);
          ctx.lineTo(x + barWidth - r, y);
          ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + r);
          ctx.lineTo(x + barWidth, y + barHeight - r);
          ctx.quadraticCurveTo(x + barWidth, y + barHeight, x + barWidth - r, y + barHeight);
          ctx.lineTo(x + r, y + barHeight);
          ctx.quadraticCurveTo(x, y + barHeight, x, y + barHeight - r);
          ctx.lineTo(x, y + r);
          ctx.quadraticCurveTo(x, y, x + r, y);
          ctx.closePath();
          ctx.fill();
        }
      }
    }

    renderWaveform();
  }

  // 5. Playback Transport Controls
  function play() {
    initWebAudio();
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }

    const track = getCurrentTrack();
    isPlaying = true;
    setPlayingUI(true);

    if (currentEngine === 'preview') {
      stopHeadlessStream();
      const url = track.previewUrl || '';
      if (url) {
        if (audioElement.src !== url) {
          audioElement.src = url;
          audioElement.load();
        }
        audioElement.play().catch(() => {
          switchEngine('full');
        });
      } else {
        switchEngine('full');
      }
    } else {
      if (audioElement) {
        audioElement.pause();
      }
      playHeadlessStream(track);
    }

    window.dispatchEvent(new CustomEvent('spicetify:play', {
      detail: { track, source: currentSource, engine: currentEngine }
    }));
  }

  function pause() {
    isPlaying = false;
    setPlayingUI(false);

    if (audioElement) {
      audioElement.pause();
    }
    stopHeadlessStream();

    window.dispatchEvent(new CustomEvent('spicetify:pause'));
  }

  function togglePlay() {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }

  function nextTrack() {
    const list = getActiveTracks();
    if (isShuffle) {
      let randIdx = Math.floor(Math.random() * list.length);
      if (randIdx === currentTrackIdx && list.length > 1) {
        randIdx = (randIdx + 1) % list.length;
      }
      currentTrackIdx = randIdx;
    } else {
      currentTrackIdx = (currentTrackIdx + 1) % list.length;
    }
    loadCurrentTrack();
  }

  function prevTrack() {
    const list = getActiveTracks();
    if (currentEngine === 'preview' && audioElement && audioElement.currentTime > 3) {
      audioElement.currentTime = 0;
      return;
    }
    if (currentEngine === 'full' && fullSongElapsed > 3) {
      fullSongElapsed = 0;
      seekHeadless(0);
      return;
    }

    currentTrackIdx = (currentTrackIdx - 1 + list.length) % list.length;
    loadCurrentTrack();
  }

  function loadCurrentTrack() {
    fullSongElapsed = 0;
    updateTrackDisplay();
    renderTracklist();
    if (isPlaying) {
      play();
    } else {
      const track = getCurrentTrack();
      if (currentEngine === 'preview' && track.previewUrl) {
        audioElement.src = track.previewUrl;
        audioElement.load();
      }
    }
  }

  function selectTrack(index) {
    const list = getActiveTracks();
    if (index >= 0 && index < list.length) {
      currentTrackIdx = index;
      loadCurrentTrack();
      play();
    }
  }

  function onTrackEnded() {
    if (isLoop) {
      if (currentEngine === 'preview') {
        audioElement.currentTime = 0;
        audioElement.play();
      } else {
        fullSongElapsed = 0;
        seekHeadless(0);
      }
    } else {
      nextTrack();
    }
  }

  // 6. Headless Full Song Engine (YouTube Iframe)
  function playHeadlessStream(track) {
    if (!dom.headlessIframe) return;
    const ytid = track.youtubeId;
    if (!ytid) {
      switchEngine('preview');
      return;
    }

    const embedUrl = `https://www.youtube-nocookie.com/embed/${ytid}?autoplay=1&enablejsapi=1&controls=0&rel=0`;
    if (dom.headlessIframe.src !== embedUrl) {
      dom.headlessIframe.src = embedUrl;
    }

    clearInterval(fullSongTicker);
    const duration = getTrackDurationSec(track);

    fullSongTicker = setInterval(() => {
      if (!isPlaying || currentEngine !== 'full') return;
      fullSongElapsed++;
      if (fullSongElapsed >= duration) {
        clearInterval(fullSongTicker);
        onTrackEnded();
        return;
      }
      updateScrubberUI(fullSongElapsed, duration);
    }, 1000);
  }

  function stopHeadlessStream() {
    clearInterval(fullSongTicker);
    if (dom.headlessIframe) {
      try {
        dom.headlessIframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'pauseVideo',
          args: []
        }), '*');
      } catch (e) {}
    }
  }

  function seekHeadless(seconds) {
    fullSongElapsed = Math.floor(seconds);
    if (dom.headlessIframe) {
      try {
        dom.headlessIframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'seekTo',
          args: [seconds, true]
        }), '*');
      } catch (e) {}
    }
  }

  function getTrackDurationSec(track) {
    if (track.duration) return track.duration;
    if (track.durationMs) return Math.floor(track.durationMs / 1000);
    if (track.durationStr) {
      const parts = track.durationStr.split(':').map(Number);
      if (parts.length === 2) return parts[0] * 60 + parts[1];
    }
    return 210;
  }

  // 7. Interactive Timeline Slider & Time Engine
  function setupScrubberEvents() {
    if (dom.progressSlider) {
      dom.progressSlider.addEventListener('input', (e) => {
        isScrubbing = true;
        const frac = parseFloat(e.target.value) / 100;
        hoverPct = frac;
        const track = getCurrentTrack();
        const dur = currentEngine === 'preview'
          ? ((audioElement && audioElement.duration) || 30)
          : getTrackDurationSec(track);
        updateScrubberUI(frac * dur, dur);
      });

      dom.progressSlider.addEventListener('change', (e) => {
        const frac = parseFloat(e.target.value) / 100;
        seekToFraction(frac);
        isScrubbing = false;
        hoverPct = null;
      });
    }
  }

  function seekToFraction(pct) {
    const track = getCurrentTrack();
    const dur = currentEngine === 'preview'
      ? ((audioElement && audioElement.duration) || 30)
      : getTrackDurationSec(track);
    const target = pct * dur;

    if (currentEngine === 'preview') {
      if (audioElement && !isNaN(audioElement.duration)) {
        audioElement.currentTime = target;
      }
    } else {
      seekHeadless(target);
    }
    updateScrubberUI(target, dur);
  }

  function onAudioTimeUpdate() {
    if (currentEngine !== 'preview') return;
    if (isScrubbing) return;
    const cur = audioElement.currentTime;
    const dur = audioElement.duration || 30;
    updateScrubberUI(cur, dur);
  }

  function updateScrubberUI(cur, dur) {
    if (dom.timeElapsed) dom.timeElapsed.textContent = formatTime(cur);
    if (dom.timeRemaining) dom.timeRemaining.textContent = '-' + formatTime(Math.max(0, dur - cur));
    if (dom.qualityBadge) {
      dom.qualityBadge.textContent = (currentEngine === 'preview') ? 'DIRECT CDN 320 KBPS' : 'HEADLESS FULL STREAM';
    }
    if (dom.progressSlider && dur > 0) {
      const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
      if (!isScrubbing) {
        dom.progressSlider.value = pct;
      }
      dom.progressSlider.style.setProperty('--prog-pct', `${pct}%`);
    }
  }

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // 8. Volume Management (Direct Native & SVG Glyphs)
  function setVolume(pct) {
    const val = Math.max(0, Math.min(100, pct));
    currentVolume = val / 100;

    if (audioElement) {
      audioElement.volume = currentVolume;
    }

    if (dom.headlessIframe) {
      try {
        dom.headlessIframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'setVolume',
          args: [val]
        }), '*');
      } catch (e) {}
    }

    if (dom.volSlider) {
      dom.volSlider.value = val;
      dom.volSlider.style.setProperty('--vol-pct', `${val}%`);
    }
    if (dom.volVal) {
      dom.volVal.textContent = `${Math.round(val)}%`;
    }
    updateVolumeIcon(val);
  }

  function updateVolumeIcon(val) {
    if (!dom.volSvg) return;
    if (val === 0) {
      dom.volSvg.innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
    } else if (val < 45) {
      dom.volSvg.innerHTML = '<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>';
    } else {
      dom.volSvg.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
    }
  }

  function toggleMute() {
    if (currentVolume > 0) {
      previousVolume = currentVolume;
      setVolume(0);
    } else {
      setVolume(Math.round((previousVolume || 0.8) * 100));
    }
  }

  // 9. Dynamic Ambient Artwork Mesh Gradient
  function updateAmbientMesh(track) {
    if (!dom.ambientMesh) return;
    const blobs = dom.ambientMesh.querySelectorAll('.am-mesh-blob');
    if (!blobs || blobs.length < 3) return;

    let palette = track.palette;
    if (!palette || !Array.isArray(palette)) {
      palette = derivePaletteFromText(track.title + track.artist);
    }

    blobs[0].style.background = `radial-gradient(circle, ${palette[0]} 0%, transparent 70%)`;
    blobs[1].style.background = `radial-gradient(circle, ${palette[1]} 0%, transparent 70%)`;
    blobs[2].style.background = `radial-gradient(circle, ${palette[2]} 0%, transparent 70%)`;
  }

  function derivePaletteFromText(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h1 = Math.abs(hash) % 360;
    const h2 = (h1 + 60) % 360;
    const h3 = (h1 + 180) % 360;
    return [
      `hsl(${h1}, 85%, 52%)`,
      `hsl(${h2}, 90%, 48%)`,
      `hsl(${h3}, 80%, 55%)`
    ];
  }

  // 10. UI Updates & Metadata Display
  function updateTrackDisplay() {
    const track = getCurrentTrack();
    if (!track) return;

    if (dom.songTitle) dom.songTitle.textContent = track.title;
    if (dom.songArtist) dom.songArtist.textContent = track.artist;

    const albumInfo = currentSource === 'lofi'
      ? `Focus Beats • Lo-Fi #${track.index || (currentTrackIdx + 1)}`
      : `Peace of Hell • Track #${String(track.index || (currentTrackIdx + 1)).padStart(2, '0')}`;
    if (dom.albumName) dom.albumName.textContent = albumInfo;

    const fallbackArt = 'https://mosaic.scdn.co/640/ab67616d00001e0215145482a542a9adb282250bab67616d00001e02897f73256b9128a9d70eaf66ab67616d00001e02b1fd209c11e33b3902159ab2ab67616d00001e02fddfffec51b4580acae727c1';
    const coverUrl = track.coverArt || fallbackArt;
    if (dom.albumArt && dom.albumArt.src !== coverUrl) {
      dom.albumArt.src = coverUrl;
    }
    if (dom.vinylCenterImg && dom.vinylCenterImg.src !== coverUrl) {
      dom.vinylCenterImg.src = coverUrl;
    }

    if (dom.spotifyLink) {
      dom.spotifyLink.href = track.spotifyUrl || 'https://open.spotify.com/playlist/5OfNNCRIxcq2h8dGRZf4JY';
    }

    // Reset scrubber & badges
    hoverPct = null;
    isScrubbing = false;
    if (dom.timeElapsed) dom.timeElapsed.textContent = '0:00';
    if (dom.timeRemaining) dom.timeRemaining.textContent = '-' + (track.durationStr || '3:30');
    if (dom.qualityBadge) {
      dom.qualityBadge.textContent = (currentEngine === 'preview') ? '320 KBPS AAC' : 'FULL STREAM';
    }

    updateAmbientMesh(track);
  }

  function setPlayingUI(playing) {
    if (dom.playBtn) {
      dom.playBtn.innerHTML = playing
        ? '<svg class="play-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
        : '<svg class="play-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>';
      dom.playBtn.title = playing ? 'Pause' : 'Play';
    }

    if (dom.artworkStack) {
      dom.artworkStack.classList.toggle('playing', playing);
    }
    if (dom.artworkFrame) {
      dom.artworkFrame.classList.toggle('playing', playing);
    }

    if (dom.equalizer) {
      dom.equalizer.classList.toggle('playing', playing);
    }

    if (dom.liveStatus) {
      const dot = dom.liveStatus.querySelector('.am-pulse-dot');
      if (dot) dot.classList.toggle('standby', !playing);
    }

    if (dom.statusText) {
      if (playing) {
        dom.statusText.textContent = currentEngine === 'preview'
          ? 'Playing HQ'
          : 'Playing Full Track';
      } else {
        dom.statusText.textContent = 'Standby';
      }
    }

    // Update active row mini-equalizer and play icon in the queue
    const rows = dom.tracklistContainer ? dom.tracklistContainer.querySelectorAll('.am-track-row') : [];
    rows.forEach((row) => {
      const rowIdx = parseInt(row.dataset.idx, 10);
      const isThisRowActive = (rowIdx === currentTrackIdx);
      row.classList.toggle('active', isThisRowActive);
      row.classList.toggle('is-playing', isThisRowActive && playing);
      const eq = row.querySelector('.am-row-eq');
      if (eq) {
        eq.classList.toggle('playing', isThisRowActive && playing);
      }
    });
  }

  // 11. Queue & Tracklist Rendering with Genre Filtering, 5-Columns & Telemetry
  function isTrackInGenre(track, genre) {
    if (!genre || genre === 'all') return true;
    const text = ((track.title || '') + ' ' + (track.artist || '') + ' ' + (track.album || '')).toLowerCase();
    if (genre === 'pop') {
      return /charlie puth|selena|harry styles|weeknd|bieber|shawn mendes|taylor swift|ariana|camila|ed sheeran|dua lipa|sia|maroon 5|bruno mars|olivia rodrigo|billie|sabrina carpenter|tate mcrae|zayn|halsey|alessia cara|anne-marie|bebe rexha/i.test(text);
    }
    if (genre === 'electronic') {
      return /walker|marshmello|chainsmokers|dj snake|avicii|garrix|kygo|clean bandit|galantis|zedd|calvin harris|david guetta|major lazer|skrillex|diplo|tiesto|alesso|gryffin|illenium|cash cash/i.test(text);
    }
    if (genre === 'hiphop') {
      return /travis scott|drake|post malone|kendrick|juice wrld|eminem|lil nas|tyga|dababy|harlow|21 savage|metro boomin|kanye|future|migos|roddy ricch|xxxtentacion|cardi b|doja cat/i.test(text);
    }
    if (genre === 'indie') {
      return /djo|arctic monkeys|neighbourhood|glass animals|conan gray|lorde|wallows|steve lacy|clairo|boywithuke|cage the elephant|strokes|bastille|foster the people|vance joy|lumineers/i.test(text);
    }
    if (genre === 'chill') {
      return /stephen sanchez|justine skye|joji|frank ocean|sza|giveon|caesar|bazzi|alec benjamin|jeremy zucker|lauv|keshi|ruth b|prateek|anuv|shiloh|idealism|jinsang|potsu|kupla|deli|elijah/i.test(text);
    }
    return true;
  }

  function renderTracklist() {
    if (!dom.tracklistContainer) return;
    const list = getActiveTracks();
    const query = searchQuery.trim().toLowerCase();

    const filtered = list.filter((t, originalIdx) => {
      t._originalIdx = originalIdx;
      const matchesGenre = (currentSource === 'lofi') ? true : isTrackInGenre(t, currentGenre);
      if (!matchesGenre) return false;
      if (!query) return true;
      const titleMatch = t.title && t.title.toLowerCase().includes(query);
      const artistMatch = t.artist && t.artist.toLowerCase().includes(query);
      const albumMatch = t.album && t.album.toLowerCase().includes(query);
      return titleMatch || artistMatch || albumMatch;
    });

    // Update Telemetry Status Dock (Zero Wasted Space)
    if (dom.footerCount) {
      dom.footerCount.textContent = `${filtered.length} TRACK${filtered.length === 1 ? '' : 'S'}`;
    }
    if (dom.footerEngine) {
      dom.footerEngine.textContent = (currentEngine === 'preview') ? 'DIRECT CDN 320 KBPS' : 'HEADLESS FULL STREAM';
    }

    if (filtered.length === 0) {
      dom.tracklistContainer.innerHTML = `
        <div style="padding: 3rem 1rem; text-align: center; color: #8E8E93; font-family: var(--mono); font-size: 0.8rem;">
          No matching tracks found for "${escapeHtml(searchQuery || currentGenre)}"
        </div>
      `;
      return;
    }

    const fallbackArt = 'https://mosaic.scdn.co/640/ab67616d00001e0215145482a542a9adb282250bab67616d00001e02897f73256b9128a9d70eaf66ab67616d00001e02b1fd209c11e33b3902159ab2ab67616d00001e02fddfffec51b4580acae727c1';

    let html = '';
    filtered.forEach((t) => {
      const originalIdx = t._originalIdx;
      const isActive = (originalIdx === currentTrackIdx);
      const isRowPlaying = isActive && isPlaying;
      const cover = t.coverArt || fallbackArt;
      const numStr = String(t.index || (originalIdx + 1)).padStart(2, '0');
      const albumName = t.album || (currentSource === 'lofi' ? 'Focus Lo-Fi Beats' : 'Peace of Hell');

      html += `
        <div class="am-track-row ${isActive ? 'active' : ''} ${isRowPlaying ? 'is-playing' : ''}" data-idx="${originalIdx}" role="button" tabindex="0">
          <div class="am-row-num">
            <span class="am-row-num-text">${numStr}</span>
            <span class="am-row-play-icon">
              ${isRowPlaying 
                ? '<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
                : '<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>'
              }
            </span>
            <div class="am-row-eq ${isRowPlaying ? 'playing' : ''}" aria-label="Playing equalizer">
              <span class="am-eq-bar"></span>
              <span class="am-eq-bar"></span>
              <span class="am-eq-bar"></span>
            </div>
          </div>
          <div class="am-row-title-cell">
            <img class="am-row-mini-thumb" src="${cover}" alt="" loading="lazy">
            <span class="am-row-title-text" title="${escapeHtml(t.title)}">${escapeHtml(t.title)}</span>
          </div>
          <div class="am-row-artist-cell" title="${escapeHtml(t.artist)}">${escapeHtml(t.artist)}</div>
          <div class="am-row-album-cell" title="${escapeHtml(albumName)}">${escapeHtml(albumName)}</div>
          <div class="am-row-time-cell">
            <span>${t.durationStr || '3:30'}</span>
            ${t.spotifyUrl ? `
              <a href="${t.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="am-row-ext-icon" title="Open track externally" onclick="event.stopPropagation()">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            ` : ''}
          </div>
        </div>
      `;
    });

    dom.tracklistContainer.innerHTML = html;

    // Attach row click listeners
    const rows = dom.tracklistContainer.querySelectorAll('.am-track-row');
    rows.forEach((row) => {
      row.addEventListener('click', () => {
        const idx = parseInt(row.dataset.idx, 10);
        if (idx === currentTrackIdx) {
          togglePlay();
        } else {
          selectTrack(idx);
        }
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 12. Mode & Channel Switchers
  function switchEngine(mode) {
    if (mode === currentEngine) return;
    currentEngine = mode;

    if (dom.modePreview) dom.modePreview.classList.toggle('active', mode === 'preview');
    if (dom.modeFull) dom.modeFull.classList.toggle('active', mode === 'full');

    if (isPlaying) {
      play();
    }
  }

  function switchChannel(channel) {
    if (channel === currentSource) return;
    currentSource = channel;
    currentTrackIdx = 0;

    const isPlaylist = (channel === 'playlist');
    if (dom.chanPlaylist) dom.chanPlaylist.classList.toggle('active', isPlaylist);
    if (dom.chanLofi) dom.chanLofi.classList.toggle('active', !isPlaylist);

    if (dom.activeChannelTag) {
      dom.activeChannelTag.textContent = isPlaylist ? 'PEACE OF HELL' : 'FOCUS LO-FI';
    }

    if (isPlaylist) {
      const data = window.ROHITH_PLAYLIST_DATA;
      if (dom.playlistThumb && data && data.coverArt) dom.playlistThumb.src = data.coverArt;
      if (dom.playlistTitle) dom.playlistTitle.textContent = 'Peace of Hell';
      if (dom.playlistCurator) dom.playlistCurator.textContent = `Curated by Shimorikichiri (Rohith) • ${data ? data.totalTracks : 307} songs, about 17 hr`;
    } else {
      if (dom.playlistThumb && LOFI_TRACKS[0].coverArt) dom.playlistThumb.src = LOFI_TRACKS[0].coverArt;
      if (dom.playlistTitle) dom.playlistTitle.textContent = 'Focus Lo-Fi Radio';
      if (dom.playlistCurator) dom.playlistCurator.textContent = 'Curated Chillhop & Jazz Hop Beats • 10 Acclaimed Artists';
    }

    loadCurrentTrack();
  }

  // 13. Event Bindings
  function bindEvents() {
    if (dom.playBtn) dom.playBtn.addEventListener('click', togglePlay);
    if (dom.prevBtn) dom.prevBtn.addEventListener('click', prevTrack);
    if (dom.nextBtn) dom.nextBtn.addEventListener('click', nextTrack);

    if (dom.shuffleBtn) {
      dom.shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        dom.shuffleBtn.classList.toggle('active', isShuffle);
      });
    }

    if (dom.loopBtn) {
      dom.loopBtn.addEventListener('click', () => {
        isLoop = !isLoop;
        dom.loopBtn.classList.toggle('active', isLoop);
      });
    }

    if (dom.volSlider) {
      dom.volSlider.addEventListener('input', (e) => {
        setVolume(parseInt(e.target.value, 10));
      });
      dom.volSlider.addEventListener('change', (e) => {
        setVolume(parseInt(e.target.value, 10));
      });
    }

    if (dom.volIcon) {
      dom.volIcon.addEventListener('click', toggleMute);
    }

    if (dom.modePreview) {
      dom.modePreview.addEventListener('click', () => switchEngine('preview'));
    }

    if (dom.modeFull) {
      dom.modeFull.addEventListener('click', () => switchEngine('full'));
    }

    if (dom.chanPlaylist) {
      dom.chanPlaylist.addEventListener('click', () => switchChannel('playlist'));
    }

    if (dom.chanLofi) {
      dom.chanLofi.addEventListener('click', () => switchChannel('lofi'));
    }

    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value || '';
        renderTracklist();
      });
    }

    if (dom.genreFilters) {
      const pills = dom.genreFilters.querySelectorAll('.am-genre-pill');
      pills.forEach((pill) => {
        pill.addEventListener('click', () => {
          pills.forEach((p) => p.classList.remove('active'));
          pill.classList.add('active');
          currentGenre = pill.dataset.genre || 'all';
          renderTracklist();
        });
      });
    }

    if (dom.scrollTopBtn && dom.tracklistContainer) {
      dom.scrollTopBtn.addEventListener('click', () => {
        dom.tracklistContainer.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight' && e.ctrlKey) {
        e.preventDefault();
        nextTrack();
      } else if (e.code === 'ArrowLeft' && e.ctrlKey) {
        e.preventDefault();
        prevTrack();
      }
    });
  }

  // 14. Public API
  window.CyberAudio = {
    play,
    pause,
    togglePlay,
    nextTrack,
    prevTrack,
    selectTrack,
    playPreview: (idx) => {
      currentEngine = 'preview';
      if (dom.modePreview) dom.modePreview.classList.add('active');
      if (dom.modeFull) dom.modeFull.classList.remove('active');
      selectTrack(idx);
    },
    playFullSong: (idx) => {
      currentEngine = 'full';
      if (dom.modeFull) dom.modeFull.classList.add('active');
      if (dom.modePreview) dom.modePreview.classList.remove('active');
      selectTrack(idx);
    },
    setVolume,
    switchChannel,
    switchEngine,
    getState: () => ({
      isPlaying,
      currentSource,
      currentEngine,
      currentTrack: getCurrentTrack(),
      volume: currentVolume
    })
  };

  window.SpicetifyPlayer = window.CyberAudio;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

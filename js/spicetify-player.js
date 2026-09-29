/**
 * CYBER SOUND LAB — High-Fidelity Audio Engine, 307-Track Master Library & 60FPS Visualizer
 * Features:
 * 1. 100% Direct Studio-Grade 320 KBPS Audio Streaming (JioSaavn Lossless/High-Fidelity CDN)
 * 2. 307 Full Master Tracks + 10 Acclaimed Chillhop Lo-Fi Tracks
 * 3. 60FPS Real-Time Web Audio API Canvas Visualizer (Dynamic FFT Spectrum Analyzer)
 * 4. Hardware-Accurate Master Gain & Native Audio Element Volume Control (0% to 100% + Mute)
 * 5. Full-Track Interactive Timeline Scrubber & Seamless Looping
 * 6. Real-Time Search Filtering & Channel Switcher (All Tracks & Focus Lo-Fi)
 */

(function () {
  'use strict';

  // 1. Curated Authentic Lo-Fi Station (100% Real Acclaimed Artists with Direct 320 KBPS Streams)
  const LOFI_TRACKS = [
    {
      index: 1,
      title: 'controlla',
      artist: 'Idealism',
      album: 'controlla',
      durationStr: '2:10',
      duration: 130,
      streamUrl: 'https://aac.saavncdn.com/521/9da7706317a045c7b4cf110e9e99a0b4_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/b5/26/b8b526e2-956e-bb51-dd2a-f24961a34820/artwork.jpg/600x600bb.jpg',
      palette: ['#E05315', '#FA243C', '#FFAA40']
    },
    {
      index: 2,
      title: 'Affection',
      artist: 'Jinsang',
      album: 'Solitude',
      durationStr: '2:40',
      duration: 160,
      streamUrl: 'https://aac.saavncdn.com/092/628fcf987d152e38ef59b0d45231282b_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/33/a5/2f/33a52fc2-d77b-9408-6d5b-af389ee28c43/cover_4018939360092.jpg/600x600bb.jpg',
      palette: ['#8B5CF6', '#6366F1', '#EC4899']
    },
    {
      index: 3,
      title: "I'm Closing My Eyes (feat. Shiloh)",
      artist: 'potsu',
      album: "I'm Closing My Eyes",
      durationStr: '2:05',
      duration: 125,
      streamUrl: 'https://aac.saavncdn.com/181/cf55644071a6b0ff629c4ff9fffae34f_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/1c/40/f41c40ff-730f-e190-ed5c-0049cbf46b4b/053000718956_cover.jpg/600x600bb.jpg',
      palette: ['#3B82F6', '#60A5FA', '#93C5FD']
    },
    {
      index: 4,
      title: 'Dew',
      artist: 'Kupla',
      album: 'Kingdom in Blue',
      durationStr: '2:30',
      duration: 150,
      streamUrl: 'https://aac.saavncdn.com/243/c63b919c9f465af64458a3ac63013995_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f2/15/8d/f2158dec-ee67-6052-42c4-d044cede0436/859737277243.jpg/600x600bb.jpg',
      palette: ['#10B981', '#06B6D4', '#3B82F6']
    },
    {
      index: 5,
      title: '5:32Pm',
      artist: 'The Deli',
      album: 'Vibes 2',
      durationStr: '2:15',
      duration: 135,
      streamUrl: 'https://aac.saavncdn.com/131/ee5dacb3b4d89d889ed3c245dd621931_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/09/c5/e209c539-b762-951a-ff82-c414537b2d01/180772.jpg/600x600bb.jpg',
      palette: ['#F59E0B', '#EF4444', '#E05315']
    },
    {
      index: 6,
      title: "I'm Tired of Feeling This Way",
      artist: 'Elijah Who',
      album: 'Gentle Boy',
      durationStr: '2:20',
      duration: 140,
      streamUrl: 'https://aac.saavncdn.com/126/1074ee9fc556ce1cf6e60198e303b610_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/3a/43/a7/3a43a72f-edb7-d891-97c4-8c0a41b64fb2/artwork.jpg/600x600bb.jpg',
      palette: ['#EC4899', '#8B5CF6', '#3B82F6']
    },
    {
      index: 7,
      title: 'Emotional Crank',
      artist: 'tomppabeats',
      album: 'Harbor LP',
      durationStr: '1:55',
      duration: 115,
      streamUrl: 'https://aac.saavncdn.com/866/d8882422e26d2bd6b71b4fb14b0221ff_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a2/ec/13/a2ec13cf-9ee3-0b86-b69e-fb654e02736d/cover_4018939299866.jpg/600x600bb.jpg',
      palette: ['#06B6D4', '#3B82F6', '#6366F1']
    },
    {
      index: 8,
      title: 'Again',
      artist: 'Wun Two',
      album: 'Penthouse',
      durationStr: '2:00',
      duration: 120,
      streamUrl: 'https://aac.saavncdn.com/231/1a29423e4dc00f4ca229275749a07e90_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/29/33/f52933c9-8143-b0d2-b180-8d92f9a36922/cover_4062851259545.jpg/600x600bb.jpg',
      palette: ['#D97706', '#B45309', '#78350F']
    },
    {
      index: 9,
      title: 'Novocaine',
      artist: 'Shiloh Dynasty & Sleepy Dawg',
      album: 'Novocaine',
      durationStr: '2:05',
      duration: 125,
      streamUrl: 'https://aac.saavncdn.com/515/962fc405c46793b5f3d52c85139e82ea_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a9/20/d5/a920d5d2-1927-0cf8-4ad9-7a9f4266660e/cover.jpg/600x600bb.jpg',
      palette: ['#6366F1', '#4F46E5', '#312E81']
    },
    {
      index: 10,
      title: 'Steven Universe',
      artist: 'L.Dre',
      album: 'Steven Universe Lofi',
      durationStr: '2:10',
      duration: 130,
      streamUrl: 'https://aac.saavncdn.com/245/d91c231225882b8d539a3dfb4c23573c_320.mp4',
      coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8e/6c/e1/8e6ce16a-908f-c76a-1c65-6e35d15689b5/artwork.jpg/600x600bb.jpg',
      palette: ['#F43F5E', '#FB7185', '#FDA4AF']
    }
  ];

  // 2. Playback State
  let currentSource = 'playlist'; // 'playlist' or 'lofi'
  let currentTrackIdx = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isLoop = false;
  let currentVolume = 0.8;
  let previousVolume = 0.8;
  let searchQuery = '';
  let currentGenre = 'all';

  // Web Audio Graph & Visualizer
  let audioContext = null;
  let masterGain = null;
  let analyserNode = null;
  let sourceNode = null;
  let audioElement = null;
  let visualizerAnimId = null;

  let isTransitioning = false;
  let isUpdatingUI = false;
  let hasStartedPlayback = false;

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
    setPlayingUI(false);
    setVolume(80);
    startWaveformLoop();
    syncSpotifyPlaylistLive();
  }

  function cacheDom() {
    dom.deck = document.getElementById('appleMusicDeck');
    dom.ambientMesh = document.getElementById('amAmbientMesh');
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

    // Integrated Audio Visualizer
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
      audioElement.preload = 'auto';
      audioElement.volume = currentVolume;
    }

    audioElement.addEventListener('timeupdate', onAudioTimeUpdate);
    audioElement.addEventListener('ended', onTrackEnded);
    audioElement.addEventListener('play', () => setPlayingUI(true));
    audioElement.addEventListener('pause', () => setPlayingUI(false));
    audioElement.addEventListener('error', (e) => {
      console.warn('Audio stream playback error for track:', getCurrentTrack() ? getCurrentTrack().title : 'unknown', e);
      const track = getCurrentTrack();
      if (track && track.previewUrl && audioElement.src !== track.previewUrl) {
        audioElement.src = track.previewUrl;
        audioElement.play().catch(() => {});
      } else {
        setPlayingUI(false);
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
      masterGain.gain.setValueAtTime(currentVolume, audioContext.currentTime);

      try {
        sourceNode = audioContext.createMediaElementSource(audioElement);
        // Clean audio graph: source -> analyser -> masterGain -> destination
        sourceNode.connect(analyserNode);
        analyserNode.connect(masterGain);
        masterGain.connect(audioContext.destination);
      } catch (err) {
        console.info('Direct MediaElement audio connect note:', err);
      }
    } catch (e) {
      console.warn('Web Audio init note:', e);
    }
  }

  // 4. 60FPS Interactive Audio Visualizer (Digital Studio Soundwave)
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
      dom.waveformCtx.scale(dpr, dpr);
    }
  }

  function startWaveformLoop() {
    if (visualizerAnimId) cancelAnimationFrame(visualizerAnimId);

    const freqData = new Uint8Array(32);

    function draw() {
      visualizerAnimId = requestAnimationFrame(draw);
      if (!dom.waveformCtx || !dom.waveformCanvas) return;

      const rect = dom.waveformCanvas.getBoundingClientRect();
      const w = rect.width || 315;
      const h = rect.height || 36;
      const ctx = dom.waveformCtx;

      ctx.clearRect(0, 0, w, h);

      let hasAudioData = false;
      if (analyserNode && isPlaying) {
        analyserNode.getByteFrequencyData(freqData);
        hasAudioData = true;
      }

      const totalBars = NUM_WAVEFORM_BARS;
      const gap = 2;
      const barWidth = Math.max(2, (w - (totalBars - 1) * gap) / totalBars);
      const centerY = h / 2;

      const track = getCurrentTrack();
      const palette = (track && track.palette) || ['#E05315', '#FFAA40'];
      const activeColor = palette[0] || '#E05315';
      const playedFrac = audioElement && audioElement.duration ? (audioElement.currentTime / audioElement.duration) : 0;

      for (let i = 0; i < totalBars; i++) {
        let normalizedAmp = 0;
        if (hasAudioData) {
          const freqIdx = Math.floor((i / totalBars) * freqData.length);
          normalizedAmp = (freqData[freqIdx] || 0) / 255;
        } else if (isPlaying) {
          const t = performance.now() * 0.003;
          normalizedAmp = (Math.sin(t + i * 0.3) * 0.5 + 0.5) * 0.6 + 0.15;
        } else {
          normalizedAmp = 0.08;
        }

        const barHeight = Math.max(3, normalizedAmp * (h * 0.88));
        const x = i * (barWidth + gap);
        const y = centerY - barHeight / 2;
        const barFrac = i / totalBars;

        const isPlayed = barFrac <= playedFrac;
        if (isPlayed) {
          ctx.fillStyle = activeColor;
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.14)';
        }

        const r = Math.min(barWidth / 2, barHeight / 2);
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

    draw();
  }

  // 5. Playback Controls
  function play() {
    if (isTransitioning) return;
    isTransitioning = true;
    try {
      initWebAudio();
      if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume().catch(() => {});
      }

      const track = getCurrentTrack();
      hasStartedPlayback = true;
      isPlaying = true;
      setPlayingUI(true);

      const streamUrl = track.streamUrl || track.previewUrl || '';
      if (streamUrl && audioElement) {
        if (audioElement.src !== streamUrl) {
          audioElement.src = streamUrl;
          audioElement.load();
        }
        audioElement.play().catch((err) => {
          console.warn('Playback error or interaction required:', err);
        });
      }

      window.dispatchEvent(new CustomEvent('spicetify:play', {
        detail: { track, source: currentSource }
      }));
    } finally {
      isTransitioning = false;
    }
  }

  function pause() {
    isPlaying = false;
    setPlayingUI(false);
    if (audioElement) {
      audioElement.pause();
    }
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
    if (audioElement && audioElement.currentTime > 3) {
      audioElement.currentTime = 0;
      return;
    }
    currentTrackIdx = (currentTrackIdx - 1 + list.length) % list.length;
    loadCurrentTrack();
  }

  function loadCurrentTrack() {
    updateTrackDisplay();
    renderTracklist();
    if (isPlaying) {
      play();
    } else {
      const track = getCurrentTrack();
      const streamUrl = track.streamUrl || track.previewUrl;
      if (streamUrl && audioElement) {
        audioElement.src = streamUrl;
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
      if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
      }
    } else {
      nextTrack();
    }
  }

  // 6. Timeline Scrubber & Time Updates
  function setupScrubberEvents() {
    if (dom.progressSlider) {
      dom.progressSlider.addEventListener('input', (e) => {
        isScrubbing = true;
        const frac = parseFloat(e.target.value) / 100;
        hoverPct = frac;
        const dur = (audioElement && !isNaN(audioElement.duration) && audioElement.duration > 0)
          ? audioElement.duration
          : getTrackDurationSec(getCurrentTrack());
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
    const dur = (audioElement && !isNaN(audioElement.duration) && audioElement.duration > 0)
      ? audioElement.duration
      : getTrackDurationSec(track);
    const target = pct * dur;

    if (audioElement && !isNaN(audioElement.duration)) {
      audioElement.currentTime = target;
    }
    updateScrubberUI(target, dur);
  }

  function onAudioTimeUpdate() {
    if (isScrubbing) return;
    const cur = audioElement.currentTime;
    const dur = (audioElement && !isNaN(audioElement.duration) && audioElement.duration > 0)
      ? audioElement.duration
      : getTrackDurationSec(getCurrentTrack());
    updateScrubberUI(cur, dur);
  }

  function updateScrubberUI(cur, dur) {
    if (dom.timeElapsed) dom.timeElapsed.textContent = formatTime(cur);
    if (dom.timeRemaining) dom.timeRemaining.textContent = '-' + formatTime(Math.max(0, dur - cur));
    if (dom.progressSlider && dur > 0) {
      const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
      if (!isScrubbing) {
        dom.progressSlider.value = pct;
      }
      dom.progressSlider.style.setProperty('--prog-pct', `${pct}%`);
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

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // 7. Hardware & Native Volume Control (0% to 100%)
  function setVolume(pct) {
    const val = Math.max(0, Math.min(100, pct));
    currentVolume = val / 100;

    if (audioElement) {
      audioElement.volume = currentVolume;
      audioElement.muted = (val === 0);
    }

    if (masterGain && audioContext) {
      try {
        masterGain.gain.setValueAtTime(currentVolume, audioContext.currentTime);
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

  // 8. Dynamic Ambient Artwork Mesh Gradient
  function updateAmbientMesh(track) {
    if (!dom.deck) return;
    const colors = track.palette || ['#E05315', '#222226'];
    const c1 = colors[0] || '#E05315';
    const c2 = colors[1] || '#18181B';
    const c3 = colors[2] || '#0A0A0C';

    dom.deck.style.setProperty('--art-color-1', c1);
    dom.deck.style.setProperty('--art-color-2', c2);
    dom.deck.style.setProperty('--art-color-3', c3);
  }

  // 9. UI State Synchronization
  function setPlayingUI(playing) {
    if (isUpdatingUI) return;
    isUpdatingUI = true;
    try {
      if (dom.playBtn) {
        dom.playBtn.innerHTML = playing
          ? '<svg class="pause-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
          : '<svg class="play-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>';
        dom.playBtn.classList.toggle('playing', playing);
      }

      if (dom.equalizer) dom.equalizer.classList.toggle('active', playing);
      if (dom.vinylDisc) dom.vinylDisc.classList.toggle('spinning', playing);
      if (dom.liveStatus) {
        const dot = dom.liveStatus.querySelector('.am-pulse-dot');
        dom.liveStatus.classList.remove('state-standby', 'state-playing', 'state-paused');
        if (dot) dot.classList.remove('standby', 'playing', 'paused');

        if (playing) {
          dom.liveStatus.classList.add('state-playing');
          if (dot) dot.classList.add('playing');
          if (dom.statusText) dom.statusText.textContent = 'PLAYING';
        } else if (hasStartedPlayback) {
          dom.liveStatus.classList.add('state-paused');
          if (dot) dot.classList.add('paused');
          if (dom.statusText) dom.statusText.textContent = 'PAUSED';
        } else {
          dom.liveStatus.classList.add('state-standby');
          if (dot) dot.classList.add('standby');
          if (dom.statusText) dom.statusText.textContent = 'STANDBY';
        }
      }

      const headerDot = document.getElementById('headerAudioStatus');
      if (headerDot) {
        if (playing) {
          headerDot.innerHTML = '<span class="pulse-dot active" style="background:#10B981; box-shadow:0 0 8px #10B981;"></span> Sound Lab Playing';
        } else if (hasStartedPlayback) {
          headerDot.innerHTML = '<span class="pulse-dot paused" style="background:#F59E0B; box-shadow:0 0 8px #F59E0B;"></span> Sound Lab Paused';
        } else {
          headerDot.innerHTML = '<span class="pulse-dot standby" style="background:#6366F1; box-shadow:0 0 8px #6366F1;"></span> Audio Standby';
        }
      }

      updateTracklistActiveItem();
    } finally {
      isUpdatingUI = false;
    }
  }

  function updateTrackDisplay() {
    const track = getCurrentTrack();
    if (!track) return;

    if (dom.songTitle) dom.songTitle.textContent = track.title;
    if (dom.songArtist) dom.songArtist.textContent = track.artist;
    if (dom.albumName) {
      dom.albumName.textContent = `${track.album || 'Sound Lab'} • Track #${track.index}`;
    }

    const artUrl = track.coverArt || 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbf58716549c4db9ced11b081d';
    if (dom.albumArt) dom.albumArt.src = artUrl;
    if (dom.vinylCenterImg) dom.vinylCenterImg.src = artUrl;

    updateAmbientMesh(track);

    const dur = getTrackDurationSec(track);
    updateScrubberUI(0, dur);
  }

  // 10. Tracklist Rendering
  function renderTracklist() {
    if (!dom.tracklistContainer) return;

    let tracks = getActiveTracks();

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      tracks = tracks.filter((t) =>
        (t.title && t.title.toLowerCase().includes(q)) ||
        (t.artist && t.artist.toLowerCase().includes(q)) ||
        (t.album && t.album.toLowerCase().includes(q))
      );
    }

    if (currentGenre !== 'all' && currentSource === 'playlist') {
      tracks = tracks.filter((t) => matchGenre(t, currentGenre));
    }

    if (tracks.length === 0) {
      dom.tracklistContainer.innerHTML = `
        <div style="padding: 40px 20px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No tracks matching "<strong>${escapeHtml(searchQuery)}</strong>"
        </div>`;
      return;
    }

    const html = tracks.map((track) => {
      const isCur = (track.index === (currentTrackIdx + 1));
      const art = track.coverArt || '';
      return `
        <div class="am-track-row ${isCur ? 'active' : ''} ${isCur && isPlaying ? 'is-playing playing' : ''}" data-track-index="${track.index - 1}" role="button" tabindex="0">
          <span class="am-row-num">
            <span class="am-row-num-text">${track.index}</span>
            <span class="am-row-play-icon">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
            </span>
            <span class="am-row-eq ${isCur && isPlaying ? 'playing' : ''}">
              <span class="am-eq-bar"></span>
              <span class="am-eq-bar"></span>
              <span class="am-eq-bar"></span>
            </span>
          </span>
          <div class="am-row-title-cell">
            ${art ? `<img class="am-row-mini-thumb" src="${art}" alt="" width="36" height="36" loading="lazy">` : ''}
            <div class="am-row-texts" style="min-width:0; overflow:hidden;">
              <span class="am-row-title-text" title="${escapeHtml(track.title)}">${escapeHtml(track.title)}</span>
              <span class="am-row-artist-mobile">${escapeHtml(track.artist)}</span>
            </div>
          </div>
          <span class="am-row-artist-cell" title="${escapeHtml(track.artist)}">${escapeHtml(track.artist)}</span>
          <span class="am-row-album-cell" title="${escapeHtml(track.album || 'Sound Lab')}">${escapeHtml(track.album || 'Sound Lab')}</span>
          <span class="am-row-time-cell">${track.durationStr || '3:30'}</span>
        </div>`;
    }).join('');

    dom.tracklistContainer.innerHTML = html;

    if (dom.footerCount) {
      dom.footerCount.textContent = `${tracks.length} Tracks`;
    }
  }

  function updateTracklistActiveItem() {
    if (!dom.tracklistContainer) return;
    const rows = dom.tracklistContainer.querySelectorAll('.am-track-row');
    rows.forEach((row) => {
      const idx = parseInt(row.getAttribute('data-track-index'), 10);
      const isCur = (idx === currentTrackIdx);
      row.classList.toggle('active', isCur);
      const eq = row.querySelector('.am-row-eq');
      if (isCur && isPlaying) {
        row.classList.add('is-playing', 'playing');
        if (eq) eq.classList.add('playing');
      } else {
        row.classList.remove('is-playing', 'playing');
        if (eq) eq.classList.remove('playing');
      }
    });
  }

  function matchGenre(track, genre) {
    const text = `${track.title} ${track.artist} ${track.album}`.toLowerCase();
    switch (genre) {
      case 'pop':
        return /pop|taylor|charlie|puth|ariana|dua lipa|billie|harry styles|shawn|ed sheeran|weeknd/i.test(text);
      case 'electronic':
        return /electronic|edm|alan walker|marshmello|chainsmokers|martin garrix|avicii|dj snake|kygo/i.test(text);
      case 'hiphop':
        return /hip|hop|rap|drake|travis|kanye|post malone|eminem|juice wrld|xxxtentacion/i.test(text);
      case 'indie':
        return /indie|alt|arctic monkeys|neighbourhood|cigarettes|glass animals|lord huron|djo/i.test(text);
      case 'chill':
        return /chill|acoustic|shiloh|anuv jain|prateek kuhad|jvke|stephen sanchez|alec benjamin/i.test(text);
      default:
        return true;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 11. Channel Switcher
  function switchChannel(channel) {
    if (channel === currentSource) return;
    currentSource = channel;
    currentTrackIdx = 0;

    const isPlaylist = (channel === 'playlist');
    if (dom.chanPlaylist) dom.chanPlaylist.classList.toggle('active', isPlaylist);
    if (dom.chanLofi) dom.chanLofi.classList.toggle('active', !isPlaylist);

    if (isPlaylist) {
      const data = window.ROHITH_PLAYLIST_DATA;
      if (dom.playlistThumb && data && data.coverArt) dom.playlistThumb.src = data.coverArt;
      if (dom.playlistTitle) dom.playlistTitle.textContent = (data && data.playlistName) ? data.playlistName : 'Peace of Hell';
      if (dom.playlistCurator) dom.playlistCurator.textContent = '';
      syncSpotifyPlaylistLive();
    } else {
      if (dom.playlistThumb && LOFI_TRACKS[0].coverArt) dom.playlistThumb.src = LOFI_TRACKS[0].coverArt;
      if (dom.playlistTitle) dom.playlistTitle.textContent = 'Focus Lo-Fi Radio';
      if (dom.playlistCurator) dom.playlistCurator.textContent = '';
    }

    loadCurrentTrack();
  }

  // Dynamic live synchronization with user's Spotify playlist
  async function syncSpotifyPlaylistLive() {
    try {
      const spotifyUrl = 'https://open.spotify.com/playlist/5OfNNCRIxcq2h8dGRZf4JY';
      const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`;
      const res = await fetch(oembedUrl);
      if (!res.ok) return;
      const data = await res.json();
      if (data.title && dom.playlistTitle && currentSource === 'playlist') {
        dom.playlistTitle.textContent = data.title;
      }
      if (data.thumbnail_url && dom.playlistThumb && currentSource === 'playlist') {
        let highRes = data.thumbnail_url
          .replace('ab67706c0000da84', 'ab67706c0000bebb')
          .replace('ab67616d00001e02', 'ab67616d0000b273');
        dom.playlistThumb.src = highRes;
      }
    } catch (_) {
      // Offline fallback: retains pre-rendered custom artwork
    }
  }

  // 12. Event Bindings
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

    if (dom.tracklistContainer) {
      dom.tracklistContainer.addEventListener('click', (e) => {
        const row = e.target.closest('.am-track-row');
        if (row && dom.tracklistContainer.contains(row)) {
          const idx = parseInt(row.getAttribute('data-track-index'), 10);
          if (!isNaN(idx)) {
            selectTrack(idx);
          }
        }
      });
      dom.tracklistContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const row = e.target.closest('.am-track-row');
          if (row && dom.tracklistContainer.contains(row)) {
            e.preventDefault();
            const idx = parseInt(row.getAttribute('data-track-index'), 10);
            if (!isNaN(idx)) {
              selectTrack(idx);
            }
          }
        }
      });
    }

    window.addEventListener('resize', () => {
      setupWaveformCanvas();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea') return;

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight' && e.shiftKey) {
        nextTrack();
      } else if (e.code === 'ArrowLeft' && e.shiftKey) {
        prevTrack();
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        setVolume(Math.min(100, Math.round(currentVolume * 100) + 5));
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        setVolume(Math.max(0, Math.round(currentVolume * 100) - 5));
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    });
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public interface
  window.RohithSoundLab = {
    play,
    pause,
    togglePlay,
    next: nextTrack,
    prev: prevTrack,
    setVolume,
    selectTrack,
    switchChannel,
    setSource: switchChannel,
    getCurrentTrack,
    getActiveTracks
  };
})();

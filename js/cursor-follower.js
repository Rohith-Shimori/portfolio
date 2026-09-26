/**
 * Mini Roh Cursor Follower Engine
 * Dynamically resolves 9-directional eye & head gaze tracking towards user cursor
 * Supports hysteresis, performance scheduling with rAF, touch handling, and click reactions.
 */
(function (global) {
  function cursorDirection(dx, dy, previous, deadZone) {
    if (previous === void 0) previous = 'center';
    if (deadZone === void 0) deadZone = 36;
    if (Math.hypot(dx, dy) <= deadZone) return 'center';
    var directions = [
      'right',
      'down-right',
      'down',
      'down-left',
      'left',
      'up-left',
      'up',
      'up-right'
    ];
    var angle = Math.atan2(dy, dx);
    var previousIndex = directions.indexOf(previous);
    if (previousIndex >= 0) {
      var difference = angle - (previousIndex * Math.PI) / 4;
      if (
        Math.abs(Math.atan2(Math.sin(difference), Math.cos(difference))) <
        Math.PI / 8 + 0.1
      ) {
        return previous;
      }
    }
    return directions[(Math.round(angle / (Math.PI / 4)) + 8) % 8];
  }

  function mountCursorFollower(container, options) {
    if (!container) return null;
    options = options || {};
    var frames = options.frames || {
      'center': 'mascot-frames/center.webp',
      'up': 'mascot-frames/up.webp',
      'down': 'mascot-frames/down.webp',
      'left': 'mascot-frames/left.webp',
      'right': 'mascot-frames/right.webp',
      'up-left': 'mascot-frames/up-left.webp',
      'up-right': 'mascot-frames/up-right.webp',
      'down-left': 'mascot-frames/down-left.webp',
      'down-right': 'mascot-frames/down-right.webp'
    };

    var image = document.createElement('img');
    image.alt = options.label || 'Mini Roh Mascot';
    image.draggable = false;
    image.src = frames.center;
    image.className = 'mascot-cursor-img';
    image.style.cssText =
      'display:block;width:100%;height:100%;object-fit:contain;pointer-events:auto;user-select:none;transition:filter 0.25s ease;cursor:pointer;';

    var wrapper = document.createElement('span');
    wrapper.className = 'mascot-cursor-wrapper';
    wrapper.style.cssText = 'display:inline-block;aspect-ratio:1;max-width:100%;position:relative;';
    var size = Math.max(64, Math.min(640, options.size || 220));
    wrapper.style.width = size + 'px';
    wrapper.style.height = size + 'px';
    wrapper.append(image);

    // Clear previous if any
    container.innerHTML = '';
    container.append(wrapper);

    // Preload all 9 frames
    var preloads = Object.values(frames).map(function (url) {
      var img = new Image();
      img.src = url;
      return img;
    });

    var current = 'center';
    var tracking = true;
    var frame = 0;
    var pointer = null;
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    function show(direction) {
      if (!frames[direction]) return;
      if (current !== direction) {
        image.src = frames[direction];
      }
      current = direction;
      if (typeof options.onDirection === 'function') {
        options.onDirection(direction);
      }
    }

    function update() {
      frame = 0;
      if (!tracking || !pointer || !fine.matches || reduced.matches) return;
      var rect = wrapper.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      show(
        cursorDirection(
          pointer.x - rect.left - rect.width / 2,
          pointer.y - rect.top - rect.height / 2,
          current,
          options.deadZone || 32
        )
      );
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    function move(event) {
      if (event.pointerType === 'touch') return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    }

    function leave() {
      pointer = null;
      if (tracking) show('center');
    }

    function preferences() {
      if (!fine.matches || reduced.matches) show('center');
      else schedule();
    }

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('scroll', schedule, { passive: true, capture: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('blur', leave);
    document.documentElement.addEventListener('pointerleave', leave);
    fine.addEventListener('change', preferences);
    reduced.addEventListener('change', preferences);

    // Optional click handler
    if (typeof options.onClick === 'function') {
      image.addEventListener('click', function(e) {
        options.onClick(e, current);
      });
    }

    return {
      element: wrapper,
      image: image,
      setDirection: show,
      setTracking: function (value) {
        tracking = value;
        if (tracking) {
          show('center');
          schedule();
        }
      },
      destroy: function () {
        cancelAnimationFrame(frame);
        window.removeEventListener('pointermove', move);
        window.removeEventListener('scroll', schedule, true);
        window.removeEventListener('resize', schedule);
        window.removeEventListener('blur', leave);
        document.documentElement.removeEventListener('pointerleave', leave);
        fine.removeEventListener('change', preferences);
        reduced.removeEventListener('change', preferences);
        wrapper.remove();
        preloads.length = 0;
      }
    };
  }

  global.cursorDirection = cursorDirection;
  global.mountCursorFollower = mountCursorFollower;
})(typeof window !== 'undefined' ? window : this);

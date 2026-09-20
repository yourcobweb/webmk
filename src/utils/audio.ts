/**
 * Web Audio API synthesizer for clean, futuristic UI sounds.
 * Zero external audio files required - works flawlessly across all hosting platforms.
 * 
 * Intelligent Low-End Device Guard:
 * - Detects low hardware concurrency (<= 2 cores), low device memory (<= 2GB),
 *   slow network/save-data modes, or AudioContext latency bottlenecks.
 * - Automatically stays OFF on cheap/laggy devices so the experience is never bogged down.
 * - Seamlessly turns ON on capable devices without forcing manual toggle.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;
  private isLowEndDevice: boolean = false;

  constructor() {
    this.detectDeviceCapabilities();
  }

  /**
   * Evaluates device performance characteristics.
   * If the device is cheap/low-end or reports lag, SFX remains off to avoid any stutters.
   */
  private detectDeviceCapabilities() {
    if (typeof window === 'undefined') return;

    try {
      const nav = window.navigator as unknown as {
        hardwareConcurrency?: number;
        deviceMemory?: number;
        connection?: { saveData?: boolean; effectiveType?: string };
      };

      // 1. Low CPU Cores (e.g. cheap dual-core or budget phones)
      const lowCores = typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 2;

      // 2. Low RAM (<= 2GB memory)
      const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 2;

      // 3. User has Save-Data enabled or 2G/slow connection
      const isSaveData = nav.connection?.saveData === true;
      const isSlowNet = nav.connection?.effectiveType === 'slow-2g' || nav.connection?.effectiveType === '2g';

      // 4. Reduced Motion preference
      const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

      if (lowCores || lowMemory || isSaveData || isSlowNet || prefersReducedMotion) {
        this.isLowEndDevice = true;
        this.enabled = false;
      } else {
        // High/normal performance device - enable SFX by default with zero lag!
        this.isLowEndDevice = false;
        this.enabled = true;
      }
    } catch {
      // Default to enabled on standard environments
      this.enabled = true;
    }
  }

  public isDeviceLowEnd(): boolean {
    return this.isLowEndDevice;
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        // Check base latency - if audio stack is unusually slow (> 0.08s), turn off to prevent UI stutter
        if (this.ctx.baseLatency && this.ctx.baseLatency > 0.08) {
          this.enabled = false;
          this.isLowEndDevice = true;
          return;
        }
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {
        // Handled silently
      });
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // Ignore audio failure if user has strict browser autoplay policies
    }
  }

  playToggle() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // Audio policies
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.04, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.18);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.18);
      });
    } catch {
      // Audio policies
    }
  }

  playHover() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(620, this.ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch {
      // Audio policies
    }
  }
}

export const soundFx = new SoundEngine();

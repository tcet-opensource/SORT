declare module "wowjs" {
    export class WOW {
      constructor(options?: WOWOptions);
      init(): void;
    }
  
    export interface WOWOptions {
      boxClass?: string; // CSS class for the animated element (default: 'wow')
      animateClass?: string; // Animation class (default: 'animate__animated')
      offset?: number; // Distance to start the animation (default: 0)
      mobile?: boolean; // Trigger animations on mobile devices (default: true)
      live?: boolean; // Check for new animations (default: true)
      callback?: (box: HTMLElement) => void; // Callback function
      scrollContainer?: string | null; // Scroll container (default: null)
      resetAnimation?: boolean; // Reset animation when element leaves viewport (default: true)
    }
  }
  
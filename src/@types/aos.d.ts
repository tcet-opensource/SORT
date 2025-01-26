declare module "aos" {
    export interface AosOptions {
      duration?: number;
      offset?: number;
      once?: boolean;
      delay?: number;
      easing?: string;
    }
  
    interface AOS {
      init(options?: AosOptions): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const AOS: AOS;
    export default AOS;
  }
  
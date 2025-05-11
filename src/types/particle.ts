
export type ParticleTheme = 'purple' | 'blue' | 'green' | 'orange' | 'rainbow';

// Add type definition for particlesJS
declare global {
  interface Window {
    particlesJS: any;
  }
}

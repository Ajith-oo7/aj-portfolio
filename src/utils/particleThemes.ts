
import { ParticleTheme } from '../types/particle';

export interface ThemeConfig {
  particleColors: string[];
  lineColor: string;
  speed: number;
  size: number;
  blinking?: boolean;
  blinkSpeed?: number;
}

/**
 * Gets the color configuration based on the selected theme
 */
export const getThemeColors = (theme: ParticleTheme, isEasterEggActive: boolean): ThemeConfig => {
  if (isEasterEggActive) {
    return {
      particleColors: ["#ff0000", "#ff7700", "#ffff00", "#00ff00", "#0000ff", "#8B5CF6", "#D946EF"],
      lineColor: "#ffffff",
      speed: 5,
      size: 4,
      blinking: true,
      blinkSpeed: 1.5
    };
  }
  
  switch (theme) {
    case 'blue':
      return {
        particleColors: ["#1EAEDB", "#33C3F0", "#6DEAFF", "#0FA0CE", "#0078A8"],
        lineColor: "#1EAEDB",
        speed: 2.2,
        size: 3
      };
    case 'green':
      return {
        particleColors: ["#10B981", "#34D399", "#6EE7B7", "#059669", "#047857"],
        lineColor: "#10B981",
        speed: 2.5,
        size: 3.2
      };
    case 'orange':
      return {
        particleColors: ["#F97316", "#FB923C", "#FDBA74", "#EA580C", "#C2410C"],
        lineColor: "#F97316",
        speed: 2.8,
        size: 3.5
      };
    case 'rainbow':
      return {
        particleColors: ["#D946EF", "#8B5CF6", "#3B82F6", "#10B981", "#F97316"],
        lineColor: "#8B5CF6",
        speed: 3,
        size: 3.8
      };
    case 'purple':
    default:
      return {
        particleColors: ["#D946EF", "#8B5CF6", "#9b87f5", "#7E69AB", "#6E59A5"],
        lineColor: "#8B5CF6",
        speed: 2.5,
        size: 3.5
      };
  }
};

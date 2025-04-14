
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Sun, Moon, Palette } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type Theme = 'dark' | 'light' | 'cyberpunk' | 'neumorphic' | 'glassmorphism' | 'aurora' | 'space' | 'high-contrast' | 'gradient' | 'inverse';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const { toast } = useToast();

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Set dark as default
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      applyTheme('dark');
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    // Remove all theme classes first
    document.documentElement.classList.remove(
      'light-mode', 
      'cyberpunk-mode', 
      'neumorphic-mode', 
      'glassmorphism-mode', 
      'aurora-mode',
      'space-mode',
      'high-contrast-mode',
      'gradient-mode',
      'inverse-mode'
    );
    
    // Dark is the base theme, so we only add classes for non-dark themes
    if (newTheme !== 'dark') {
      document.documentElement.classList.add(`${newTheme}-mode`);
    }
  };

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme activated`,
      duration: 2000,
    });
  };

  const getThemeIcon = () => {
    switch(theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Palette className="h-4 w-4" />;
    }
  };

  return (
    <Select value={theme} onValueChange={(value: Theme) => changeTheme(value)}>
      <SelectTrigger className="w-[40px] h-[40px] p-0 border-white/10 bg-black/30 hover:bg-white/10">
        <SelectValue>
          <div className="flex items-center justify-center w-full">
            {getThemeIcon()}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-black/80 backdrop-blur-lg border-white/10">
        <SelectItem value="dark">Dark (Default)</SelectItem>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="cyberpunk">Neo-Cyberpunk</SelectItem>
        <SelectItem value="neumorphic">Neumorphic</SelectItem>
        <SelectItem value="glassmorphism">Glassmorphism</SelectItem>
        <SelectItem value="aurora">Aurora</SelectItem>
        <SelectItem value="space">Space</SelectItem>
        <SelectItem value="high-contrast">High Contrast</SelectItem>
        <SelectItem value="gradient">Gradient</SelectItem>
        <SelectItem value="inverse">Inverse</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeToggle;

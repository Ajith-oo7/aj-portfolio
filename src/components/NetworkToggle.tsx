
import React from 'react';
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { Palette } from "lucide-react";
import { ParticleTheme } from './ParticleNetwork';

interface NetworkToggleProps {
  enabled: boolean;
  onToggle: () => void;
  currentTheme: ParticleTheme;
  onThemeChange: (theme: ParticleTheme) => void;
  className?: string;
}

const NetworkToggle: React.FC<NetworkToggleProps> = ({ 
  enabled, 
  onToggle, 
  currentTheme,
  onThemeChange,
  className = ''
}) => {
  // Array of available themes
  const themes: ParticleTheme[] = ['purple', 'blue', 'green', 'orange', 'rainbow'];
  
  // Map theme names to corresponding tailwind classes
  const themeClasses: Record<ParticleTheme, string> = {
    purple: 'bg-neon-purple',
    blue: 'bg-neon-blue',
    green: 'bg-green-500',
    orange: 'bg-neon-orange',
    rainbow: 'bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink'
  };
  
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="flex items-center space-x-2 py-1">
        <label htmlFor="network-toggle" className="text-xs text-white/80 select-none cursor-pointer">
          Network Mode
        </label>
        <Switch
          id="network-toggle"
          checked={enabled}
          onCheckedChange={onToggle}
          aria-label={`Turn ${enabled ? 'off' : 'on'} particle network`}
        />
      </div>
      
      {enabled && (
        <div className="flex flex-col items-center space-y-1 pt-1 pb-2">
          <div className="flex items-center space-x-1">
            <Palette className="h-3 w-3 text-white/60" />
            <span className="text-xs text-white/70">Themes</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-1 max-w-[160px]">
            {themes.map((theme) => (
              <Toggle
                key={theme}
                aria-label={`${theme} theme`}
                variant="outline"
                size="sm"
                className={`h-6 w-6 rounded-full p-0 ${currentTheme === theme ? 'ring-1 ring-white' : ''}`}
                pressed={currentTheme === theme}
                onPressedChange={() => onThemeChange(theme)}
              >
                <span 
                  className={`w-4 h-4 rounded-full ${themeClasses[theme]}`} 
                  aria-hidden="true"
                ></span>
              </Toggle>
            ))}
          </div>
          
          <div className="text-[10px] text-white/50 mt-0.5 text-center">
            <p>Psst! Try typing "party"</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkToggle;

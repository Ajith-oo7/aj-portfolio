
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { Network, Palette, Gauge } from "lucide-react";
import { ParticleTheme } from '../types/particle';
import { Slider } from "@/components/ui/slider";

interface NetworkToggleProps {
  enabled: boolean;
  onToggle: () => void;
  currentTheme: ParticleTheme;
  onThemeChange: (theme: ParticleTheme) => void;
  density: number;
  onDensityChange: (density: number) => void;
  className?: string;
}

const NetworkToggle: React.FC<NetworkToggleProps> = ({ 
  enabled, 
  onToggle, 
  currentTheme,
  onThemeChange,
  density,
  onDensityChange,
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
  
  const handleDensityChange = (value: number[]) => {
    onDensityChange(value[0]);
  };
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`border-white/10 bg-black/30 hover:bg-white/10 ${className}`}
          aria-label="Network settings"
        >
          <Network className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-black/90 border-white/10 neo-blur text-white p-3">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="network-toggle" className="text-sm text-white/80 select-none cursor-pointer">
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
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Palette className="h-4 w-4 text-white/60" />
                  <span className="text-xs text-white/80">Themes</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {themes.map((theme) => (
                    <Toggle
                      key={theme}
                      aria-label={`${theme} theme`}
                      variant="outline"
                      size="sm"
                      className={`h-7 w-7 rounded-full p-0 ${currentTheme === theme ? 'ring-2 ring-white' : ''}`}
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
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Gauge className="h-4 w-4 text-white/60" />
                  <span className="text-xs text-white/80">Density</span>
                </div>
                
                <div className="px-1">
                  <Slider
                    value={[density]}
                    min={0.2}
                    max={2}
                    step={0.1}
                    onValueChange={handleDensityChange}
                    className="w-full"
                    aria-label="Adjust particle density"
                  />
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>Sparse</span>
                    <span>Dense</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-white/60 text-center">
                <p>Psst! Try typing "party"</p>
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NetworkToggle;


import React from 'react';
import { PopoverTrigger, Popover, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from '@/context/TranslationContext';
import { languages } from '@/lib/translations';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, setLanguage } = useTranslation();
  const { toast } = useToast();

  const handleLanguageChange = (language: typeof languages[0]) => {
    setLanguage(language);
    toast({
      title: "Language changed",
      description: `The language has been changed to ${language.name}`,
      duration: 3000,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="border-white/10 bg-black/30 hover:bg-white/10">
          <Globe className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 bg-black/90 border-white/10 neo-blur text-white p-2">
        <div className="flex flex-col space-y-1">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant="ghost"
              className={`justify-start px-2 ${
                currentLanguage.code === language.code 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              <span className="mr-2">{language.flag}</span>
              <span>{language.name}</span>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { TranslationProvider } from "./context/TranslationContext";
import { ParticleTheme } from "./components/ParticleNetwork";

const queryClient = new QueryClient();

const App = () => {
  const [networkEnabled, setNetworkEnabled] = useState(true);
  const [networkTheme, setNetworkTheme] = useState<ParticleTheme>("purple");

  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <TooltipProvider delayDuration={0}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  <Index 
                    networkEnabled={networkEnabled} 
                    setNetworkEnabled={setNetworkEnabled}
                    networkTheme={networkTheme}
                    setNetworkTheme={setNetworkTheme}
                  />
                } 
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
};

export default App;


import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { TranslationProvider } from "./context/TranslationContext";
import { PortfolioProvider } from "./context/PortfolioContext";
import { ParticleTheme } from "./types/particle";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [networkEnabled, setNetworkEnabled] = useState(true);
  const [networkTheme, setNetworkTheme] = useState<ParticleTheme>("purple");

  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <PortfolioProvider>
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
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </PortfolioProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
};

export default App;

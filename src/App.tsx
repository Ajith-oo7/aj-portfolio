
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { TranslationProvider } from "./context/TranslationContext";

const queryClient = new QueryClient();

// Use HashRouter for GitHub Pages, BrowserRouter for other deployments
const isGitHubPages = import.meta.env.GITHUB_PAGES === "true" || window.location.hostname.includes('github.io');

// Choose the appropriate router based on the deployment environment
const Router = isGitHubPages ? HashRouter : BrowserRouter;
const RouterProps = isGitHubPages ? { basename: "/" } : {};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider delayDuration={0}>
        <Toaster />
        <Sonner />
        <Router {...RouterProps}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioLogos from "./pages/PortfolioLogos";
import PortfolioSites from "./pages/PortfolioSites";
import PortfolioCamisas from "./pages/PortfolioCamisas";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio/logos" element={<PortfolioLogos />} />
          <Route path="/portfolio/sites" element={<PortfolioSites />} />
          <Route path="/portfolio/camisas" element={<PortfolioCamisas />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

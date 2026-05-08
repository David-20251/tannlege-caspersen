import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import IndexV3 from "./pages/IndexV3.tsx";
import BehandlingerPage from "./pages/BehandlingerPage.tsx";
import TannblekingPage from "./pages/TannblekingPage.tsx";
import AkutthjelPage from "./pages/AkutthjelPage.tsx";
import UndersokelseRontgenPage from "./pages/UndersokelseRontgenPage.tsx";
import FyllingerPage from "./pages/FyllingerPage.tsx";
import RotfyllingPage from "./pages/RotfyllingPage.tsx";
import PorselenPage from "./pages/PorselenPage.tsx";
import PricesPage from "./pages/PricesPage.tsx";
import OmOssPage from "./pages/OmOssPage.tsx";
import KontaktPage from "./pages/KontaktPage.tsx";
import Takk from "./pages/Takk.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<IndexV3 />} />
          <Route path="/behandlinger" element={<BehandlingerPage />} />
          <Route path="/behandlinger/tannbleking" element={<TannblekingPage />} />
          <Route path="/behandlinger/akutthjelp" element={<AkutthjelPage />} />
          <Route path="/behandlinger/undersokelse-rontgen" element={<UndersokelseRontgenPage />} />
          <Route path="/behandlinger/fyllinger" element={<FyllingerPage />} />
          <Route path="/behandlinger/rotfylling" element={<RotfyllingPage />} />
          <Route path="/behandlinger/porselen" element={<PorselenPage />} />
          <Route path="/priser" element={<PricesPage />} />
          <Route path="/om-oss" element={<OmOssPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/takk" element={<Takk />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

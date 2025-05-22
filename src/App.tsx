
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Store from "./pages/Store";
import RetroCorner from "./pages/RetroCorner";
import Community from "./pages/Community";
import Games from "./pages/Games";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tienda" element={<Store />} />
              <Route path="/retro" element={<RetroCorner />} />
              <Route path="/comunidad" element={<Community />} />
              <Route path="/juegos" element={<Games />} />
              <Route path="/juegos/fantasy" element={<Games />} />
              <Route path="/juegos/porra" element={<Games />} />
              <Route path="/juegos/trivias" element={<Games />} />
              <Route path="/juegos/penaltis" element={<Games />} />
              <Route path="/auth" element={<Auth />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

import { Zap, Leaf, Shield } from "lucide-react";
import ecovoltLogo from "@/assets/ecovolt-logo.png";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="animate-fade-up">
          <div className="relative animate-float">
            <img
              src={ecovoltLogo}
              alt="EcoVolt Solutions"
              className="w-48 h-48 md:w-64 md:h-64 object-contain animate-pulse-glow rounded-3xl"
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-center max-w-2xl animate-fade-up-delay">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            <span className="text-gradient-electric">Energia Limpa.</span>
            <br />
            <span className="text-foreground/90">Tecnologia do Futuro.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Identidade visual dinâmica que conecta sustentabilidade 
            com inovação tecnológica de ponta.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 animate-fade-up-delay-2">
          <button className="group relative px-8 py-4 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:scale-105">
            <span className="flex items-center gap-2">
              Saiba Mais
              <Zap className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16 text-foreground/90">
            Nossos <span className="text-gradient-electric">Diferenciais</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Eficiência Energética"
              description="Soluções que maximizam o aproveitamento de energia renovável."
            />
            <FeatureCard
              icon={<Leaf className="w-8 h-8" />}
              title="100% Sustentável"
              description="Compromisso total com o meio ambiente e futuras gerações."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Tecnologia Segura"
              description="Inovação com os mais altos padrões de segurança."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="text-center text-sm text-muted-foreground">
          © 2024 EcoVolt Solutions. Energia limpa, tecnologia do futuro.
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group p-8 bg-card/50 border border-border/50 rounded-2xl transition-all duration-300 hover:bg-card hover:border-primary/30 hover:glow-cyan">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 transition-colors group-hover:bg-primary/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default Index;

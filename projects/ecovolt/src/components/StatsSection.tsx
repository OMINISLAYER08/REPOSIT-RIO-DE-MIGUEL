import { Zap, TreeDeciduous, Factory, Users } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

interface StatCardProps {
  icon: React.ReactNode;
  value: React.ReactNode;
  label: string;
  description: string;
}

const StatCard = ({ icon, value, label, description }: StatCardProps) => {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8 bg-card/30 border border-border/30 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
          {icon}
        </div>
        
        <div className="text-4xl md:text-5xl font-bold text-gradient-electric mb-2">
          {value}
        </div>
        
        <div className="text-lg font-medium text-foreground mb-1">
          {label}
        </div>
        
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative py-24 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Nosso Impacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Transformando o <span className="text-gradient-electric">Futuro</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Cada número representa nosso compromisso com um planeta mais sustentável.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Zap className="w-6 h-6" />}
            value={<AnimatedCounter end={12500} suffix=" MWh" />}
            label="Energia Gerada"
            description="De fontes 100% renováveis em 2024"
          />
          
          <StatCard
            icon={<TreeDeciduous className="w-6 h-6" />}
            value={<AnimatedCounter end={8420} suffix="+" />}
            label="Toneladas de CO₂"
            description="Emissões evitadas no último ano"
          />
          
          <StatCard
            icon={<Factory className="w-6 h-6" />}
            value={<AnimatedCounter end={340} />}
            label="Projetos Ativos"
            description="Instalações em operação no Brasil"
          />
          
          <StatCard
            icon={<Users className="w-6 h-6" />}
            value={<AnimatedCounter end={25000} suffix="+" />}
            label="Famílias Beneficiadas"
            description="Com energia limpa e econômica"
          />
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
          <p className="text-lg md:text-xl text-foreground/90">
            <span className="text-gradient-electric font-semibold">97%</span> de satisfação dos clientes
            <span className="mx-3 text-muted-foreground">•</span>
            <span className="text-gradient-amber font-semibold">30%</span> de economia média na conta de luz
          </p>
        </div>
      </div>
    </section>
  );
};

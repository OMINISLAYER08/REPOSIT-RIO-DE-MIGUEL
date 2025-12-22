import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSites } from "@/lib/portfolioLoader"; // Import getSites

const PortfolioSites = () => {
  const sites = getSites(); // Get sites dynamically

  return (
    <>
      <Header />
      <main className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-gradient-gold">Portfólio</span> de Sites
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Aqui estão todos os sites modernos e funcionais que desenvolvemos.
            </p>
          </div>

          {sites.length === 0 ? (
            <p className="text-center text-muted-foreground">Nenhum site adicionado ainda. Adicione em public/portfolio/PORTIFÓLIO STOCKS/SITES</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sites.map((site) => (
                <div key={site.id} className="relative bg-card rounded-lg shadow-sm overflow-hidden border border-border flex flex-col">
                  <img src={site.imageUrl} alt={site.description} className="w-full h-48 object-cover" />
                  <div className="p-4 bg-gray-800/50 flex-grow"> {/* Enhanced styling for description area */}
                    <p className="text-muted-foreground text-sm leading-relaxed">{site.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioSites;

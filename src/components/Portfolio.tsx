import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    title: "Logotipos",
    category: "Logotipos",
    description: "Identidade visual para marcas.",
    image: "/portfolio-logos.png",
    url: "/portfolio/logos",
  },
  {
    title: "Sites",
    category: "Sites",
    description: "Sites institucionais e plataformas web.",
    image: "/portfolio-sites.png",
    url: "/portfolio/sites",
  },
  {
    title: "Camisas",
    category: "Camisas",
    description: "Estampas e designs para vestuário.",
    image: "/portfolio-camisas.png",
    url: "/portfolio/camisas",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Nossos Trabalhos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-gradient-gold">Portfólio</span> de Projetos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link to={item.url} key={item.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-gold/50 transition-all duration-500 bg-background"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-gold font-medium tracking-widest text-sm uppercase mb-2">Visualizar</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <div className="px-6 py-2 bg-gold text-primary-foreground font-semibold rounded-full transform hover:scale-105 transition-transform flex items-center gap-2">
                    Ver Projetos
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/vectorstudio2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            Ver mais no Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
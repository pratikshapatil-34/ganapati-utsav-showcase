import { Card } from "@/components/ui/card";
import heroGanapati from "@/assets/hero-ganapati.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroGanapati})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="blessing-fade">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 gentle-float">
            गणपति बप्पा
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-festival-gold mb-8">
            Ganpati Bappa Morya
          </h2>
          
          <Card className="bg-white/10 backdrop-blur-md border-festival-gold/30 p-8 divine-gradient gentle-shadow">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              मङ्गलमूर्ति मोरया | Mangal murti morya
            </p>
            <p className="text-lg md:text-xl text-festival-cream">
              Welcome to the divine celebration of Lord Ganesha, the remover of obstacles and harbinger of new beginnings.
            </p>
          </Card>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
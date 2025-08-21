import { Card } from "@/components/ui/card";
import ganapatiCloseup from "@/assets/ganapati-closeup.jpg";
import ganapatiSerene from "@/assets/ganapati-serene.jpg";
import festivalCelebration from "@/assets/festival-celebration.jpg";
import heroGanapati from "@/assets/hero-ganapati.jpg";

const Gallery = () => {
  const images = [
    {
      src: ganapatiCloseup,
      title: "Divine Beauty",
      description: "Lord Ganesha adorned with flowers and divine light"
    },
    {
      src: ganapatiSerene,
      title: "Peaceful Presence",
      description: "The serene expression of divine wisdom"
    },
    {
      src: festivalCelebration,
      title: "Festival Celebration",
      description: "The joy and devotion of Ganesh Utsav"
    },
    {
      src: heroGanapati,
      title: "Temple Glory",
      description: "Magnificent temple setting with golden decorations"
    }
  ];

  return (
    <section className="py-20 px-4 divine-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Divine Gallery
          </h2>
          <p className="text-xl text-festival-brown">
            Beautiful moments from the celebration of Lord Ganesha
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden festival-shadow hover:scale-105 transition-all duration-500 group"
            >
              <div className="relative">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-festival-brown italic">
            "गणानां त्वा गणपतिं हवामहे" - We invoke you, O Ganesha, lord of all beings
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
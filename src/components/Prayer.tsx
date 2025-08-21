import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Prayer = () => {
  const mantras = [
    {
      sanskrit: "गणानां त्वा गणपतिं हवामहे कविं कवीनाम्।",
      transliteration: "Ganaanaam tvaa ganapatim havaamahe kavim kaviinam",
      meaning: "We invoke you, O Ganesha, lord of all beings, wisest among the wise"
    },
    {
      sanskrit: "ॐ गं गणपतये नमः।",
      transliteration: "Om Gam Ganapataye Namaha",
      meaning: "Om, I bow to Lord Ganesha"
    },
    {
      sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।",
      transliteration: "Vakratunda Mahaakaaya Suryakoti Samaprabha",
      meaning: "O curved-trunked, mighty-bodied one, with the brilliance of a million suns"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-festival-cream to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Sacred Mantras
          </h2>
          <p className="text-xl text-festival-brown">
            Divine invocations to Lord Ganesha
          </p>
        </div>

        <div className="space-y-8">
          {mantras.map((mantra, index) => (
            <Card key={index} className="festival-shadow blessing-fade hover:divine-glow transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl text-secondary font-bold leading-relaxed">
                  {mantra.sanskrit}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg md:text-xl text-festival-brown italic">
                  {mantra.transliteration}
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  {mantra.meaning}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 festival-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ganpati Bappa Morya
              </h3>
              <p className="text-lg text-festival-brown mb-4">
                मङ्गलमूर्ति मोरया | पुढच्या वर्षी लवकर या
              </p>
              <p className="text-muted-foreground">
                O auspicious one, come again early next year - the traditional farewell to Lord Ganesha
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Prayer;
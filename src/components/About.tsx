import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import festivalCelebration from "@/assets/festival-celebration.jpg";

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 blessing-fade">
            गणेश उत्सव
          </h2>
          <p className="text-xl md:text-2xl text-festival-brown font-semibold">
            Ganesh Utsav - The Festival of New Beginnings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="festival-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">The Divine Celebration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Ganesh Utsav, also known as Ganesh Chaturthi, is one of India's most beloved festivals celebrating Lord Ganesha, the elephant-headed deity who removes obstacles and brings good fortune.
                </p>
              </CardContent>
            </Card>

            <Card className="festival-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Spiritual Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  This 11-day festival represents the cycle of birth, life, and rebirth. Lord Ganesha's arrival symbolizes new beginnings, while his departure reminds us of life's impermanence.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="gentle-float">
            <img 
              src={festivalCelebration} 
              alt="Ganesh Utsav Festival Celebration"
              className="rounded-2xl festival-shadow w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center festival-shadow hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">विनायक</CardTitle>
              <p className="text-festival-brown">Vinayaka</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">The remover of obstacles and leader of new ventures</p>
            </CardContent>
          </Card>

          <Card className="text-center festival-shadow hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">गणपति</CardTitle>
              <p className="text-festival-brown">Ganapati</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Lord of all beings and master of wisdom</p>
            </CardContent>
          </Card>

          <Card className="text-center festival-shadow hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">लम्बोदर</CardTitle>
              <p className="text-festival-brown">Lambodara</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">The one who contains the entire universe</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
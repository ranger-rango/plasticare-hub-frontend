import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Surgeon } from '../types';

const SurgeonSpotlight = () => {
  const surgeons: Surgeon[] = [
  {
    id: "1",
    name: "Prof. Stanley Khainga",
    title: "MD",
    specialization: "Plastic Surgery",
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/stanley-khainga.jpg",
    alt: "Prof. Stanley Khainga, board-certified plastic surgeon.",
    experience: "25+ years",
    certifications: []
  },
  {
    id: "2",
    name: "Dr. Michael Ongas",
    title: "MD",
    specialization: "Plastic Surgery",
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/DR.%20MICHAEL.jpg",
    alt: "Dr. Michael Ongas, board-certified plastic surgeon.",
    experience: "6+ years",
    certifications: []
  },
  {
    id: "3",
    name: "Dr. Evans Spanton Masitara",
    title: "MD",
    specialization: "Plastic Surgery",
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/DR.%20EVANS.jpg",
    alt: "Dr. Evans Spanton Masitara, board-certified plastic surgeon.",
    experience: "10+ years",
    certifications: []
  }];


  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id='surgeon-spotlight-section'>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Meet Our Expert Surgeons
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              Board-certified plastic surgeons with decades of combined experience in aesthetic and reconstructive procedures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {surgeons.map((surgeon) =>
            <div
              key={surgeon.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-brand transition-confident hover-lift">

                <div className="relative h-80 overflow-hidden">
                  <Image
                  src={surgeon.image}
                  alt={surgeon.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-confident" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-headline text-2xl font-bold text-white mb-1">
                      {surgeon.name}
                    </h3>
                    <p className="font-body text-sm text-secondary mb-2">
                      {surgeon.title}
                    </p>
                    <div className="flex items-center gap-2 text-white">
                      <Icon name="Award" size={16} />
                      <span className="font-body text-sm">{surgeon.experience} Experience</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Stethoscope" size={18} color="var(--color-primary)" />
                    <span className="font-body text-sm font-medium text-primary">
                      {surgeon.specialization}
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="font-body text-xs font-semibold text-text-primary mb-2">
                      Board Certifications:
                    </p>
                    {surgeon.certifications.map((cert, index) =>
                  <div key={index} className="flex items-start gap-2">
                        <Icon name="CheckCircle" size={14} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                        <span className="font-body text-xs text-text-secondary">
                          {cert}
                        </span>
                      </div>
                  )}
                  </div>

                  <Link to="/surgeons">
                    <Button
                    variant="outline"
                    size="default"
                    fullWidth
                    iconName="User"
                    iconPosition="left"
                    iconSize={18}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/surgeons">
              <Button
                variant="default"
                size="lg"
                iconName="Users"
                iconPosition="left"
                iconSize={20}
                className="bg-primary hover:bg-primary/90 shadow-brand">

                Meet All Our Surgeons
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>);

};

export default SurgeonSpotlight;
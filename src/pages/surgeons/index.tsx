import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import SurgeonCard from './components/SurgeonCard';
import CredentialsSection from './components/CredentialsSection';
import ConsultationCTA from './components/ConsultationCTA';
import Icon from '../../components/AppIcon';
import type { Surgeon, FilterOptions, Consultation } from './types';
import ConsultationModal from '../../components/ConsultationModal';
import { plasticareSurgeons } from '../../../data/surgeons';

const SurgeonsPage = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    specialization: '',
    experience: '',
    availability: ''
  });
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  const surgeons: Surgeon[] = plasticareSurgeons;


  const filteredSurgeons = useMemo(() => {
    return surgeons.filter((surgeon) => {
      if (filters.specialization && !surgeon.specialization.some((spec) =>
      spec.toLowerCase().includes(filters.specialization.toLowerCase())
      )) {
        return false;
      }

      if (filters.experience) {
        const [min, max] = filters.experience.split('-').map(Number);
        if (max) {
          if (surgeon.yearsOfExperience < min || surgeon.yearsOfExperience > max) {
            return false;
          }
        } else {
          if (surgeon.yearsOfExperience < min) {
            return false;
          }
        }
      }

      return true;
    });
  }, [surgeons, filters]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Helmet>
        <title>Expert Surgeons - PlastiCare Hub | Board-Certified Excellence</title>
        <meta
          name="description"
          content="Meet our board-certified plastic surgeons. Transform with confidence through expert care combining medical excellence with aesthetic artistry." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <HeroSection onOpen={ () => { setShowConsultationModal(true) } } />

            <FilterSection onFilterChange={handleFilterChange} />

            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-text-primary mb-2">
                  Our Surgeons
                </h2>
                <p className="font-body text-text-secondary">
                  Showing {filteredSurgeons.length} of {surgeons.length} surgeons
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Shield" size={20} className="text-primary" />
                <span className="font-body">All Board-Certified</span>
              </div>
            </div>

            {filteredSurgeons.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredSurgeons.map((surgeon) =>
              <SurgeonCard key={surgeon.id} surgeon={surgeon} />
              )}
              </div> :

            <div className="text-center py-16">
                <Icon name="Search" size={48} className="text-muted mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                  No surgeons found
                </h3>
                <p className="font-body text-text-secondary mb-6">
                  Try adjusting your filters to see more results
                </p>
              </div>
            }

            <CredentialsSection />

            <ConsultationCTA onOpen={ () => { setShowConsultationModal(true) } } />

            {showConsultationModal &&
            <ConsultationModal
              onClose={() => {
                setShowConsultationModal(false);
              }}
            />
            }
          </div>
        </main>

        <footer className="bg-card border-t border-border mt-16">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-headline text-lg font-semibold text-text-primary mb-4">
                  PlastiCare Hub
                </h3>
                <p className="font-body text-sm text-text-secondary mb-4">
                  Where medical excellence meets aesthetic artistry
                </p>
                <div className="flex items-center space-x-4">
                  <Icon name="Facebook" size={20} className="text-text-secondary hover:text-primary cursor-pointer transition-brand" />
                  <Icon name="Instagram" size={20} className="text-text-secondary hover:text-primary cursor-pointer transition-brand" />
                  <Icon name="Twitter" size={20} className="text-text-secondary hover:text-primary cursor-pointer transition-brand" />
                  <Icon name="Youtube" size={20} className="text-text-secondary hover:text-primary cursor-pointer transition-brand" />
                </div>
              </div>

              <div>
                <h4 className="font-body text-sm font-semibold text-text-primary mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/procedures" className="font-body text-sm text-text-secondary hover:text-primary transition-brand">
                      Procedures
                    </a>
                  </li>
                  <li>
                    <a href="/patient-gallery" className="font-body text-sm text-text-secondary hover:text-primary transition-brand">
                      Patient Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/patient-care" className="font-body text-sm text-text-secondary hover:text-primary transition-brand">
                      Patient Care
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="font-body text-sm text-text-secondary hover:text-primary transition-brand">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-body text-sm font-semibold text-text-primary mb-4">
                  Contact
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">
                      123 Medical Plaza, Suite 100<br />Beverly Hills, CA 90210
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">(555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">info@plasticarehub.com</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-body text-sm font-semibold text-text-primary mb-4">
                  Office Hours
                </h4>
                <ul className="space-y-2 font-body text-sm text-text-secondary">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                  <li className="pt-2 text-primary">24/7 Emergency Support</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center">
              <p className="font-body text-sm text-text-secondary">
                &copy; {new Date().getFullYear()} PlastiCareHub. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>);

};

export default SurgeonsPage;
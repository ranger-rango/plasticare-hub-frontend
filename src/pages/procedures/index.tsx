import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProcedureHero from './components/ProcedureHero';
import CategoryFilter from './components/CategoryFilter';
import AdvancedFilters from './components/AdvancedFilters';
import ProcedureCard from './components/ProcedureCard';
import ProcedureModal from './components/ProcedureModal';
import ComparisonTool from './components/ComparisonTool';
import ConsultationModal from './components/ConsultationModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import {
  Procedure,
  ProcedureCategory,
  BodyArea,
  PriceRange,
  RecoveryTime,
  FilterOptions,
  ComparisonProcedure,
  VirtualConsultation } from
'./types';
import { plasticareProcedures } from '../../../data/procedures';

const ProceduresPage = () => {
  const [procedures] = useState<Procedure[]>(plasticareProcedures);

  const [filteredProcedures, setFilteredProcedures] = useState<Procedure[]>(procedures);
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [consultationProcedure, setConsultationProcedure] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [comparisonList, setComparisonList] = useState<ComparisonProcedure[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    bodyArea: 'all',
    priceRange: 'all',
    recoveryTime: 'all',
    searchQuery: ''
  });

  useEffect(() => {
    let filtered = [...procedures];

    if (filters.category !== 'all') {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    if (filters.bodyArea !== 'all') {
      filtered = filtered.filter((p) => p.bodyArea === filters.bodyArea);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    setFilteredProcedures(filtered);
  }, [filters, procedures]);

  const handleSearch = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleCategoryChange = (category: ProcedureCategory | 'all') => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const handleAdvancedFilterChange = (advancedFilters: {
    bodyArea: BodyArea | 'all';
    priceRange: PriceRange | 'all';
    recoveryTime: RecoveryTime | 'all';
  }) => {
    setFilters((prev) => ({ ...prev, ...advancedFilters }));
  };

  const handleViewDetails = (id: string) => {
    const procedure = procedures.find((p) => p.id === id);
    if (procedure) {
      setSelectedProcedure(procedure);
    }
  };

  const handleAddToComparison = (id: string) => {
    const procedure = procedures.find((p) => p.id === id);
    if (!procedure) return;

    const isInComparison = comparisonList.some((p) => p.id === id);

    if (isInComparison) {
      setComparisonList((prev) => prev.filter((p) => p.id !== id));
    } else if (comparisonList.length < 3) {
      const comparisonProcedure: ComparisonProcedure = {
        id: procedure.id,
        name: procedure.name,
        category: procedure.category,
        priceRange: procedure.priceRange,
        recoveryTime: procedure.recoveryTime,
        duration: procedure.duration,
        benefits: procedure.benefits
      };
      setComparisonList((prev) => [...prev, comparisonProcedure]);
    }
  };

  const handleRemoveFromComparison = (id: string) => {
    setComparisonList((prev) => prev.filter((p) => p.id !== id));
  };

  const handleClearComparison = () => {
    setComparisonList([]);
  };

  const handleBookConsultation = (procedureId: string) => {
    const procedure = procedures.find((p) => p.id === procedureId);
    if (procedure) {
      setConsultationProcedure({ id: procedure.id, name: procedure.name });
      setSelectedProcedure(null);
      setShowConsultationModal(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Procedures - PlastiCare Hub | Comprehensive Treatment Catalog</title>
        <meta
          name="description"
          content="Explore our comprehensive range of aesthetic and reconstructive procedures. From facial enhancements to body contouring, find the treatment that aligns with your vision." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <ProcedureHero onSearch={handleSearch} />

          <CategoryFilter
            selectedCategory={filters.category}
            onCategoryChange={handleCategoryChange} />


          <AdvancedFilters onFilterChange={handleAdvancedFilterChange} />

          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-headline text-3xl font-bold text-text-primary mb-2">
                    {filters.category === 'all' ? 'All Procedures' :
                    `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1).replace('-', ' ')} Procedures`}
                  </h2>
                  <p className="font-body text-base text-text-secondary">
                    {filteredProcedures.length} {filteredProcedures.length === 1 ? 'procedure' : 'procedures'} found
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="default"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={18}
                  className="hidden lg:flex">

                  Download Catalog
                </Button>
              </div>

              {filteredProcedures.length === 0 ?
              <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Search" size={40} className="text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl font-semibold text-text-primary mb-3">
                    No Procedures Found
                  </h3>
                  <p className="font-body text-base text-text-secondary mb-6 max-w-md mx-auto">
                    We couldn't find any procedures matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  <Button
                  variant="default"
                  size="default"
                  onClick={() =>
                  setFilters({
                    category: 'all',
                    bodyArea: 'all',
                    priceRange: 'all',
                    recoveryTime: 'all',
                    searchQuery: ''
                  })
                  }
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={18}
                  className="bg-primary hover:bg-primary/90">

                    Clear All Filters
                  </Button>
                </div> :

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProcedures.map((procedure) =>
                <ProcedureCard
                  key={procedure.id}
                  procedure={procedure}
                  onViewDetails={handleViewDetails}
                  onAddToComparison={handleAddToComparison}
                  isInComparison={comparisonList.some((p) => p.id === procedure.id)} />

                )}
                </div>
              }
            </div>
          </section>

          <section className="py-16 bg-gradient-rose-overlay">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold text-text-primary mb-4">
                  Ready to Begin Your Transformation?
                </h2>
                <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                  Schedule a consultation with our expert surgeons to discuss your goals and create a personalized treatment plan.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-primary hover:bg-primary/90 shadow-brand">

                  Book Virtual Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={20}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                  Call Us Today
                </Button>
              </div> */}
            </div>
          </section>
        </main>

        {selectedProcedure &&
        <ProcedureModal
          procedure={selectedProcedure}
          onClose={() => setSelectedProcedure(null)}
          onBookConsultation={handleBookConsultation} />
        }

        {showConsultationModal && consultationProcedure &&
        <ConsultationModal
          procedureName={consultationProcedure.name}
          procedureId={consultationProcedure.id}
          onClose={() => {
            setShowConsultationModal(false);
            setConsultationProcedure(null);
          }}
        />

        }

        <ComparisonTool
          procedures={comparisonList}
          onRemove={handleRemoveFromComparison}
          onClear={handleClearComparison} />

      </div>
    </>);

};

export default ProceduresPage;
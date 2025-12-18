import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PatientCare from './pages/patient-care';
import ProceduresPage from './pages/procedures';
import SurgeonsPage from './pages/surgeons';
import PatientGallery from './pages/patient-gallery';
import About from './pages/about';
import Homepage from './pages/homepage';
import AdminPage from "pages/admin";
import LoginPage from "pages/admin/auth/Login";
import RegisterPage from "pages/admin/auth/Register";
import UsersPage from "pages/admin/components/GetUsers";
import ConsultationsPage from "pages/admin/components/GetConsultations";
import ToursPage from "pages/admin/components/GetTours";
import EnquiriesPage from "pages/admin/components/GetEnquiries";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/patient-care" element={<PatientCare />} /> */}
        <Route path="/procedures" element={<ProceduresPage />} />
        <Route path="/surgeons" element={<SurgeonsPage />} />
        <Route path="/patient-gallery" element={<PatientGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard/admin" element={<AdminPage allowedRoles={["ADMIN", "OPERATOR"]} />} />
        <Route path="/dashboard/admin/login" element={<LoginPage />} />
        <Route path="/dashboard/admin/register/:registrationToken" element={<RegisterPage />} />
        <Route path="/dashboard/admin/users" element={<UsersPage allowedRoles={["ADMIN"]} />} />
        <Route path="/dashboard/admin/consultations" element={<ConsultationsPage allowedRoles={["ADMIN", "OPERATOR"]} />} />
        <Route path="/dashboard/admin/tours" element={<ToursPage allowedRoles={["ADMIN", "OPERATOR"]} />} />
        <Route path="/dashboard/admin/enquiries" element={<EnquiriesPage allowedRoles={["ADMIN", "OPERATOR"]} />} />
        <Route path="/dashboard/admin/logout" element={<EnquiriesPage allowedRoles={["ADMIN", "OPERATOR"]} />} />
        <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

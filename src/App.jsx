import React, { useState } from 'react';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

import DashboardPage from './DashboardPage';
import UserDashboard from './UserDashboard';
import ProfessionalDashboard from './ProfessionalDashboard';
import ProfilePage from './ProfilePage';
import CustomerSupportPage from './CustomerSupportPage';
import YourBookingsPage from './YourBookingsPage';
import ManageServicesPage from './ManageServicesPage';
import EditProfilePage from './EditProfilePage';
import SecuritySettingsPage from './SecuritySettingsPage';
import BillingPaymentsPage from './BillingPaymentsPage';
import ScheduleAvailabilityPage from './ScheduleAvailabilityPage';
import EditProfessionalProfilePage from './EditProfessionalProfilePage';
import EarningsPaymentsPage from './EarningsPaymentsPage';
import ClientReviewsPage from './ClientReviewsPage';
import PerformanceAnalyticsPage from './PerformanceAnalyticsPage';

// Support Pages
import SubmitTicketPage from './SubmitTicketPage';
import ReportBugPage from './ReportBugPage';
import LiveChatPage from './LiveChatPage';

function App() {

  const [currentView, setCurrentView] = useState('login');
  const [bookingHistory, setBookingHistory] = useState([]);

  // ---- Auth Navigation ----
  const handleSwitchToLogin = () => setCurrentView('login');
  const handleSwitchToSignUp = () => setCurrentView('signup');

  const handleSuccessfulLogin = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('login');
  };

  // ---- Main Navigation ----
  const handleNavigateToUserDashboard = () => setCurrentView('user-dashboard');
  const handleNavigateToProfessionalDashboard = () => setCurrentView('professional-dashboard');
  const handleNavigateToProfile = () => setCurrentView('profile');

  // ---- Support Navigation ----
  const handleNavigateToSupport = () => setCurrentView('support');
  const handleNavigateToTicket = () => setCurrentView('submit-ticket');
  const handleNavigateToBug = () => setCurrentView('report-bug');
  const handleNavigateToChat = () => setCurrentView('live-chat');

  // ---- Other Navigation ----
  const handleNavigateToBookings = () => setCurrentView('bookings');
  const handleNavigateToManageServices = () => setCurrentView('manage-services');
  const handleNavigateToEditProfile = () => setCurrentView('edit-profile');
  const handleNavigateToSecurity = () => setCurrentView('security');
  const handleNavigateToBilling = () => setCurrentView('billing');
  const handleNavigateToSchedule = () => setCurrentView('schedule-availability');
  const handleNavigateToEditProProfile = () => setCurrentView('edit-pro-profile');
  const handleNavigateToEarnings = () => setCurrentView('earnings-payments-pro');
  const handleNavigateToReviews = () => setCurrentView('client-reviews');
  const handleNavigateToAnalytics = () => setCurrentView('performance-analytics');

  // ---- Booking Handler ----
  const handleBookProfessional = (professionalData) => {
    const newBooking = {
      ...professionalData,
      bookingId: Date.now(),
      bookingDate: new Date().toLocaleString(),
      appointmentDate:
        new Date(Date.now() + 86400000 * 3).toLocaleDateString('en-US'),
    };

    setBookingHistory(prev => [newBooking, ...prev]);
    setCurrentView('bookings');
  };

  // ---- VIEW RENDERING ----
  const renderView = () => {

    const handleReturnToProDashboard = handleNavigateToProfessionalDashboard;
    const handleReturnToProfile = handleNavigateToProfile;
    const handleReturnToSupport = handleNavigateToSupport;

    switch (currentView) {

      // ------------------------
      // AUTH
      // ------------------------
      case 'login':
        return (
          <LoginPage
            onSwitchToSignUp={handleSwitchToSignUp}
            onLoginSuccess={handleSuccessfulLogin}
          />
        );

      case 'signup':
        return <SignUpPage onSwitchToLogin={handleSwitchToLogin} />;

      // ------------------------
      // DASHBOARD
      // ------------------------
      case 'dashboard':
        return (
          <DashboardPage
            onLogout={handleLogout}
            onNavigateToUserDashboard={handleNavigateToUserDashboard}
            onNavigateToProfessionalDashboard={handleNavigateToProfessionalDashboard}
            onNavigateToProfile={handleNavigateToProfile}
            onNavigateToSupport={handleNavigateToSupport}
            onNavigateToBookings={handleNavigateToBookings}
          />
        );

      // ------------------------
      // SUPPORT
      // ------------------------
      case 'support':
        return (
          <CustomerSupportPage
            onGoBack={handleSuccessfulLogin}
            onNavigateToTicket={handleNavigateToTicket}
            onNavigateToBug={handleNavigateToBug}
            onNavigateToChat={handleNavigateToChat}
          />
        );

      case 'submit-ticket':
        return <SubmitTicketPage onGoBack={handleReturnToSupport} />;

      case 'report-bug':
        return <ReportBugPage onGoBack={handleReturnToSupport} />;

      case 'live-chat':
        return <LiveChatPage onGoBack={handleReturnToSupport} />;

      // ------------------------
      // USER SIDE
      // ------------------------
      case 'user-dashboard':
        return (
          <UserDashboard
            onGoBack={handleSuccessfulLogin}
            onBookProfessional={handleBookProfessional}
          />
        );

      case 'profile':
        return (
          <ProfilePage
            onGoBack={handleSuccessfulLogin}
            onNavigateToEditProfile={handleNavigateToEditProfile}
            onNavigateToSecurity={handleNavigateToSecurity}
            onNavigateToBilling={handleNavigateToBilling}
            onNavigateToBookings={handleNavigateToBookings}
          />
        );

      case 'edit-profile':
        return <EditProfilePage onGoBack={handleReturnToProfile} />;

      case 'security':
        return <SecuritySettingsPage onGoBack={handleReturnToProfile} />;

      case 'billing':
        return <BillingPaymentsPage onGoBack={handleReturnToProfile} />;

      case 'bookings':
        return (
          <YourBookingsPage
            onGoBack={handleSuccessfulLogin}
            bookingHistory={bookingHistory}
          />
        );

      // ------------------------
      // PROFESSIONAL SIDE
      // ------------------------
      case 'professional-dashboard':
        return (
          <ProfessionalDashboard
            onGoBack={handleSuccessfulLogin}
            onNavigateToManageServices={handleNavigateToManageServices}
            onNavigateToEditProProfile={handleNavigateToEditProProfile}
            onNavigateToSchedule={handleNavigateToSchedule}
            onNavigateToEarnings={handleNavigateToEarnings}
            onNavigateToReviews={handleNavigateToReviews}
            onNavigateToAnalytics={handleNavigateToAnalytics}
          />
        );

      case 'manage-services':
        return <ManageServicesPage onGoBack={handleReturnToProDashboard} />;

      case 'schedule-availability':
        return <ScheduleAvailabilityPage onGoBack={handleReturnToProDashboard} />;

      case 'edit-pro-profile':
        return <EditProfessionalProfilePage onGoBack={handleReturnToProDashboard} />;

      case 'earnings-payments-pro':
        return <EarningsPaymentsPage onGoBack={handleReturnToProDashboard} />;

      case 'client-reviews':
        return <ClientReviewsPage onGoBack={handleReturnToProDashboard} />;

      case 'performance-analytics':
        return <PerformanceAnalyticsPage onGoBack={handleReturnToProDashboard} />;

      // ------------------------
      // DEFAULT
      // ------------------------
      default:
        return (
          <LoginPage
            onSwitchToSignUp={handleSwitchToSignUp}
            onLoginSuccess={handleSuccessfulLogin}
          />
        );
    }
  };

  return <div className="App">{renderView()}</div>;
}

export default App;

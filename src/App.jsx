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

// 1. Import new support components
import SubmitTicketPage from './SubmitTicketPage';
import ReportBugPage from './ReportBugPage';
import LiveChatPage from './LiveChatPage';


function App() {
  // Added new view states: 'submit-ticket', 'report-bug', 'live-chat'
  const [currentView, setCurrentView] = useState('login'); 
  const [bookingHistory, setBookingHistory] = useState([]); 

  // --- Navigation Functions ---
  const handleSwitchToLogin = () => setCurrentView('login');
  const handleSuccessfulLogin = () => setCurrentView('dashboard');
  const handleLogout = () => setCurrentView('login');
  
  // Handlers for navigating to main dashboards/views
  const handleNavigateToUserDashboard = () => setCurrentView('user-dashboard');
  const handleNavigateToProfessionalDashboard = () => setCurrentView('professional-dashboard'); 
  const handleNavigateToProfile = () => setCurrentView('profile');

  // New Support Handlers
  const handleNavigateToSupport = () => setCurrentView('support'); // Target for returning to Support
  const handleNavigateToTicket = () => setCurrentView('submit-ticket'); // NEW
  const handleNavigateToBug = () => setCurrentView('report-bug'); // NEW
  const handleNavigateToChat = () => setCurrentView('live-chat'); // NEW

  // Other Handlers (Existing)
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

  // Handler for booking (saves data and navigates)
  const handleBookProfessional = (professionalData) => {
      const newBooking = {
          ...professionalData,
          bookingId: Date.now(),
          bookingDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
          appointmentDate: new Date(Date.now() + 86400000 * 3).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }) + ' at 2:00 PM'
      };
      setBookingHistory(prevHistory => [newBooking, ...prevHistory]); 
      setCurrentView('bookings'); 
  };

  // --- Render Logic ---
  const renderView = () => {
      // Define constant handlers to return to specific dashboards
      const handleReturnToProDashboard = handleNavigateToProfessionalDashboard;
      const handleReturnToProfile = handleNavigateToProfile;
      const handleReturnToSupport = handleNavigateToSupport; // Target for returning from support sub-pages

      switch (currentView) {
          // --- Main App Navigation (Existing) ---
          case 'login':
              return <LoginPage onSwitchToSignUp={() => setCurrentView('signup')} onLoginSuccess={handleSuccessfulLogin} />;
          case 'signup':
              return <SignUpPage onSwitchToLogin={handleSwitchToLogin} />;
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

          // --- Support Navigation (CRITICAL ADDITIONS) ---
          case 'support':
              return (
                  <CustomerSupportPage 
                      onGoBack={handleSuccessfulLogin} 
                      onNavigateToTicket={handleNavigateToTicket} // 2. Pass new handlers
                      onNavigateToBug={handleNavigateToBug}     // 2. Pass new handlers
                      onNavigateToChat={handleNavigateToChat}   // 2. Pass new handlers
                  />
              );
          case 'submit-ticket':
              return <SubmitTicketPage onGoBack={handleReturnToSupport} />; // 3. Render new page
          case 'report-bug':
              return <ReportBugPage onGoBack={handleReturnToSupport} />; // 3. Render new page
          case 'live-chat':
              return <LiveChatPage onGoBack={handleReturnToSupport} />; // 3. Render new page

          // --- Other Views (Existing) ---
          case 'user-dashboard':
              return <UserDashboard onGoBack={handleSuccessfulLogin} onBookProfessional={handleBookProfessional} />;
          case 'profile':
              return (
                  <ProfilePage 
                      onGoBack={handleSuccessfulLogin} 
                      onNavigateToBookings={handleNavigateToBookings}
                      onNavigateToEditProfile={handleNavigateToEditProfile} 
                      onNavigateToSecurity={handleNavigateToSecurity}       
                      onNavigateToBilling={handleNavigateToBilling}         
                  />
              );
          case 'edit-profile':
              return <EditProfilePage onGoBack={handleReturnToProfile} />; 
          case 'security':
              return <SecuritySettingsPage onGoBack={handleReturnToProfile} />; 
          case 'billing':
              return <BillingPaymentsPage onGoBack={handleReturnToProfile} />; 
          case 'bookings':
              return <YourBookingsPage onGoBack={handleSuccessfulLogin} bookingHistory={bookingHistory} />; 
          case 'professional-dashboard':
              return (
                <ProfessionalDashboard 
                    onGoBack={handleSuccessfulLogin} 
                    onNavigateToManageServices={handleNavigateToManageServices} 
                    onNavigateToSchedule={handleNavigateToSchedule} 
                    onNavigateToEditProProfile={handleNavigateToEditProProfile} 
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

          default:
              return <LoginPage onSwitchToSignUp={() => setCurrentView('signup')} onLoginSuccess={handleSuccessfulLogin} />;
      }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}

export default App;
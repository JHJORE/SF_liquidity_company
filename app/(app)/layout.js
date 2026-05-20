import AuthGate from '@/components/AuthGate';
import AppSidebar from '@/components/AppSidebar';
import AppTopbar from '@/components/AppTopbar';

export default function AppLayout({ children }) {
  return (
    <AuthGate>
      <div className="app-shell">
        <AppSidebar />
        <main className="app-main">
          <AppTopbar />
          <div className="app-content">{children}</div>
        </main>
      </div>
    </AuthGate>
  );
}

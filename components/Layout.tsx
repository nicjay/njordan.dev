import Footer from './Footer';
import Header from './Header';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <div className="mx-auto flex h-screen max-w-3xl flex-col py-6">
      <Header />
      <main className="grow py-16">{children}</main>
      <Footer />
    </div>
  );
}

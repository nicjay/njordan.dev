import Footer from './Footer';
import Header from './Header';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col py-4">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}

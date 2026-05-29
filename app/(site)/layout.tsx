import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToastProvider from "../components/ToastProvider";
import PageContent from "../components/skeleton/PageContent";
import { DEFAULT_PAGE_SKELETON_DELAY_MS } from "../components/skeleton/constants";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <Navbar />
      <main className="w-full min-w-0 overflow-x-hidden">
        <PageContent delayMs={DEFAULT_PAGE_SKELETON_DELAY_MS}>
          {children}
        </PageContent>
      </main>
      <Footer />
    </ToastProvider>
  );
}

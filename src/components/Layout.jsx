import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-svh flex flex-col justify-center items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

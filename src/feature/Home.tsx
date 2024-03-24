import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export const Home = () => {
  return (
    <section className="grid grid-cols-1 w-screen">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

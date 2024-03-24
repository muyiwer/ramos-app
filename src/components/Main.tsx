import { FifthSection } from "./FifthSection";
import { FirstSection } from "./FirstSection";
import { FourthSection } from "./FourthSection";
import { SecondSection } from "./SecondSection";
import { ThirdSection } from "./ThirdSection";

export const Main = () => {
  return (
    <main className="z-50 py-[50px] flex flex-col">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection/>
    </main>
  );
};

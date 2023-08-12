import { Inter } from "next/font/google";
import DefaultTemplate from "@/components/DefaultTemplate";
import HeroSection from "@/components/HeroSection";
import HeroSecond from "@/components/HeroSecond";
import CardSection from "@/components/CardSection";
import GiftSection from "@/components/GiftSection";
import FAndQ from "@/components/FAndQ";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <DefaultTemplate>
      <HeroSection />
      <HeroSecond />
      <CardSection />
      <GiftSection />
      <FAndQ />
      <div className=" flex justify-center align-middle items-center mb-[74px] mt-[34px]">
        <button className="bg-[#4EBFEC] text-black px-[34px] py-[15px] md:p-[19px] md:pb-[20.14px] md:pr-[44.38px] md:pl-[45px] md:text-[23px] font-extrabold rounded-[5px] mt-[41px] md:mt-[54px] text-center">
          EFETUE SEU CADASTRO
        </button>
      </div>
    </DefaultTemplate>
  );
}

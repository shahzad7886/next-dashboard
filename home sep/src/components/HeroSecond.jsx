import Image from "next/image";
import React from "react";

function HeroSecond(props) {
  return (
    <div className="relative isolate overflow-hidden max-w-7xl mx-auto md:min-h-screen flex self-center flex-col h-full justify-center ">
      <Image
        src="/squarehero.png"
        alt=""
        width={1112}
        height={636}
        className="absolute w-[1240.4px] h-[636px] -z-10 right-[-373px]  hidden md:flex"
      />

      <div className="max-w-7xl">
        <div className="max-w-[1029px] md:text-start text-center">
          <h2 className="md:text-[115px] mt-10 md:leading-[132px] text-[27px] bg-clip-text text-transparent bg-gradient-to-r from-white via-[#4EBFEC] to-white">
            NOSSO CRONOGRAMA
          </h2>
          <p className="md:mt-6 md:text-[36px] text-[13px] leading-[27px] max-w-[754px] text-gray-300">
            PRÉ-LANÇAMENTO: 01/07/2023 À 04/09/2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSecond;

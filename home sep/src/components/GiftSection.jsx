import Image from "next/image";
import React from "react";

function GiftSection(props) {
  return (
    <div>
      <div className="flex max-w-7xl px-5  mx-auto md:min-h-screen align-center items-center flex-col md:flex-row mb-10 lg:mb-0">
        <div className="max-w-full lg:min-w-[645px] text-center md:text-start">
          <h2 className="md:text-[54px] leading-[63px] sm:text-[25px] text-white font-extrabold">
            LANÇAMENTO OFICIAL: 05/09/2023
          </h2>
        </div>
        <div className="flex flex-col w-full align-center justify-center items-center">
          <div className="">
            <Image src="/gift.svg" width={88} height={65} alt="gift emote" />
          </div>
          <div className="max-w-[290px] text-[21px] leading-[27px] text-center text-white">
            Após o lançamento oficial, você concorrerá à prêmios diários de
            segunda a sexta.
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftSection;

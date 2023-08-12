import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-x-clip px-6 pt-24 md:py-24 sm:py-0 lg:px-8 z-0">
      <div className="absolute w-[323px] h-[323px] md:w-[903px] md:h-[903px] -z-10 md:right-[-33px] right-[-126.43px] top-[257.05px] lg:top-[109.54px] bg-gradient-to-br from-[#4EBFEC] via-[#532AC2] to-[#000000] blur-[12.5px] rounded-full block"></div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[1000px] text-start">
          <h2 className="md:text-[54.4184px] md:leading-[64px] sm:leading-[38px] text-[22px] bg-clip-text text-transparent bg-gradient-to-r from-white via-[#4EBFEC] to-white">
            A MAIOR PLATAFORMA GLOBAL DE SORTEIOS & PRÊMIOS ESTÁ DE VOLTA AO
            BRASIL
          </h2>
          <p className="mt-6 md:text-[20px] sm:text-[14px] leading-[27px] max-w-[700px] text-gray-300">
            Participe do pré-lançamento da nossa nova plataforma e já concorra a
            1 camisa oficial de clube de futebol ou R$ 300,00 em pix, em cada
            sorteio.
          </p>
          <button className="bg-[#4EBFEC] text-black px-[34px] py-[15px] md:p-[19px] md:pb-[20.14px] md:pr-[44.38px] md:pl-[45px] md:text-[23px] font-extrabold rounded-[5px] mt-[41px] md:mt-[54px]">
            EFETUE SEU CADASTRO
          </button>
          <div className="text-[13px] text-white mt-[40px] flex align-middle items-center gap-4">
            <span className="bg-gradient-to-r from-[#29B6F6] via-[#169FE4] to-[#0288D1] py-[8px] px-[3px]  rounded-[5px]">
              FREE
            </span>{" "}
            <span>Lembrando que sua participação é 100% GRATUITA</span>
          </div>
        </div>
        <div className="mt-[104px] hidden lg:flex ">
          <Image
            src="/heropic.png"
            width={1536}
            height={736}
            alt="Hero image"
            className="w-full object-cover rounded-[19px] hidden lg:flex"
          />
        </div>
      </div>
    </div>
  );
}

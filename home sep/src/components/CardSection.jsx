import Image from "next/image";
import React from "react";

function CardSection(props) {
  return (
    <div className=" cartPosition lg:-mt-[25vh] flex xl:flex-col max-w-7xl mx-auto gap-4 mt-[23px] overflow-x-scroll xl:overflow-hidden z-10 px-5">
      <div className="mt-[23px] mx-auto flex justify-center gap-4 z-10">
        <div className="w-[310px]  md:w-[400px] h-[486.43px] bg-[#4EBFEC] rounded-[7.17448px] z-10">
          <div className="flex flex-col items-center align-middle justify-center text-white">
            <p className="mt-[37px] text-[22.0753px] mb-[29px] font-semibold">
              SORTEIO 001
            </p>
            <div>
              <Image
                src="/give.png"
                width={169}
                height={136}
                className="mb-[24px]"
                alt=""
              />
            </div>
            <div className="w-[288.41px] h-[167px] text-[28.4272px] leading-[30px]">
              <h2 className="font-light">Prêmio:</h2>
              <p className="font-medium">
                Camisa de futebol ou R$ 300,00 em pix{" "}
              </p>
              <h2 className="font-light">Date:</h2>
              <p className="font-medium">07/08/2023</p>
            </div>
          </div>
        </div>
        <div className="w-[310px]  md:w-[400px] h-[486.43px] bg-[#4EBFEC] rounded-[7.17448px] z-10">
          <div className="flex flex-col items-center align-middle justify-center text-white">
            <p className="mt-[37px] text-[22.0753px] mb-[29px] font-semibold">
              SORTEIO 002
            </p>
            <div>
              <Image
                src="/give.png"
                width={169}
                height={136}
                className="mb-[24px]"
                alt=""
              />
            </div>
            <div className="w-[288.41px] h-[167px] text-[28.4272px] leading-[30px]">
              <h2 className="font-light">Prêmio:</h2>
              <p className="font-medium">
                Camisa de futebol ou R$ 300,00 em pix{" "}
              </p>
              <h2 className="font-light">Date:</h2>
              <p className="font-medium">14/08/2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[23px] mx-auto flex justify-center gap-4 z-10">
        <div className="w-[310px]  md:w-[400px] h-[486.43px] bg-[#4EBFEC] rounded-[7.17448px] z-10">
          <div className="flex flex-col items-center align-middle justify-center text-white">
            <p className="mt-[37px] text-[22.0753px] mb-[29px] font-semibold">
              SORTEIO 003
            </p>
            <div>
              <Image
                src="/give.png"
                width={169}
                height={136}
                className="mb-[24px]"
                alt=""
              />
            </div>
            <div className="w-[288.41px] h-[167px] text-[28.4272px] leading-[30px]">
              <h2 className="font-light">Prêmio:</h2>
              <p className="font-medium">
                Camisa de futebol ou R$ 300,00 em pix{" "}
              </p>
              <h2 className="font-light">Date:</h2>
              <p className="font-medium">21/08/2023</p>
            </div>
          </div>
        </div>
        <div className="w-[310px]  md:w-[400px] h-[486.43px] bg-[#4EBFEC] rounded-[7.17448px] z-10">
          <div className="flex flex-col items-center align-middle justify-center text-white">
            <p className="mt-[37px] text-[22.0753px] mb-[29px] font-semibold">
              SORTEIO 004
            </p>
            <div>
              <Image
                src="/give.png"
                width={169}
                height={136}
                className="mb-[24px]"
                alt=""
              />
            </div>
            <div className="w-[288.41px] h-[167px] text-[28.4272px] leading-[30px]">
              <h2 className="font-light">Prêmio:</h2>
              <p className="font-medium">
                Camisa de futebol ou R$ 300,00 em pix{" "}
              </p>
              <h2 className="font-light">Date:</h2>
              <p className="font-medium">28/08/2023</p>
            </div>
          </div>
        </div>
        <div className="w-[310px]  md:w-[400px] h-[486.43px] bg-[#4EBFEC] rounded-[7.17448px] z-10">
          <div className="flex flex-col items-center align-middle justify-center text-white">
            <p className="mt-[37px] text-[22.0753px] mb-[29px] font-semibold">
              SORTEIO 005
            </p>
            <div>
              <Image
                src="/give.png"
                width={169}
                height={136}
                className="mb-[24px]"
                alt=""
              />
            </div>
            <div className="w-[288.41px] h-[167px] text-[28.4272px] leading-[30px]">
              <h2 className="font-light">Prêmio:</h2>
              <p className="font-medium">
                Camisa de futebol ou R$ 300,00 em pix{" "}
              </p>
              <h2 className="font-light">Date:</h2>
              <p className="font-medium">04/09/2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;

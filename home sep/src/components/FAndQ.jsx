import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    question: "Tenho que pagar para participar da Sorteios & Prêmios?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi efficitur id. In finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum mauris sapien, elementum sit amet erat dignissim, suscipit commodo odio. Donec et nisl tellus. Morbi ac eros lorem. Morbi rutrum leo in diam egestas, id tempor odio commodo. Aenean accumsan pharetra dolor eu tempus. Vestibulum interdum nunc id mollis suscipit.",
  },
  {
    question: "Como funcionam os sorteios?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi efficitur id. In finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum mauris sapien, elementum sit amet erat dignissim, suscipit commodo odio. Donec et nisl tellus. Morbi ac eros lorem. Morbi rutrum leo in diam egestas, id tempor odio commodo. Aenean accumsan pharetra dolor eu tempus. Vestibulum interdum nunc id mollis suscipit.",
  },
  {
    question: "Quando ocorrem os sorteios?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi efficitur id. In finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum mauris sapien, elementum sit amet erat dignissim, suscipit commodo odio. Donec et nisl tellus. Morbi ac eros lorem. Morbi rutrum leo in diam egestas, id tempor odio commodo. Aenean accumsan pharetra dolor eu tempus. Vestibulum interdum nunc id mollis suscipit.",
  },
  {
    question: "A Sorteios & Prêmios é confiável?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi efficitur id. In finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum mauris sapien, elementum sit amet erat dignissim, suscipit commodo odio. Donec et nisl tellus. Morbi ac eros lorem.",
  },
  {
    question: "Como saber se os sorteios não são manipulados?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi efficitur id. In finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum mauris sapien, elementum sit amet erat dignissim, suscipit commodo odio. Donec et nisl tellus. Morbi ac eros lorem.",
  },
  {
    question: "A Sorteios & Prêmios é permitida por lei?",
    answer:
      "A Sorteios & Prêmios segue os padrões e regras da regulação americana, podendo atuar globalmente em todos os países através da sua presença digital.",
  },
  {
    question: "A Sorteios & Prêmios é permitida por lei?",
    answer:
      "A Sorteios & Prêmios segue os padrões e regras da regulação americana, podendo atuar globalmente em todos os países através da sua presença digital.",
  },
  {
    question: "Onde a Sorteios & Prêmios está presente?",
    answer:
      "Estados Unidos, Brasil, Argentina, Colômbia, Espanha, Portugal e Espanha. Estamos expandindo, em breve estaremos em outros países.",
  },
  {
    question: "Pergunta?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi efficitur id. In finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum mauris sapien, elementum sit amet erat dignissim, suscipit commodo odio. Donec et  in diam egestas, id tempor odio commodo. Aenean accumsan pharetra dolor eu tempus. Vestibulum interdum nunc id mollis suscipit.",
  },
];

function FAndQ(props) {
  return (
    <div>
      <div className="bg-[url('/faqcover.svg')] bg-cover bg-center mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-40">
          <h1 className="md:text-[60px] font-extrabold text-center md:mb-[90px] sm:[28px] text-white sm:text-[27px]">
            PERGUNTAS & RESPOSTAS
          </h1>
          <div className="mx-auto max-w-6xl">
            <dl className="">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="">
                  {({ open }) => (
                    <div className=" my-2">
                      <dt>
                        <Disclosure.Button className="flex w-full items-start text-left text-white border border-white text-[20px] font-semibold">
                          <span className=" flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center"></span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="">
                        <p className="text-base text-white border border-white px-2 py-2 text-[20px] leading-[26px]">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAndQ;

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Globe, Github } from 'lucide-react'
import Image from 'next/image'
import { Ephesis } from 'next/font/google'

const ephesis = Ephesis({ 
  weight: '400',
  subsets: ['latin'],
})

const services = [
  {
    name: "Buffets e Brunches",
    options: [
      {
        name: "Sabores Tradicionais: O Clássico Buffet",
        description: "Uma combinação perfeita dos melhores pratos tradicionais, desde salgadinhos clássicos a tábuas de queijos e enchidos, com sobremesas que encantam e um toque de mar.",
        items: [
          "Entradas / Salgados: Rissóis de carne, rissóis de camarão, croquetes de vitela, empadas de frango",
          "Bolinhos de bacalhau, caprichos do mar, folhados de salsicha, folhados de alheira",
          "Enchidos assados, moelas, rojões, pataniscas de bacalhau",
          "Mexilhão com molho verde, bôla mista e bacon, bôla de frango",
          "Quiche de legumes, panados",
          "Salada fria de grão-de-bico e bacalhau, salada de feijão-frade e atum",
          "Patê com tostas, broa de milho, azeitonas",
          "Tábua de queijos e enchidos",
          "Sobremesas e Frutas: Tarte de frutas, tarte de amêndoa, pudim, bolo Brigadeirão, fruta laminada ou espetadas",
          "Bebidas: Dispensadores com água aromatizada e sumo de laranja"
        ],
        price: "27€ por pessoa (Camarão, salada de polvo e sapateira recheada: +5€ p/pax)",
        notes: "Mínimo: 15 pessoas. Crianças: Até 2 anos: grátis; 3 a 8 anos: 50% desconto"
      },
      {
        name: "Momentos Deliciosos: O Buffet Especial",
        description: "Uma seleção cuidadosamente preparada com folhados, wraps e croissants, oferecendo um equilíbrio entre petiscos leves e sabores mais robustos. Ideal para encontros descontraídos.",
        items: [
          "Entradas / Salgados: Folhados de alheira, folhados de salsicha, empadas de frango",
          "Mini croissants de queijo e fiambre",
          "Broa recheada com tostas, batata frita",
          "Tiras de pota panadas com molho agridoce",
          "Wraps de atum e delícias do mar",
          "Rissóis de carne, bolinhas de alheira, croquetes de vitela",
          "Bolinhos de bacalhau, bôla mista com bacon",
          "Sobremesas e Frutas: Tarte de frutas, profiteroles, fruta laminada ou espetadas",
          "Bebidas: Dispensadores com água aromatizada e sumo de laranja"
        ],
        price: "22,50€ por pessoa (Camarão, salada de polvo e sapateira recheada: +5€ p/pax)",
        notes: "Mínimo: 10 pessoas. Crianças: Até 2 anos: grátis; 3 a 8 anos: 50% desconto"
      },
      {
        name: "Pequenos Gourmets: Festa dos Sabores",
        description: "Um menu divertido e colorido que agrada aos pequenos com mini cachorros, panquecas com Nutella e pipocas, complementado por doces irresistíveis.",
        items: [
          "Entradas / Salgados: Mini croissants mistos, mini cachorros com molhos",
          "Rissóis de carne, croquetes, bolinhos de bacalhau",
          "Mini sandes ou mini hambúrguer",
          "Mini wraps, batatas fritas",
          "Bôla mista",
          "Doces: Espetadas de fruta, gomas, pipocas",
          "Panquecas com Nutella e mel",
          "Gelatinas no copo",
          "Mousse de Oreo ou chocolate no copo",
          "Bolo Brigadeirão",
          "Bebidas: Dispensadores com água e sumo de laranja"
        ],
        price: "25€ por pessoa",
        notes: "Mínimo: 10 pessoas"
      },
      {
        name: "Brunch do Campo: Uma Manhã de Delícias",
        description: "Pratos rústicos e sofisticados que misturam salgados fritos, queijos, wraps de salmão e sobremesas deliciosas como brownies e bolas de Berlim.",
        items: [
          "Entradas / Salgados: Salgadinhos fritos (rissóis, bolinhos, croquetes, chamuças)",
          "Tábua de queijos e enchidos, melão com presunto",
          "Empadas de frango, batata frita, bôla mista",
          "Folhados de requeijão com nozes e abóbora",
          "Mini quiches de legumes, vol-au-vent de atum",
          "Rolinhos de wrap de salmão fumado",
          "Asinhas com molho agridoce",
          "Espetadas de tomate e mozarela",
          "Húmus com palitos de legumes",
          "Paté com tostas",
          "Mini croissants mistos ou mini sanduíches mistas",
          "Doces: Espetadas de fruta, sortido (mini bolas de Berlim e natas)",
          "Brownie de chocolate, bolo de laranja",
          "Bebidas: Dispensadores com água aromatizada, sumo de laranja, café"
        ],
        price: "25€ por pessoa"
      },
      {
        name: "Brunch Gourmet: Um Toque de Elegância",
        description: "Uma oferta mais requintada com camarão panado, camembert folhado, bagels de salmão e sobremesas delicadas, como cheesecake de frutos vermelhos e bolo de brigadeiro.",
        items: [
          "Entradas / Salgados: Salgadinhos fritos (rissóis, bolinhos, croquetes, chamuças)",
          "Camarão panado com molho agridoce",
          "Mini hambúrguer, pão recheado com tostas",
          "Batata frita, moelinhas ou tábua de queijos e enchidos",
          "Bacalhau com natas ou arroz de pato (aperitivo)",
          "Rolinhos de wrap de atum",
          "Salada de queijo feta, tomate cherry e rúcula",
          "Húmus com dip de legumes",
          "Camembert folhado com frutos secos",
          "Bagels de salmão fumado e queijo creme",
          "Doces: Espetadas de fruta, sortido (mini bolas de Berlim e natas)",
          "Bolo de chocolate e brigadeiro",
          "Cheesecake de frutos vermelhos",
          "Bebidas: Dispensadores com água aromatizada, sumo de laranja, café"
        ],
        price: "27,50€ por pessoa"
      }
    ]
  },
  {
    name: "Coffee Breaks",
    options: [
      {
        name: "Pausa Perfeita: Coffee Break dos Sonhos",
        description: "Um intervalo perfeito com combinações leves e doces para manter a energia e a disposição.",
        items: [
          "Mini croissants mistos ou bagels com queijo creme e salmão fumado",
          "Panquecas com chocolate e mel",
          "Doces: Espetadas de fruta, brownie de chocolate, bolo de laranja, sortido (mini bolas de Berlim e natas)",
          "Bebidas: Dispensadores com água aromatizada, chá, leite, sumo de laranja"
        ],
        price: "10€ por pessoa/dia (mínimo 10 pessoas)"
      }
    ]
  },
  {
    name: "Casamentos",
    options: [
      {
        name: "Celebração Clássica: Sabores que Encantam",
        description: "Uma proposta tradicional e completa para comemorar o amor com pratos clássicos e memoráveis.",
        items: [
          "Rissóis variados, croquetes de vitela, pataniscas de bacalhau, camarão, sapateira recheada",
          "Bôla mista e bacon, rolinhos de wrap de salmão",
          "Sobremesas: Profiteroles, fruta laminada ou espetadas",
          "Bebidas: Dispensadores com água aromatizada, mini cervejas, vinho branco Loureiro"
        ],
        price: "650€ (50 pessoas)"
      },
      {
        name: "Festa Casual: Uma Experiência Aconchegante",
        description: "Opção leve e descontraída com miniaturas e doces para complementar uma celebração intimista.",
        items: [
          "Mini croissants mistos, salgadinhos fritos, bolachas húngaras",
          "Doces: Gomas, cones de pipoca, fatias de bolo de chocolate ou laranja",
          "Bebidas: Dispensadores com água aromatizada e café"
        ],
        price: "450€ (50 pessoas)"
      }
    ]
  },
  {
    name: "Empresas",
    options: [
      {
        name: "Sugestão 1 - Almoço",
        description: "Um almoço completo e variado para eventos empresariais.",
        items: [
          "Entradas: Rissóis, Bolinhos de bacalhau, Croquetes, Presunto e queijo, Broa de milho",
          "Prato Principal: Bacalhau à Brás ou Arroz de Pato, Salada e azeitonas",
          "Sobremesas: Bolo de Chocolate, Gelatinas ou Salada de Fruta",
          "Bebidas: Sumo de laranja, Água aromatizada, Cerveja mini ou Sangria (a definir)"
        ],
        price: "29,50€ (mínimo 20 pessoas)"
      },
      {
        name: "Sugestão 2 - Churrasco no Local",
        description: "Uma experiência de churrasco completa para eventos empresariais.",
        items: [
          "Entradas: Salgadinhos fritos, Quiche de legumes, Folhado de camembert e tostas",
          "Prato Principal: Churrasco com assador no local (3 horas): Maminha, Crioulo, Frango e Barriguinha",
          "Acompanhamentos: Pão, Arroz, Salada de tomate, Pepino e Pimentos, Azeitonas, Caldo Verde e Broa de milho",
          "Sobremesas: Espetadas de fruta, Bolo de Chocolate ou Bolo de Laranja",
          "Bebidas: Sumo de laranja, Água aromatizada, Cerveja mini, Café"
        ],
        price: "45€ (mínimo 20 pessoas)"
      },
      {
        name: "Sugestão 3 - Opção Completa",
        description: "Uma opção completa e sofisticada para eventos empresariais importantes.",
        items: [
          "Entradas: Rissóis, Bolinhos de bacalhau, Croquetes, Tábua de queijos e enchidos, Bôla de carne ou vegetariana, Quiche de legumes, Paté com tostas",
          "Prato Principal: Creme de Legumes, Prato à escolha (várias opções de Bacalhau, Vitela, Porco, Cabrito, Feijoada ou Papas de Sarrabulho)",
          "Sobremesas: Espetadas de fruta, Bolo de Chocolate, Gelatinas",
          "Bebidas: Sumo de laranja, Água aromatizada, Cerveja mini ou Sangria, Vinho Verde Branco, Tinto Maduro, Café"
        ],
        price: "52€ (mínimo 20 pessoas)"
      }
    ]
  }
]

export default function Menu() {
  const [openService, setOpenService] = useState<number | null>(null)
  const [openOption, setOpenOption] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] to-[#E8E8E0] p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%20Oct%2030%202024-fmVdP2vRh43VnEZkC0CWsZeFxeakoF.png"
            alt="Maria Silva Catering"
            width={180}
            height={180}
            className="mb-6"
          />
          <h1 className={`${ephesis.className} text-5xl md:text-6xl text-center mb-4 text-[#2C3E50]`}>
            Menu de Serviços
          </h1>
          <a 
            href="https://mariasilvacatering.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#34495E] hover:text-[#2C3E50] transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">Visite nosso website</span>
          </a>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#34495E]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: serviceIndex * 0.1 }}
            >
              <button
                className="w-full p-6 cursor-pointer flex justify-between items-center text-left hover:bg-[#2C3E50]/5 transition-colors"
                onClick={() => setOpenService(openService === serviceIndex ? null : serviceIndex)}
              >
                <h2 className="text-3xl font-serif text-[#2C3E50]">{service.name}</h2>
                {openService === serviceIndex ? 
                  <ChevronUp className="text-[#34495E] w-8 h-8" /> : 
                  <ChevronDown className="text-[#34495E] w-8 h-8" />
                }
              </button>
              <AnimatePresence>
                {openService === serviceIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 space-y-6"
                  >
                    {service.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="bg-[#F0F0E8] rounded-lg p-4">
                        <button
                          className="w-full cursor-pointer flex justify-between items-center text-left"
                          onClick={() => setOpenOption(openOption === optionIndex ? null : optionIndex)}
                        >
                          <h3 className="text-xl font-medium text-[#2C3E50]">{option.name}</h3>
                          {openOption === optionIndex ? 
                            <ChevronUp className="text-[#34495E] w-6 h-6" /> : 
                            <ChevronDown className="text-[#34495E] w-6 h-6" />
                          }
                        </button>
                        <AnimatePresence>
                          {openOption === optionIndex && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 space-y-4"
                            >
                              <p className="text-gray-700 font-light leading-relaxed">
                                {option.description}
                              </p>
                              <ul className="space-y-2 text-gray-700">
                                {option.items.map((item, itemIndex) => (
                                  <li 
                                    key={itemIndex}
                                    className="flex items-start"
                                  >
                                    <span className="w-2 h-2 rounded-full bg-[#34495E] mt-2 mr-3 flex-shrink-0" />
                                    <span className="font-light">{item}</span>
                                  </li>
                                ))}
                              </ul>
                              <p className="text-lg font-medium text-[#2C3E50]">
                                {option.price}
                              </p>
                              {option.notes && (
                                <p className="text-sm text-gray-500 italic">
                                  {option.notes}
                                </p>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-2">
            Desenvolvido por{' '}
            <a
              href="https://github.com/ricardoguimaraes2021"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#34495E] hover:text-[#2C3E50] transition-colors flex items-center gap-1"
            >
              Ricardo Guimarães <Github className="w-4 h-4" />
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsappLink } from "@/lib/utils";
import { Check, Users, Zap } from "lucide-react";
import Link from "next/link";

export function AutomationSection() {
  const pricingPlans = [
    { conversations: 15, monthly: 297, perConversation: 19.8 },
    { conversations: 30, monthly: 447, perConversation: 14.9 },
    { conversations: 60, monthly: 834, perConversation: 13.9 },
    { conversations: 120, monthly: 1548, perConversation: 12.9 },
    { conversations: 240, monthly: 2376, perConversation: 9.9 },
    { conversations: 480, monthly: 3792, perConversation: 7.9 },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-slate-50/30 dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Alinhado à esquerda */}
        <div className="text-left mb-16">
          {/* Badge seguindo o padrão das outras seções */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-full text-blue-700 dark:text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Preços Transparentes</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight">
            O atendimento do seu escritório{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              rodando no automático
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Contrate as soluções de inteligência artificial{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              a partir R$297
            </span>
          </p>
        </div>

        {/* Main Content - Planos Flexíveis */}
        <div className="max-w-7xl mx-auto">
          {/* Pricing Cards Grid - 6 planos principais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 ${
                  index === 1
                    ? "border-blue-500 dark:border-blue-400 shadow-xl scale-105"
                    : "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
                } bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300 flex flex-col`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-bold">
                      POPULAR
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {plan.conversations}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      conversas/mês
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      R${plan.monthly}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      por mês
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      R${plan.perConversation.toFixed(2)} por conversa
                    </div>
                  </div>

                  <Link
                    href={getWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`w-full py-3 font-semibold rounded-lg transition-all duration-200 mt-auto ${
                        index === 1
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                          : "bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-blue-950/20 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-300 dark:border-slate-600"
                      }`}
                    >
                      Assine Agora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Card Personalizado - Layout horizontal como no print */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-4xl">
              <Card className="border-2 border-dashed border-blue-300 dark:border-blue-600 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center min-w-[80px]">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 leading-none">
                        +480
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        conversas/mês
                      </div>
                    </div>

                    <div className="text-center min-w-[120px]">
                      <div className="font-bold text-slate-900 dark:text-slate-100 leading-none uppercase">
                        Personalizado
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Sob consulta
                      </div>
                    </div>

                    <div className="flex-1 text-center px-6">
                      <div className="text-slate-900 dark:text-slate-100 font-medium uppercase">
                        Para escritórios com necessidade de
                        <br />
                        alto volume de atendimento
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Link
                        href={getWhatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="py-3 px-6 font-medium rounded-lg border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950/30"
                        >
                          Falar com Consultor
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Informações sobre preços e vantagens */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-white to-green-50 dark:from-blue-950/20 dark:via-slate-900 dark:to-green-950/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                🎯 Tudo incluso, sem complicação
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Um plano, todas as funcionalidades. Sem taxa de setup, sem
                surpresas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sem Taxa de Setup */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                    Setup Gratuito
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    R$ <span className="font-bold">0,00</span> para começar.
                    <br />
                    Sem taxa de ativação ou configuração.
                  </p>
                </div>
              </div>

              {/* Todas as Funcionalidades */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 whitespace-nowrap">
                    Todas as IAs Incluídas
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Triagem, Agendamento, Fechamento
                    <br />e Acompanhamento em um só plano.
                  </p>
                </div>
              </div>

              {/* Preço por Usuário */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                    Preço Justo
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Pague apenas pelas conversas
                    <br />
                    que realmente acontecem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

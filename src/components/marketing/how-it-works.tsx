import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Contrate um plano mensal",
      description:
        "Escolha a quantidade de conversas que sua IA vai atender. Sem setup, sem complicação.",
      icon: MessageSquare,
      details: [
        "Onboarding em 5 minutos",
        "Sem taxa de setup",
        "Suporte dedicado",
      ],
    },
    {
      number: "02",
      title: "Receba atendimentos por WhatsApp e CRM",
      description:
        "Cada conversa é uma janela de 24h, com IA ativa, humanizada e eficiente.",
      icon: Calendar,
      details: ["Integração nativa", "IA treinada", "Atendimento 24/7"],
    },
    {
      number: "03",
      title: "Escale sem se preocupar",
      description:
        "Faça upgrade ou downgrade a qualquer momento. Flexibilidade total para seu crescimento.",
      icon: TrendingUp,
      details: [
        "Escalabilidade infinita",
        "Sem fidelidade",
        "Mudanças instantâneas",
      ],
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 md:py-32 bg-slate-50 dark:bg-muted/30 relative overflow-hidden"
    >
      {/* Background Elements - Fixed for light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-950/30 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-950/30 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-full text-blue-700 dark:text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Como funciona</span>
          </div>

          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-foreground">
            Você contrata um plano.
            <br />
            <span className="text-blue-600">A IA faz todo o resto.</span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-muted-foreground leading-relaxed max-w-3xl">
            Na Quero Direito, você não precisa pagar por setup, integração ou
            várias licenças. Com um único plano, você acessa todas as
            funcionalidades da IA.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-px bg-gradient-to-r from-blue-300 dark:from-blue-600 to-transparent z-10"></div>
                )}

                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-border hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl text-blue-600">{step.number}</div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 dark:text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center gap-3 text-sm text-slate-600 dark:text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-700 dark:border-slate-800 text-center relative overflow-hidden">
          {/* Background Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-10"></div>

          <div className="relative">
            <h3 className="text-2xl lg:text-3xl text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-[#00ddfa] bg-clip-text text-transparent">
                Pronto para transformar sua advocacia?
              </span>
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
              Junte-se a centenas de escritórios que já automatizaram seus
              processos e aumentaram sua eficiência em 10x.
            </p>
            <Link
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Agendar demonstração
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

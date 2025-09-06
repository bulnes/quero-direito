import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  FileText,
  HeadphonesIcon,
  MessageSquare,
  ToggleLeft,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Triagem Inteligente",
      subtitle: "Atendimento 24h com inteligência jurídica",
      description:
        "Coleta os dados com linguagem natural, identifica se há um direito violado e já classifica o lead de acordo com o potencial do caso.",
      benefits: [
        "Linguagem natural sem parecer um robô",
        "Faz a entrevista inicial com o lead",
        "Envia para atendimento apenas casos qualificados",
      ],
    },
    {
      icon: Calendar,
      title: "Agendamento Automático",
      subtitle: "Agenda por você, com integração ao Google Agenda",
      description:
        "Marcação de reuniões de forma automática, com envio de lembretes para reduzir faltas e atrasos.",
      benefits: [
        "Elimina o vai-e-volta de mensagens",
        "Atualiza sua agenda em tempo real",
        "Cliente recebe alertas antes da reunião",
      ],
    },
    {
      icon: FileText,
      title: "Fechamento de Contrato",
      subtitle: "Menos tempo com burocracia. Mais tempo com estratégia",
      description:
        "Transforma leads em clientes com uma abordagem persuasiva e eficiente. Ajuda na coleta dos dados e assinatura de contrato.",
      benefits: [
        "Automatiza o processo de fechamento",
        "Auxilio na parte burocrática",
        "Cliente guiado até o fim com clareza",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento Pós-Fechamento",
      subtitle: "O cliente não fica no escuro",
      description:
        "Após o fechamento, a IA continua disponível para responder dúvidas recorrentes e manter o cliente informado.",
      benefits: [
        "Reduz cobrança no WhatsApp",
        "Fortalece confiança e percepção de valor",
        "Evita perda de clientes por abandono",
      ],
    },
    {
      icon: ToggleLeft,
      title: "Menu ON/OFF com 1 Clique",
      subtitle: "Você escolhe: automático ou manual",
      description:
        "Controle total da IA com apenas 1 botão. Deixe ela rodando ou pause para atendimento manual, sempre que quiser.",
      benefits: [
        "Ideal para casos mais sensíveis",
        "Flexibilidade para seu estilo de atendimento",
        "Ative e desative com liberdade",
      ],
    },
    {
      icon: BarChart3,
      title: "Pipeline Jurídico (CRM)",
      subtitle: "Visualize o funil da sua advocacia como nunca antes",
      description:
        "A IA organiza os atendimentos por etapa, triagem, agendamento, fechamento e acompanhamento. Tudo num lugar só.",
      benefits: [
        "Gestão simplificada",
        "Visão clara de onde está cada cliente",
        "Zero esforço de organização",
      ],
    },
    {
      icon: Bell,
      title: "Notificações por WhatsApp",
      subtitle: "Você no controle, sem perder tempo",
      description:
        "Tudo que a IA faz — cada resposta, cada reunião marcada, cada contrato preenchido — chega no seu WhatsApp para que você acompanhe tudo em tempo real e tome decisões rápidas.",
      benefits: [
        "Acompanhamento em tempo real de todas as interações",
        "Redução de ruído na comunicação com sua equipe",
        "Decisões rápidas e informadas com base em dados precisos",
        "Controle total sem precisar ficar checando múltiplas plataformas",
      ],
      featured: true,
    },
  ];

  const whatsappFeature = features[features.length - 1];
  const regularFeatures = features.slice(0, -1);

  return (
    <section
      id="funcionalidades"
      className="py-20 md:py-32 bg-white dark:bg-background relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white dark:from-muted/50 dark:to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-full text-blue-700 dark:text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="whitespace-nowrap">Plataforma completa</span>
          </div>

          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-foreground">
            Tudo incluso no seu plano
          </h2>

          <p className="text-xl text-slate-600 dark:text-muted-foreground leading-relaxed max-w-3xl">
            Solução completa para automatizar todo o seu atendimento jurídico —
            da primeira mensagem até o contrato assinado. Tecnologia enterprise
            com a simplicidade de um clique.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {regularFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-card rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-border border-l-4 border-l-slate-300 dark:border-l-muted hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 hover:border-l-slate-300 dark:hover:border-l-muted transition-all duration-300"
                >
                  {/* Mobile: Icon above content, Desktop: Icon in header */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-950/70 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-blue-600 text-sm mb-3 leading-snug">
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured WhatsApp Card */}
          <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 lg:p-12 text-white shadow-2xl border border-slate-700 dark:border-slate-800 relative overflow-hidden">
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
            <div className="grid lg:grid-cols-2 gap-12 items-center relative">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/50 border border-blue-700/50 rounded-full text-blue-300 text-xs mb-6">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="whitespace-nowrap uppercase">
                    Recurso Premium
                  </span>
                </div>

                <div className="w-16 h-16 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center mb-6">
                  <Bell className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-3xl lg:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-[#00ddfa] bg-clip-text text-transparent">
                    {whatsappFeature.title}
                  </span>
                </h3>
                <p className="text-slate-300 text-lg mb-6 leading-snug">
                  {whatsappFeature.subtitle}
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {whatsappFeature.description}
                </p>
              </div>

              <div className="space-y-4">
                {whatsappFeature.benefits.map((benefit, benefitIndex) => (
                  <div
                    key={benefitIndex}
                    className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

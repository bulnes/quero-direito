import { Rocket, TrendingUp, Users, Zap } from "lucide-react";

export function WhyChoose() {
  type ReasonColor = keyof typeof iconColors;

  interface Reason {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    description: string;
    stats: string;
    color: ReasonColor;
  }

  const reasons: Reason[] = [
    {
      icon: Zap,
      title: "Zero Burocracia",
      subtitle: "Tecnologia que simplifica",
      description:
        "Sem processos complexos, sem setup demorado. Nossa IA está pronta para uso imediato com toda a inteligência jurídica que você precisa.",
      stats: "Setup em 5 minutos",
      color: "blue",
    },
    {
      icon: Users,
      title: "Suporte Humanizado",
      subtitle: "Expertise quando você precisa",
      description:
        "Time especializado disponível 24/7 para garantir que sua operação nunca pare. Suporte técnico e jurídico integrado.",
      stats: "Resposta em < 2h",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Performance Comprovada",
      subtitle: "Resultados que falam por si",
      description:
        "Mais de 50 escritórios já transformaram seus processos. Taxa de conversão 95% maior que métodos tradicionais.",
      stats: "95% de conversão",
      color: "green",
    },
    {
      icon: Rocket,
      title: "Implementação Instantânea",
      subtitle: "Do zero ao 100% em minutos",
      description:
        "Nossa plataforma foi construída para escalar. Comece pequeno e cresça sem limitações técnicas ou operacionais.",
      stats: "Escalabilidade infinita",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300",
    purple:
      "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300",
    green:
      "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-300",
    orange:
      "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800/50 text-orange-700 dark:text-orange-300",
  };

  const iconColors = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600",
    orange: "text-orange-600",
  } as const;

  return (
    <section
      id="diferenciais"
      className="py-20 md:py-32 bg-slate-50 dark:bg-muted/30 relative"
    >
      {/* Background Elements - Fixed for light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 dark:from-blue-950/30 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 dark:from-purple-950/30 to-transparent rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-full text-blue-700 dark:text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Por que escolher a Quero Direito</span>
          </div>

          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-foreground">
            Tecnologia jurídica
            <br />
            <span className="text-blue-600">de nova geração</span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-muted-foreground leading-relaxed max-w-3xl">
            Não somos apenas mais uma ferramenta. Somos uma plataforma completa
            construída especificamente para revolucionar o atendimento jurídico
            com inteligência artificial.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-border hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
              >
                {/* Mobile Layout - new design following the image */}
                <div className="block md:hidden">
                  {/* Top row with icon and badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent
                        className={`w-6 h-6 ${iconColors[reason.color]}`}
                      />
                    </div>

                    <div
                      className={`px-2.5 py-1 rounded-full text-xs border ${
                        colorClasses[reason.color]
                      } text-nowrap`}
                    >
                      {reason.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-blue-600 text-sm mb-3">
                      {reason.subtitle}
                    </p>
                    <p className="text-slate-600 dark:text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout - unchanged */}
                <div className="hidden md:flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <IconComponent
                      className={`w-8 h-8 ${iconColors[reason.color]}`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-foreground">
                        {reason.title}
                      </h3>
                      <div
                        className={`px-3 py-1 rounded-full text-xs border ${
                          colorClasses[reason.color]
                        }`}
                      >
                        {reason.stats}
                      </div>
                    </div>

                    <p className="text-blue-600 mb-4">{reason.subtitle}</p>

                    <p className="text-slate-600 dark:text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 lg:p-12 text-white border border-slate-700 dark:border-slate-800 relative overflow-hidden">
          {/* Background Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <h3 className="text-3xl lg:text-4xl mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-[#00ddfa] bg-clip-text text-transparent">
                  Confiança que gera resultados
                </span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Mais de 50 escritórios já transformaram seus processos com nossa
                tecnologia. Junte-se aos líderes do mercado jurídico que
                escolheram inovar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">50+</div>
                <div className="text-slate-400 text-sm">Escritórios ativos</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">95%</div>
                <div className="text-slate-400 text-sm">Taxa de conversão</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">10x</div>
                <div className="text-slate-400 text-sm">Mais eficiência</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Suporte ativo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

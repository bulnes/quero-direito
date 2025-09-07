import {
  BarChart3,
  Bell,
  Bot,
  Calendar,
  Check,
  Clock,
  DollarSign,
  FileText,
  HelpCircle,
  MessageSquare,
  Moon,
  PhoneCall,
  Rocket,
  Settings,
  Target,
  TrendingDown,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";

export function ProblemSolution() {
  const comparisons = [
    {
      problem: {
        icon: Clock,
        title: "Advogado perde horas com leads desqualificados",
        description:
          "Tempo precioso desperdiçado analisando leads que não têm potencial real de conversão. Produtividade prejudicada.",
        stats: "Horas perdidas diariamente",
      },
      solution: {
        icon: Target,
        title: "IA filtra e envia apenas casos com alto potencial",
        description:
          "Sistema inteligente qualifica automaticamente os leads, enviando apenas aqueles com real potencial de fechamento.",
        stats: "100% leads qualificados",
      },
    },
    {
      problem: {
        icon: Calendar,
        title: "Reuniões marcadas com leads que não aparecem",
        description:
          "Agenda comprometida com no-shows constantes. Tempo perdido esperando clientes que não comparecem.",
        stats: "40% de faltas",
      },
      solution: {
        icon: Bell,
        title: "IA envia lembretes automáticos e reduz faltas",
        description:
          "Sistema automatizado de lembretes via WhatsApp e SMS aumenta drasticamente a taxa de comparecimento.",
        stats: "90% de presença",
      },
    },
    {
      problem: {
        icon: DollarSign,
        title: "Gasto alto com tráfego e retorno incerto",
        description:
          "Investimento elevado em marketing digital sem garantia de qualidade dos leads recebidos. ROI baixo.",
        stats: "Alto custo por lead",
      },
      solution: {
        icon: BarChart3,
        title: "Receba clientes reais, prontos para conversar",
        description:
          "IA entrega leads pré-qualificados com orçamento confirmado e necessidade real do serviço jurídico.",
        stats: "ROI 5x maior",
      },
    },
    {
      problem: {
        icon: UserCheck,
        title: "Leads somem no meio da conversa",
        description:
          "Potenciais clientes desaparecem durante o processo comercial. Oportunidades perdidas por falta de follow-up.",
        stats: "60% abandonam",
      },
      solution: {
        icon: MessageSquare,
        title: "IA retoma o contato e mantém o fluxo ativo",
        description:
          "Sistema inteligente reativa conversas pausadas no momento certo, mantendo o lead engajado até o fechamento.",
        stats: "85% reativados",
      },
    },
    {
      problem: {
        icon: Users,
        title: "Atendimento depende 100% do advogado ou da equipe",
        description:
          "Operação para quando advogado não está disponível. Dependência total de presença humana para atender.",
        stats: "Dependência total",
      },
      solution: {
        icon: Bot,
        title: "Atendimento 24h com IA treinada para cada fase",
        description:
          "IA especializada opera independentemente, atendendo leads em qualquer horário com conhecimento jurídico específico.",
        stats: "24/7 disponível",
      },
    },
    {
      problem: {
        icon: PhoneCall,
        title: "Cliente entra fora do expediente e não é atendido",
        description:
          "Leads perdidos nos finais de semana, feriados e horários noturnos. Oportunidades que não retornam.",
        stats: "30% fora do horário",
      },
      solution: {
        icon: Moon,
        title: "IA responde a qualquer hora, todos os dias",
        description:
          "Atendimento ininterrupto 24 horas, 7 dias por semana. Leads capturados a qualquer momento do dia ou noite.",
        stats: "365 dias por ano",
      },
    },
    {
      problem: {
        icon: TrendingDown,
        title: "Funcionário falta = atendimento parado",
        description:
          "Operação comprometida quando membro da equipe falta. Atendimento inconsistente prejudica a conversão.",
        stats: "Operação instável",
      },
      solution: {
        icon: Rocket,
        title: "Atendimento segue mesmo sem equipe disponível",
        description:
          "IA mantém operação funcionando perfeitamente independente de ausências. Continuidade operacional garantida.",
        stats: "100% uptime",
      },
    },
    {
      problem: {
        icon: HelpCircle,
        title: "Clientes cobram status do processo o tempo todo",
        description:
          "Equipe sobrecarregada respondendo dúvidas repetitivas sobre andamento de processos. Tempo perdido.",
        stats: "Dúvidas constantes",
      },
      solution: {
        icon: FileText,
        title: "IA responde dúvidas frequentes com precisão",
        description:
          "Sistema automatizado fornece atualizações de status e responde perguntas comuns instantaneamente.",
        stats: "Respostas imediatas",
      },
    },
    {
      problem: {
        icon: Settings,
        title: "Ferramentas caras, complicadas e sem resultado real",
        description:
          "Múltiplas plataformas desintegradas com setup complexo. Alto custo operacional sem ROI comprovado.",
        stats: "Múltiplas ferramentas",
      },
      solution: {
        icon: Zap,
        title: "Tudo integrado num único sistema, com IA completa",
        description:
          "Plataforma única que centraliza todas as funcionalidades. IA completa com resultados mensuráveis.",
        stats: "Solução all-in-one",
      },
    },
  ];

  return (
    <section
      id="solucoes"
      className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white dark:from-muted/30 dark:to-background relative overflow-hidden"
    >
      {/* Background Elements - Fixed for light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-red-100 dark:from-red-950/30 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-100 dark:from-green-950/30 to-transparent rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-full text-blue-700 dark:text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Problemas vs Soluções</span>
          </div>

          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-foreground">
            Acabamos com os principais
            <br />
            <span className="text-blue-600">problemas dos escritórios</span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-muted-foreground leading-relaxed max-w-3xl">
            Veja como nossa IA transforma os maiores desafios operacionais em
            vantagens competitivas.
          </p>
        </div>

        {/* Table Layout */}
        <div className="bg-white dark:bg-card rounded-2xl shadow-xl border border-slate-200 dark:border-border overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 dark:bg-muted/50 border-b border-slate-200 dark:border-border">
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                      <X className="w-5 h-5" />
                      <span className="font-bold">
                        Problemas do Modelo Tradicional
                      </span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <Check className="w-5 h-5" />
                      <span className="font-bold">
                        Solução com a Quero Direito
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => {
                  const ProblemIcon = comparison.problem.icon;
                  const SolutionIcon = comparison.solution.icon;

                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0
                          ? "bg-white dark:bg-card"
                          : "bg-slate-25 dark:bg-muted/30"
                      } border-b border-slate-100 dark:border-border hover:bg-slate-50 dark:hover:bg-muted/50 transition-colors`}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-red-100 dark:bg-red-950/50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <ProblemIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-slate-900 dark:text-foreground mb-2 leading-tight font-semibold">
                              {comparison.problem.title}
                            </h3>
                            <p className="text-slate-600 dark:text-muted-foreground text-sm mb-2 leading-relaxed">
                              {comparison.problem.description}
                            </p>
                            <div className="inline-flex items-center px-2 py-0.5 bg-red-100 dark:bg-red-950/50 border border-red-200 dark:border-red-800/50 rounded-md text-red-700 dark:text-red-400 text-xs">
                              {comparison.problem.stats}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-950/50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <SolutionIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-slate-900 dark:text-foreground mb-2 leading-tight font-semibold">
                              {comparison.solution.title}
                            </h3>
                            <p className="text-slate-600 dark:text-muted-foreground text-sm mb-2 leading-relaxed">
                              {comparison.solution.description}
                            </p>
                            <div className="inline-flex items-center px-2 py-0.5 bg-green-100 dark:bg-green-950/50 border border-green-200 dark:border-green-800/50 rounded-md text-green-700 dark:text-green-400 text-xs">
                              {comparison.solution.stats}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="px-4 py-4 bg-slate-50 dark:bg-muted/50 border-b border-slate-200 dark:border-border">
              <h3 className="text-center font-bold text-slate-900 dark:text-foreground">
                Problemas vs Soluções
              </h3>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-border">
              {comparisons.map((comparison, index) => {
                const ProblemIcon = comparison.problem.icon;
                const SolutionIcon = comparison.solution.icon;

                return (
                  <div key={index} className="p-4">
                    {/* Problem */}
                    <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4 mb-3">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-950/50 rounded-md flex items-center justify-center flex-shrink-0">
                          <ProblemIcon className="w-4 h-4 text-red-600 dark:text-red-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-red-900 dark:text-red-200 font-semibold text-sm leading-tight mb-1">
                            {comparison.problem.title}
                          </h4>
                          <p className="text-red-700 dark:text-red-300 text-xs leading-relaxed mb-2">
                            {comparison.problem.description}
                          </p>
                        </div>
                        <div className="w-5 h-5 bg-red-100 dark:bg-red-950/50 rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-red-600 dark:text-red-400" />
                        </div>
                      </div>
                      <div className="text-xs text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-950/50 px-2 py-0.5 rounded inline-block">
                        {comparison.problem.stats}
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-950/50 rounded-md flex items-center justify-center flex-shrink-0">
                          <SolutionIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-green-900 dark:text-green-200 font-semibold text-sm leading-tight mb-1">
                            {comparison.solution.title}
                          </h4>
                          <p className="text-green-700 dark:text-green-300 text-xs leading-relaxed mb-2">
                            {comparison.solution.description}
                          </p>
                        </div>
                        <div className="w-5 h-5 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div className="text-xs text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-950/50 px-2 py-0.5 rounded inline-block">
                        {comparison.solution.stats}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-10"></div>

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-4xl mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Veja todos esses problemas sendo resolvidos
                </span>
              </h3>
              <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Agende uma demonstração e veja como nossa IA resolve
                especificamente os desafios do seu escritório.
              </p>

              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer">
                  <span>Ver demonstração ao vivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

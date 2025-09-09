import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import { ArrowRight, Calendar, CheckCircle, Users } from "lucide-react";
import Link from "next/link";

export function LegalFuture() {
  return (
    <section className="py-20 md:py-32 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Container com alinhamento à esquerda seguindo padrão das outras seções */}
        <div className="text-left">
          {/* Badge alinhado à esquerda */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-900/50 border border-blue-700/50 rounded-full text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Transforme seu futuro jurídico</span>
          </div>

          {/* Main Content alinhado à esquerda */}
          <h2
            id="final-cta-heading"
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl"
          >
            Pronto para liderar a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-[#00ddfa] bg-clip-text text-transparent">
              revolução jurídica?
            </span>
          </h2>

          <p className="mb-12 text-xl text-slate-300 leading-relaxed max-w-3xl">
            Junte-se a centenas de escritórios que já automatizaram seus
            processos e multiplicaram seus resultados. O futuro da advocacia é
            agora.
          </p>

          {/* CTA Buttons alinhados à esquerda */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Agendar demonstração
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <Link
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg rounded-xl bg-transparent border-2 border-slate-400 text-slate-200 hover:bg-white hover:border-white hover:text-slate-900 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Falar com especialista
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - Cards mais finos seguindo padrão */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl py-6 px-8 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">
                    Setup gratuito
                  </h3>
                  <p className="text-sm text-slate-400">
                    Implementação em 5 minutos
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl py-6 px-8 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">
                    Suporte 24/7
                  </h3>
                  <p className="text-sm text-slate-400">
                    Time especializado sempre disponível
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl py-6 px-8 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">
                    Sistema ativo
                  </h3>
                  <p className="text-sm text-slate-400">
                    99.9% de uptime garantido
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Card mais fino mantendo largura total */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl py-6 px-8 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  50+
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  Escritórios
                </div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                  95%
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  Conversão
                </div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                  10x
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  Eficiência
                </div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  24/7
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  Disponível
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

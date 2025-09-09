import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import Link from "next/link";

export function Newsletter() {
  return (
    <section>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Fique por dentro das novidades
            </h2>

            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Receba dicas exclusivas sobre automação jurídica, atualizações da
              plataforma e conteúdos estratégicos para seu escritório.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Digite seu e-mail para receber nossa newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                aria-label="Digite seu e-mail para newsletter"
                aria-describedby="newsletter-privacy"
              />
              <Link
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                  aria-label="Inscrever-se na newsletter"
                >
                  Inscrever-se
                </Button>
              </Link>
            </div>
            <p id="newsletter-privacy" className="text-xs text-blue-200 mt-4">
              Seus dados estão seguros. Não enviamos spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

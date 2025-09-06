import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.948-1.263-2.101-1.263-2.101h-3.118v13.766c0 .676-.549 1.224-1.224 1.224s-1.224-.548-1.224-1.224 .549-1.224 1.224-1.224c.118 0 .232.017.341.048V11.63c-.109-.013-.22-.021-.341-.021-2.374 0-4.297 1.923-4.297 4.297 0 2.374 1.923 4.297 4.297 4.297 2.374 0 4.297-1.923 4.297-4.297V9.486c.913.559 1.973.886 3.118.886v-3.074c-.616 0-1.201-.138-1.722-.386-.041-.02-.082-.04-.122-.061L19.321 5.562z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Preços", href: "#precos" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Contato", href: "#contato" },
  ];

  const legalLinks = [
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      href: "#",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const sectionId = href.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={"/quero-direito-logo.png"}
                alt="Quero Direito"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                Quero Direito
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md leading-relaxed">
              Revolucione seu escritório de advocacia com inteligência
              artificial. Automatize atendimentos, aumente conversões e
              transforme a experiência dos seus clientes.
            </p>

            {/* Contact Info - MELHORADO PARA MOBILE */}
            <div className="space-y-4">
              {/* Endereço */}
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <address className="text-sm not-italic leading-relaxed">
                  <div>Avenida Paulista, 1636 - Conj 04 - Andar 15</div>
                  <div>Bela Vista - CEP: 01310-200</div>
                  <div>São Paulo/SP - Brasil</div>
                </address>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <a
                  href="tel:+551151232482"
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 rounded leading-relaxed"
                  aria-label="Ligar para (011) 5123-2482"
                >
                  (011) 5123-2482
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <a
                  href="mailto:atendimento@querodireito.com.br"
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 rounded leading-relaxed break-all"
                  aria-label="Enviar e-mail para atendimento@querodireito.com.br"
                >
                  atendimento@querodireito.com.br
                </a>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-sm leading-relaxed">
                  Atendimento 24h via IA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Links Rápidos
            </h3>
            <nav
              className="space-y-3"
              role="navigation"
              aria-label="Links rápidos do rodapé"
            >
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 rounded leading-relaxed"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Legal
            </h3>
            <nav
              className="space-y-3"
              role="navigation"
              aria-label="Links legais do rodapé"
            >
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 rounded leading-relaxed"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                © {currentYear} Quero Direito. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1 leading-relaxed">
                Razão Social: Caio George Santos Assessoria LTDA | CNPJ:
                42.958.930/0001-00
              </p>
            </div>

            {/* Social Links - MELHORADO PARA MOBILE */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Siga-nos:
              </span>
              <nav
                className="flex items-center justify-center gap-2"
                role="navigation"
                aria-label="Redes sociais"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`inline-flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400`}
                    aria-label={`Seguir no ${social.name}`}
                    title={`Seguir no ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Extra Info - MELHORADO PARA MOBILE */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-gray-500 dark:text-gray-500">
              <div className="flex items-center gap-1">
                <span role="img" aria-label="Brasil">
                  🇧🇷
                </span>
                <span>Empresa brasileira</span>
              </div>
              <div className="flex items-center gap-1">
                <span role="img" aria-label="Segurança">
                  🔒
                </span>
                <span>Dados protegidos pela LGPD</span>
              </div>
              <div className="flex items-center gap-1">
                <span role="img" aria-label="Performance">
                  ⚡
                </span>
                <span>Uptime 99.9%</span>
              </div>
              <div className="flex items-center gap-1">
                <span role="img" aria-label="Segurança SSL">
                  🔐
                </span>
                <span>SSL Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

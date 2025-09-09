"use client";

import { Button } from "@/components/ui/button";
import {
  useAccessibility,
  useFocusManagement,
} from "@/hooks/marketing/use-accessibility";
import { useActiveSection } from "@/hooks/marketing/use-active-section";
import { useSmoothScroll } from "@/hooks/marketing/use-smooth-scroll";
import { useTheme } from "@/hooks/marketing/use-theme";
import { openButtonInNewTab } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  Menu as MenuIcon,
  Moon,
  Phone,
  Sun,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { actions } = useAccessibility();
  const { trapFocus } = useFocusManagement();
  const activeSection = useActiveSection();
  const { scrollToSection } = useSmoothScroll();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    actions.announceToScreenReader(
      newMenuState ? "Menu móvel aberto" : "Menu móvel fechado"
    );

    if (newMenuState) {
      setTimeout(() => {
        const firstButton = mobileMenuRef.current?.querySelector("button");
        if (firstButton) {
          firstButton.focus();
        }
      }, 100);
    }
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    actions.announceToScreenReader("Menu móvel fechado");
  }, [actions]);

  const handleDropdownEnter = (sectionTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(sectionTitle);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownClick = (sectionTitle: string) => {
    const isOpening = activeDropdown !== sectionTitle;
    setActiveDropdown(isOpening ? sectionTitle : null);

    actions.announceToScreenReader(
      isOpening
        ? `Menu ${sectionTitle} expandido`
        : `Menu ${sectionTitle} recolhido`
    );
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setActiveDropdown(null);
    closeMenu();
  };

  // Focus trap para menu mobile
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      return trapFocus(mobileMenuRef.current);
    }
  }, [isMenuOpen, trapFocus]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        if (isMenuOpen) {
          closeMenu();
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen, closeMenu]);

  // Check if a link is active based on current section
  const isLinkActive = (href: string) => {
    const sectionId = href.replace("#", "");
    if (sectionId === "funcionalidades" && activeSection === "funcionalidades")
      return true;
    if (sectionId === "precos" && activeSection === "precos") return true;
    if (sectionId === "diferenciais" && activeSection === "diferenciais")
      return true;
    if (sectionId === "solucoes" && activeSection === "solucoes") return true;
    if (sectionId === "contato" && activeSection === "contato") return true;
    return false;
  };

  // Menu section com texto "Menu" ao invés de "Produto"
  const menuSection = {
    title: "Menu",
    icon: <MenuIcon className="w-4 h-4" aria-hidden="true" />,
    links: [
      {
        name: "O que resolvemos",
        href: "#solucoes",
        description: "Problemas vs Soluções",
      },
      {
        name: "Funcionalidades",
        href: "#funcionalidades",
        description: "Conheça todas as funcionalidades da IA",
      },
      {
        name: "Diferenciais",
        href: "#diferenciais",
        description: "Por que escolher a Quero Direito",
      },
      {
        name: "Preços",
        href: "#precos",
        description: "Planos flexíveis para seu escritório",
      },
    ],
  };

  const skipToMain = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          skipToMain();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Pular para o conteúdo principal
      </a>

      {/* Main Header - Limpo sem controles de acessibilidade */}
      <header
        className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Menu Button */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 sm:gap-3">
                <Image
                  src={"/quero-direito-logo.png"}
                  alt="Quero Direito - Logotipo da empresa de automação jurídica com IA"
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
                <div className="text-2xl text-gray-900 dark:text-white font-semibold whitespace-nowrap">
                  <a
                    href="#"
                    onClick={(e) => handleNavClick("#hero", e)}
                    className="no-underline hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
                    aria-label="Quero Direito - Página inicial"
                  >
                    Quero Direito
                  </a>
                </div>
              </div>

              {/* Desktop Navigation Menu - Botão "Menu" */}
              <nav
                className="hidden lg:flex items-center space-x-1"
                role="navigation"
                aria-label="Menu principal de navegação"
              >
                <div
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(menuSection.title)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleDropdownClick(menuSection.title)}
                    className={`text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 px-4 py-2 h-10 transition-all duration-200 rounded-lg ${
                      activeDropdown === menuSection.title
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        : ""
                    }`}
                    aria-expanded={activeDropdown === menuSection.title}
                    aria-haspopup="true"
                    aria-controls={`dropdown-${menuSection.title.toLowerCase()}`}
                  >
                    {menuSection.icon}
                    <span className="text-sm font-medium">
                      {menuSection.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === menuSection.title ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </Button>

                  {/* Dropdown Menu */}
                  {activeDropdown === menuSection.title && (
                    <div
                      id={`dropdown-${menuSection.title.toLowerCase()}`}
                      className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl py-3 z-50 animate-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() =>
                        handleDropdownEnter(menuSection.title)
                      }
                      onMouseLeave={handleDropdownLeave}
                      role="menu"
                    >
                      {/* Header da seção */}
                      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-950/50 rounded-lg flex items-center justify-center">
                            {menuSection.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                              Navegação
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Explore nossas funcionalidades
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Links da seção */}
                      <div className="py-2">
                        {menuSection.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.href}
                            onClick={(e) => handleNavClick(link.href, e)}
                            className={`flex items-start gap-3 px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item focus:bg-gray-50 dark:focus:bg-gray-800 focus:outline-none ${
                              isLinkActive(link.href)
                                ? "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                                : ""
                            }`}
                            role="menuitem"
                          >
                            <ChevronRight
                              className={`w-4 h-4 mt-0.5 transition-all duration-200 ${
                                isLinkActive(link.href)
                                  ? "opacity-100 text-blue-600 dark:text-blue-400"
                                  : "text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:text-blue-600"
                              }`}
                              aria-hidden="true"
                            />
                            <div className="flex-1 min-w-0">
                              <div
                                className={`font-medium transition-colors ${
                                  isLinkActive(link.href)
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-900 dark:text-gray-100 group-hover/item:text-blue-600"
                                }`}
                              >
                                {link.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                                {link.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Theme Toggle */}
                      <div className="border-t border-gray-100 dark:border-gray-800 px-4 py-4 mt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                            Tema
                          </span>
                          <button
                            onClick={toggleTheme}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border font-medium transition-all duration-200 shadow-sm hover:shadow-md ${
                              theme === "dark"
                                ? "bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                            }`}
                            aria-label={`Alternar para modo ${
                              theme === "light" ? "escuro" : "claro"
                            }`}
                            title={`Modo ${
                              theme === "light" ? "escuro" : "claro"
                            }`}
                          >
                            {theme === "light" ? (
                              <Moon className="w-4 h-4" />
                            ) : (
                              <Sun className="w-4 h-4" />
                            )}
                            <span className="text-sm">
                              {theme === "light" ? "Escuro" : "Claro"}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Footer do dropdown */}
                      <div className="border-t border-gray-100 dark:border-gray-800 px-4 py-3 mt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Precisa de ajuda?
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 px-3 text-xs border-gray-200 dark:border-gray-700 dark:text-gray-400"
                            onClick={openButtonInNewTab}
                          >
                            Falar conosco
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Desktop - Right side: Botão Entrar + CTA Button */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Botão Entrar */}
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                aria-label="Entrar na conta"
                onClick={openButtonInNewTab}
              >
                <User className="w-4 h-4" />
                <span>Entrar</span>
              </Button>

              {/* CTA Button */}
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-lg px-6 py-2.5 font-medium"
                aria-label="Agendar uma demonstração da plataforma"
                onClick={openButtonInNewTab}
              >
                Agendar demonstração
              </Button>
            </div>

            {/* Mobile - Demo button e menu */}
            <div className="flex lg:hidden items-center space-x-1 sm:space-x-3">
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                aria-label="Agendar demonstração"
                onClick={openButtonInNewTab}
              >
                Agendar demo
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-label={`${
                  isMenuOpen ? "Fechar" : "Abrir"
                } menu de navegação`}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X
                    className="w-5 h-5 text-gray-600 dark:text-gray-400"
                    aria-hidden="true"
                  />
                ) : (
                  <MenuIcon
                    className="w-5 h-5 text-gray-600 dark:text-gray-400"
                    aria-hidden="true"
                  />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto border-l border-gray-200 dark:border-gray-800"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <Image
                    src={"/quero-direito-logo.png"}
                    alt="Quero Direito"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                  <div
                    className="text-xl text-gray-900 dark:text-white font-semibold"
                    id="mobile-menu-title"
                  >
                    Quero Direito
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  aria-label="Fechar menu"
                >
                  <X
                    className="w-5 h-5 text-gray-600 dark:text-gray-400"
                    aria-hidden="true"
                  />
                </Button>
              </div>

              {/* Login Button - Destacado */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={openButtonInNewTab}
                  aria-label="Entrar na minha conta"
                >
                  <User className="w-5 h-5 mr-2" aria-hidden="true" />
                  Entrar na minha conta
                </Button>
              </div>

              {/* Quick Action - Agendar Demonstração */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <Button
                  variant="outline"
                  className="w-full border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-700 py-3 rounded-xl transition-all duration-200"
                  onClick={openButtonInNewTab}
                  aria-label="Agendar demonstração da plataforma"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Agendar demo
                </Button>
              </div>

              {/* Main Navigation */}
              <nav
                className="flex-1 px-6 py-4"
                role="navigation"
                aria-label="Menu de navegação mobile"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    {/* Section Header */}
                    <div
                      className="flex items-center px-2 py-1"
                      role="group"
                      aria-labelledby="mobile-section-menu"
                    >
                      <div className="text-blue-600 mr-3" aria-hidden="true">
                        {menuSection.icon}
                      </div>
                      <h3
                        className="font-medium text-gray-900 dark:text-gray-100 text-sm uppercase tracking-wide"
                        id="mobile-section-menu"
                      >
                        Navegação
                      </h3>
                    </div>

                    {/* Section Links */}
                    <div className="space-y-1 ml-8">
                      {menuSection.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          onClick={(e) => handleNavClick(link.href, e)}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors group focus:outline-none ${
                            isLinkActive(link.href)
                              ? "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                              : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 focus:bg-blue-50 dark:focus:bg-blue-950/20 focus:text-blue-600 dark:focus:text-blue-400"
                          }`}
                        >
                          <span className="text-sm">{link.name}</span>
                          <ChevronRight
                            className={`w-4 h-4 transition-all ${
                              isLinkActive(link.href)
                                ? "opacity-100 text-blue-600 dark:text-blue-400"
                                : "text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 opacity-0 group-hover:opacity-100"
                            }`}
                            aria-hidden="true"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>

              {/* Accessibility Controls Section - NO MENU MOBILE */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <div className="space-y-6">
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Tema
                    </span>
                    <button
                      onClick={toggleTheme}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        theme === "dark"
                          ? "bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                      aria-label={`Alternar para modo ${
                        theme === "light" ? "escuro" : "claro"
                      }`}
                    >
                      {theme === "light" ? (
                        <Moon className="w-4 h-4" />
                      ) : (
                        <Sun className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {theme === "light" ? "Escuro" : "Claro"}
                      </span>
                    </button>
                  </div>

                  {/* Status */}
                  <div className="flex justify-center pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Todos os sistemas operacionais
                      </span>
                    </div>
                  </div>

                  {/* Copyright */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      © 2025 Quero Direito
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

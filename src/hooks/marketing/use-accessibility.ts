import { useState, useEffect, useCallback } from 'react';

interface AccessibilityState {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  keyboardNavigation: boolean;
}

export function useAccessibility() {
  const [state, setState] = useState<AccessibilityState>({
    fontSize: 14,
    highContrast: false,
    reducedMotion: false,
    soundEnabled: true,
    keyboardNavigation: false
  });

  // Detectar preferências do sistema
  useEffect(() => {
    // Detectar reduced motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setState(prev => ({ ...prev, reducedMotion: reducedMotionQuery.matches }));

    // Detectar alto contraste
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setState(prev => ({ ...prev, highContrast: highContrastQuery.matches }));

    // Detectar navegação por teclado
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setState(prev => ({ ...prev, keyboardNavigation: true }));
      }
    };

    const handleMouseDown = () => {
      setState(prev => ({ ...prev, keyboardNavigation: false }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.getElementById(
      priority === 'assertive' ? 'status-announcements' : 'notification-announcements'
    );
    
    if (announcer) {
      // Limpar conteúdo anterior
      announcer.textContent = '';
      
      // Adicionar nova mensagem após um pequeno delay
      setTimeout(() => {
        announcer.textContent = message;
      }, 100);
      
      // Limpar após alguns segundos
      setTimeout(() => {
        announcer.textContent = '';
      }, 5000);
    }
  }, []);

  const playSound = useCallback((type: 'success' | 'error' | 'info' = 'info') => {
    if (!state.soundEnabled) return;

    // Criar contexto de áudio simples para feedback
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Diferentes frequências para diferentes tipos
      const frequencies = {
        success: 800,
        error: 400,
        info: 600
      };

      oscillator.frequency.setValueAtTime(frequencies[type], audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      // Silenciosamente falhar se áudio não estiver disponível
      console.warn('Audio feedback not available');
    }
  }, [state.soundEnabled]);

  const increaseFontSize = useCallback(() => {
    const newSize = Math.min(state.fontSize + 2, 24);
    setState(prev => ({ ...prev, fontSize: newSize }));
    document.documentElement.style.setProperty('--font-size', `${newSize}px`);
    announceToScreenReader(`Tamanho da fonte aumentado para ${newSize} pixels`);
    playSound('info');
  }, [state.fontSize, announceToScreenReader, playSound]);

  const decreaseFontSize = useCallback(() => {
    const newSize = Math.max(state.fontSize - 2, 12);
    setState(prev => ({ ...prev, fontSize: newSize }));
    document.documentElement.style.setProperty('--font-size', `${newSize}px`);
    announceToScreenReader(`Tamanho da fonte diminuído para ${newSize} pixels`);
    playSound('info');
  }, [state.fontSize, announceToScreenReader, playSound]);

  const resetFontSize = useCallback(() => {
    setState(prev => ({ ...prev, fontSize: 14 }));
    document.documentElement.style.setProperty('--font-size', '14px');
    announceToScreenReader('Tamanho da fonte resetado para padrão');
    playSound('success');
  }, [announceToScreenReader, playSound]);

  const toggleHighContrast = useCallback(() => {
    const newContrast = !state.highContrast;
    setState(prev => ({ ...prev, highContrast: newContrast }));
    document.documentElement.classList.toggle('high-contrast', newContrast);
    announceToScreenReader(
      newContrast ? 'Alto contraste ativado' : 'Alto contraste desativado'
    );
    playSound(newContrast ? 'success' : 'info');
  }, [state.highContrast, announceToScreenReader, playSound]);

  const toggleSound = useCallback(() => {
    const newSoundState = !state.soundEnabled;
    setState(prev => ({ ...prev, soundEnabled: newSoundState }));
    announceToScreenReader(
      newSoundState ? 'Som ativado' : 'Som desativado'
    );
    if (newSoundState) {
      playSound('success');
    }
  }, [state.soundEnabled, announceToScreenReader, playSound]);

  // Navegação por teclado global
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Alt + = para aumentar fonte
      if (e.altKey && e.key === '=') {
        e.preventDefault();
        increaseFontSize();
      }
      
      // Alt + - para diminuir fonte
      if (e.altKey && e.key === '-') {
        e.preventDefault();
        decreaseFontSize();
      }
      
      // Alt + 0 para resetar fonte
      if (e.altKey && e.key === '0') {
        e.preventDefault();
        resetFontSize();
      }
      
      // Alt + C para toggle contraste
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        toggleHighContrast();
      }
      
      // Escape para fechar menus/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [increaseFontSize, decreaseFontSize, resetFontSize, toggleHighContrast]);

  return {
    state,
    actions: {
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
      toggleHighContrast,
      toggleSound,
      announceToScreenReader,
      playSound
    }
  };
}

// Hook para gerenciar foco
export function useFocusManagement() {
  const trapFocus = useCallback((element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    
    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  }, []);

  const moveFocusToElement = useCallback((selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return {
    trapFocus,
    moveFocusToElement
  };
}

// Hook para detectar se o usuário está navegando por teclado
export function useKeyboardNavigation() {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return isKeyboardUser;
}
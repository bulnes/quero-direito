import { DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_PHONE } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsappLink(message = DEFAULT_WHATSAPP_MESSAGE, phone = DEFAULT_WHATSAPP_PHONE) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Temporary WhatsApp configuration.
 *
 * Replace null with the client's confirmed number when ready.
 * Future phase: load this value from an admin-managed backend.
 *
 * Format: country code + phone number, digits only.
 * Example format: 9825911891
 */
export const whatsappConfig = {
  phoneNumber: "9825911891" as string | null,
  defaultMessage:
    "Namaste! I would like to inquire about treatments at Kanchan Ayurvedic Upachar Kendra.",
};

export function getWhatsAppUrl(
  message: string = whatsappConfig.defaultMessage
): string | null {
  const number = whatsappConfig.phoneNumber;

  if (!number) return null;

  const digits = number.replace(/\D/g, "");

  if (!/^\d{10,15}$/.test(digits)) return null;

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}


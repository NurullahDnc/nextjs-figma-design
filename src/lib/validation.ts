import { z } from "zod";

const requiredString = z.string().min(1, "Zorunlu").trim();

export const contactSchema = z.object({
  sureName: requiredString,
  email: requiredString.email("Geçersiz e-posta"),
  subject: requiredString,
  message: requiredString.min(8, "Açıklama en az 8 karakter olmalıdır"), // Açıklama için minimum karakter sayısı
});

export type ContactValues = z.infer<typeof contactSchema>;

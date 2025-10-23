import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "El email no puede exceder 255 caracteres"),
  eventType: z.string().min(1, "Selecciona un tipo de evento"),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const subscriptionSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "El email no puede exceder 255 caracteres"),
});

export type SubscriptionValues = z.infer<typeof subscriptionSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "El email no puede exceder 255 caracteres"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(100, "La contraseña no puede exceder 100 caracteres"),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(100, "El nombre no puede exceder 100 caracteres"),
    email: z
      .string()
      .trim()
      .email("Email inválido")
      .max(255, "El email no puede exceder 255 caracteres"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(100, "La contraseña no puede exceder 100 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type RegisterValues = z.infer<typeof registerSchema>;

export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "El email no puede exceder 255 caracteres"),
  phone: z
    .string()
    .trim()
    .regex(/^[\+]?[\d\s\-\(\)]{10,}$/, "Formato de teléfono inválido")
    .optional()
    .or(z.literal("")),
  bio: z
    .string()
    .max(500, "La biografía no puede exceder 500 caracteres")
    .optional(),
});

export type ProfileValues = z.infer<typeof profileSchema>;

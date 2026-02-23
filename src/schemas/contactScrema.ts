/*Validações das regras (CONNECTHUB)*/
import { z } from 'zod'
export const contactSchema = z.object({
    name: z.string().min(3, 'O título deve ter no mínimo 3 caracteres'),
    email: z.string().email('Digite um email válido'),
    telefone: z.string().regex(/^\d{10,11}$/, 'Deve conter 10 ou 11 dígitos'),

})
export type ConnectFormData = z.infer<typeof contactSchema>


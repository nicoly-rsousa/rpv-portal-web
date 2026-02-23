import { z } from 'zod'

export const moneySchema = z.object({
    descricao: z.string().min(3, 'Descrição deve ter no mínimo 3 caracteres'),
    valor: z.coerce.number().positive('O valor deve ser maior que zero'),
    tipo: z.enum(['entrada', 'saida'], { message: 'Selecione o tipo' })
})

export type MoneyFormData = z.infer<typeof moneySchema>
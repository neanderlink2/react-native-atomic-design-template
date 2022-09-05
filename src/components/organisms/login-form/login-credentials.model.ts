import { z } from 'zod';

export const loginCredentialsSchema = z.object({
    email: z.string({ required_error: 'E-mail é obrigatório.' })
        .max(30, { message: 'É obrigatório no máximo 30 caracteres.' })
        .email({ message: 'E-mail inválido.' }),
    password: z.string({ required_error: 'Senha é obrigatório.' })
        .min(6, { message: 'É obrigatório no mínimo 6 caracteres.' }),
});

export type LoginCredentials = z.infer<typeof loginCredentialsSchema>;
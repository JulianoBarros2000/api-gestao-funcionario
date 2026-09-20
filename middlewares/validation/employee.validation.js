import z from "zod"

export const validation = async (request) => {
    const schemaEmployee = z.object({
        name_departament: z
            .string().min(2, 'Mínimo é de 2 caracteres.')
            .max(200, 'O máximo é de 200 caracteres.'),

        name_funcionary: z
            .string()
            .min(3, ' O mínimo é de 3 caracteres.')
            .max(200, 'O máximo é de 200 caracteres.'),

        email_funcionary: z
            .email(),

        phone_funcionary: z
            .string()
            .min(9).max(20),

        salary_funcionary: z
            .coerce
            .number(),

        status_funcionary: z
            .enum(['ACTIVO', 'INACTIVO'])
            .default('ACTIVO'),

        date_admition: z
            .coerce
            .date()
            .max(new Date(), 'A data não pode ser superior a data actual'),

    })

    return schemaEmployee.safeParse(request)
}
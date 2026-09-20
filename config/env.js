import z from 'zod'
import 'dotenv/config'


const envSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('development'),

    SERVER_PORT: z
        .coerce
        .number()
        .int()
        .positive()
        .default(3300),

    DB_HOST: z
        .string().min(1)
        .toLowerCase(),

    DB_PORT: z
        .coerce
        .number()
        .int()
        .positive()
        .default(3306),

    DB_USER: z
        .string().min(1),

    DB_PASSWORD: z
        .string(),

    DB_NAME: z
        .string().min(1)

})


const result = envSchema.safeParse(process.env)

if(!result.success){
    console.log('Erro nas variáveis de ambiente:')
    console.log(result.error.flatten().fieldErrors)
    process.exit(1)
}

export const env = result.data
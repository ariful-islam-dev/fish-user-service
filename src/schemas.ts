import {z} from 'zod'

export const UserCreateDTOSchema = z.object({
    authUserId: z.string(),
    name: z.string().min(3).max(255),
    email: z.string().email(),
    address: z.string().optional().default(""),
    phone: z.string().optional().default("")
});

export const UserUpdateDTOSchema = UserCreateDTOSchema.omit({authUserId: true}).partial();


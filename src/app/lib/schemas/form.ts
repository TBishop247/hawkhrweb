import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .regex(/^[0-9+\-\s()]+$/, { message: 'Invalid phone number format.' }),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
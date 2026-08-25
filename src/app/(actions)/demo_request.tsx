'use server';

import { ContactSchema } from '@/app/lib/schemas/form';
// Import your PostgreSQL client here (e.g., pg, Prisma, Drizzle, Kysely)
// import { db } from '@/lib/db'; 

export type FormState = {
    success?: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
    };
};

export async function submitContactForm(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
    };

    // 1. Validate data with Zod
    const validatedFields = ContactSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Please fix the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // 2. Insert into PostgreSQL database
    try {
        const { name, email, phone } = validatedFields.data;

        // Example database query:
        // await db.query('INSERT INTO contacts (name, email, phone) VALUES ($1, $2, $3)', [name, email, phone]);

        return {
            success: true,
            message: 'Thank you! Your information has been saved successfully.',
        };
    } catch (error) {
        console.error('Database Error:', error);
        return {
            success: false,
            message: 'Database error. Failed to save contact information.',
        };
    }
}
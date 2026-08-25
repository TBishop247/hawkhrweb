// app/ui/SubmitButton.tsx
'use client'

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
    // pending is true while the parent form's action is executing
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
        >
            {pending ? 'Saving Changes...' : 'Save'}
        </button>
    );
}
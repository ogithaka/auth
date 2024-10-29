import { sharedStyles } from '@/lib/styles';
import { Albert_Sans } from 'next/font/google';

const albertSans = Albert_Sans({ subsets: ['latin'] });

export default function InputField({
    label,
    id,
    type,
    value,
    placeholder,
    method,
}: InputFieldProps) {
    return (
        <div className={sharedStyles.input_field}>
            <div className={sharedStyles.label_container}>
                <label htmlFor={id}>{label}</label>
            </div>
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={method}
                className={albertSans.className}
            />
        </div>
    );
}

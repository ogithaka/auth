import { sharedStyles } from '@/lib/styles';

export default function Form({ children, method }: FormProps) {
    return (
        <form
            className={sharedStyles.form}
            onSubmit={method}
        >
            {children}
        </form>
    );
}

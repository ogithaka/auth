import { sharedStyles } from '@/lib/styles';
import Link from 'next/link';

export default function Button({ url, name }: ButtonProps) {
    return (
        <Link
            className={sharedStyles.button}
            href={url}
        >
            {name}
        </Link>
    );
}

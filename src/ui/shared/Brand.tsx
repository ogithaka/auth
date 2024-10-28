import { sharedStyles } from '@/lib/styles';
import Image from 'next/image';

export default function Brand() {
    return (
        <div className={sharedStyles.brand}>
            <Image
                src={'/logo.svg'}
                alt='Auth Logo'
                width={40}
                height={40}
            />
            <p>Auth</p>
        </div>
    );
}

import { layoutStyles } from '@/lib/styles';
import { Brand } from '@/lib/ui';

export default function Header() {
    return (
        <header className={layoutStyles.header}>
            <Brand />
        </header>
    );
}

import { layoutStyles } from '@/lib/styles';
import { Brand, Navigation } from '@/lib/ui';

export default function Header({ children }: HeaderProps) {
    return (
        <header className={layoutStyles.header}>
            <Brand />
            <Navigation>{children}</Navigation>
        </header>
    );
}

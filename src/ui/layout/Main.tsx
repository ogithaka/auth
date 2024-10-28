import { layoutStyles } from '@/lib/styles';
import { Content, Footer } from '@/lib/ui';

export default function Main({ children }: MainProps) {
    return (
        <main className={layoutStyles.main}>
            <Content>{children}</Content>
            <Footer />
        </main>
    );
}

import { layoutStyles } from '@/lib/styles';
import { Content, Footer } from '@/lib/ui';

export default function Main() {
    return (
        <main className={layoutStyles.main}>
            <Content />
            <Footer />
        </main>
    );
}

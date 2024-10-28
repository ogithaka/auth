import { layoutStyles } from '@/lib/styles';

export default function Footer() {
    return (
        <footer className={layoutStyles.footer}>
            <p>© {new Date().getFullYear()} Verfy. All rights reserved.</p>
        </footer>
    );
}

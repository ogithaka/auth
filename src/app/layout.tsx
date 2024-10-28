import type { Metadata } from 'next';
import '@/styles/global.css';
import { Albert_Sans } from 'next/font/google';

const albertSans = Albert_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Auth',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={albertSans.className}>{children}</body>
        </html>
    );
}

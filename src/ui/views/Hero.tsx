import { viewsStyles } from '@/lib/styles';
import { Button } from '@/lib/ui';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id='hero'
            className={viewsStyles.hero}
        >
            <div className={viewsStyles.hero_imagery}>
                <Image
                    src={'/images/hero.jpg'}
                    alt='Hero Image'
                    width={1000}
                    height={628}
                />
            </div>
            <div className={viewsStyles.hero_textual}>
                <h1>Auth</h1>
                <h2>Secure Your Application</h2>
                <p>
                    Explore a practical example of implementing authentication
                    in Next.js. Learn how to manage user access and enhance
                    security effortlessly.
                </p>
                <Button
                    url='https://github.com/ogithaka/auth'
                    name='GitHub'
                />
            </div>
        </section>
    );
}

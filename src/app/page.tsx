import { Footer, Header, Hero, Main, NavigationItem } from '@/lib/ui';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/'
                    name='Landing'
                    active
                />
                <NavigationItem
                    url='/login'
                    name='Login'
                />
            </Header>
            <Main>
                <Hero />
            </Main>
        </>
    );
}

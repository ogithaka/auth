import { Footer, Header, Main, NavigationItem } from '@/lib/ui';

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
            <Main />
        </>
    );
}

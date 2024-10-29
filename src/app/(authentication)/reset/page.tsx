import { Header, Main, NavigationItem, Reset } from '@/lib/ui';

export default function Authentication() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/login'
                    name='Login'
                />
                <NavigationItem
                    url='/reset'
                    name='Reset'
                />
            </Header>
            <Main>
                <Reset />
            </Main>
        </>
    );
}

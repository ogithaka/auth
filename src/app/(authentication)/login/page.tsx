import { Header, Login, Main, NavigationItem } from '@/lib/ui';

export default function Authentication() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/register'
                    name='Register'
                />
                <NavigationItem
                    url='/reset'
                    name='Reset'
                />
            </Header>
            <Main>
                <Login />
            </Main>
        </>
    );
}

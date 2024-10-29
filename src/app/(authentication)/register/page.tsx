import { Header, Main, NavigationItem, Register } from '@/lib/ui';

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
                <Register />
            </Main>
        </>
    );
}

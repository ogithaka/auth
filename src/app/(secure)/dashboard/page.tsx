import { Dashboard, Header, Main, NavigationItem } from '@/lib/ui';

export default function Secure() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/lock'
                    name='Lock'
                />
            </Header>
            <Main>
                <Dashboard />
            </Main>
        </>
    );
}

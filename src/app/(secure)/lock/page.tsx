import { Header, Main, Lock, NavigationItem } from '@/lib/ui';

export default function Secure() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/'
                    name='Landing'
                />
            </Header>
            <Main>
                <Lock />
            </Main>
        </>
    );
}

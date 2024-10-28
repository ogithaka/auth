import { sharedStyles } from '@/lib/styles';

export default function Navigation({ children }: NavigationProps) {
    return <nav className={sharedStyles.navigation}>{children}</nav>;
}

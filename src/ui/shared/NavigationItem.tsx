import { sharedStyles } from '@/lib/styles';
import Link from 'next/link';

export default function NavigationItem({
    url,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            className={
                active
                    ? sharedStyles.navigation_item_active
                    : sharedStyles.navigation_item
            }
            href={url}
        >
            {name}
        </Link>
    );
}

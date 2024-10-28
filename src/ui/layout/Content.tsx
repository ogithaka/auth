import { layoutStyles } from '@/lib/styles';

export default function Content({ children }: ContentProps) {
    return <div className={layoutStyles.content}>{children}</div>;
}

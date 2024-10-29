import { ReactNode } from 'react';

declare global {
    interface NavigationItemProps {
        url: string;
        name: string;
        active?: boolean;
    }
    interface NavigationProps {
        children: ReactNode;
    }
    interface HeaderProps {
        children: ReactNode;
    }
    interface ContentProps {
        children: ReactNode;
    }
    interface MainProps {
        children: ReactNode;
    }
    interface ButtonProps {
        url: string;
        name: string;
    }
    interface InputFieldProps {
        label?: string;
        id?: string;
        type: string;
        value?: string;
        placeholder?: string;
        method?: (e: any) => void;
    }
    interface FormProps {
        children: ReactNode;
        method?: (e: React.FormEvent) => void;
    }
}

export {};

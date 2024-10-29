declare global {
    interface queryParameters {
        query: string;
        params?: string[];
    }
    interface registerUserParameters {
        email: string;
        hashedPassword: string;
    }
    interface registerParameters {
        email: string;
        password: string;
    }
}

export {};

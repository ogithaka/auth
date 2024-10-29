import { viewsStyles } from '@/lib/styles';
import { Form, InputField, NavigationItem } from '@/lib/ui';

export default function Login() {
    return (
        <section
            id='login'
            className={viewsStyles.login}
        >
            <h1>Login</h1>
            <Form>
                <InputField
                    label='Email'
                    type='email'
                    placeholder='your@email.com'
                />
                <InputField
                    label='Password'
                    type='password'
                    placeholder='********'
                />
                <InputField
                    type='submit'
                    value='Login'
                />
            </Form>
        </section>
    );
}

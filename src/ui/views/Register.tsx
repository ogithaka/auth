import { viewsStyles } from '@/lib/styles';
import { Form, InputField } from '@/lib/ui';

export default function Register() {
    return (
        <section
            id='register'
            className={viewsStyles.register}
        >
            <h1>Register</h1>
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
                    label='Confirm Password'
                    type='password'
                    placeholder='********'
                />
                <InputField
                    type='submit'
                    value='Register'
                />
            </Form>
        </section>
    );
}

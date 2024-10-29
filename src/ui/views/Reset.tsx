import { viewsStyles } from '@/lib/styles';
import { Form, InputField, NavigationItem } from '@/lib/ui';

export default function Login() {
    return (
        <section
            id='reset'
            className={viewsStyles.reset}
        >
            <h1>Reset</h1>
            <Form>
                <InputField
                    label='Email'
                    type='email'
                    placeholder='your@email.com'
                />
                <InputField
                    type='submit'
                    value='Reset'
                />
            </Form>
        </section>
    );
}

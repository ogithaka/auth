import { viewsStyles } from '@/lib/styles';
import { Form, InputField } from '@/lib/ui';

export default function Lock() {
    return (
        <section
            id='lock'
            className={viewsStyles.lock}
        >
            <h1>Unlock</h1>
            <Form>
                <InputField
                    label='Password'
                    type='password'
                    placeholder='********'
                />
                <InputField
                    type='submit'
                    value='Unlock'
                />
            </Form>
        </section>
    );
}

import * as yup from 'yup'

export const LoginFormSchema = yup.object({
    username: yup.string().required('Username is required').max(12, 'must be less than 12'),
    password: yup.string().required('Password is required').matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 
        'Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character'
    )
});

import register from "@/app/auth/actions/register";
import AuthPage from "../ui/auth-page";

export default function Register() {
    return (
        <AuthPage
            headerText="Create a new account"
            buttonText="Register"
            authAction={register}
            linkQuestion="Already a member?"
            linkText="Click to login."
            linkUrl="/auth/login"
        />
    );
}

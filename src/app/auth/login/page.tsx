import login from "@/app/auth/actions/login";
import AuthPage from "../ui/auth-page";

export default function Login() {
    return (
        <AuthPage
            headerText="Sign in to your account"
            buttonText="Log in"
            authAction={login}
            linkQuestion="Not a member?"
            linkText="Click to register."
            linkUrl="/auth/register"
        />
    );
}

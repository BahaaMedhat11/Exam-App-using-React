import LoginForm from "../../components/login/form/LoginForm";
import Heading from "../../shared/component/Heading";

function LoginPage() {
  return (
    <div className="flex w-full max-w-113 flex-col gap-10">
      {/* heading  */}
      <Heading>Login</Heading>
      {/* form */}
      <LoginForm />
    </div>
  );
}

export default LoginPage;

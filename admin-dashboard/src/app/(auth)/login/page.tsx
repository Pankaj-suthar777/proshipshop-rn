import { UserAuthForm } from "@/components/auth/user-auth-form";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex bg-slate-100 justify-center items-center">
      <div className="container relative flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px] bg-white px-6 py-12 rounded-lg border border-slate-200">
          <div className="flex flex-col space-y-2 text-left">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password below <br />
              to log into your account
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

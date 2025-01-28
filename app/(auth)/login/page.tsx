import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { PasswordInput, SubmitButton } from "@/app/components/store";

async function login(formData: FormData) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");
  const remember = formData.get("remember");

  // Add login logic here
  console.log({ email, password, remember });
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md">
          {/* Logo/Brand */}
          <div className="mb-8 text-center">
            <Link href="/" className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Plantopia
              </span>
            </Link>
            <p className="mt-2 text-sm text-base-content/60">
              Login to access your account
            </p>
          </div>

          {/* Login Card */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <form action={login} className="space-y-4">
                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full pl-10"
                      required
                    />
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-secondary" />
                  </div>
                </div>

                {/* Password Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                    <Link
                      href="/forgot-password"
                      className="link-hover label-text-alt text-primary"
                    >
                      Forgot password?
                    </Link>
                  </label>
                  <PasswordInput name="password" />
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">
                  <input
                    name="remember"
                    type="checkbox"
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text">Remember me</span>
                </div>

                {/* Submit Button */}
                <SubmitButton buttonText="Login" loadingText="Logging in..." />
              </form>

              {/* Divider */}
              <div className="divider text-xs text-base-content/40">
                OR CONTINUE WITH
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <Link href="/api/auth/google" className="btn btn-outline">
                  Google
                </Link>
                <Link href="/api/auth/github" className="btn btn-outline">
                  GitHub
                </Link>
              </div>

              {/* Sign Up Link */}
              <p className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="link-hover text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

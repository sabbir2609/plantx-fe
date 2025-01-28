import Link from "next/link";
import { Mail, User, Lock, ArrowRight } from "lucide-react";
import { PasswordInput, SubmitButton } from "@/app/components/store";

export default function RegisterPage() {
  async function register(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const terms = formData.get("terms");


    console.log({ name, email, password, terms });
    // Add registration logic
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Create an account
            </h1>
            <p className="mt-2 text-sm text-base-content/60">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-xl bg-base-100 p-8 shadow-lg ring-1 ring-black/5">
            <form action={register} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <div className="relative mt-2">
                  <input
                    name="name"
                    type="text"
                    required
                    className="input input-bordered w-full pl-10"
                    placeholder="John Doe"
                  />
                  <User className="absolute left-3 top-3 h-5 w-5 text-base-content/40" />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <div className="relative mt-2">
                  <input
                    name="email"
                    type="email"
                    required
                    className="input input-bordered w-full pl-10"
                    placeholder="you@example.com"
                  />
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-base-content/40" />
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

              {/* Terms Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm mt-1"
                  required
                />
                <label className="ml-3 text-sm text-base-content/70">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <SubmitButton buttonText="Create account" loadingText="Creating ... "/>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base-content/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-base-100 px-4 text-base-content/60">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="btn btn-outline">Google</button>
                <button className="btn btn-outline">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, User, Lock, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add registration logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

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
              Create your account
            </p>
          </div>

          {/* Registration Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="input input-bordered w-full pl-10"
                      required
                    />
                    <User className="absolute left-3 top-3 h-5 w-5 text-base-content/40" />
                  </div>
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full pl-10"
                      required
                    />
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-base-content/40" />
                  </div>
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="input input-bordered w-full pl-10"
                      required
                    />
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-base-content/40" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-base-content/40" />
                      ) : (
                        <Eye className="h-5 w-5 text-base-content/40" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      required
                    />
                    <span className="label-text">
                      I agree to the{" "}
                      <Link href="/terms" className="link-hover text-primary">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="link-hover text-primary">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </button>
              </form>

              {/* Divider */}
              <div className="divider text-xs text-base-content/40">
                OR CONTINUE WITH
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <button className="btn btn-outline">Google</button>
                <button className="btn btn-outline">GitHub</button>
              </div>

              {/* Login Link */}
              <p className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="link-hover text-primary">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

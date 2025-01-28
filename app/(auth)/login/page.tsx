"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add login logic here
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
              Login to access your account
            </p>
          </div>

          {/* Login Card */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
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
                    <Mail className="absolute left-3 top-3 h-5 w-5" />
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
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="input input-bordered w-full pl-10"
                      required
                    />
                    <Lock className="absolute left-3 top-3 h-5 w-5" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text">Remember me</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`btn btn-primary w-full ${
                    isLoading ? "loading" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                  <ArrowRight className="h-5 w-5" />
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

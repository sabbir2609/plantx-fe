"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function PasswordInput({
  name = "password",
}: {
  name?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <label className="form-control">
      <div className="relative">
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder="Create a password"
          className="input input-bordered w-full pl-10 pr-10 text-secondary border-secondary"
          // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Must contain at least 8 characters, including letters and numbers"
          required
        />
        <Lock className="absolute left-3 top-3 h-5 w-5 text-secondary" />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-secondary"
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      <label className="label">
        <ul className="label-text-alt space-y-1 text-xs">
          <li>✓ At least 8 characters</li>
          <li>✓ Mix of letters and numbers</li>
        </ul>
      </label>
    </label>
  );
}

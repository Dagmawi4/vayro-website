// app/auth/reset-password/page.js
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function ResetPasswordPage() {
  const [status, setStatus] = useState("checking"); // checking | ready | saving | success | error
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    const initRecoverySession = async () => {
      try {
        setStatus("checking");

        // URL comes back like:
        // https://vayro.org/auth/reset-password#access_token=...&refresh_token=...&type=recovery
        if (typeof window === "undefined") return;

        const hash = window.location.hash;
        if (!hash || !hash.startsWith("#")) {
          setError(
            "This reset link is invalid or has expired. Please request a new password reset from the Vayro app."
          );
          setStatus("error");
          return;
        }

        const params = new URLSearchParams(hash.substring(1));
        const access_token = params.get("access_token");
        const refresh_token = params.get("refresh_token");

        if (!access_token || !refresh_token) {
          setError(
            "This reset link is missing information. Please request a new password reset from the Vayro app."
          );
          setStatus("error");
          return;
        }

        // Turn the URL tokens into a Supabase session
        const { error: sessionError } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (sessionError) {
          console.error("setSession error:", sessionError);
          setError(
            "Could not validate this reset link. Please request a new password reset."
          );
          setStatus("error");
          return;
        }

        // Optional: verify we have a user
        const { data, error: userError } = await supabase.auth.getUser();
        if (userError || !data?.user) {
          console.error("getUser error after recovery:", userError);
          setError(
            "Could not load your account from this reset link. Please request a new password reset."
          );
          setStatus("error");
          return;
        }

        setStatus("ready");
      } catch (err) {
        console.error("Recovery init exception:", err);
        setError(
          "Something went wrong when validating this link. Please request a new password reset."
        );
        setStatus("error");
      }
    };

    initRecoverySession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setStatus("saving");
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      console.error("updateUser error:", error);
      setError(error.message || "Something went wrong. Please try again.");
      setStatus("ready");
      return;
    }

    setStatus("success");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">
          Reset your password
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          Enter a new password for your Vayro account.
        </p>

        {status === "checking" && (
          <p className="text-sm text-slate-500">Checking your reset link…</p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600 mb-4">{error}</p>
        )}

        {(status === "ready" || status === "saving") && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                New password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Confirm password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Re-enter new password"
              />
            </div>

            {error && <p className="text-xs text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={status === "saving"}
              className="w-full rounded-lg bg-sky-600 text-white text-sm font-semibold py-2.5 mt-2 hover:bg-sky-700 disabled:opacity-60"
            >
              {status === "saving" ? "Saving…" : "Update password"}
            </button>
          </form>
        )}

        {status === "success" && (
          <div className="space-y-3">
            <p className="text-sm text-emerald-600">
              Your password has been updated successfully. 🎉
            </p>
            <p className="text-xs text-slate-500">
              You can now close this page and log back into the Vayro app with
              your new password.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}


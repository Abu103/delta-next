// components/LoginForm.tsx
"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

interface LoginFormProps {
  mode?: "login" | "signup";
  className?: string;
}

export function LoginForm({ mode = "login", className }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/login`,
        },
      });
      if (error) {
        setError(error.message);
        return;
      }
      if (data.user) {
        router.push("/login");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 max-w-[400px] mx-auto mt-10", className)}>
      <Card className="shadow-lg rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            {mode === "login" ? "Welcome Back" : "Create an Account"}
          </CardTitle>
          <CardDescription>
            {mode === "login" ? "Login with your account" : "Sign up to start exploring"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {mode === "login" && (
                    <a
                      href="/reset-password"
                      className="ml-auto text-sm"
                    >
                      Forgot your password?
                    </a>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <Button
                type="submit"
              >
                {mode === "login" ? "Login" : "Sign Up"}
              </Button>
            </div>
          </form>
          <div className="text-center text-sm mt-4">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <Link href="/signup" className="underline-offset-4 underline">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link href="/login" className="underline-offset-4 underline">
                  Login
                </Link>
              </>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center text-xs text-balance">
        By clicking continue, you agree to our{" "}
        <a href="#" className=" hover:underline underline-offset-4">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className=" hover:underline underline-offset-4">
          Privacy Policy
        </a>.
      </div>
    </div>
  );
}
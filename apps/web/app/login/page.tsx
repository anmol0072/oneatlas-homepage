import { signIn } from "@/auth";
import Link from "next/link";
import { ArrowLeft, KeyRound } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background-main flex flex-col md:flex-row">
      {/* Left Side - Brand & Aesthetic */}
      <div className="hidden md:flex flex-1 relative bg-brand-primary overflow-hidden items-center justify-center">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-brand-gradient opacity-80 mix-blend-multiply" />
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-accent-teal/30 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent-pink/30 blur-[120px]" />
        
        <div className="relative z-10 px-12 max-w-2xl text-white">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-12 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Build internal tools at the speed of thought.
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Join thousands of product managers and engineers who are deploying custom dashboards, workflows, and CRMs without writing boilerplate.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-brand-primary bg-white flex items-center justify-center shadow-sm z-${10-i}`}>
                  <span className="text-xs font-bold text-foreground-heading">U{i}</span>
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-white/90">
              Trusted by <span className="font-bold text-white">10,000+</span> teams.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-white relative">
        {/* Mobile Back Button */}
        <Link href="/" className="md:hidden absolute top-8 left-6 inline-flex items-center text-foreground-muted hover:text-foreground-heading font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Home
        </Link>
        
        <div className="mx-auto w-full max-w-sm">
          <div className="text-center md:text-left mb-10">
            <h2 className="text-3xl font-extrabold text-foreground-heading">Welcome back</h2>
            <p className="mt-2 text-sm text-foreground-body">
              Log in to your OneAtlas workspace.
            </p>
          </div>

          <div className="mt-8">
            {/* Google OAuth Button */}
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-border-light rounded-lg shadow-sm bg-white text-sm font-semibold text-foreground-heading hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-200 group"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Continue with Google
              </button>
            </form>

            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-border-light" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-foreground-muted">Or continue with email</span>
              </div>
            </div>

            <div className="mt-8">
              <form action="#" method="POST" className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-heading">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-4 py-3 border border-border-light rounded-lg shadow-sm placeholder-foreground-muted focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-background-main transition-colors duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground-heading">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <KeyRound className="h-4 w-4 text-foreground-muted" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full pl-10 pr-4 py-3 border border-border-light rounded-lg shadow-sm placeholder-foreground-muted focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-background-main transition-colors duration-200"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-border-light rounded cursor-pointer"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-foreground-body cursor-pointer">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-brand-primary hover:text-brand-primaryHover">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-foreground-heading hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground-heading transition-all duration-200"
                  >
                    Sign in to OneAtlas
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-sm text-foreground-muted">
                Don't have an account?{" "}
                <Link href="#" className="font-medium text-brand-primary hover:text-brand-primaryHover">
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

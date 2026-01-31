import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { ModeToggle } from "./mode-toggle"

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="fixed z-50 inset-x-0 top-4 w-full px-4">
      <MaxWidthWrapper>
        <div className="relative flex h-14 items-center justify-between px-6 rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Liquid glass shine effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/40 via-transparent to-white/40 dark:from-white/5 dark:via-transparent dark:to-white/5 pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/60 to-transparent dark:from-white/10 dark:to-transparent pointer-events-none" />
          
          <Link href="/" className="relative flex z-40 items-center gap-2 font-black text-xl">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg">
              <Sparkles className="size-4 text-white" />
            </div>
            <span className="bg-gradient-to-r from-brand-600 to-brand-700 dark:from-brand-400 dark:to-brand-500 bg-clip-text text-transparent">
              Procmon
            </span>
          </Link>

          <div className="relative h-full flex items-center gap-2">
            {user ? (
              <>
                <SignOutButton>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 rounded-xl transition-all"
                  >
                    Sign out
                  </Button>
                </SignOutButton>

                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-200"
                >
                  Dashboard <ArrowRight className="size-4" />
                </Link>
                <div className="ml-1">
                  <ModeToggle />
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/pricing"
                  className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Sign in
                </Link>

                <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1" />

                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-200"
                >
                  Sign up <ArrowRight className="size-4" />
                </Link>
                <div className="ml-1">
                  <ModeToggle />
                </div>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

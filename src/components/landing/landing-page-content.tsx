"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, Star, ArrowRight, Zap, Bell, Code2, BarChart3, Shield, Users } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { GSAPProvider } from "@/components/landing/gsap-provider"
import { GlassCard, NeoButton, LiquidBlob } from "@/components/landing/glass-effects"
import { FloatingElement, MagneticElement, ScrollProgress } from "@/components/landing/curvy-elements"
import { AnimatedText, CountUp } from "@/components/landing/animated-text"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { AnimatedList } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"
import { Icons } from "@/components/icons"

gsap.registerPlugin(ScrollTrigger)

const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "zoe.martinez2001@email.com",
      amount: 49.00
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

const features = [
  { icon: Bell, title: "Real-time Alerts", description: "Instant Discord notifications the moment events happen" },
  { icon: Code2, title: "Easy Integration", description: "Simple API that works with any language or framework" },
  { icon: BarChart3, title: "Analytics", description: "Track and visualize your SaaS metrics in real-time" },
  { icon: Shield, title: "Secure", description: "Enterprise-grade security for your event data" },
  { icon: Zap, title: "Lightning Fast", description: "Sub-second delivery to your Discord channels" },
  { icon: Users, title: "Team Ready", description: "Collaborate with your entire team seamlessly" },
]

const stats = [
  { value: 10000, suffix: "+", label: "Events Tracked" },
  { value: 500, suffix: "+", label: "Happy Users" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "ms", label: "Avg Latency" },
]

export function LandingPageContent() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".hero-title", {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power4.out",
        })

        gsap.from(".hero-subtitle", {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        })

        gsap.from(".hero-features", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
        })

        gsap.from(".hero-cta", {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: 0.7,
          ease: "back.out(1.7)",
        })

        gsap.from(".hero-visual", {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 1.2,
          delay: 0.4,
          ease: "power3.out",
        })
      }, heroRef)

      return () => ctx.revert()
    }
  }, [])

  useEffect(() => {
    if (featuresRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".feature-card", {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        })
      }, featuresRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <GSAPProvider>
      <ScrollProgress />

      <section
        ref={heroRef}
        className="relative overflow-hidden bg-white dark:bg-gray-950 pb-16 -mt-[72px]"
      >
        <LiquidBlob
          className="top-20 -left-32 opacity-60 dark:opacity-30"
          color="rgba(14, 165, 233, 0.4)"
          size={500}
          blur={80}
        />
        <LiquidBlob
          className="top-40 right-0 opacity-50 dark:opacity-20"
          color="rgba(250, 204, 21, 0.4)"
          size={400}
          blur={70}
        />
        <LiquidBlob
          className="bottom-20 left-1/3 opacity-40 dark:opacity-20"
          color="rgba(168, 85, 247, 0.3)"
          size={350}
          blur={60}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <MaxWidthWrapper className="relative pt-32 pb-32 sm:pt-40 sm:pb-40">
          <div className="flex flex-col items-center text-center">
            <FloatingElement distance={10} duration={2.5}>
              <div className="hero-title mb-6 inline-flex items-center gap-2 rounded-full border-2 border-black dark:border-white bg-yellow-400 dark:bg-yellow-500 px-4 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <Zap className="size-4" />
                <span>Real-time SaaS Monitoring</span>
              </div>
            </FloatingElement>

            <h1 className="hero-title max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="text-gray-900 dark:text-white">Real-Time SaaS Insights,</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent dark:from-brand-400 dark:to-brand-500">
                  Delivered to Your Discord
                </span>
                <span className="absolute -inset-1 -z-10 bg-brand-200/50 dark:bg-brand-800/50 blur-xl" />
              </span>
            </h1>

            <p className="hero-subtitle mt-8 max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Procmon is the easiest way to monitor your SaaS. Get instant notifications for{" "}
              <span className="font-semibold text-gray-900 dark:text-white">sales, new users, or any other event</span>{" "}
              sent directly to your Discord.
            </p>

            <ul className="hero-features mt-8 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              {["Real-time alerts", "One-time payment", "Track any event"].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 rounded-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2"
                >
                  <Check className="size-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="hero-cta mt-10 flex flex-wrap justify-center gap-4">
              <MagneticElement strength={0.2}>
                <NeoButton href="/sign-up" variant="primary" size="lg">
                  Start for Free <ArrowRight className="size-5" />
                </NeoButton>
              </MagneticElement>
              <MagneticElement strength={0.2}>
                <NeoButton href="#features" variant="outline" size="lg">
                  See Features
                </NeoButton>
              </MagneticElement>
            </div>

            <div className="hero-visual mt-16 w-full max-w-4xl">
              <GlassCard variant="neo" className="p-2 sm:p-4">
                <MockDiscordUI>
                  <AnimatedList>
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="Procmon Avatar"
                      username="Procmon"
                      timestamp="Today at 12:35PM"
                      badgeText="SignUp"
                      badgeColor="#43b581"
                      title="👤 New user signed up"
                      content={{
                        name: "Mateo Ortiz",
                        email: "m.ortiz19@gmail.com",
                      }}
                    />
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="Procmon Avatar"
                      username="Procmon"
                      timestamp="Today at 12:35PM"
                      badgeText="Revenue"
                      badgeColor="#faa61a"
                      title="💰 Payment received"
                      content={{
                        amount: "$49.00",
                        email: "zoe.martinez2001@email.com",
                        plan: "PRO",
                      }}
                    />
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="Procmon Avatar"
                      username="Procmon"
                      timestamp="Today at 5:11AM"
                      badgeText="Milestone"
                      badgeColor="#5865f2"
                      title="🚀 Revenue Milestone Achieved"
                      content={{
                        recurringRevenue: "$5.000 USD",
                        growth: "+8.2%",
                      }}
                    />
                  </AnimatedList>
                </MockDiscordUI>
              </GlassCard>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-white dark:bg-gray-950 py-16">
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-animate="fade-up"
                data-animate-delay={index * 0.1}
                className="text-center"
              >
                <GlassCard variant="neo" className="p-6">
                  <div className="text-3xl sm:text-4xl font-black text-brand-600 dark:text-brand-400">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section
        id="features"
        ref={featuresRef}
        className="relative py-16 sm:py-24 bg-white dark:bg-gray-950 overflow-hidden"
      >
        <LiquidBlob
          className="top-1/4 -right-20 opacity-40 dark:opacity-20"
          color="rgba(14, 165, 233, 0.3)"
          size={400}
          blur={70}
        />

        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              <AnimatedText text="Stay ahead with real-time insights" variant="wave" />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to monitor your SaaS business in one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <GlassCard variant="neo" hover className="p-6 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-4 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    <feature.icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-950 overflow-hidden">
        <MaxWidthWrapper>
          <div className="grid gap-6 md:grid-cols-2">
            <div data-animate="fade-right">
              <GlassCard variant="neo" className="h-full overflow-hidden">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Real-time notifications
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Get notified about critical events the moment they happen, no matter where you are.
                  </p>
                </div>
                <div className="relative h-[300px] w-full">
                  <div className="absolute inset-x-8 bottom-0 top-0 overflow-hidden rounded-t-[40px] border-4 border-b-0 border-black dark:border-white bg-gray-900">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="Phone screen"
                      fill
                    />
                  </div>
                </div>
              </GlassCard>
            </div>

            <div data-animate="fade-left">
              <GlassCard variant="neo" className="h-full overflow-hidden">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Easy Integration
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Connect Procmon with your workflows in minutes with our simple API.
                  </p>
                </div>
                <div className="relative mx-4 mb-4 rounded-xl border-2 border-black dark:border-white bg-gray-900 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 border-b border-gray-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-gray-400 ml-2">procmon.js</span>
                  </div>
                  <div className="max-h-[250px] overflow-hidden">
                    <SyntaxHighlighter
                      language="typescript"
                      style={{
                        ...oneDark,
                        'pre[class*="language-"]': {
                          ...oneDark['pre[class*="language-"]'],
                          background: "transparent",
                          margin: 0,
                          padding: "1rem",
                        },
                        'code[class*="language-"]': {
                          ...oneDark['code[class*="language-"]'],
                          background: "transparent",
                        },
                      }}
                    >
                      {codeSnippet}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div data-animate="fade-up">
              <GlassCard variant="neo" className="h-full p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Track Any Event
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  From new signups to payments, track all your critical SaaS events.
                </p>
                <div className="mt-6 flex justify-center">
                  <Image
                    src="/bento-any-event.png"
                    alt="Event tracking"
                    width={300}
                    height={200}
                    className="rounded-xl border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                  />
                </div>
              </GlassCard>
            </div>

            <div data-animate="fade-up">
              <GlassCard variant="neo" className="h-full p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Custom Properties
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Add any custom data to your events, from user emails to purchase amounts.
                </p>
                <div className="mt-6 flex justify-center">
                  <Image
                    src="/bento-custom-data.png"
                    alt="Custom data"
                    width={300}
                    height={200}
                    className="rounded-xl border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                  />
                </div>
              </GlassCard>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-950 overflow-hidden">
        <LiquidBlob
          className="-top-20 left-1/4 opacity-30 dark:opacity-20"
          color="rgba(250, 204, 21, 0.4)"
          size={350}
          blur={60}
        />

        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
              <AnimatedText text="What our customers say" variant="split" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div data-animate="fade-right">
              <GlassCard variant="neo" className="p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  &ldquo;Procmon has been a game-changer for me. I&apos;ve been using it for two months now and seeing sales pop up in real-time is super satisfying.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/user-2.png"
                    alt="Freya Larsson"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-black dark:border-white"
                  />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                      Freya Larsson
                      <Icons.verificationBadge className="size-4" />
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">@itsfreya</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div data-animate="fade-left">
              <GlassCard variant="neo" className="p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  &ldquo;Procmon&apos;s been paying off for our SaaS. Nice to have a simple way to see how we&apos;re doing day-to-day. Definitely makes our lives easier.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/user-1.png"
                    alt="Kai Durant"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-black dark:border-white"
                  />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                      Kai Durant
                      <Icons.verificationBadge className="size-4" />
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">@kdurant_</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-950 overflow-hidden">
        <LiquidBlob
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 dark:opacity-20"
          color="rgba(14, 165, 233, 0.3)"
          size={600}
          blur={100}
        />

        <MaxWidthWrapper>
          <div className="relative" data-animate="scale-up">
            <GlassCard variant="neo" className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Join hundreds of SaaS founders who are already monitoring their business with Procmon.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticElement strength={0.15}>
                  <NeoButton href="/sign-up" variant="primary" size="lg">
                    Start for Free <ArrowRight className="size-5" />
                  </NeoButton>
                </MagneticElement>
                <MagneticElement strength={0.15}>
                  <NeoButton href="/pricing" variant="secondary" size="lg">
                    View Pricing
                  </NeoButton>
                </MagneticElement>
              </div>

              <div className="mt-10 pt-8 border-t-4 border-dashed border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by developers worldwide</p>
                <div className="flex flex-wrap justify-center gap-6 opacity-60">
                  <div className="text-2xl font-black text-gray-400 dark:text-gray-600">Company</div>
                  <div className="text-2xl font-black text-gray-400 dark:text-gray-600">Startup</div>
                  <div className="text-2xl font-black text-gray-400 dark:text-gray-600">Business</div>
                  <div className="text-2xl font-black text-gray-400 dark:text-gray-600">Agency</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </MaxWidthWrapper>
      </section>

      <footer className="bg-white dark:bg-gray-950 border-t-4 border-black dark:border-white">
        <MaxWidthWrapper className="py-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="lg:w-1/3">
              <Link href="/" className="inline-block">
                <span className="text-3xl font-black text-brand-600 dark:text-brand-400">Procmon</span>
              </Link>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Real-Time SaaS Insights, Delivered to Your Discord
              </p>
            </div>

            <div className="flex flex-wrap gap-8 lg:gap-16">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#features" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Procmon. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://x.com/bixl_007"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-100 dark:hover:bg-brand-900 hover:text-brand-600 dark:hover:text-brand-400 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/bishal-baira/"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-100 dark:hover:bg-brand-900 hover:text-brand-600 dark:hover:text-brand-400 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/bixl007"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-100 dark:hover:bg-brand-900 hover:text-brand-600 dark:hover:text-brand-400 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </GSAPProvider>
  )
}

"use client";

import { useEffect, useState } from "react";

export default function PlantopiaStore() {
  const LAUNCH_DATE = new Date("2025-04-01").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE - now;

      if (distance < 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [LAUNCH_DATE]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-16 text-center">
          {/* Hero */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Plantopia Store
              </span>
            </h1>
            <p className="text-xl text-base-content/70">
              Coming soon to transform your plant shopping experience
            </p>
          </div>

          {/* Countdown */}
          {/* Countdown Timer */}
          <div className="grid grid-cols-2 gap-3 sm:inline-grid auto-cols-max grid-flow-col">
            {[
              { label: 'days', value: timeLeft.days },
              { label: 'hours', value: timeLeft.hours },
              { label: 'min', value: timeLeft.minutes },
              { label: 'sec', value: timeLeft.seconds }
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1 rounded-lg
                  bg-base-100/20 px-3 py-2 sm:gap-2
                  backdrop-blur-sm transition-all hover:bg-base-100/30
                  border border-base-content/5"
              >
                <span className="font-mono text-2xl font-bold tabular-nums 
                  sm:text-4xl md:text-5xl lg:text-6xl">
                  {String(value).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider 
                  text-base-content/60 sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid gap-8 sm:grid-cols-3">
            {["Exclusive Collection", "Expert Care Guidance", "Community"].map(
              (feature) => (
                <div
                  key={feature}
                  className="rounded-lg bg-base-100/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold">{feature}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

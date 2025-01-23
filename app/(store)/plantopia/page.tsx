"use client";

import { useEffect, useState } from "react";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PlantopiaStore() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [counter]);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center space-y-8 text-center">
        {/* Logo and Title */}
        <div className="space-y-2">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Plantopia
            </span>
          </h1>
          <p className="text-lg font-light tracking-wide opacity-75">
            by Viriditas - Opening Soon
          </p>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-lg">
          Experience the future of plant shopping. Join us for the grand opening
          of your new favorite plant destination.
        </p>

        {/* Countdown Timer */}
        <div className="rounded-xl bg-base-200/50 px-4 p-8 backdrop-blur">
          <h2 className="mb-4 text-2xl font-semibold">Grand Opening In</h2>

          <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 15 } as any}></span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 10 } as any}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 24 } as any}></span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": counter } as any}></span>
              </span>
              sec
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/links" className="group btn btn-primary btn-lg gap-2">
            Follow for Updates
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="card bg-base-200/50 backdrop-blur">
            <div className="card-body">
              <h3 className="card-title">Exclusive Plants</h3>
              <p>Discover rare and unique plant varieties</p>
            </div>
          </div>
          <div className="card bg-base-200/50 backdrop-blur">
            <div className="card-body">
              <h3 className="card-title">Expert Care</h3>
              <p>Get personalized plant care guidance</p>
            </div>
          </div>
          <div className="card bg-base-200/50 backdrop-blur">
            <div className="card-body">
              <h3 className="card-title">Community</h3>
              <p>Join our growing plant lovers community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

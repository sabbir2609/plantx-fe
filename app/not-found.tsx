import Link from "next/link";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-200">
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="animate-float">
          <Leaf className="mx-auto h-24 w-24 text-green-500" />
        </div>
        
        <h1 className="mt-8 text-9xl font-bold tracking-tight text-green-800">
          4
          <span className="inline-block animate-bounce">0</span>
          4
        </h1>
        
        <p className="mt-4 text-xl font-semibold text-green-600">
          Oops! Looks like this plant hasn&apos;t sprouted yet
        </p>
        
        <p className="mt-2 max-w-lg text-base">
          Just like plants need the right environment to grow, 
          it seems this page isn&apos;t ready to bloom. 
          Let&apos;s guide you back to our thriving garden of interior designs.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition duration-300 ease-out hover:bg-green-700"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-green-700 transition-all duration-300 group-hover:translate-x-0">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="relative transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0">
              Return Home
            </span>
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-green-600 px-6 py-3 font-medium text-green-600 transition-colors hover:bg-green-50"
          >
            Contact Support
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
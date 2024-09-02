"use client"
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        // If no consent cookie is present, show the consent popup
        if (!hasCookie('consent')) {
            setShowConsent(true);
        }
    }, []);

    const acceptConsent = () => {
        // When user accepts consent, hide the popup and set a consent cookie
        setShowConsent(false);
        setCookie('consent', 'true');

        // Trigger GTM script load
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('updateGTMConsent'));
        }
    };
    const declineConsent = () => {
        // When user declines the consent, simply hide the popup
        setShowConsent(false);
    };



    if (!showConsent) {
        return null;
    }

    return (
        <>
            {hasCookie('consent') && (
                <Script
                    strategy="beforeInteractive"
                    src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
                />
            )}
            <div className="fixed bottom-10 left-10 max-w-sm px-4 py-3 shadow-lg transition-all duration-500 ease-in-out font-sans rounded-lg z-50 bg-base-300">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">Your Cookie Preferences</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm">
                            By clicking “Accept all,” you agree to the storing of cookies on your device for functional, analytics, and advertising purposes.
                        </p>
                        <div className="text-xs space-x-4">
                            <Link href="/privacy-policy" target="_blank" className="underline cursor-pointer">Privacy policy</Link>
                            <Link href="#" target="_blank" className="underline cursor-pointer">Cookie policy</Link>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button onClick={declineConsent} className="px-4 py-2 border border-transparent text-xs font-bold rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors">
                            Decline
                        </button>
                        <button onClick={acceptConsent} className="px-4 py-2 border border-transparent text-xs font-bold rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors">
                            Accept
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}; 
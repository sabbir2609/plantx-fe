import Image from 'next/image';

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex flex-col items-center gap-4">
                <Image
                    src="/icons/icon-512x512.png"
                    alt="Logo"
                    width={500}
                    height={500}
                    priority
                    className="mb-4 h-40 w-40"
                />
                <span className="loading loading-spinner loading-lg h-14"></span>
            </div>
        </div>
    );
}
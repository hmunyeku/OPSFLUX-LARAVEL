import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/">
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            OPSFLUX
                        </span>
                    </Link>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

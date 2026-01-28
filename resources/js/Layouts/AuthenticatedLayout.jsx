import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Bars3Icon,
    XMarkIcon,
    HomeIcon,
    UsersIcon,
    FolderIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Projets', href: '/projects', icon: FolderIcon },
    { name: 'Utilisateurs', href: '/users', icon: UsersIcon },
    { name: 'Paramètres', href: '/settings', icon: Cog6ToothIcon },
];

export default function AuthenticatedLayout({ children, header }) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile sidebar */}
            <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
                <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
                <div className="fixed inset-y-0 left-0 w-64 bg-white">
                    <div className="flex h-16 items-center justify-between px-6">
                        <span className="text-xl font-bold text-primary-600">OPSFLUX</span>
                        <button onClick={() => setSidebarOpen(false)}>
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="px-3 py-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                <div className="flex flex-col flex-grow border-r border-gray-200 bg-white">
                    <div className="flex h-16 items-center px-6">
                        <span className="text-xl font-bold text-primary-600">OPSFLUX</span>
                    </div>
                    <nav className="flex-1 px-3 py-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 mb-1"
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="border-t border-gray-200 p-4">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                                <span className="text-sm font-medium text-primary-600">
                                    {auth?.user?.name?.charAt(0) || 'U'}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {auth?.user?.name || 'Utilisateur'}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {auth?.user?.email || ''}
                                </p>
                            </div>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="lg:pl-64">
                {/* Top bar */}
                <div className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 lg:px-8">
                    <button
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                    {header && (
                        <h1 className="text-lg font-semibold text-gray-900">{header}</h1>
                    )}
                </div>

                {/* Page content */}
                <main className="p-4 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Bienvenue" />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
                {/* Navigation */}
                <nav className="p-6">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            OPSFLUX
                        </span>
                        <div className="flex gap-4">
                            {auth?.user ? (
                                <Link
                                    href="/dashboard"
                                    className="btn btn-primary"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                                    >
                                        Connexion
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="btn btn-primary"
                                    >
                                        S'inscrire
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <main className="flex-1 flex items-center justify-center px-6">
                    <div className="text-center max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Gérez vos{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                opérations
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10">
                            Une plateforme moderne pour la gestion de vos projets et opérations.
                            Simplifiez votre workflow et collaborez efficacement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/register"
                                className="btn btn-primary text-lg px-8 py-3"
                            >
                                Commencer gratuitement
                            </Link>
                            <a
                                href="#features"
                                className="btn btn-secondary text-lg px-8 py-3 bg-white/10 text-white hover:bg-white/20"
                            >
                                En savoir plus
                            </a>
                        </div>
                    </div>
                </main>

                {/* Features */}
                <section id="features" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Fonctionnalités
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Gestion de projets',
                                    description: 'Organisez et suivez vos projets avec des tableaux Kanban et des listes de tâches.',
                                    icon: '📋',
                                },
                                {
                                    title: 'Collaboration',
                                    description: 'Travaillez en équipe avec des commentaires, des notifications et des partages.',
                                    icon: '👥',
                                },
                                {
                                    title: 'Analyses',
                                    description: 'Visualisez vos métriques et KPIs avec des tableaux de bord personnalisés.',
                                    icon: '📊',
                                },
                            ].map((feature) => (
                                <div
                                    key={feature.title}
                                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 px-6 border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center text-gray-500">
                        <p>&copy; 2024 OPSFLUX. Tous droits réservés.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard({ auth }) {
    const stats = [
        { name: 'Projets actifs', value: '12', change: '+2', changeType: 'increase' },
        { name: 'Tâches en cours', value: '48', change: '-5', changeType: 'decrease' },
        { name: 'Membres équipe', value: '8', change: '+1', changeType: 'increase' },
        { name: 'Complétés ce mois', value: '24', change: '+12', changeType: 'increase' },
    ];

    return (
        <AuthenticatedLayout header="Dashboard">
            <Head title="Dashboard" />

            <div className="space-y-6">
                {/* Welcome */}
                <div className="card p-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Bienvenue, {auth.user.name} 👋
                    </h2>
                    <p className="text-gray-600 mt-1">
                        Voici un aperçu de votre activité récente.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <div key={stat.name} className="card p-6">
                            <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                            <div className="mt-2 flex items-baseline gap-2">
                                <p className="text-3xl font-semibold text-gray-900">
                                    {stat.value}
                                </p>
                                <span
                                    className={`text-sm font-medium ${
                                        stat.changeType === 'increase'
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                    }`}
                                >
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent activity */}
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="card">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="font-semibold text-gray-900">Activité récente</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {[
                                    { action: 'Tâche complétée', project: 'Projet Alpha', time: 'Il y a 2h' },
                                    { action: 'Nouveau commentaire', project: 'Projet Beta', time: 'Il y a 4h' },
                                    { action: 'Fichier ajouté', project: 'Projet Gamma', time: 'Il y a 6h' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="h-2 w-2 rounded-full bg-primary-500" />
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-900">{item.action}</p>
                                            <p className="text-xs text-gray-500">{item.project}</p>
                                        </div>
                                        <span className="text-xs text-gray-400">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="font-semibold text-gray-900">Tâches prioritaires</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {[
                                    { task: 'Finaliser le rapport', priority: 'Haute', due: 'Demain' },
                                    { task: 'Review code PR #123', priority: 'Moyenne', due: 'Dans 2 jours' },
                                    { task: 'Réunion client', priority: 'Haute', due: 'Vendredi' },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                    >
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {item.task}
                                            </p>
                                            <p className="text-xs text-gray-500">Échéance: {item.due}</p>
                                        </div>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                item.priority === 'Haute'
                                                    ? 'bg-red-100 text-red-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                            }`}
                                        >
                                            {item.priority}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

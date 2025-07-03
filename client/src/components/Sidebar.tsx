// components/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/workflow-builder', label: 'Workflows' },
    { to: '/logs', label: 'Logs' },
    { to: '#', label: 'Integrations' },
    { to: '#', label: 'Settings' },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <aside className="w-64 bg-white h-screen p-6 shadow-lg flex flex-col">
            <h2 className="text-2xl font-extrabold mb-8 text-blue-700 tracking-tight">Flowmancer</h2>
            <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                        <Link
                            key={link.label}
                            to={link.to}
                            className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                                isActive
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                            }`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

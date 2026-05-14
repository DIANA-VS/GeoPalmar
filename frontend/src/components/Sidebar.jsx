import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, MapPin, PlusCircle, LogOut, User, List, Gauge } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logoImage from "../assets/13_11_34.png";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/map", label: "Mapa", icon: MapPin },
    { path: "/incidents", label: "Incidencias", icon: List },
    { path: "/new-incident", label: "Nueva Incidencia", icon: PlusCircle },
    { path: "/profile", label: "Perfil", icon: User },
    { path: "/statistics", label: "Estadísticas", icon: Gauge },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#14315E] text-slate-100 flex flex-col shadow-xl shadow-slate-900/10">
      <div className="px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 shadow-lg shadow-slate-950/20">
            <img src={logoImage} alt="GeoPalmar logo" className="h-10 w-auto" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">GeoPalmar</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Municipal</h2>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 pb-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                    isActive
            ? 'bg-[#2E8B57] text-white shadow-lg shadow-slate-900/10'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-6 pb-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2E8B57] text-white">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Administrador</p>
              <p className="text-xs text-slate-300">admin@palmar.gob.mx</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 w-full rounded-2xl bg-[#2E8B57] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#1B7E3B]"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </aside>
  );
}
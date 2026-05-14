from pathlib import Path

pages = {
    "Profile.jsx": '''import { User, Lock, Bell, HelpCircle, LogOut, Camera } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#1E3A5F] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white">Perfil de Usuario</h1>
          <p className="mt-2 text-slate-400">Configuración de cuenta y preferencias</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <h2 className="text-xl font-semibold text-white mb-6">Información personal</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-200">Nombre completo</label>
                  <input
                    type="text"
                    defaultValue="Administrador"
                    className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-200">Correo electrónico</label>
                  <input
                    type="email"
                    defaultValue="admin@palmar.gob.mx"
                    className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-200">Teléfono</label>
                  <input
                    type="tel"
                    defaultValue="+52 55 1234 5678"
                    className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-200">Cargo</label>
                  <input
                    type="text"
                    defaultValue="Administrador Municipal"
                    className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <h2 className="text-xl font-semibold text-white mb-6">Seguridad</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-800 p-2">
                      <Lock className="h-4 w-4 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Cambiar contraseña</p>
                      <p className="text-xs text-slate-400">Último cambio hace 30 días</p>
                    </div>
                  </div>
                  <button className="rounded-2xl bg-[#2E8B57] px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-[#1B7E3B]">
                    Cambiar
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-800 p-2">
                      <Bell className="h-4 w-4 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Autenticación de dos factores</p>
                      <p className="text-xs text-slate-400">Aumenta la seguridad de tu cuenta</p>
                    </div>
                  </div>
                  <button className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-300 transition hover:border-slate-700 hover:bg-slate-800">
                    Configurar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <div className="text-center">
                <div className="relative mx-auto mb-4 h-24 w-24">
                  <div className="flex h-full w-full items-center justify-center rounded-3xl bg-[#2E8B57] text-slate-950">
                    <User className="h-12 w-12" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-slate-300 transition hover:bg-slate-700">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-white">Administrador</h3>
                <p className="text-sm text-slate-400">admin@palmar.gob.mx</p>
                <p className="mt-2 text-xs text-[#2E8B57]">Cuenta verificada</p>
              </div>
            </div>

            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20">
              <h3 className="text-lg font-semibold text-white mb-4">Accesos rápidos</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-left transition hover:border-slate-700 hover:bg-slate-800">
                  <Bell className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-300">Notificaciones</span>
                </button>
                <button className="w-full flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-left transition hover:border-slate-700 hover:bg-slate-800">
                  <HelpCircle className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-300">Centro de ayuda</span>
                </button>
                <button className="w-full flex items-center gap-3 rounded-3xl border border-red-800/50 bg-red-950/20 p-4 text-left transition hover:border-red-700 hover:bg-red-950/30">
                  <LogOut className="h-4 w-4 text-red-400" />
                  <span className="text-sm text-red-300">Cerrar sesión</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
''',
    "Dashboard.jsx": '''import { FaTint, FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";
import { Filter, Plus } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#1E3A5F] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
          <p className="mt-2 text-slate-400">Vista general del estado de las incidencias municipales</p>
        </div>

        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-3xl bg-slate-950/90 p-5 text-center">
              <p className="text-sm text-slate-400">Activas</p>
              <p className="mt-2 text-3xl font-semibold text-white">1,248</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5 text-center">
              <p className="text-sm text-slate-400">Pendientes</p>
              <p className="mt-2 text-3xl font-semibold text-[#FF0202]">356</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5 text-center">
              <p className="text-sm text-slate-400">Resueltas</p>
              <p className="mt-2 text-3xl font-semibold text-[#1B7E3B]">614</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5 text-center">
              <p className="text-sm text-slate-400">En proceso</p>
              <p className="mt-2 text-3xl font-semibold text-[#FF7C02]">278</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
              <Filter className="mr-2 h-4 w-4" /> Filtrar por fecha
            </button>
            <button className="inline-flex items-center justify-center rounded-3xl bg-[#2E8B57] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#1B7E3B]">
              <Plus className="mr-2 h-4 w-4" /> Nueva incidencia
            </button>
          </div>
        </div>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Incidencias abiertas</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Monitoreo en tiempo real</h3>
              </div>
              <div className="rounded-3xl bg-slate-800 p-4 text-[#2E8B57]">
                <FaShieldAlt className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-5 text-slate-400">
              Revisa las zonas con mayor reporte de incidentes y asigna recursos rápidamente desde los paneles de control.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/90 p-5">
                <p className="text-sm text-slate-500">Zonas críticas</p>
                <p className="mt-3 text-3xl font-semibold text-white">8</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-5">
                <p className="text-sm text-slate-500">Atención inmediata</p>
                <p className="mt-3 text-3xl font-semibold text-amber-400">24</p>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Actuaciones recientes</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Estado de la gestión</h3>
              </div>
              <div className="rounded-3xl bg-slate-800 p-4 text-[#2098EE]">
                <FaClock className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-slate-950/90 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Promedio de respuesta</p>
                  <span className="text-sm text-[#1B7E3B]">2.8 hrs</span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-white">87%</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Resolución diaria</p>
                  <span className="text-sm text-slate-400">Meta 95%</span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-[#1B7E3B]">78%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
''',
    "MapPage.jsx": '''import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MapPin, Search, Filter } from "lucide-react";

const markers = [
  { id: 1, x: 20, y: 30, category: "Bache", status: "Pendiente", color: "#FF0202" },
  { id: 2, x: 45, y: 25, category: "Alumbrado", status: "En proceso", color: "#FF7C02" },
  { id: 3, x: 70, y: 45, category: "Basura", status: "Listo", color: "#1B7E3B" },
  { id: 4, x: 35, y: 60, category: "Semáforo", status: "Pendiente", color: "#FF0202" },
  { id: 5, x: 80, y: 70, category: "Agua", status: "En proceso", color: "#FF7C02" },
  { id: 6, x: 15, y: 75, category: "Bache", status: "Pendiente", color: "#FF0202" },
  { id: 7, x: 60, y: 20, category: "Basura", status: "Listo", color: "#1B7E3B" },
  { id: 8, x: 50, y: 50, category: "Vandalismo", status: "Fin", color: "#2098EE" },
  { id: 9, x: 25, y: 45, category: "Alumbrado", status: "Listo", color: "#1B7E3B" },
  { id: 10, x: 65, y: 65, category: "Agua", status: "En proceso", color: "#FF7C02" },
];

const categories = ["Todas", "Bache", "Alumbrado", "Basura", "Semáforo", "Agua", "Vandalismo"];
const statuses = ["Todos", "Pendiente", "En proceso", "Listo", "Fin"];

const incidentsList = [
  { id: 1, name: "Bache en vía principal", location: "Calle 45 #23-12", time: "Hace 2 horas", status: "Pendiente" },
  { id: 2, name: "Falta de alumbrado", location: "Av. Central", time: "Hace 5 horas", status: "En proceso" },
  { id: 3, name: "Basura acumulada", location: "Parque Norte", time: "Hace 1 día", status: "Listo" },
  { id: 4, name: "Semáforo dañado", location: "Cruce Sur", time: "Hace 3 horas", status: "Pendiente" },
];

export default function MapPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedStatus, setSelectedStatus] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const filteredMarkers = markers.filter((marker) => {
    const categoryMatch = selectedCategory === "Todas" || marker.category === selectedCategory;
    const statusMatch = selectedStatus === "Todos" || marker.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-[#1E3A5F] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white">Mapa Interactivo</h1>
          <p className="mt-2 text-slate-400">Visualización de incidencias geolocalizadas</p>
        </div>

        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-3xl bg-slate-950/90 p-5 text-center">
              <p className="text-sm text-slate-400">Total</p>
              <p className="mt-2 text-3xl font-semibold text-white">1,248</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5 text-center">
              <p className="text-sm text-slate-400">Pendientes</p>
              <p className="mt-2 text-3xl font-semibold text-[#FF0202]">356</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5 text-center">
              <p className="text-sm text-slate-400">En proceso</p>
              <p className="mt-2 text-3xl font-semibold text-[#FF7C02]">278</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5 text-center">
              <p className="text-sm text-slate-400">Resueltas</p>
              <p className="mt-2 text-3xl font-semibold text-[#1B7E3B]">614</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
              <Filter className="mr-2 h-4 w-4" /> Filtros avanzados
            </button>
            <button className="inline-flex items-center justify-center rounded-3xl bg-[#2E8B57] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#1B7E3B]">
              + Nueva incidencia
            </button>
          </div>
        </div>

        <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20">
          <div className="mb-6 flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-2 text-sm font-medium text-slate-200">Buscar ubicación</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar dirección..."
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 pl-10 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-200">Categoría</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-900 text-slate-100">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-200">Estado</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
              >
                {statuses.map((status) => (
                  <option key={status} value={status} className="bg-slate-900 text-slate-100">
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-3xl border border-slate-800 bg-slate-950/90 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                >
                  {filteredMarkers.map((marker) => (
                    <div
                      key={marker.id}
                      className="absolute cursor-pointer group"
                      style={{
                        left: `${marker.x}%`,
                        top: `${marker.y}%`,
                        transform: "translate(-50%, -100%)",
                      }}
                    >
                      <div
                        className="rounded-full p-2 shadow-lg transition-transform group-hover:scale-125"
                        style={{ backgroundColor: marker.color }}
                      >
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-3xl bg-slate-900 border border-slate-800 px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        <p className="text-sm font-medium text-white">{marker.category}</p>
                        <p className="text-xs text-slate-400">{marker.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute top-4 right-4 rounded-3xl bg-slate-900/90 border border-slate-800 px-4 py-3 shadow-lg">
                  <p className="text-xs text-slate-400 mb-3 font-medium">Leyenda</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <span className="text-xs text-slate-300">Pendiente</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-slate-300">En proceso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                      <span className="text-xs text-slate-300">Listo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                      <span className="text-xs text-slate-300">Fin</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 rounded-3xl bg-slate-900/90 border border-slate-800 px-4 py-2 shadow-lg">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-emerald-400">{filteredMarkers.length}</span> incidencias mostradas
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Lista de incidencias</h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {incidentsList.map((incident) => (
                  <div
                    key={incident.id}
                    className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 hover:border-slate-700 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-medium text-white">{incident.name}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          incident.status === "Listo"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : incident.status === "En proceso"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-1">{incident.location}</p>
                    <p className="text-xs text-slate-500">{incident.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
'''
}

root = Path(__file__).parent
for filename, text in pages.items():
    path = root / "src" / "pages" / filename
    path.write_text(text, encoding="utf-8")

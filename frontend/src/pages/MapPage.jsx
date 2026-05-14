import { useState, useEffect } from "react";
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

function MapPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedStatus, setSelectedStatus] = useState("Todos");
  const [selectedDate, setSelectedDate] = useState("Todas");
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
    <div className="min-h-screen bg-[#F7F4E6] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 flex flex-col gap-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#E8F1FF] shadow-sm">
              <MapPin className="h-7 w-7 text-[#234E9E]" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">GeoPalmar</p>
              <h1 className="text-2xl font-semibold text-slate-900">Mapa de incidencia</h1>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">
            <Filter className="h-4 w-4" />
            Filtros
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Filtros</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Categoria</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-white text-slate-900">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Estado</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status} className="bg-white text-slate-900">
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Fecha</label>
                <select
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  <option>Todas</option>
                  <option>Últimos 7 días</option>
                  <option>Último mes</option>
                </select>
              </div>

              <button className="w-full rounded-3xl bg-[#2E8B57] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1B7E3B]">
                Aplicar filtros
              </button>
            </div>

            <div className="mt-10 rounded-[28px] bg-[#FAFAF8] p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900 mb-4">Leyenda</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 rounded-full bg-[#FF0202]"></span>
                  <span className="text-sm text-slate-700">Pendiente</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 rounded-full bg-[#FF7C02]"></span>
                  <span className="text-sm text-slate-700">En proceso</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 rounded-full bg-[#1B7E3B]"></span>
                  <span className="text-sm text-slate-700">Resultado</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 rounded-full bg-[#2098EE]"></span>
                  <span className="text-sm text-slate-700">Drenaje</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 rounded-full bg-[#0099CC]"></span>
                  <span className="text-sm text-slate-700">Agua potable</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 rounded-full bg-[#F2B90F]"></span>
                  <span className="text-sm text-slate-700">Alumbrado</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 rounded-full bg-[#7C3AED]"></span>
                  <span className="text-sm text-slate-700">Pavimentación</span>
                </div>
              </div>
            </div>
          </aside>

          <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-700">Mapa de incidencias</p>
                <p className="text-xs text-slate-500">Explora los puntos de incidencia en la ciudad</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex h-12 items-center justify-center rounded-3xl border border-slate-200 bg-white px-4 text-sm text-slate-700 transition hover:bg-slate-50">
                  +
                </button>
                <button className="inline-flex h-12 items-center justify-center rounded-3xl border border-slate-200 bg-white px-4 text-sm text-slate-700 transition hover:bg-slate-50">
                  Capas
                </button>
              </div>
            </div>

            <div className="relative h-[660px] overflow-hidden rounded-[32px] border border-slate-200 bg-[#EAE6D0] shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_35%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.7),_transparent_30%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.35),_transparent_45%),_linear-gradient(90deg,_rgba(255,255,255,0.15),_transparent_40%)]"></div>

              {filteredMarkers.map((marker) => (
                <div
                  key={marker.id}
                  className="absolute flex flex-col items-center gap-2"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: 'translate(-50%, -100%)' }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-slate-300/30">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: marker.color }}>
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    {marker.category}
                  </span>
                </div>
              ))}

              <div className="pointer-events-none absolute inset-x-0 top-1/2 flex justify-center text-center">
                <div className="rounded-3xl bg-white/90 px-5 py-3 shadow-sm backdrop-blur-sm">
                  <p className="text-sm font-semibold text-slate-800">Palmar de Bravo</p>
                  <p className="text-xs text-slate-500">Incidencias activas</p>
                </div>
              </div>
            </div>

            <button className="absolute right-6 bottom-6 inline-flex items-center justify-center rounded-3xl bg-[#2E8B57] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#1B7E3B]">
              + Nueva incidencia
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MapPage;

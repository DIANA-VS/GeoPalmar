import { useState } from "react";
import { Search, Filter, Eye, Edit, Trash2, Plus } from "lucide-react";

const incidencias = [
  {
    id: "#455",
    titulo: "Fuga de agua en calle Hidalgo",
    categoria: "Agua potable",
    estado: "Pendiente",
    fecha: "06/05/2026",
    prioridad: "Alta",
  },
  {
    id: "#456",
    titulo: "Registro de drenaje dañado",
    categoria: "Drenaje",
    estado: "En proceso",
    fecha: "05/05/2026",
    prioridad: "Media",
  },
  {
    id: "#457",
    titulo: "Alumbrado público sin funcionar",
    categoria: "Alumbrado",
    estado: "Resuelto",
    fecha: "04/05/2026",
    prioridad: "Baja",
  },
  {
    id: "#458",
    titulo: "Fuga de agua calle Morelos",
    categoria: "Agua potable",
    estado: "Pendiente",
    fecha: "03/05/2026",
    prioridad: "Alta",
  },
];

const IncidentList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Todos");

  const filteredIncidencias = incidencias.filter((item) => {
    const matchesSearch = item.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.categoria.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "Todos" || item.estado === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Gestión de incidencias</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Lista de reportes</h2>
          <p className="mt-3 text-slate-400">
            Administra y supervisa todas las incidencias reportadas por la ciudadanía.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
            <Filter className="mr-2 h-4 w-4" /> Filtros avanzados
          </button>
          <button className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            <Plus className="mr-2 h-4 w-4" /> Nueva incidencia
          </button>
        </div>
      </div>

      <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por título o categoría..."
                className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 pl-10 text-slate-100 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="Todos" className="bg-slate-900 text-slate-100">Todos los estados</option>
              <option value="Pendiente" className="bg-slate-900 text-slate-100">Pendiente</option>
              <option value="En proceso" className="bg-slate-900 text-slate-100">En proceso</option>
              <option value="Resuelto" className="bg-slate-900 text-slate-100">Resuelto</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 text-left">
                <th className="p-4 text-sm font-medium text-slate-400">ID</th>
                <th className="p-4 text-sm font-medium text-slate-400">Título</th>
                <th className="p-4 text-sm font-medium text-slate-400">Categoría</th>
                <th className="p-4 text-sm font-medium text-slate-400">Prioridad</th>
                <th className="p-4 text-sm font-medium text-slate-400">Estado</th>
                <th className="p-4 text-sm font-medium text-slate-400">Fecha</th>
                <th className="p-4 text-sm font-medium text-slate-400">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredIncidencias.map((item) => (
                <tr key={item.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm font-medium text-white">{item.id}</td>
                  <td className="p-4 text-sm text-slate-300">{item.titulo}</td>
                  <td className="p-4 text-sm text-slate-400">{item.categoria}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.prioridad === "Alta"
                          ? "bg-red-500/10 text-red-400"
                          : item.prioridad === "Media"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-slate-500/10 text-slate-400"
                      }`}
                    >
                      {item.prioridad}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        item.estado === "Pendiente"
                          ? "bg-red-500/10 text-red-400"
                          : item.estado === "En proceso"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {item.estado}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-400">{item.fecha}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="inline-flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-2 text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-2 text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-2 text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            Mostrando {filteredIncidencias.length} de {incidencias.length} incidencias
          </p>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
              Anterior
            </button>
            <button className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
              1
            </button>
            <button className="inline-flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
              2
            </button>
            <button className="inline-flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
              3
            </button>
            <button className="inline-flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentList;
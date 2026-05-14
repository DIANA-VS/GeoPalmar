import { useState } from "react";
import { MapPin, Upload, X, Plus } from "lucide-react";

export default function NewIncident() {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    prioridad: "",
    ubicacion: "",
    imagenes: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nueva incidencia:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#1E3A5F] text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white">Nueva Incidencia</h1>
          <p className="mt-2 text-slate-400">Reporta un nuevo problema urbano para su atención inmediata</p>
        </div>

        <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-200">Título de la incidencia</label>
                <input
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  placeholder="Ej: Bache en vía principal"
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-200">Categoría</label>
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="baches">Baches</option>
                  <option value="alumbrado">Alumbrado público</option>
                  <option value="basura">Basura acumulada</option>
                  <option value="semaforos">Semáforos</option>
                  <option value="agua">Agua potable</option>
                  <option value="drenaje">Drenaje</option>
                  <option value="vandalismo">Vandalismo</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-200">Descripción detallada</label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="Describe el problema con el mayor detalle posible..."
                rows={4}
                className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                required
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-200">Ubicación</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    name="ubicacion"
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                    placeholder="Dirección exacta del problema"
                    className="w-full rounded-3xl border border-slate-800 bg-slate-900 pl-10 pr-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-200">Prioridad</label>
                <select
                  name="prioridad"
                  value={formData.prioridad}
                  onChange={handleInputChange}
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                  required
                >
                  <option value="">Seleccionar prioridad</option>
                  <option value="baja">Baja</option>
                  <option value="media">Media</option>
                  <option value="alta">Alta</option>
                  <option value="urgente">Urgente</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-200">Imágenes (opcional)</label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900/50 px-6 py-4 text-sm text-slate-400 transition hover:border-[#2E8B57] hover:bg-[#2E8B57]/10 hover:text-[#2E8B57]"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Subir imágenes
                </button>
                <span className="text-xs text-slate-500">Máximo 5 imágenes, 10MB cada una</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                className="flex-1 rounded-3xl border border-slate-800 bg-slate-900 px-6 py-3 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-800"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 rounded-3xl bg-[#2E8B57] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#1B7E3B]"
              >
                Crear incidencia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
import { MapPin, Calendar, User, Clock, CheckCircle, AlertTriangle, MessageSquare, ArrowLeft } from "lucide-react";

const IncidentDetail = () => {
  return (
    <div className="min-h-screen bg-[#1E3A5F] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <button className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-4">
            <ArrowLeft className="h-4 w-4" />
            Volver a la lista
          </button>
          <h1 className="text-3xl font-semibold text-white">Detalle de Incidencia</h1>
          <p className="mt-2 text-slate-400">Fuga de agua en calle Morelos</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Fuga de agua en calle Morelos</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Reportado por Juan Pérez
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      20/06/2026 10:30 AM
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#FF7C02]/10 text-[#FF7C02]">
                  <Clock className="mr-2 h-4 w-4" />
                  En proceso
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="rounded-3xl bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400 mb-1">Categoría</p>
                  <p className="text-lg font-semibold text-white">Agua potable</p>
                </div>
                <div className="rounded-3xl bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400 mb-1">Prioridad</p>
                  <p className="text-lg font-semibold text-[#FF0202]">Alta</p>
                </div>
                <div className="rounded-3xl bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400 mb-1">Estado</p>
                  <p className="text-lg font-semibold text-[#FF7C02]">En proceso</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Descripción</h3>
                <p className="text-slate-300 leading-7">
                  Se observa una fuga de agua potable en la calle Morelos, esquina con 5 de Mayo.
                  El agua corre constantemente desde hace varios días, causando inundaciones en la zona
                  y posibles daños a la infraestructura cercana. Se requiere atención inmediata para
                  evitar mayores complicaciones.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Ubicación</h3>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                  <div className="flex items-center gap-2 text-slate-300 mb-4">
                    <MapPin className="h-4 w-4 text-[#2098EE]" />
                    Calle Morelos esquina con 5 de Mayo, Centro Histórico
                  </div>
                  <div className="aspect-video rounded-2xl bg-slate-800 overflow-hidden">
                    <img
                      src="https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=250&center=lonlat:-97.5522,18.8431&zoom=14&marker=lonlat:-97.5522,18.8431;color:%232098EE"
                      alt="Ubicación de la incidencia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white mb-6">Historial de actividades</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[#2E8B57] text-slate-950">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Incidencia reportada</p>
                    <p className="text-sm text-slate-400">20/06/2026 10:30 AM - Reportada por ciudadano vía app móvil</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[#2098EE] text-slate-950">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Asignada a equipo técnico</p>
                    <p className="text-sm text-slate-400">20/06/2026 11:15 AM - Asignada al equipo de agua potable</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[#FF7C02] text-slate-950">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Inspección realizada</p>
                    <p className="text-sm text-slate-400">21/06/2026 09:00 AM - Equipo técnico realizó inspección inicial</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-800 text-slate-400">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">En proceso de reparación</p>
                    <p className="text-sm text-slate-400">21/06/2026 14:30 PM - Reparación iniciada, se espera completar en 2 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white mb-6">Evidencia fotográfica</h3>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400"
                  alt="Fuga de agua"
                  className="w-full rounded-2xl object-cover aspect-video"
                />
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=200"
                    alt="Detalle de la fuga"
                    className="w-full rounded-2xl object-cover aspect-square"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=200"
                    alt="Zona afectada"
                    className="w-full rounded-2xl object-cover aspect-square"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white mb-6">Acciones</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 rounded-3xl bg-[#2E8B57] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#1B7E3B]">
                  <CheckCircle className="h-4 w-4" />
                  Marcar como resuelta
                </button>
                <button className="w-full flex items-center justify-center gap-3 rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-800">
                  <MessageSquare className="h-4 w-4" />
                  Agregar comentario
                </button>
                <button className="w-full flex items-center justify-center gap-3 rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-800">
                  <User className="h-4 w-4" />
                  Reasignar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetail;
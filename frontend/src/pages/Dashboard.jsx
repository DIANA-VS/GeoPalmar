import { FaChartPie, FaClock, FaChevronRight } from "react-icons/fa";
import { MapPin, Gauge } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900"></h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[36px] bg-white p-6 shadow-md shadow-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Total incidencias</p>
              <div className="rounded-3xl bg-[#E6F8EE] p-3 text-[#1B7E3B]">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-5 text-4xl font-semibold text-slate-900">1,846</p>
            <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-[#2098EE] hover:text-[#1768B1]">
              Ver detalles <FaChevronRight className="ml-2 h-3.5 w-3.5" />
            </a>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-md shadow-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Pendiente</p>
              <div className="rounded-3xl bg-[#FEF3F2] p-3 text-[#FF0202]">
                <FaClock className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-5 text-4xl font-semibold text-slate-900">375</p>
            <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-[#2098EE] hover:text-[#1768B1]">
              Ver detalles <FaChevronRight className="ml-2 h-3.5 w-3.5" />
            </a>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-md shadow-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">En proceso</p>
              <div className="rounded-3xl bg-[#E8F7FF] p-3 text-[#2098EE]">
                <Gauge className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-5 text-4xl font-semibold text-slate-900">278</p>
            <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-[#2098EE] hover:text-[#1768B1]">
              Ver detalles <FaChevronRight className="ml-2 h-3.5 w-3.5" />
            </a>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-md shadow-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">En proceso</p>
              <div className="rounded-3xl bg-[#E8F7EE] p-3 text-[#1B7E3B]">
                <FaChartPie className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-5 text-4xl font-semibold text-slate-900">614</p>
            <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-[#2098EE] hover:text-[#1768B1]">
              Ver detalles <FaChevronRight className="ml-2 h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-[36px] bg-white p-6 shadow-md shadow-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Incidencias por categoría</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">Este mes</h2>
              </div>
              <button className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-600">
                Este mes
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="h-56 w-full rounded-[32px] bg-slate-100 p-6">
                <div className="relative h-full w-full">
                  <div className="absolute inset-x-0 top-0 bottom-0 left-0 right-0 rounded-full border-8 border-[#2E8B57]" />
                  <div className="absolute inset-x-10 top-10 bottom-10 left-10 right-10 rounded-full border-8 border-[#2098EE]" />
                  <div className="absolute inset-x-16 top-16 bottom-16 left-16 right-16 rounded-full border-8 border-[#FF7C02]" />
                </div>
              </div>
              <div className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
                    <span className="flex items-center gap-2 text-sm text-slate-700"><span className="h-2.5 w-2.5 rounded-full bg-[#2E8B57]" /> Drenaje</span>
                    <span className="text-sm font-semibold text-slate-900">25%</span>
                  </li>
                  <li className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
                    <span className="flex items-center gap-2 text-sm text-slate-700"><span className="h-2.5 w-2.5 rounded-full bg-[#2098EE]" /> Agua potable</span>
                    <span className="text-sm font-semibold text-slate-900">20%</span>
                  </li>
                  <li className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
                    <span className="flex items-center gap-2 text-sm text-slate-700"><span className="h-2.5 w-2.5 rounded-full bg-[#FF7C02]" /> Alumbrado</span>
                    <span className="text-sm font-semibold text-slate-900">18%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-md shadow-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Incidencias por categoría</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">Comparativo</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="h-56 rounded-[32px] bg-slate-100 p-6">
                <div className="flex h-full items-end justify-between gap-3">
                  <div className="flex-1 bg-[#FF7C02] p-4 text-right text-sm font-semibold text-slate-900">600</div>
                  <div className="flex-1 bg-[#2098EE] p-4 text-right text-sm font-semibold text-slate-900">450</div>
                  <div className="flex-1 bg-[#1B7E3B] p-4 text-right text-sm font-semibold text-slate-900">250</div>
                </div>
              </div>
              <div className="grid gap-3 rounded-[32px] bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Pendientes</span>
                  <span>600</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>En proceso</span>
                  <span>450</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Resueltas</span>
                  <span>250</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[36px] bg-white p-6 shadow-md shadow-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Incidencias recientes</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-[#2098EE] hover:text-[#1768B1]">Ver todas las incidencias</a>
          </div>
          <div className="mt-6 overflow-hidden rounded-[32px] border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">ID</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Título</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Categoría</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Estado</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700">#456</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Fuga de agua en calle Morelos</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Agua potable</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-[#FFECB8] px-3 py-1 text-sm font-semibold text-[#B45309]">Pendiente</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">08/05/2026</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700">#896</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Registro de drenaje dañado</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Drenaje</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-[#DEF7EC] px-3 py-1 text-sm font-semibold text-[#166534]">En proceso</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">04/08/2026</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700">#236</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Bache en Av. Reforma</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Baches</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-[#FEE2E2] px-3 py-1 text-sm font-semibold text-[#C92A2A]">Pendiente</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">15/10/2026</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700">#895</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Alumbrado público sin funcionar</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Alumbrado</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-[#FEE2E2] px-3 py-1 text-sm font-semibold text-[#C92A2A]">Pendiente</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">25/11/2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

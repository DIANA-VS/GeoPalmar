import { Outlet } from 'react-router-dom';
import { UserCircle } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="border-b border-slate-200 bg-white px-6 py-6 shadow-sm">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
              <p className="mt-2 text-sm text-slate-500">Bienvenido al panel de control</p>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2E8B57] text-white">
                <UserCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Administrador</p>
                <p className="text-xs text-slate-500">admin@palmar.gob.mx</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
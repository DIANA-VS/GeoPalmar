import { User, Lock, Bell, HelpCircle, LogOut, Camera } from "lucide-react";

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

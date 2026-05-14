import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import backgroundImage from "../assets/image.png";
import logoImage from "../assets/13_11_34.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white text-slate-900">
      <div className="relative hidden lg:flex lg:w-2/5 xl:w-1/3 items-center justify-center overflow-hidden bg-[#1E3A5F]">
        <img
          src={backgroundImage}
          alt="Fondo GeoPalmar"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1E3A5F]/25" />
        <div className="relative z-10 flex h-full w-full flex-col justify-start items-center pt-20 px-10 pb-16 text-center text-white">
          <div className="mb-6">
            <img src={logoImage} alt="GeoPalmar logo" className="mx-auto h-40 w-auto" />
          </div>

          <div className="max-w-sm space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex h-3 w-3 rounded-full bg-[#2E8B57]" />
              <p className="text-sm uppercase tracking-[0.3em] text-[#D1FAE5]">Login</p>
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-white">
              <span className="text-[#FFFFFF]">Geo</span>{' '}
              <span className="text-[#2E8B57]">Palmar</span>
            </h1>
            <p className="text-base leading-7 text-slate-200">
              Sistema Geolocalizada de Gestión Municipal
            </p>
            <p className="text-sm text-slate-300">Palmar de Bravo, Puebla</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md rounded-[36px] bg-white px-10 py-12 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.08)] border border-slate-200">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-500">Login</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Iniciar sesión</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Accede a tu cuenta para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                placeholder="ejemplo@palmar.gob.mx"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20"
                placeholder="••••••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-end text-sm text-slate-500">
              <a href="#" className="font-medium text-[#2098EE] hover:text-[#1D6FB9]">
                Olvidaste tu contraseña
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-[24px] bg-[#2E8B57] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1B7E3B]"
            >
              Iniciar sesión
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            ¿No tienes cuenta?{' '}
            <a href="#" className="font-semibold text-[#2098EE] hover:text-[#1D6FB9]">
              Contacta al administrador
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
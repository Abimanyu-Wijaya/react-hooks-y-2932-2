'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import SocialAuth from '@/components/SocialAuth';
import Link from 'next/link';
import { toast } from 'react-toastify';

const DEFAULT_CAPTCHA = 'AbCdEf';

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captchaInput: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev: any) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newErrors: any = {};

    if (!formData.email) newErrors.email = 'Email wajib diisi';
    if (!formData.password) newErrors.password = 'Password wajib diisi';

    if (!formData.captchaInput) {
      newErrors.captcha = 'Captcha wajib diisi';
    } else if (formData.captchaInput !== DEFAULT_CAPTCHA) {
      newErrors.captcha = 'Captcha salah';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Login Gagal!');
      return;
    }

    toast.success('Login Berhasil!');
    router.push('/home');
  };

  return (
    <AuthFormWrapper>
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-[400px]">
        
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* EMAIL */}
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukan email"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukan password"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* REMEMBER */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rememberMe: e.target.checked,
                  }))
                }
              />
              Ingat Saya
            </label>

            <span className="text-blue-600 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* CAPTCHA */}
          <div>
            <div className="mb-2 font-semibold">Captcha: AbCdEf</div>
            <input
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              placeholder="Masukan captcha"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.captcha && (
              <p className="text-red-500 text-sm">{errors.captcha}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign In
          </button>

          {/* SOCIAL */}
          <div className="text-center text-sm text-gray-500">
            Atau masuk dengan
          </div>
          <SocialAuth />

          {/* REGISTER */}
          <p className="text-center text-sm">
            Tidak punya akun?{" "}
            <Link href="/auth/register" className="text-blue-600 font-semibold">
              Daftar
            </Link>
          </p>

        </form>
      </div>
    </AuthFormWrapper>
  );
}
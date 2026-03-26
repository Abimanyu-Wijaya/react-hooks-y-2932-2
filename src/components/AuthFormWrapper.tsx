import React, { ReactNode } from 'react';

interface AuthFormWrapperProps {
  children: ReactNode;
  title: string; // ✅ TAMBAH INI
}

const AuthFormWrapper = ({ children, title }: AuthFormWrapperProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthFormWrapper;
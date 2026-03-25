import React, { ReactNode } from 'react';

interface AuthFormWrapperProps {
  children: ReactNode;
}

const AuthFormWrapper = ({ children }: AuthFormWrapperProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
      {children}
    </div>
  );
};

export default AuthFormWrapper;
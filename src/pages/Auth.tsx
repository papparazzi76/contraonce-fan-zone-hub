
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

const Auth = () => {
  const { user, loading, signInWithGoogle } = useAuth();

  // Redirigir si el usuario ya está autenticado
  if (user && !loading) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/d58c6cde-bb6b-4db1-98ff-4edf73f43433.png" 
              alt="11contraonce Logo" 
              className="h-24 w-auto" 
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-display">
            Iniciar sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            O{' '}
            <span className="font-medium text-brand-green hover:text-brand-green/80">
              regístrate para ser parte de la comunidad
            </span>
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <Button 
              onClick={() => signInWithGoogle()}
              className="w-full flex justify-center items-center gap-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <FcGoogle className="w-5 h-5" />
              Continuar con Google
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <a href="/" className="font-medium text-brand-green hover:text-brand-green/80">
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

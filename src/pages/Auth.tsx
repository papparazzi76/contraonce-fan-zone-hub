
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FcGoogle } from 'react-icons/fc';
import { toast } from '@/components/ui/sonner';
import { z } from 'zod';

const emailSchema = z.string().email("Ingresa un correo electrónico válido");
const passwordSchema = z.string().min(6, "La contraseña debe tener al menos 6 caracteres");

const Auth = () => {
  const { user, loading, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const navigate = useNavigate();
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string }>({});

  // Verificar si hay un error en la URL
  useEffect(() => {
    const url = new URL(window.location.href);
    const error = url.searchParams.get('error');
    const errorDescription = url.searchParams.get('error_description');
    
    if (error) {
      toast.error(`Error de autenticación: ${errorDescription || error}`);
      console.error('Error en la autenticación:', error, errorDescription);
    }
  }, []);

  // Redirigir si el usuario ya está autenticado
  if (user && !loading) {
    return <Navigate to="/" replace />;
  }

  const validateForm = () => {
    let newErrors: { email?: string; password?: string; confirmPassword?: string } = {};
    let isValid = true;

    try {
      emailSchema.parse(email);
    } catch (err) {
      if (err instanceof z.ZodError) {
        newErrors.email = err.issues[0].message;
        isValid = false;
      }
    }

    try {
      passwordSchema.parse(password);
    } catch (err) {
      if (err instanceof z.ZodError) {
        newErrors.password = err.issues[0].message;
        isValid = false;
      }
    }

    if (!isLoginMode && password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isLoginMode) {
      await signInWithEmail(email, password);
    } else {
      await signUpWithEmail(email, password);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setErrors({});
  };

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
            {isLoginMode ? "Iniciar sesión" : "Registrarse"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLoginMode ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{' '}
            <button 
              onClick={toggleMode} 
              className="font-medium text-brand-green hover:text-brand-green/80"
            >
              {isLoginMode ? "Regístrate" : "Inicia sesión"}
            </button>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={isLoginMode ? "current-password" : "new-password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>
            
            {!isLoginMode && (
              <div>
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={errors.confirmPassword ? "border-red-500" : ""}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}
          </div>

          <div>
            <Button 
              type="submit"
              className="w-full bg-brand-green hover:bg-brand-green/90"
            >
              {isLoginMode ? "Iniciar sesión" : "Registrarse"}
            </Button>
          </div>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">O continúa con</span>
            </div>
          </div>

          <div className="mt-6">
            <Button 
              onClick={() => signInWithGoogle()}
              className="w-full flex justify-center items-center gap-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <FcGoogle className="w-5 h-5" />
              Google
            </Button>
          </div>
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
  );
};

export default Auth;


import React, { createContext, useContext, useState, useEffect } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  authError: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for auth error in URL
    const url = new URL(window.location.href);
    const error = url.searchParams.get('error');
    const errorDescription = url.searchParams.get('error_description');
    
    if (error) {
      const errorMessage = errorDescription || error;
      setAuthError(errorMessage);
      toast.error(`Error de autenticación: ${errorMessage}`);
      console.error('Error en autenticación:', error, errorDescription);
      
      // Clean up URL
      const cleanUrl = url.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  useEffect(() => {
    // Configurar el listener de cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log('Auth state changed:', event);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        // Clear any auth errors on successful authentication
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          setAuthError(null);
        }
      }
    );

    // Verificar si hay una sesión existente
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    // Limpiar suscripción al desmontar
    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    setAuthError(null);
    try {
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/auth',
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });

      if (error) {
        setAuthError(error.message);
        toast.error(`Error al iniciar sesión con Google: ${error.message}`);
        console.error('Error de autenticación con Google:', error);
      }
      
      // Note: No need to redirect here as OAuth flow will handle the redirect
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setAuthError(errorMessage);
      toast.error(`Error al iniciar sesión con Google: ${errorMessage}`);
      console.error('Error inesperado en Google Auth:', error);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    setAuthError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setAuthError(error.message);
        toast.error(`Error al iniciar sesión: ${error.message}`);
        console.error('Error de autenticación con email:', error);
      } else {
        toast.success('Inicio de sesión exitoso');
        navigate('/');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setAuthError(errorMessage);
      toast.error(`Error al iniciar sesión: ${errorMessage}`);
      console.error('Error inesperado en email auth:', error);
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    setAuthError(null);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) {
        setAuthError(error.message);
        toast.error(`Error al registrarse: ${error.message}`);
        console.error('Error de registro:', error);
      } else {
        toast.success('Registro exitoso. Verifica tu correo electrónico para confirmar tu cuenta.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setAuthError(errorMessage);
      toast.error(`Error al registrarse: ${errorMessage}`);
      console.error('Error inesperado en registro:', error);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Has cerrado sesión correctamente');
      navigate('/');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      toast.error(`Error al cerrar sesión: ${errorMessage}`);
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, user, loading, signInWithGoogle, signInWithEmail, signUpWithEmail, signOut, authError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

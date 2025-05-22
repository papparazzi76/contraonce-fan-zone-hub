
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const registrationFormSchema = z.object({
  fullName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Introduce un email válido"),
  ageGroup: z.enum(["adult", "minor"], {
    required_error: "Por favor selecciona tu grupo de edad",
  }),
  dateOfBirth: z.string({
    required_error: "Por favor indica tu fecha de nacimiento",
  }),
  favoriteClub: z.string().min(1, "Por favor indica tu club favorito"),
  acceptRules: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar las normas de la comunidad para continuar",
  }),
  parentalConsent: z.boolean().optional().default(false),
});

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

interface CommunityRegistrationProps {
  onRegistrationComplete: (userData: RegistrationFormValues) => void;
}

const CommunityRegistration: React.FC<CommunityRegistrationProps> = ({
  onRegistrationComplete,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      favoriteClub: "",
      acceptRules: false,
      parentalConsent: false,
    },
  });

  const ageGroup = form.watch("ageGroup");

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsSubmitting(true);
    try {
      // Here you would normally send the data to a backend service
      console.log("Registration data:", data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Registro completado",
        description: "Bienvenido a la comunidad 11ContraOnce",
      });
      
      onRegistrationComplete(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error en el registro",
        description: "Por favor intenta nuevamente más tarde",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-display">Únete a la Comunidad 11ContraOnce</CardTitle>
        <CardDescription>
          Completa tus datos para participar en nuestra comunidad y empezar a ganar puntos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre y apellidos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="ageGroup"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Grupo de edad</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="adult" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Mayor de edad (+18 años)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="minor" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Menor de edad (menor de 18 años)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha de nacimiento</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormDescription>
                    Esta información se usa para verificar tu grupo de edad
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="favoriteClub"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Club favorito</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre de tu equipo favorito" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {ageGroup === "minor" && (
              <FormField
                control={form.control}
                name="parentalConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Consentimiento parental
                      </FormLabel>
                      <FormDescription>
                        Confirmo que tengo el permiso de mis padres o tutores legales para registrarme.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="acceptRules"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Normas de la comunidad
                    </FormLabel>
                    <FormDescription>
                      He leído y acepto las {ageGroup === "adult" ? "normas para adultos" : "normas para menores"} de la comunidad 11ContraOnce.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-brand-green hover:bg-brand-green/90" disabled={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Completar registro"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t pt-4">
        <div className="text-sm">
          <h3 className="font-semibold mb-2">
            {ageGroup === "adult" ? "Normas para adultos:" : "Normas para menores:"}
          </h3>
          
          {ageGroup === "adult" ? (
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Contenido sin restricciones de temática futbolística.</li>
              <li>Posibilidad de participar en todas las actividades y sorteos.</li>
              <li>Responsabilidad en el lenguaje y contenidos compartidos.</li>
              <li>Premios disponibles: experiencias exclusivas, entradas VIP, merchandising oficial.</li>
            </ul>
          ) : (
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Contenido filtrado y adaptado a menores.</li>
              <li>Moderación adicional en comentarios y posts.</li>
              <li>Limitación horaria de participación (8:00 - 21:00).</li>
              <li>Premios disponibles: contenido digital, cromos virtuales, descuentos en tienda oficial.</li>
            </ul>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommunityRegistration;

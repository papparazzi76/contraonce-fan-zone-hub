
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const ReferralTab: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  // In a real app, this would come from the user's data
  const referralCode = "HINCHA-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const referralLink = `https://11contraonce.com/registro?ref=${referralCode}`;
  
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      
      toast({
        title: "¡Enlace copiado!",
        description: "Ya puedes compartirlo con tus amigos"
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error al copiar",
        description: "Intenta seleccionar y copiar manualmente",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-3">Programa de referidos</h3>
        <p className="text-gray-600">
          Invita a tus amigos a 11contraonce y gana 100 goles por cada amigo que se registre y realice su primera compra.
          Tu amigo también recibirá 100 goles de bienvenida adicionales.
        </p>
      </div>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <h4 className="font-semibold mb-4">Tu enlace de referido</h4>
          <div className="flex gap-2">
            <Input
              value={referralLink}
              className="flex-1"
              readOnly
            />
            <Button 
              onClick={handleCopyClick}
              className="bg-brand-green hover:bg-brand-green/90"
            >
              {copied ? "¡Copiado!" : "Copiar"}
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Comparte este enlace con tus amigos para ganar goles.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-4xl mb-4">👥</div>
          <h4 className="font-semibold mb-2">Amigos referidos</h4>
          <p className="text-3xl font-bold text-brand-green">0</p>
          <p className="text-sm text-gray-500 mt-1">Total amigos registrados</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-4xl mb-4">⚽</div>
          <h4 className="font-semibold mb-2">Goles ganados</h4>
          <p className="text-3xl font-bold text-brand-green">0</p>
          <p className="text-sm text-gray-500 mt-1">Total goles por referidos</p>
        </div>
      </div>
      
      <div className="mt-8 border-t pt-8">
        <h4 className="font-semibold mb-4">Cómo funciona</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Comparte tu enlace único con amigos y familiares.</li>
          <li>Cuando se registren usando tu enlace, quedarán vinculados a tu cuenta.</li>
          <li>Cuando realicen su primera compra, ambos recibiréis 100 goles automáticamente.</li>
          <li>No hay límite en el número de amigos que puedes referir.</li>
        </ol>
      </div>
    </div>
  );
};

export default ReferralTab;

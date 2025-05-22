
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImagePlus, PieChart } from "lucide-react";

const PostComposer: React.FC = () => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-3 border-2 border-brand-green">
            <AvatarFallback>TÚ</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">¿Qué quieres compartir?</span>
        </div>
        <Textarea 
          placeholder="Comparte tu opinión sobre el último partido, una adquisición para tu colección o cualquier tema futbolístico..." 
          className="mb-4"
          maxLength={240}
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-gray-500">
              <ImagePlus className="mr-2 size-4" />
              Foto
            </Button>
            <Button variant="outline" size="sm" className="text-gray-500">
              <PieChart className="mr-2 size-4" />
              Encuesta
            </Button>
          </div>
          <Button className="bg-brand-green hover:bg-brand-green/90">
            Publicar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostComposer;

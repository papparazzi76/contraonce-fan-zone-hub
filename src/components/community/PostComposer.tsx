
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path><line x1="16" x2="22" y1="5" y2="5"></line><line x1="19" x2="19" y1="2" y2="8"></line><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
              Foto
            </Button>
            <Button variant="outline" size="sm" className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
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

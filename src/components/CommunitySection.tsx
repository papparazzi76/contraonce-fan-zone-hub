
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

interface CommunitySectionProps {
  showFullContent?: boolean;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ showFullContent = false }) => {
  // Sample post data
  const posts = [
    {
      id: 1,
      user: { name: "Carlos M.", avatar: null, initials: "CM", clubColor: "bg-red-500" },
      content: "¿Alguien vio el partido de anoche? ¡Qué golazo en el minuto 89! Creo que es candidato a mejor gol de la temporada.",
      time: "hace 1 hora",
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      user: { name: "Laura S.", avatar: null, initials: "LS", clubColor: "bg-blue-500" },
      content: "Acabo de conseguir la equipación retro de la temporada 98/99. ¡Una joya para mi colección! 🏆",
      time: "hace 3 horas",
      likes: 45,
      comments: 12,
      shares: 5
    },
    {
      id: 3,
      user: { name: "Miguel A.", avatar: null, initials: "MA", clubColor: "bg-green-500" },
      content: "Mi predicción para la jornada: 3 victorias locales, 2 empates y 5 sorpresas. ¿Quién se anima a apostar?",
      time: "hace 5 horas",
      likes: 18,
      comments: 27,
      shares: 2
    }
  ];

  // Top users for leaderboard
  const topUsers = [
    { name: "Antonio R.", points: 1250, avatar: null, initials: "AR", clubColor: "bg-yellow-500" },
    { name: "Sofía M.", points: 980, avatar: null, initials: "SM", clubColor: "bg-purple-500" },
    { name: "Daniel P.", points: 875, avatar: null, initials: "DP", clubColor: "bg-red-600" },
    { name: "Elena G.", points: 740, avatar: null, initials: "EG", clubColor: "bg-blue-600" },
    { name: "Fernando L.", points: 705, avatar: null, initials: "FL", clubColor: "bg-green-600" }
  ];

  // Only show 3 posts on the homepage, show all in the full page
  const displayPosts = showFullContent ? posts : posts.slice(0, 3);

  return (
    <section className="bg-white py-16" id="comunidad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showFullContent && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-4">ÚNETE A LA COMUNIDAD</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparte tu pasión por el fútbol con miles de aficionados.
              Historias, debates, coleccionismo y más.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area (posts + composer) */}
          <div className="lg:col-span-2">
            {/* Post composer */}
            {showFullContent && (
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
            )}

            {/* Posts */}
            <div className="space-y-6">
              {displayPosts.map((post) => (
                <Card key={post.id} className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Avatar className={`h-10 w-10 mr-3 border-2 ${post.user.clubColor}`}>
                        {post.user.avatar ? (
                          <AvatarImage src={post.user.avatar} alt={post.user.name} />
                        ) : (
                          <AvatarFallback>{post.user.initials}</AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <p className="font-medium">{post.user.name}</p>
                        <p className="text-xs text-gray-500">{post.time}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <button className="flex items-center hover:text-brand-green transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        {post.likes} me gusta
                      </button>
                      <button className="flex items-center hover:text-brand-green transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        {post.comments} comentarios
                      </button>
                      <button className="flex items-center hover:text-brand-green transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                        {post.shares} compartidos
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {!showFullContent && (
              <div className="text-center mt-8">
                <Link to="/comunidad">
                  <Button className="bg-brand-green hover:bg-brand-green/90">
                    Ver todos los posts
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar with leaderboard */}
          {(showFullContent || window.innerWidth >= 1024) && (
            <div className="col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl mb-4">Tabla de Líderes</h3>
                  <div className="space-y-4">
                    {topUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-lg font-semibold w-6 text-center mr-2">{index + 1}</div>
                          <Avatar className={`h-10 w-10 mr-3 border-2 ${user.clubColor}`}>
                            {user.avatar ? (
                              <AvatarImage src={user.avatar} alt={user.name} />
                            ) : (
                              <AvatarFallback>{user.initials}</AvatarFallback>
                            )}
                          </Avatar>
                          <span className="font-medium">{user.name}</span>
                        </div>
                        <div className="bg-brand-gold bg-opacity-20 text-brand-gold px-2 py-1 rounded font-medium">
                          {user.points} pts
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-2 text-sm">Actividades que suman puntos:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
                        Publicar contenido: +5 ⚽
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
                        Recibir likes: +1 ⚽
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
                        Recibir/hacer comentarios: +2 ⚽
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
                        Fan de la semana: +200 ⚽
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostUser {
  name: string;
  avatar: string | null;
  initials: string;
  clubColor: string;
}

export interface Post {
  id: number;
  user: PostUser;
  content: string;
  time: string;
  likes: number;
  comments: number;
  shares: number;
}

interface CommunityPostProps {
  post: Post;
}

const CommunityPost: React.FC<CommunityPostProps> = ({ post }) => {
  return (
    <Card className="hover-scale">
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
  );
};

export default CommunityPost;

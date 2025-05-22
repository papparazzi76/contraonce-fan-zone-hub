
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Share } from "lucide-react";

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
            <Heart className="w-4 h-4 mr-1" />
            {post.likes} me gusta
          </button>
          <button className="flex items-center hover:text-brand-green transition-colors">
            <MessageSquare className="w-4 h-4 mr-1" />
            {post.comments} comentarios
          </button>
          <button className="flex items-center hover:text-brand-green transition-colors">
            <Share className="w-4 h-4 mr-1" />
            {post.shares} compartidos
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityPost;

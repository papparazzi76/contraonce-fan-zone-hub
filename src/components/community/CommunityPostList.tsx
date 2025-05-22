
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CommunityPost, { Post } from "./CommunityPost";

interface CommunityPostListProps {
  posts: Post[];
  showFullContent?: boolean;
}

const CommunityPostList: React.FC<CommunityPostListProps> = ({ 
  posts, 
  showFullContent = false 
}) => {
  // Only show 3 posts on the homepage, show all in the full page
  const displayPosts = showFullContent ? posts : posts.slice(0, 3);

  return (
    <div>
      <div className="space-y-6">
        {displayPosts.map((post) => (
          <CommunityPost key={post.id} post={post} />
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
  );
};

export default CommunityPostList;

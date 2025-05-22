
import React from "react";
import CommunityPostList from "./community/CommunityPostList";
import PostComposer from "./community/PostComposer";
import LeaderboardSidebar from "./community/LeaderboardSidebar";
import { samplePosts, topUsers } from "./community/communityData";

interface CommunitySectionProps {
  showFullContent?: boolean;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ showFullContent = false }) => {
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
            {showFullContent && <PostComposer />}

            {/* Posts */}
            <CommunityPostList posts={samplePosts} showFullContent={showFullContent} />
          </div>

          {/* Sidebar with leaderboard */}
          {(showFullContent || window.innerWidth >= 1024) && (
            <div className="col-span-1">
              <LeaderboardSidebar users={topUsers} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

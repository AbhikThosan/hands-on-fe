import React from "react";
import Events from "../../features/events";
import CommunityHelpPosts from "../../features/community-help-posts";
import Intro from "../../components/Intro";

const Home = () => {
  return (
    <>
      <Intro />
      <Events isHome={true} />
      <CommunityHelpPosts isHome={true} />
    </>
  );
};

export default Home;

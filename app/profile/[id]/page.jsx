"use client";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [profileName, setProfileName] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const profileResponse = await fetch(`/api/users/${params.id}`);
      const postsResponse = await fetch(`/api/users/${params.id}/posts`);

      const profileData = await profileResponse.json();
      const postsData = await postsResponse.json();

      setProfileName(profileData.userName);
      setPosts(postsData);
    };
    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={profileName}
      desc={`Welcome to ${profileName}'s personalized profile page. Explore ${profileName}'s exceptional prompts
      and be inspired by the power of their imagination.`}
      data={posts}
    />
  );
};

export default UserProfile;

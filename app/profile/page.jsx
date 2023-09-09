"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  const handleEdit = async (post) => {
    router.push(`/update-prompt?id=${post._id}`);


  };
  const handleDelete = async (post) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, [session]);


  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
    
  );
};

export default MyProfile;

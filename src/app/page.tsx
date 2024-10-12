"use client";
import { getMe } from "@/apis/services/auth";
import useFriendRequestNotification from "@/hooks/useFriendRequestSocket";
import { useEffect, useState } from "react";

const FriendRequestNotification = () => {
  const [receiverId, setReceiverId] = useState<number | null>(null);
  const notification = useFriendRequestNotification(receiverId || 0);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getMe();
      console.log(currentUser);
      setReceiverId(currentUser?.id);
    };

    fetchUser();
  }, []);

  return (
    <div>
      {notification ? (
        <div>
          <p>{notification}</p>
        </div>
      ) : (
        <p>Không có thông báo mới</p>
      )}
    </div>
  );
};

export default FriendRequestNotification;

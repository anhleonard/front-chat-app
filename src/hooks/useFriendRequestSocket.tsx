import { useEffect, useState } from "react";
import io from "socket.io-client";

const useFriendRequestNotification = (receiverId: number) => {
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    // Kết nối tới WebSocket server với namespace '/friend-request'
    const socket = io("http://localhost:3001/friend-request");

    // Lắng nghe sự kiện 'friendRequest:{receiverId}' từ phía server
    socket.on(
      `friendRequest:${receiverId}`,
      (data: { message: string; senderId: number }) => {
        setNotification(data.message);
        alert(`${data.message} from userid: ${data?.senderId}`);
      }
    );

    // Cleanup khi component unmount
    return () => {
      socket.disconnect();
    };
  }, [receiverId]);

  return notification;
};

export default useFriendRequestNotification;

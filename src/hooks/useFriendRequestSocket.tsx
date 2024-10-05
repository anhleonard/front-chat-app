import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useFriendRequestSocket = (userId: number) => {
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    // Kết nối tới namespace /friend-request của WebSocket server
    const socket = io("http://localhost:3000/friend-request");

    // Lắng nghe sự kiện friendRequest dành riêng cho userId này
    socket.on(`friendRequest:${userId}`, (data) => {
      //   setFriendRequests((prevRequests) => [...prevRequests, data]);
      alert(data.message); // Thông báo người dùng có lời mời kết bạn
    });

    // Đóng kết nối khi component unmount
    return () => {
      socket.disconnect();
    };
  }, [userId]);

  return friendRequests;
};

export default useFriendRequestSocket;

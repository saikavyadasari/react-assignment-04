import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  return (
    <div>
      <h3>User Details</h3>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetails;

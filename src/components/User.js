import React, {
  useEffect,
  useState,
} from "react";
import SkeletonProfile from "./skeleton/SkeletonProfile";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await res.json();
      setUser(data);
      console.log(data);
    }, 5000);
  }, []);
  return (
    <div className='user'>
      <h2>User</h2>
      {user && (
        <div>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <a href={user.website}>
            {user.website}
          </a>
        </div>
      )}
      {!user && <SkeletonProfile />}
    </div>
  );
};

export default User;

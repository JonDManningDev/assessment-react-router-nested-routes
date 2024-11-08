import React from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import users from "./data.json";

export const User = () => {
  const { userId } = useParams();

  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={`/users/${user.id}`} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users/${user.id}/posts`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>
          {/* Todo: Instead of displaying the individual components, you want to up date this to display the nested routes*/}
          <Outlet />
        </div>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default User;

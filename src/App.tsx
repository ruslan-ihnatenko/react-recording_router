import { NavLink, Outlet, useParams } from "react-router-dom";

const getLinkClassName = ({ isActive }: { isActive: boolean }) => `navbar-item ${isActive ? "is-active" : ""}`;

const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "red" : "black",
});

export const App = () => {
  const { userId } = useParams();

  return (
    <>
      <nav className="navbar is-light px-3">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src="/logo.svg" alt="MA" className="logo" />
          </NavLink>

          <NavLink
            to="/"
            className={getLinkClassName}
            style={getLinkStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/users"
            end
            className={getLinkClassName}
            style={getLinkStyle}
          >
            Users
          </NavLink>

          <NavLink
            to="/posts"
            className={getLinkClassName}
            style={getLinkStyle}
          >
            Posts
          </NavLink>

          {userId && (
            <NavLink
              to={`users/${userId}/posts`}
              className={getLinkClassName}
              style={getLinkStyle}
          >
            {`User ${userId} Posts`}
          </NavLink>
          )}

        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};

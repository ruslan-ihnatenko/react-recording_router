import { NavLink, Outlet } from "react-router-dom";

const getLinkClassName = ({ isActive }: { isActive: boolean }) => `navbar-item ${isActive ? "is-active" : ""}`;

const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "red" : "black",
});

export const App = () => {

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
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};

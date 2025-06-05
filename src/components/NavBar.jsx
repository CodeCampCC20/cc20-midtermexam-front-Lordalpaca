import { NavLink } from "react-router";

function NavBar() {
  const menus = [
    { id: 1, menu: "Start Here", path: "/" },
    { id: 2, menu: "Register", path: "/register" },
    { id: 3, menu: "Login", path: "/login" },
    { id: 4, menu: "To Do Page", path: "/todo" },
  ];
  return (
    <nav className="h-13 bg-gray-700 text-white flex item-center px-10 gap-6">
      {menus.map((item) => (
        <NavLink
          className="cursor-pointer hover:underline"
          key={item.id}
          to={item.path}
        >
          {item.menu}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;

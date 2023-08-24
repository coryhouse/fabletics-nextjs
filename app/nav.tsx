import NavLink from "./nav-link";

export default function Nav() {
  return (
    <nav>
      <NavLink path="/">Home</NavLink> |{" "}
      <NavLink path="/products">Products</NavLink>
    </nav>
  );
}

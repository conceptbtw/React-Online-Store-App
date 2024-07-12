import HeaderNavList from "./HeaderNavList";
import HeaderNavItem from "./HeaderNavItem";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-full p-4 grid grid-cols-3 gap-4 border-b">
      <h1 className="flex justify-start items-center">🛍️ Online Store</h1>
      <nav className="flex justify-center items-center">
        <HeaderNavList>
          <HeaderNavItem to="/" page="Home" />
          <HeaderNavItem to="/men" page="Men" />
          <HeaderNavItem to="/women" page="Women" />
          <HeaderNavItem to="/kids" page="Kids" />
        </HeaderNavList>
      </nav>
      <Search />
    </header>
  );
}

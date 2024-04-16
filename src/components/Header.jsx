import HeaderNavList from "./HeaderNavList";
import HeaderNavItem from "./HeaderNavItem";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center border-b">
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

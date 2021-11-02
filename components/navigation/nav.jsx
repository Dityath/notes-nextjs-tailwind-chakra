const Nav = ({ children }) => {
  return (
    <nav
      className="
      flex h-full
      "
    >
      <p className="w-60 h-full">Coba</p>
      <div
        className="
          w-full
        "
      >
        {children}
      </div>
    </nav>
  );
};

export default Nav;

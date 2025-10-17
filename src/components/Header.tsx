export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="dot" />
        <span className="brand">Catech.AI</span>
      </div>
      <nav className="header__nav">
        <a href="#feature">Feature</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
      </nav>
    </header>
  );
}

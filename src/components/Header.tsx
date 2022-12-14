import Style from "./Header.module.css";

export const Header = () => {
  return(
    <header className={Style.headerFeed}>
      <img src="/logo_ignite-feed.svg" alt="logo" />
      <h1>Ignite Feed</h1>
    </header>
  );
};
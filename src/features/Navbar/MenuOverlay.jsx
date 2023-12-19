import NavLinkItem from "./NavLinkItem";

export default function MenuOverlay({ menuItems }) {
  return (
    <ul className="flex flex-col py04 items-center">
      {menuItems.map((item) => (
        <NavLinkItem url={item.url} title={item.title} key={item.id} />
      ))}
    </ul>
  );
}

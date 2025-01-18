import Option from "./Option.jsx";

export default function OptionList({ menus }) {
  return (
    <div className="menu-upper">
      <ul className="menu-links">
        {menus.map((menu) => (
          <Option key={menu.id} option={menu.option} nameIcon={menu.nameIcon} />
        ))}
      </ul>
    </div>
  );
}

import { Menu } from "../Menu";
export const Header = () => {
  const tmpStyle = { width: "100%", display: "flex", justifyContent: "center" };

  return (
    <div style={tmpStyle}>
      <Menu />
      <h2>Header</h2>
    </div>
  );
};

export const Menu = () => {
  const tmpStyle = {
    width: "33%",
    backgroundColor: "light-gray",
    height: "100vh",
  };
  return (
    <div style={tmpStyle}>
      <h3>Menu</h3>
      <hr />
      <li>
        <ul>item 1</ul>
        <ul>item 2</ul>
        <ul>item 3</ul>
        <ul>item 4</ul>
      </li>
    </div>
  );
};

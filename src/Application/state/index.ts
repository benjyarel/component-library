import { atom } from "recoil";

export const isMenuOpen = atom({
  key: "is-menu-open",
  default: false,
});

export const selectedComponent =  atom({
  key: "selected-component",
  default: "",
});

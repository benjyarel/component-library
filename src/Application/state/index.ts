import { atom, atomFamily } from "recoil";

export const isMenuOpen = atom({
  key: "is-menu-open",
  default: false,
});

export const selectedComponentId =  atom({
  key: "selected-component-id",
  default: "",
});

export const componentIds = atom({
  key: "component-ids",
  default: [],
})

export const allComponents = atomFamily({
  key: 'all-components',
  default: {},
})
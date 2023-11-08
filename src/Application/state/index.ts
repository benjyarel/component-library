import { atom, selector } from "recoil";
import {components as configComponents} from '../../library';
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

export const componentSelected = selector({
  key: "component",
  get: ({get}) =>  {
    const componentId = get(selectedComponentId);

    return configComponents.find(cc => cc.id === componentId);

  }})
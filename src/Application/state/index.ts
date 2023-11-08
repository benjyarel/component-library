import { atom, selector } from "recoil";
import {components as configComponents} from '../../library';

export const isMenuOpen = atom({
  key: "isMenuOpen",
  default: false,
});

export const selectedComponentId =  atom({
  key: "selectedComponentId",
  default: "",
});

export const componentIds = atom({
  key: "componentIds",
  default: [],
})

export const componentConfig = selector({
  key: "componentConfig",
  get: ({get}) =>  {
    const componentId = get(selectedComponentId);

    return configComponents.find(cc => cc.id === componentId);

  }})
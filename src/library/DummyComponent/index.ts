

import { atom } from 'recoil';
import  { DummyComponent } from './DummyComponent';

const ID = "dummy-component"

export const config = {
  id: ID,
  componentName: 'Dummy Component',
  category: "buttons",
  component: DummyComponent,
  atom: atom({ key: ID })
}

export default config;
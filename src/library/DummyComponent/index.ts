

import { atom } from 'recoil';
import  { DummyComponent } from './DummyComponent';

const ID = "dummy-component"

export const config = {
  id: ID,
  componentName: 'Dummy Component',
  category: "buttons",
  atom: atom({
    key: ID,
    default: {
      component: DummyComponent,
    }
  })
}

export default config;
// src/stores/YourStore.js
import { Store } from 'pullstate';

const YourStore = new Store({
  // Define your initial state here
  key: 'value',
  // For example:
  counter: 0,
});

export default YourStore;
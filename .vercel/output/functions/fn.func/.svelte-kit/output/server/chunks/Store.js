import { w as writable } from "./index.js";
const store = writable({
  nav: "home",
  slug: ""
});
export {
  store as s
};

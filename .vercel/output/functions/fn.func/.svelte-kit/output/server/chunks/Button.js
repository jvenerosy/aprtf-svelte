import { c as create_ssr_component, e as escape } from "./index2.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-15igk8w{color:#fff;padding:10px 18px;font-size:16px;border:none;border-radius:5px}button.is-primary.svelte-15igk8w{background-color:#322E4E}button.is-primary.svelte-15igk8w:hover{background-color:#28253e;color:#fff}button.is-tertiary.svelte-15igk8w{background-color:#5241FB}button.is-tertiary.svelte-15igk8w:hover{background-color:#3b28fa;color:#fff}button.is-family.svelte-15igk8w{background-color:#D11B4C}button.is-family.svelte-15igk8w:hover{background-color:#ba1844;color:#fff}button.is-inverted.svelte-15igk8w{color:#5241FB;border:1px solid #5241FB}button.is-inverted.svelte-15igk8w:hover{border-color:#3b28fa}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Suivant" } = $$props;
  let { theme = "is-tertiary" } = $$props;
  let { disabled = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css);
  return `<button class="${"button " + escape(theme, true) + " svelte-15igk8w"}" ${disabled ? "disabled" : ""}>${escape(text)}
</button>`;
});
export {
  Button as B
};

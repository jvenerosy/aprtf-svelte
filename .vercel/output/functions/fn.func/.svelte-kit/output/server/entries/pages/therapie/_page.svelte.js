import { c as create_ssr_component, b as subscribe, f as set_store_value, v as validate_component } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { s as store } from "../../../chunks/Store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.section.svelte-81391h{text-align:center}@media screen and (min-width: 1024px){.section.svelte-81391h{text-align:left}}.top.svelte-81391h{background:#FFE5E9;padding-top:60px;padding-bottom:60px}.title.svelte-81391h{font-family:"Frank Ruhl Libre", serif}.title.is-1.svelte-81391h{font-size:40px;text-align:center;margin-bottom:36px}@media screen and (min-width: 1024px){.title.is-1.svelte-81391h{font-size:52px;text-align:left}}.title.is-2.svelte-81391h{font-size:34px;margin-bottom:36px}@media screen and (min-width: 1024px){.title.is-2.svelte-81391h{font-size:42px}}.name.svelte-81391h{font-size:20px;font-weight:600;margin-bottom:18px}.links.svelte-81391h{margin-top:20px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  set_store_value(store, $store.nav = "therapie", $store);
  set_store_value(store, $store.slug = "/therapie", $store);
  $$result.css.add(css);
  $$unsubscribe_store();
  return `<section class="section top svelte-81391h"><div class="container is-max-widescreen"><div class="columns"><div class="column is-5 has-text-centered"><picture><img src="images/family-illustration.svg" srcset="images/family-illustration.svg 262w" sizes="362px" alt=""></picture></div>
            <div class="column"><h1 class="title is-1 svelte-81391h">Vous êtes une famille, un couple</h1>
                <p class="subtitle">Consultation familiale et conjugale</p>
                <p class="parag">Thérapies familiale et conjugale systémiques sont des approches thérapeutiques qui ont montré leur efficacité sur les symptômes (rechutes, adhésion aux soins, réhospitalisation), les crises familiales et conjugales et sur la qualité des relations familiales, avec des effets à long terme reconnus.</p>
                <div class="links svelte-81391h">${validate_component(Button, "Button").$$render($$result, { theme: "is-primary", text: "Contacter" }, {}, {})}</div></div></div></div></section>
<section class="section bottom svelte-81391h"><div class="container is-max-desktop"><h2 class="title is-2 has-text-centered svelte-81391h">Qu’est-ce que la thérapie familiale et de couple ?</h2>
        <div class="columns pepites is-variable is-8"><div class="column is-7"><div class="rows"><div class="row"><picture><img src="images/pictos/house.svg" alt=""></picture></div>
                    <div class="row"><p class="name svelte-81391h">La thérapie familiale, une thérapie en famille</p>
                        <p class="parag">La thérapie familiale réunit tous les membres d’une famille dans un même cadre thérapeutique. Elle donne à chacun la possibilité de reconnaître l’impact des troubles sur les relations et le bien-être de tous. Elle vise à trouver, dans les relations, les ressources permettant de dépasser les problèmes</p></div></div></div>
            <div class="column"><div class="rows"><div class="row"><picture><img src="images/pictos/chat.svg" alt=""></picture></div>
                    <div class="row"><p class="name svelte-81391h">La thérapie de couple</p>
                        <p class="parag">La thérapie de couple explore avec ses membres les enjeux relationnels et les difficultés qu’ils créent dans les interactions quotidiennes et dans le projet de couple.</p></div></div></div></div></div>
</section>`;
});
export {
  Page as default
};

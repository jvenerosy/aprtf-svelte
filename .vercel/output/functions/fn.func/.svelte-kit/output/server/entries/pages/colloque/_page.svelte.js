import { c as create_ssr_component, b as subscribe, f as set_store_value, v as validate_component } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { s as store } from "../../../chunks/Store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.section.svelte-1t2ea9o{text-align:center}@media screen and (min-width: 1024px){.section.svelte-1t2ea9o{text-align:left}}.top.svelte-1t2ea9o{background:#CDC9FF;padding-top:60px;padding-bottom:60px}.title.svelte-1t2ea9o{font-family:"Frank Ruhl Libre", serif}.title.is-1.svelte-1t2ea9o{font-size:40px;text-align:center;margin-bottom:36px}@media screen and (min-width: 1024px){.title.is-1.svelte-1t2ea9o{font-size:52px;text-align:left}}.title.is-2.svelte-1t2ea9o{font-size:34px;margin-bottom:36px}@media screen and (min-width: 1024px){.title.is-2.svelte-1t2ea9o{font-size:42px}}.name.svelte-1t2ea9o{font-size:20px;font-weight:600;margin-bottom:18px}.links.svelte-1t2ea9o{margin-top:20px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  set_store_value(store, $store.nav = "home", $store);
  set_store_value(store, $store.slug = "/colloques", $store);
  $$result.css.add(css);
  $$unsubscribe_store();
  return `<section class="section top svelte-1t2ea9o"><div class="container is-max-widescreen"><div class="columns"><div class="column is-5 has-text-centered"><picture><img src="images/pro-illustration.svg" srcset="images/pro-illustration.svg 262w" sizes="362px" alt=""></picture></div>
            <div class="column"><h1 class="title is-1 svelte-1t2ea9o">Vous êtes un(e) professionnel(le)</h1>
                <p class="subtitle">Formations et événements</p>
                <p class="parag">Tous nos programmes visent au développement des compétences thérapeutiques des professionnels de santé, médico-sociaux et sociaux, ainsi que leur application et leur exercice en équipe au sein de leurs institutions.</p></div></div></div></section>
<section class="section bottom svelte-1t2ea9o"><div class="container is-max-desktop"><h2 class="title is-2 has-text-centered svelte-1t2ea9o">Intéressé(e) par une formation, un événement ou découvrir l’Aprtf ?</h2>
        <div class="columns pepites is-variable is-8"><div class="column"><div class="rows"><div class="row"><picture><img src="images/pictos/ampoule.svg" alt=""></picture></div>
                    <div class="row"><p class="name svelte-1t2ea9o">En savoir plus sur l’Aprtf et ses membres</p>
                        <p class="parag">Rencontrez l’équipe des fondateurs et des formateurs titulaires ou associés, et les valeurs portées par l’association depuis sa création en 1981</p></div>
                    <div class="row is-narrow links svelte-1t2ea9o"><a href="/association">${validate_component(Button, "Button").$$render($$result, { text: "Découvrir" }, {}, {})}</a></div></div></div>
            <div class="column is-6"><div class="rows"><div class="row"><picture><img src="images/pictos/calendar.svg" alt=""></picture></div>
                    <div class="row"><p class="name svelte-1t2ea9o">Dates et informations des journées cliniques et colloques</p>
                        <p class="parag">Nos journées cliniques thématiques sont pluriannuelles et sous forme de modules courts (1-2 jours). L’Aprtf organise également des colloques régulièrement</p></div>
                    <div class="row is-narrow links svelte-1t2ea9o"><a href="/journees-cliniques">${validate_component(Button, "Button").$$render($$result, { text: "Consulter" }, {}, {})}</a></div></div></div></div></div>
</section>`;
});
export {
  Page as default
};

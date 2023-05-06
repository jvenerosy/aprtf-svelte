import { c as create_ssr_component, e as escape, a as add_attribute, b as subscribe, f as set_store_value, d as each, v as validate_component } from "../../../chunks/index2.js";
import { s as store } from "../../../chunks/Store.js";
const ColloqueSlider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.card.svelte-1o5pkbw{border-radius:18px;overflow:hidden;transition:all 0.3s ease-in-out}.card.svelte-1o5pkbw:hover{box-shadow:0 0.5em 1em -0.125em rgba(10, 10, 10, 0.4), 0 0px 0 1px rgba(10, 10, 10, 0.1)}.card-content.svelte-1o5pkbw{position:relative}.tag.svelte-1o5pkbw{position:absolute;top:-15px;font-size:16px;font-family:"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;font-weight:bold}.tag.is-past.svelte-1o5pkbw{background:#E67089}.tag.is-present.svelte-1o5pkbw{background:#47D9A6}.tag.is-future.svelte-1o5pkbw{background:#D9A547}.date.svelte-1o5pkbw{font-size:14px;color:#6C757D}.lieu.svelte-1o5pkbw{font-size:16px}.titre.svelte-1o5pkbw{font-size:20px;font-weight:600;margin-top:18px}.is-fullheight.svelte-1o5pkbw{height:100%}',
  map: null
};
function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString("fr-FR", options);
}
const ColloqueSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { statut } = $$props;
  let { date_debut } = $$props;
  let { date_fin } = $$props;
  let { lieu } = $$props;
  let { titre } = $$props;
  let { slug } = $$props;
  let { illustration_colloque } = $$props;
  let dateDebut = formatDate(date_debut);
  let dateFin = formatDate(date_fin);
  let statutValue = statut === "past" ? "Terminé" : statut === "present" ? "Inscriptions ouvertes" : "A venir";
  if ($$props.statut === void 0 && $$bindings.statut && statut !== void 0)
    $$bindings.statut(statut);
  if ($$props.date_debut === void 0 && $$bindings.date_debut && date_debut !== void 0)
    $$bindings.date_debut(date_debut);
  if ($$props.date_fin === void 0 && $$bindings.date_fin && date_fin !== void 0)
    $$bindings.date_fin(date_fin);
  if ($$props.lieu === void 0 && $$bindings.lieu && lieu !== void 0)
    $$bindings.lieu(lieu);
  if ($$props.titre === void 0 && $$bindings.titre && titre !== void 0)
    $$bindings.titre(titre);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.illustration_colloque === void 0 && $$bindings.illustration_colloque && illustration_colloque !== void 0)
    $$bindings.illustration_colloque(illustration_colloque);
  $$result.css.add(css$1);
  return `<a href="${"/journees-cliniques/" + escape(slug, true)}" class="column is-4"><div class="card is-fullheight svelte-1o5pkbw"><div class="card-image"><figure class="image"><img${add_attribute("src", `http://155.133.131.137:8055/assets/${illustration_colloque}`, 0)} alt="Placeholder"></figure></div>
        <div class="card-content svelte-1o5pkbw"><p class="${"tag is-" + escape(statut, true) + " svelte-1o5pkbw"}">${escape(statutValue)}</p>
            <p class="date svelte-1o5pkbw">du ${escape(dateDebut)} au ${escape(dateFin)}</p>
            <p class="lieu svelte-1o5pkbw">${escape(lieu)}</p>
            <p class="titre svelte-1o5pkbw">${escape(titre)}</p></div></div>
</a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@media screen and (min-width: 1024px){.container.is-max-small.svelte-ezlxyi{max-width:60% !important}}.top.svelte-ezlxyi{background:#CDC9FF;color:#322E4E;padding-top:60px;padding-bottom:60px}.title.svelte-ezlxyi{font-family:"Frank Ruhl Libre", serif}.title.is-2.svelte-ezlxyi{font-size:34px}@media screen and (min-width: 1024px){.title.is-2.svelte-ezlxyi{font-size:42px}}.text.svelte-ezlxyi{text-align:left;margin-bottom:18px;font-size:16px}.colloques.svelte-ezlxyi{margin-top:36px}.bloc.svelte-ezlxyi{text-align:center;margin-bottom:36px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let colloques = [];
  set_store_value(store, $store.nav = "colloque", $store);
  set_store_value(store, $store.slug = "/journees-cliniques", $store);
  $$result.css.add(css);
  $$unsubscribe_store();
  return `<section class="section top svelte-ezlxyi"><div class="container is-max-widescreen"><div class="columns is-vcentered"><div class="column is-5 has-text-centered"><picture><img src="images/journee-illustration.svg" srcset="images/journee-illustration.svg 202w" sizes="202px" alt=""></picture></div>
            <div class="column"><h1 class="title is-1 svelte-ezlxyi">Dates et informations des journées cliniques et colloques</h1></div></div></div></section>
<section class="section"><div class="container is-max-small svelte-ezlxyi"><div class="bloc svelte-ezlxyi"><h2 class="title is-2 svelte-ezlxyi">Les colloques et journées cliniques de l’Aprtf</h2>
            <p class="subtitle">La transmission fait partie intégrante de l’ADN de l’APRTF.</p>
            <p class="text svelte-ezlxyi">Ainsi, depuis toujours, l’APRTF met un point d’honneur à organiser plusieurs fois par an des colloques, journées cliniques ou ateliers de travail et de réflexion.<br>Des thérapeutes de renommée mondiale tels que Salvador Minuchin, Gérard Salem, Boris Cyrulnik, Maurice Corcos, Mony Elkaïm, pour en citer quelques uns, nous ont fait l’immense honneur d’y présenter leurs travaux.</p>
            <p class="text svelte-ezlxyi">Plus récemment, Eia Asen, Stefano Cirillo, Joel Bergman, Ivan Eisler, Maurizio Andolfi, entre autres, ont contribué avec talent à la réussite de nos évènements cliniques.</p>
            <p class="text svelte-ezlxyi">Depuis 2022, l’APRTF propose des modules courts (1 à 2 jours de formation) sous la forme de journées cliniques thématiques. Ces journées, animées par les formateurs et des intervenants extérieurs, abordent les thèmes de l’adolescence, de l’interculturalité, de la fratrie, du couple, des modalités d’évaluation collaborative des interactions, etc...</p>
            <p class="text svelte-ezlxyi">Voici les prochains rendez-vous que nous vous proposons, nous vous invitons à vous inscrire au plus vite. Merci de prendre en compte les prérequis indispensables pour vous permettre d’accéder à ces journées.</p></div></div>
    <div class="container is-max-widescreen colloques svelte-ezlxyi"><div class="columns is-centered">${each(colloques, (item) => {
    return `${validate_component(ColloqueSlider, "ColloqueSlider").$$render($$result, Object.assign({}, item), {}, {})}`;
  })}</div></div>
</section>`;
});
export {
  Page as default
};

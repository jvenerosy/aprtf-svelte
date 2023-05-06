import { c as create_ssr_component, e as escape, a as add_attribute, b as subscribe, f as set_store_value, d as each, v as validate_component } from "../../../chunks/index2.js";
import { s as store } from "../../../chunks/Store.js";
const Membre_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.box.svelte-cqpasn.svelte-cqpasn{border-top:9px solid #000;font-family:"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif}.box.is-fondateur.svelte-cqpasn.svelte-cqpasn{border-color:#322E4E}.box.is-associe.svelte-cqpasn.svelte-cqpasn{border-color:#5241FB}.box.is-formateur.svelte-cqpasn.svelte-cqpasn{border-color:#D11B4C}.box.svelte-cqpasn .rounded.svelte-cqpasn{border-radius:50%;width:92px;height:92px;margin:0 auto;background-size:cover}.box.svelte-cqpasn .name.svelte-cqpasn{font-size:20px;font-weight:600;line-height:1em;margin-top:18px}.box.svelte-cqpasn .date.svelte-cqpasn{font-size:16px}.box.svelte-cqpasn .description.svelte-cqpasn{text-align:left}.box.is-fullheight.svelte-cqpasn.svelte-cqpasn{height:100%}',
  map: null
};
const Membre = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { date } = $$props;
  let { photo } = $$props;
  let { type } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.photo === void 0 && $$bindings.photo && photo !== void 0)
    $$bindings.photo(photo);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `<div class="${"box is-" + escape(type, true) + " is-fullheight svelte-cqpasn"}"><div class="columns is-vcentered"><div class="column is-4"><div class="rounded svelte-cqpasn"${add_attribute("style", `background-image: url(http://155.133.131.137:8055/assets/${photo});`, 0)}></div>
            <p class="name svelte-cqpasn">${escape(name)}</p>
            ${date ? `<p class="date svelte-cqpasn">${escape(date)}</p>` : ``}</div>
        <div class="column"><p class="description svelte-cqpasn">${escape(description)}</p></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@media screen and (min-width: 1024px){.container.is-max-small.svelte-wfb0to.svelte-wfb0to{max-width:60%}}.title.svelte-wfb0to.svelte-wfb0to{font-family:"Frank Ruhl Libre", serif}.title.is-2.svelte-wfb0to.svelte-wfb0to{font-size:34px}@media screen and (min-width: 1024px){.title.is-2.svelte-wfb0to.svelte-wfb0to{font-size:42px}}.parag.svelte-wfb0to.svelte-wfb0to{font-size:20px;font-weight:600;margin:1em 0}.text.svelte-wfb0to.svelte-wfb0to{text-align:left;margin-bottom:18px;font-size:16px}.text.is-3.svelte-wfb0to.svelte-wfb0to{font-weight:bold;text-align:center;font-size:20px}.association.svelte-wfb0to.svelte-wfb0to{background:#CDC9FF;color:#322E4E;padding-top:60px;padding-bottom:60px}.association.svelte-wfb0to img.svelte-wfb0to{filter:brightness(0) saturate(100%) invert(23%) sepia(91%) saturate(4339%) hue-rotate(243deg) brightness(100%) contrast(98%)}.association.svelte-wfb0to .title.svelte-wfb0to{color:#322E4E}.association.svelte-wfb0to .subtitle.svelte-wfb0to{color:#322E4E}.association.svelte-wfb0to .box.svelte-wfb0to{background:rgba(249, 249, 251, 0.5019607843);box-shadow:none;color:#322E4E}.bloc.svelte-wfb0to.svelte-wfb0to{text-align:center;margin-bottom:36px}.is-fullheight.svelte-wfb0to.svelte-wfb0to{height:100%}.pedago.svelte-wfb0to.svelte-wfb0to{background:#F9F9FB}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let membres = [];
  set_store_value(store, $store.nav = "association", $store);
  set_store_value(store, $store.slug = "/association", $store);
  $$result.css.add(css);
  $$unsubscribe_store();
  return `<section class="section association svelte-wfb0to"><div class="container is-max-widescreen"><div class="bloc svelte-wfb0to"><h2 class="title is-2 svelte-wfb0to">Les missions de l’Aprtf</h2>
            <p class="subtitle svelte-wfb0to">Fondée en 1981</p></div>
        <div class="pepites columns"><div class="column"><div class="box is-fullheight svelte-wfb0to"><picture><img src="images/pictos/megaphone.svg" srcset="images/pictos/megaphone.svg 38w" sizes="38px" alt="" class="svelte-wfb0to"></picture>
                    <h3 class="parag svelte-wfb0to">Développer la pratique des thérapies avec les familles</h3>
                    <p>Proposer des consultations de thérapie familiale et de couple, et promouvoir ces modalités de soins dans le service public de santé.</p></div></div>
            <div class="column"><div class="box is-fullheight svelte-wfb0to"><picture><img src="images/pictos/people.svg" srcset="images/pictos/people.svg 38w" sizes="38px" alt="" class="svelte-wfb0to"></picture>
                    <h3 class="parag svelte-wfb0to">Former les professionnels à la pratique systémique</h3>
                    <p>Proposer un parcours structuré de formation à la pratique thérapeutique familiale systémique pour les professionnels médicaux, psychologiques, paramédicaux et sociaux.</p></div></div>
            <div class="column"><div class="box is-fullheight svelte-wfb0to"><picture><img src="images/pictos/hospital.svg" srcset="images/pictos/hospital.svg 38w" sizes="38px" alt="" class="svelte-wfb0to"></picture>
                    <h3 class="parag svelte-wfb0to">Approfondir la recherche clinique</h3>
                    <p>Sur les processus thérapeutiques, les vécus expérientiels des familles et contribuer à la réflexion sur la pertinence des modèles systémiques.</p></div></div></div></div></section>
<section class="section"><div class="container is-max-small svelte-wfb0to"><div class="bloc svelte-wfb0to"><h2 class="title is-2 svelte-wfb0to">La philosophie de l’Aprtf</h2>
            <p class="subtitle">Developper la pratiques des équipes</p>
            <p class="text svelte-wfb0to">Les thérapeutes formateurs de l’Aprtf sont tous des professionnels, thérapeutes dans le service public de psychiatrie (générale ou infanto-juvénile).</p>
            <p class="text svelte-wfb0to">Ils ont participé à la création et au développement de nombreuses équipes de consultation publiques en thérapie familiale sur tout le territoire national.</p>
            <p class="text svelte-wfb0to">Ils travaillent au sein d’unités de thérapie familiale, qui proposent des consultations gratuites, rattachées aux hôpitaux publics, ouvertes aux familles souffrant de dysfonctionnements relationnels sévères, touchées par des troubles psychiques ou des maladies mentales, ou traversant de graves crises existentielles.</p>
            <p class="text svelte-wfb0to">Les thérapeutes et formateurs de l’Aprtf sont tous membres titulaires de la SFTF (Société française de thérapie familiale) et de l’EFTA (European family therapy association).</p></div></div></section>
<section class="section pedago svelte-wfb0to"><div class="container is-max-widescreen"><div class="bloc svelte-wfb0to"><h2 class="title is-2 svelte-wfb0to">L’équipe pédagogique</h2>
            <p class="text is-3 svelte-wfb0to">Membres fondateurs titulaires</p>
            <div class="columns is-multiline is-centered">${each(membres, (item) => {
    return `${item.type === "fondateur" ? `<div class="column is-6">${validate_component(Membre, "Membre").$$render($$result, Object.assign({}, item), {}, {})}
                </div>` : ``}`;
  })}</div>
            <p class="text is-3 svelte-wfb0to">Membres titulaires</p>
            <div class="columns is-multiline is-centered">${each(membres, (item) => {
    return `${item.type === "associe" ? `<div class="column is-6">${validate_component(Membre, "Membre").$$render($$result, Object.assign({}, item), {}, {})}
                </div>` : ``}`;
  })}</div>
            <p class="text is-3 svelte-wfb0to">Formateurs associés</p>
            <div class="columns is-multiline is-centered">${each(membres, (item) => {
    return `${item.type === "formateur" ? `<div class="column is-6">${validate_component(Membre, "Membre").$$render($$result, Object.assign({}, item), {}, {})}
                </div>` : ``}`;
  })}</div></div></div>
</section>`;
});
export {
  Page as default
};

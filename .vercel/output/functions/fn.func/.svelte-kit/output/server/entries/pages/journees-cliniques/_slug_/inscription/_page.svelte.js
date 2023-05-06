import { c as create_ssr_component, b as subscribe, f as set_store_value, e as escape, a as add_attribute, v as validate_component } from "../../../../../chunks/index2.js";
import "markdown-it";
import { B as Button } from "../../../../../chunks/Button.js";
import { s as store } from "../../../../../chunks/Store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.description p{margin-bottom:20px}.infos.svelte-1nn48r2 picture.svelte-1nn48r2 img.svelte-1nn48r2{display:block;border-radius:18px;margin-bottom:36px}.infos.svelte-1nn48r2 .box.svelte-1nn48r2.svelte-1nn48r2{background:#EAEBF0;box-shadow:none}.infos.svelte-1nn48r2 .ref.svelte-1nn48r2.svelte-1nn48r2{font-weight:bold}.infos.svelte-1nn48r2 .ref.svelte-1nn48r2.svelte-1nn48r2:not(:first-child){margin-top:36px}.infos.svelte-1nn48r2 .ref.is-titre.svelte-1nn48r2.svelte-1nn48r2{color:#5241FB;margin-bottom:36px}.box.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{transition:all 0.3s ease}.step.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{margin:36px 0}.step.svelte-1nn48r2 .total.svelte-1nn48r2.svelte-1nn48r2{width:100%;background:#CDC9FF;height:5px;position:relative}.step.svelte-1nn48r2 .current.svelte-1nn48r2.svelte-1nn48r2{position:absolute;top:0;left:0;height:100%;background:#5241FB;transition:all 1s ease}.label.is-2.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{font-weight:normal}.label.is-2.svelte-1nn48r2 span.svelte-1nn48r2.svelte-1nn48r2{color:#6C757D}form.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{text-align:left}form.svelte-1nn48r2 input.svelte-1nn48r2.svelte-1nn48r2:not(.radio, .checkbox),form.svelte-1nn48r2 select.svelte-1nn48r2.svelte-1nn48r2,form.svelte-1nn48r2 .select.svelte-1nn48r2.svelte-1nn48r2{width:100%}.fieldset.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{margin-bottom:36px}textarea.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{resize:none}.ref.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{font-weight:bold;margin-top:9px}.title.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{font-family:"Frank Ruhl Libre", serif}.title.is-1.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{font-size:40px;text-align:center}@media screen and (min-width: 1024px){.title.is-1.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{font-size:52px;text-align:left}}.title.is-2.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{font-size:34px}@media screen and (min-width: 1024px){.title.is-2.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{font-size:42px}}.subtitle.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{font-family:"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;font-weight:600}.link.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2{color:#5241FB}.link.svelte-1nn48r2.svelte-1nn48r2.svelte-1nn48r2:hover{text-decoration:underline}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let { data } = $$props;
  `http://155.133.131.137:8055/items/colloques/${data.slug}`;
  let colloque = {
    titre: "",
    description: "",
    date_debut: "",
    date_fin: "",
    statut: "",
    lieu: "",
    tarifs: "",
    chapo: "",
    illustration_colloque: "",
    administratif: "",
    animateurs: "",
    public: "",
    modalite: "",
    slug: ""
  };
  let answer = {
    firstname: "",
    lastname: "",
    phone_number: "",
    email: "",
    address: "",
    postal_code: "",
    city: "",
    connu: "",
    handicap: false,
    handicap_adapt: "",
    handicap_pedago: "",
    profession: "",
    etablissement: "",
    service: "",
    objectif: "",
    level: 0,
    connaissance: "",
    context: "",
    cadre: "",
    finance: 0,
    finance_payeur: "",
    finance_responsable: "",
    finance_mail: "",
    finance_address: ""
  };
  let step = 1;
  set_store_value(store, $store.nav = "colloque", $store);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_store();
  return `${$$result.head += `<!-- HEAD_svelte-1i1ickx_START -->${$$result.title = `<title>${escape(colloque.titre)}</title>`, ""}<meta name="robots" content="index follow"><!-- HEAD_svelte-1i1ickx_END -->`, ""}

<section class="section"><div class="container is-max-widescreen"><div class="columns is-variable is-8"><div class="column is-7"><div class="rows"><div class="row"><h1 class="title is-1 svelte-1nn48r2">Inscription à la journée clinique thématique </h1>
                        <p class="subtitle svelte-1nn48r2">Débute le ${escape(colloque.date_debut)} jusqu&#39;au ${escape(colloque.date_fin)}</p></div>
                    <div class="row"><div class="step svelte-1nn48r2"><div class="total svelte-1nn48r2"><div class="current svelte-1nn48r2" style="${"width: calc(" + escape(step - 1, true) + "*20%)"}"></div></div></div></div>
                    <div class="row"><div class="box svelte-1nn48r2"><div class="box-content"><form action="" class="svelte-1nn48r2">${`<div class="fieldset svelte-1nn48r2"><div class="field"><legend class="label">Comment vous appelez-vous ?</legend></div>
                                            <div class="field"><div class="columns"><div class="column"><label for="firstname" class="label is-2 svelte-1nn48r2">Prénom</label>
                                                        <input type="text" class="input svelte-1nn48r2" id="firstname"${add_attribute("value", answer.firstname, 0)}></div>
                                                    <div class="column"><label for="lastname" class="label is-2 svelte-1nn48r2">Nom</label>
                                                        <input type="text" class="input svelte-1nn48r2" id="lastname"${add_attribute("value", answer.lastname, 0)}></div></div></div></div>
                                        <div class="fieldset svelte-1nn48r2"><div class="field"><legend class="label">Comment vous contacter ?</legend></div>
                                            <div class="field"><label for="phone_number" class="label is-2 svelte-1nn48r2">Numéro de téléphone</label>
                                                <input type="text" class="input svelte-1nn48r2" id="phone_number"${add_attribute("value", answer.phone_number, 0)}></div>
                                            <div class="field"><label for="email" class="label is-2 svelte-1nn48r2">Mail</label>
                                                <input type="email" class="input svelte-1nn48r2" id="email"${add_attribute("value", answer.email, 0)}></div></div>
                                        <div class="fieldset svelte-1nn48r2"><div class="field"><legend class="label">Quelles sont vos coordonnées postales ?</legend></div>
                                            <div class="field"><label for="address" class="label is-2 svelte-1nn48r2">Adresse postale</label>
                                                <input type="text" class="input svelte-1nn48r2" id="address"${add_attribute("value", answer.address, 0)}></div>
                                            <div class="field"><div class="columns"><div class="column"><label for="postal_code" class="label is-2 svelte-1nn48r2">Code postal</label>
                                                        <input type="text" class="input svelte-1nn48r2" id="postal_code"${add_attribute("value", answer.postal_code, 0)}></div>
                                                    <div class="column"><label for="city" class="label is-2 svelte-1nn48r2">Ville</label>
                                                        <input type="text" class="input svelte-1nn48r2" id="city"${add_attribute("value", answer.city, 0)}></div></div></div></div>
                                        <div class="columns is-vcentered"><div class="column is-narrow"><a href="${"/journees-cliniques/" + escape(data.slug, true)}" class="link svelte-1nn48r2">Annuler</a></div>
                                            <div class="column"></div>
                                            <div class="column is-narrow"><div class="buttons">${validate_component(Button, "Button").$$render($$result, { text: "Suivant →" }, {}, {})}</div></div></div>`}
                                    ${``}
                                    ${``}
                                    ${``}
                                    ${``}
                                    ${``}</form></div></div></div></div></div>
            <div class="column infos svelte-1nn48r2"><div class="rows"><div class="row"><picture><img${add_attribute("src", `http://155.133.131.137:8055/assets/${colloque.illustration_colloque}`, 0)} alt="" class="svelte-1nn48r2"></picture></div>
                    <div class="row"><div class="box svelte-1nn48r2"><p class="ref is-titre svelte-1nn48r2">${escape(colloque.titre)}</p>
                            <p class="ref svelte-1nn48r2">Date</p>
                            <p>du ${escape(colloque.date_debut)} au ${escape(colloque.date_fin)}</p>
                            <p class="ref svelte-1nn48r2">Lieu du rendez-vous</p>
                            <p>${escape(colloque.lieu)}</p></div></div></div></div></div></div>
</section>`;
});
export {
  Page as default
};

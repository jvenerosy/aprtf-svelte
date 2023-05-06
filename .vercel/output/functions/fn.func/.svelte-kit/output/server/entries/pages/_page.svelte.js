import { c as create_ssr_component, b as subscribe, f as set_store_value, v as validate_component } from "../../chunks/index2.js";
import { B as Button } from "../../chunks/Button.js";
import { s as store } from "../../chunks/Store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.title.svelte-1qp9wfp.svelte-1qp9wfp{font-family:"Frank Ruhl Libre", serif}.title.is-1.svelte-1qp9wfp.svelte-1qp9wfp{font-size:40px;text-align:center}@media screen and (min-width: 1024px){.title.is-1.svelte-1qp9wfp.svelte-1qp9wfp{font-size:52px;text-align:left}}.title.is-2.svelte-1qp9wfp.svelte-1qp9wfp{font-size:34px}@media screen and (min-width: 1024px){.title.is-2.svelte-1qp9wfp.svelte-1qp9wfp{font-size:42px}}.title.is-3.svelte-1qp9wfp.svelte-1qp9wfp{font-size:28px}.parag.svelte-1qp9wfp.svelte-1qp9wfp{font-size:20px;font-weight:600;margin:1em 0}.association.svelte-1qp9wfp.svelte-1qp9wfp{background:#5241FB;color:#fff;padding-top:60px;padding-bottom:60px}.association.svelte-1qp9wfp .title.svelte-1qp9wfp{color:#fff}.association.svelte-1qp9wfp .subtitle.svelte-1qp9wfp{color:#fff}.association.svelte-1qp9wfp .box.svelte-1qp9wfp{background:-webkit-linear-gradient(top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);background:linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);box-shadow:none;color:#fff}hr.svelte-1qp9wfp.svelte-1qp9wfp{max-width:260px;margin:36px auto}.bloc.svelte-1qp9wfp.svelte-1qp9wfp{text-align:center;margin-bottom:36px}.is-fullheight.svelte-1qp9wfp.svelte-1qp9wfp{height:100%}.links.svelte-1qp9wfp.svelte-1qp9wfp{margin-top:20px}.qrv.svelte-1qp9wfp .box.svelte-1qp9wfp{padding-bottom:160px;background-repeat:no-repeat;background-position:90% bottom;transition:all 0.3s ease-in-out}.qrv.svelte-1qp9wfp .box.svelte-1qp9wfp:hover{box-shadow:0 0.5em 1em -0.125em rgba(10, 10, 10, 0.4), 0 0px 0 1px rgba(10, 10, 10, 0.1)}.qrv.svelte-1qp9wfp .family .box.svelte-1qp9wfp{border:1px solid #D11B4C;background-image:url("/images/family-illustration.svg")}.qrv.svelte-1qp9wfp .family a.svelte-1qp9wfp{color:#D11B4C}.qrv.svelte-1qp9wfp .family a.svelte-1qp9wfp:hover{text-decoration:underline}.qrv.svelte-1qp9wfp .pro .box.svelte-1qp9wfp{border:1px solid #5241FB;background-image:url("/images/pro-illustration.svg")}.qrv.svelte-1qp9wfp .pro a.svelte-1qp9wfp{color:#5241FB}.qrv.svelte-1qp9wfp .pro a.svelte-1qp9wfp:hover{text-decoration:underline}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  set_store_value(store, $store.nav = "home", $store);
  set_store_value(store, $store.slug = "/", $store);
  $$result.css.add(css);
  $$unsubscribe_store();
  return `<section class="section association svelte-1qp9wfp"><div class="container is-max-widescreen"><div class="columns is-vcentered"><div class="column is-5"><picture><img src="images/home-illustration.svg" alt=""></picture></div>
            <div class="column"><h1 class="title is-1 svelte-1qp9wfp">Association parisienne de recherche et de travail avec les familles</h1></div></div>
        <hr class="svelte-1qp9wfp">
        <div class="bloc svelte-1qp9wfp"><h2 class="title is-2 svelte-1qp9wfp">Les missions de l’Aprtf</h2>
            <p class="subtitle svelte-1qp9wfp">Fondée en 1981</p></div>
        <div class="pepites columns"><div class="column"><div class="box svelte-1qp9wfp"><picture><img src="images/pictos/megaphone.svg" srcset="images/pictos/megaphone.svg 38w" sizes="38px" alt=""></picture>
                    <h3 class="parag svelte-1qp9wfp">Développer la pratique des thérapies avec les familles</h3>
                    <p>Proposer des consultations de thérapie familiale et de couple, et promouvoir ces modalités de soins dans le service public de santé.</p></div></div>
            <div class="column"><div class="box svelte-1qp9wfp"><picture><img src="images/pictos/people.svg" srcset="images/pictos/people.svg 38w" sizes="38px" alt=""></picture>
                    <h3 class="parag svelte-1qp9wfp">Former les professionnels à la pratique systémique</h3>
                    <p>Proposer un parcours structuré de formation à la pratique thérapeutique familiale systémique pour les professionnels médicaux, psychologiques, paramédicaux et sociaux.</p></div></div>
            <div class="column"><div class="box svelte-1qp9wfp"><picture><img src="images/pictos/hospital.svg" srcset="images/pictos/hospital.svg 38w" sizes="38px" alt=""></picture>
                    <h3 class="parag svelte-1qp9wfp">Approfondir la recherche clinique</h3>
                    <p>Sur les processus thérapeutiques, les vécus expérientiels des familles et contribuer à la réflexion sur la pertinence des modèles systémiques.</p></div></div></div></div></section>
<section class="section qrv svelte-1qp9wfp"><div class="container is-max-widescreen"><div class="bloc svelte-1qp9wfp"><h2 class="title is-2 svelte-1qp9wfp">Que recherchez-vous ?</h2>
            <p class="subtitle">Les consultations familiales et les formations pour les professionnel(le)s</p></div>
        <div class="formations columns"><div class="column is-4 family"><div class="box is-fullheight svelte-1qp9wfp"><h3 class="title is-3 svelte-1qp9wfp">Vous êtes une famille, un couple</h3>
                    <p class="subtitle">Consultation familiale et conjugale</p>
                    <p class="text">Nous proposons des thérapies pour accompagner les difficultés familiales (enfants, adolescents, adultes, fratries) ou de couple. Bienvenue dans cette section pour en savoir plus ou faire une demande.</p>
                    <div class="links columns is-vcentered is-mobile svelte-1qp9wfp"><div class="column is-narrow">${validate_component(Button, "Button").$$render($$result, { theme: "is-family", text: "Contacter" }, {}, {})}</div>
                        <div class="column"><a href="/therapie" class="svelte-1qp9wfp">En savoir plus</a></div></div></div></div>
            <div class="column pro"><div class="box is-fullheight svelte-1qp9wfp"><h3 class="title is-3 svelte-1qp9wfp">Vous êtes un(e) professionnel(le)</h3>
                    <p class="subtitle">Formations et journées cliniques</p>
                    <p class="text">Nous développons depuis de nombreuses années des formations longues à la pratique systémique, en thérapie familiale et en thérapie multifamiliale, à destination des professionnels des champs sanitaire, social &amp;médico-social, et de nombreux événements cliniques thématiques. Si vous voulez en savoir plus, bienvenue dans cette section.</p>
                    <div class="links columns is-vcentered is-mobile svelte-1qp9wfp"><div class="column is-narrow"><a href="/colloque" class="svelte-1qp9wfp">${validate_component(Button, "Button").$$render($$result, { text: "Découvrir" }, {}, {})}</a></div>
                        <div class="column"><a href="/journees-cliniques" class="svelte-1qp9wfp">Voir les événements</a></div></div></div></div></div></div>
</section>`;
});
export {
  Page as default
};

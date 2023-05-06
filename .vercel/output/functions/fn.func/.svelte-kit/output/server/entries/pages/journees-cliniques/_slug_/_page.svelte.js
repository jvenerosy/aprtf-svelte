import { c as create_ssr_component, b as subscribe, f as set_store_value, e as escape, a as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
import "markdown-it";
import { B as Button } from "../../../../chunks/Button.js";
import { s as store } from "../../../../chunks/Store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.description p{margin-bottom:20px}.infos.svelte-1vts10x picture.svelte-1vts10x img.svelte-1vts10x{display:block;border-radius:18px;margin:0 auto 36px}.infos.svelte-1vts10x .ref.svelte-1vts10x.svelte-1vts10x{font-weight:bold}.infos.svelte-1vts10x .ref.svelte-1vts10x.svelte-1vts10x:not(:first-child){margin-top:36px}.infos.svelte-1vts10x .placement.svelte-1vts10x.svelte-1vts10x{margin-top:9px;margin-bottom:-50px}.title.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{font-family:"Frank Ruhl Libre", serif}.title.is-1.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{font-size:40px;text-align:center}@media screen and (min-width: 1024px){.title.is-1.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{font-size:52px;text-align:left}}.title.is-2.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{font-size:34px}@media screen and (min-width: 1024px){.title.is-2.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{font-size:42px}}.title.is-3.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{font-size:28px}.text a{color:#5241FB}.text a:hover{color:#5241FB;text-decoration:underline}.subtitle.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{font-family:"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;font-weight:600}.utile.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{background:#CDC9FF}.tag.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{font-size:16px;font-family:"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;font-weight:bold;margin:0 0 18px 0}.tag.is-past.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{background:#E67089}.tag.is-present.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{background:#47D9A6}.tag.is-future.svelte-1vts10x.svelte-1vts10x.svelte-1vts10x{background:#D9A547}',
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
  let statut;
  set_store_value(store, $store.nav = "colloque", $store);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_store();
  return `${$$result.head += `<!-- HEAD_svelte-1i1ickx_START -->${$$result.title = `<title>${escape(colloque.titre)}</title>`, ""}<meta name="robots" content="index follow"><!-- HEAD_svelte-1i1ickx_END -->`, ""}

<section class="section"><div class="container is-max-widescreen"><div class="columns is-variable is-8"><div class="column is-7"><div class="rows"><div class="row"><h1 class="title is-1 svelte-1vts10x">${escape(colloque.titre)}</h1>
                        <span class="${"tag is-" + escape(colloque.statut, true) + " svelte-1vts10x"}">${escape(statut)}</span></div>
                    <div class="row"><p class="chapo">${escape(colloque.chapo)}</p>
                        <div class="description"><!-- HTML_TAG_START -->${colloque.description}<!-- HTML_TAG_END --></div></div>
                    <div class="row">${`${`${``}`}`}</div></div></div>
            <div class="column infos svelte-1vts10x"><div class="rows"><div class="row"><picture><img${add_attribute("src", `http://155.133.131.137:8055/assets/${colloque.illustration_colloque}`, 0)} alt="" class="svelte-1vts10x"></picture></div>
                    <div class="row"><div class="box"><p class="ref svelte-1vts10x">Inscription ouvertes</p>
                            <p>du ${escape(colloque.date_debut)} au ${escape(colloque.date_fin)}</p>
                            <p class="ref svelte-1vts10x">Tarifs</p>
                            <!-- HTML_TAG_START -->${colloque.tarifs}<!-- HTML_TAG_END -->
                            <p class="ref svelte-1vts10x">Lieu du rendez-vous</p>
                            <p>${escape(colloque.lieu)}</p>
                            <div class="columns placement is-centered svelte-1vts10x"><div class="column has-text-centered"><a href="/">${validate_component(Button, "Button").$$render(
    $$result,
    {
      theme: "is-inverted",
      text: "Télécharger le programme"
    },
    {},
    {}
  )}</a></div></div></div></div></div></div></div></div></section>
<section class="section utile svelte-1vts10x"><div class="container is-max-widescreen"><h2 class="title is-2 svelte-1vts10x">Informations utiles</h2>
        <div class="columns is-variable is-6"><div class="column"><div class="rows"><div class="row"><picture class="svelte-1vts10x"><img src="/images/pictos/email.svg" alt="logo" class="svelte-1vts10x"></picture></div>
                    <div class="row"><p class="subtitle svelte-1vts10x">Information et inscription administrative</p>
                        <div class="text"><!-- HTML_TAG_START -->${colloque.administratif}<!-- HTML_TAG_END --></div></div></div></div>   
            <div class="column"><div class="rows"><div class="row"><picture class="svelte-1vts10x"><img src="/images/pictos/contact.svg" alt="logo" class="svelte-1vts10x"></picture></div>
                    <div class="row"><p class="subtitle svelte-1vts10x">Nom et coordonnées du/des animateurs</p>
                        <div class="text"><!-- HTML_TAG_START -->${colloque.animateurs}<!-- HTML_TAG_END --></div></div></div></div>   
            <div class="column"><div class="rows"><div class="row"><picture class="svelte-1vts10x"><img src="/images/pictos/public.svg" alt="logo" class="svelte-1vts10x"></picture></div>
                    <div class="row"><p class="subtitle svelte-1vts10x">Public concerné</p>
                        <div class="text"><!-- HTML_TAG_START -->${colloque.public}<!-- HTML_TAG_END --></div></div></div></div>   
            <div class="column"><div class="rows"><div class="row"><picture class="svelte-1vts10x"><img src="/images/pictos/modalite.svg" alt="logo" class="svelte-1vts10x"></picture></div>
                    <div class="row"><p class="subtitle svelte-1vts10x">Modalité d&#39;inscription</p>
                        <div class="text"><!-- HTML_TAG_START -->${colloque.modalite}<!-- HTML_TAG_END --></div></div></div></div></div></div>
</section>`;
});
export {
  Page as default
};

import { c as create_ssr_component, a as add_attribute, b as subscribe, e as escape, v as validate_component, d as each } from "../../chunks/index2.js";
import { B as Button } from "../../chunks/Button.js";
import { s as store } from "../../chunks/Store.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "footer.svelte-1edtslk.svelte-1edtslk{background-color:#322E4E;color:#fff;font-size:16px;text-align:center;padding:9px}@media screen and (min-width: 1024px){footer.svelte-1edtslk.svelte-1edtslk{text-align:left;padding:18px}}li.svelte-1edtslk.svelte-1edtslk{margin-bottom:1em}.logo.svelte-1edtslk.svelte-1edtslk{display:block;margin:0 0 18px 0}.columns.svelte-1edtslk.svelte-1edtslk{padding-top:18px;padding-bottom:36px}@media screen and (min-width: 1024px){.first.svelte-1edtslk.svelte-1edtslk{margin-right:36px}}.top.svelte-1edtslk a.svelte-1edtslk{font-weight:bold}.bottom.svelte-1edtslk.svelte-1edtslk{border-top:1px solid #fff}.bottom.svelte-1edtslk a.svelte-1edtslk{text-decoration:underline}.parag.svelte-1edtslk.svelte-1edtslk{font-size:14px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<footer class="svelte-1edtslk"><div class="container"><div class="columns top svelte-1edtslk"><div class="column first svelte-1edtslk"><div class="rows"><div class="row"><picture class="logo svelte-1edtslk"><img src="/images/logo-inverted.svg" srcset="/images/logo-inverted.svg 360w, /images/logo-inverted.svg 306w" sizes="(max-width: 1023px) 360px, 306px" alt="Logo APRTF"></picture></div>
                    <div class="row"><p class="parag svelte-1edtslk">Association loi 1901 agréée par la formation permanente.<br>
                            La certification qualité a été délivrée au titre de la catégorie Actions de formation.<br>
                            Organisme Référencé Datadock - 0050392<br>
                            Siret : 333 869 428 00032 - code APE 9499Z<br>
                            Déclaration d&#39;activité enregistrée sous le numéro 11 75 41 412 75 auprès de la Préfecture de la région Île de France.</p></div></div></div>
            <ul class="column"><li class="svelte-1edtslk"><a href="/association" class="svelte-1edtslk">Association</a></li>
                <li class="svelte-1edtslk"><a href="/journees-cliniques" class="svelte-1edtslk">Journées cliniques</a></li></ul>
            <ul class="column">
                <li class="svelte-1edtslk"><a href="/therapie" class="svelte-1edtslk">Thérapie familiale &amp; couple</a></li></ul>
            <ul class="column">
                <li class="svelte-1edtslk"><a href="/contact" class="svelte-1edtslk">Contact</a></li></ul></div>
        <div class="columns bottom svelte-1edtslk"><div class="column">© 2023 A.P.R.T.F</div>
            <div class="column"><a href="/#" class="svelte-1edtslk">Tarifs et conditions</a></div>
            <div class="column"><a href="/#" class="svelte-1edtslk">Règlement intérieur</a></div>
            <div class="column">Membre de <a href="/#" class="svelte-1edtslk">l&#39;EFTA</a> et la <a href="/#" class="svelte-1edtslk">SFTF</a></div></div></div>
</footer>`;
});
const InputText_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "input.svelte-zu7waj{padding:10px 18px;font-size:16px;border:1px solid #CED4DA;border-radius:5px}input.svelte-zu7waj:focus{outline:none;border-color:#5241FB}",
  map: null
};
const InputText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = "Tapez votre recherche" } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$2);
  return `<input type="text"${add_attribute("placeholder", placeholder, 0)} class="svelte-zu7waj">`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-vzf6ld.svelte-vzf6ld{padding:9px;font-size:16px;background:#fff;width:100%;position:fixed;top:0;left:0;z-index:100}@media screen and (min-width: 1024px){header.svelte-vzf6ld.svelte-vzf6ld{padding:18px 36px;height:auto}}header.fixed.svelte-vzf6ld.svelte-vzf6ld{-webkit-box-shadow:0px 0px 15px 4px rgba(0, 0, 0, 0.37);box-shadow:0px 0px 15px 4px rgba(0, 0, 0, 0.2);position:fixed}header.is-open.svelte-vzf6ld.svelte-vzf6ld{height:100%}@media screen and (min-width: 1024px){header.is-open.svelte-vzf6ld.svelte-vzf6ld{height:auto}}.logo.svelte-vzf6ld.svelte-vzf6ld{margin-right:18px}li.svelte-vzf6ld.svelte-vzf6ld{margin:0 12px 12px;font-size:16px}@media screen and (min-width: 1024px){li.svelte-vzf6ld.svelte-vzf6ld{text-align:center;margin-bottom:0}}li.svelte-vzf6ld a.svelte-vzf6ld:hover,li.svelte-vzf6ld a.active.svelte-vzf6ld{color:#5241FB}.burger-menu.svelte-vzf6ld.svelte-vzf6ld{position:absolute;top:22px;right:10px}.burger.svelte-vzf6ld.svelte-vzf6ld{display:block;width:30px;height:20px;position:relative;cursor:pointer;border:none;background:none}.burger.svelte-vzf6ld span.svelte-vzf6ld{display:block;width:100%;height:2px;background-color:#322E4E;position:absolute;left:0;transition:all 0.3s ease-in-out}.burger.svelte-vzf6ld span.svelte-vzf6ld:nth-child(1){top:0}.burger.svelte-vzf6ld span.svelte-vzf6ld:nth-child(2){top:50%;transform:translateY(-50%)}.burger.svelte-vzf6ld span.svelte-vzf6ld:nth-child(3){bottom:0}.burger.is-open.svelte-vzf6ld span.svelte-vzf6ld:nth-child(1){transform:rotate(45deg) translateX(0%);transform-origin:top center;top:50%}.burger.is-open.svelte-vzf6ld span.svelte-vzf6ld:nth-child(2){opacity:0}.burger.is-open.svelte-vzf6ld span.svelte-vzf6ld:nth-child(3){transform-origin:bottom center;transform:rotate(-45deg) translateX(-5%);bottom:50%}.container.svelte-vzf6ld.svelte-vzf6ld{position:relative;height:100%}.search.svelte-vzf6ld.svelte-vzf6ld{display:none !important;position:absolute;width:100%;left:0;bottom:0;background:#F0EFFF;padding:36px 18px}@media screen and (min-width: 1024px){.search.svelte-vzf6ld.svelte-vzf6ld{position:relative;width:auto;left:auto;bottom:auto;background:none;padding:0}}.search.svelte-vzf6ld p.svelte-vzf6ld{font-size:20px;margin-bottom:30px;font-weight:600}@media screen and (min-width: 1024px){.search.svelte-vzf6ld p.svelte-vzf6ld{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  $$result.css.add(css$1);
  $$unsubscribe_store();
  return `<header class="${escape("", true) + " " + escape("", true) + " svelte-vzf6ld"}"><div class="container svelte-vzf6ld"><div class="columns is-vcentered"><div class="column is-narrow logo svelte-vzf6ld"><div class="columns is-mobile is-vcentered"><div class="column"><picture><img src="/images/logo.svg" srcset="/images/logo.svg 153w, /images/logo.svg 306w" sizes="(max-width: 1023px) 153px, 306px" alt="Logo APRTF"></picture></div></div></div>
            <div class="${"column menu " + escape("is-hidden-touch", true)}"><ul class="columns nav"><li class="column is-narrow svelte-vzf6ld"><a href="/" class="${["svelte-vzf6ld", $store.nav === "home" ? "active" : ""].join(" ").trim()}">Accueil</a></li>
                    <li class="column is-narrow svelte-vzf6ld"><a href="/association" class="${["svelte-vzf6ld", $store.nav === "association" ? "active" : ""].join(" ").trim()}">Association</a></li>
                    <li class="column is-narrow svelte-vzf6ld"><a href="/journees-cliniques" class="${["svelte-vzf6ld", $store.nav === "colloque" ? "active" : ""].join(" ").trim()}">Journées cliniques</a></li>
                    <li class="column is-narrow svelte-vzf6ld"><a href="/therapie" class="${["svelte-vzf6ld", $store.nav === "therapie" ? "active" : ""].join(" ").trim()}">Thérapie</a></li>
                    <li class="column is-narrow svelte-vzf6ld"><a href="/contact" class="${["svelte-vzf6ld", $store.nav === "contact" ? "active" : ""].join(" ").trim()}">Contact</a></li></ul></div>
            <div class="${"column search is-narrow " + escape("is-hidden-touch", true) + " svelte-vzf6ld"}"><p class="is-hidden-desktop svelte-vzf6ld">Vous n’avez pas trouvé ? Essayé de rechercher ici.</p>
                <form action="">${validate_component(InputText, "InputText").$$render($$result, { placeholder: "Tapez votre recherche" }, {}, {})}
                    ${validate_component(Button, "Button").$$render($$result, { text: "Rechercher" }, {}, {})}</form></div>
            <div class="burger-menu is-hidden-desktop svelte-vzf6ld"><button id="burger" aria-label="Burger Menu" class="${"burger " + escape("", true) + " svelte-vzf6ld"}"><span class="svelte-vzf6ld"></span>
                    <span class="svelte-vzf6ld"></span>
                    <span class="svelte-vzf6ld"></span></button></div></div></div>
</header>`;
});
const global = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".slot.svelte-cpi2el{padding-top:50px}@media screen and (min-width: 1024px){.slot.svelte-cpi2el{padding-top:100px}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let seo = [];
  $$result.css.add(css);
  $$unsubscribe_store();
  return `${$$result.head += `<!-- HEAD_svelte-8zw4su_START -->${each(seo, (item) => {
    return `${item.url === $store.slug ? `${$$result.title = `<title>${escape(item.title)}</title>`, ""}
			<meta name="description"${add_attribute("content", item.description, 0)}>
			<meta name="robots" content="index follow">

			<link rel="canonical" href="${"https://aprtfformations.fr" + escape(item.url, true)}">
			<meta property="og:locale" content="fr_FR">
			<meta property="og:type" content="website">
			<meta property="og:title"${add_attribute("content", item.title, 0)}>
			<meta property="og:description"${add_attribute("content", item.description, 0)}>
			<meta property="og:url" content="https://aprtfformations.fr/">
			<meta property="og:site_name" content="Aprtf">
			<meta name="twitter:card" content="summary">
			<meta name="twitter:description"${add_attribute("content", item.description, 0)}>
			<meta name="twitter:title"${add_attribute("content", item.title, 0)}>
			<meta name="twitter:site" content="@Aprtf">
			<meta name="twitter:creator" content="@Aprtf">` : ``}`;
  })}<!-- HEAD_svelte-8zw4su_END -->`, ""}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="slot svelte-cpi2el">${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

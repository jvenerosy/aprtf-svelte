import { c as create_ssr_component, b as subscribe, f as set_store_value, a as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { s as store } from "../../../chunks/Store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.section.svelte-3rqno7.svelte-3rqno7{text-align:center}@media screen and (min-width: 1024px){.section.svelte-3rqno7.svelte-3rqno7{text-align:left}}.top.svelte-3rqno7.svelte-3rqno7{background:#EAEBF0;padding-top:60px;padding-bottom:60px}.title.svelte-3rqno7.svelte-3rqno7{font-family:"Frank Ruhl Libre", serif}.title.is-1.svelte-3rqno7.svelte-3rqno7{font-size:40px;text-align:center;margin-bottom:36px}@media screen and (min-width: 1024px){.title.is-1.svelte-3rqno7.svelte-3rqno7{font-size:52px;text-align:left}}.title.is-2.svelte-3rqno7.svelte-3rqno7{font-size:34px;margin-bottom:36px}@media screen and (min-width: 1024px){.title.is-2.svelte-3rqno7.svelte-3rqno7{font-size:42px}}.label.is-2.svelte-3rqno7.svelte-3rqno7{font-weight:normal}form.svelte-3rqno7.svelte-3rqno7{text-align:left}.fieldset.svelte-3rqno7.svelte-3rqno7{margin-bottom:36px}textarea.svelte-3rqno7.svelte-3rqno7{resize:none}.ref.svelte-3rqno7.svelte-3rqno7{font-weight:bold;margin-top:9px}address.svelte-3rqno7.svelte-3rqno7{font-style:normal}address.svelte-3rqno7 a.svelte-3rqno7{color:#5241FB}address.svelte-3rqno7 a.svelte-3rqno7:hover{text-decoration:underline}.row.svelte-3rqno7.svelte-3rqno7{margin-bottom:36px}.explication.svelte-3rqno7.svelte-3rqno7{margin-top:90px}.explication.svelte-3rqno7 p.svelte-3rqno7{margin-bottom:9px}.validation.svelte-3rqno7.svelte-3rqno7{text-align:center}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  set_store_value(store, $store.nav = "contact", $store);
  set_store_value(store, $store.slug = "/contact", $store);
  let contact = {
    lastname: "",
    firstname: "",
    email: "",
    raison: "",
    message: ""
  };
  $$result.css.add(css);
  $$unsubscribe_store();
  return `<section class="section top svelte-3rqno7"><div class="container is-max-widescreen"><div class="columns"><div class="column is-5 has-text-centered"><picture><img src="images/pro-illustration.svg" srcset="images/contact-illustration.svg 250w" sizes="250px" alt=""></picture></div>
            <div class="column"><h1 class="title is-1 svelte-3rqno7">Besoin d’informations complémentaires ?</h1>
                <p class="parag">Vous souhaitez vous rendre à l’Aprtf ou nous contacter ? On vous donne toutes ces informations ici.</p></div></div></div></section>
<section class="section bottom svelte-3rqno7"><div class="container is-max-desktop"><div class="rows"><div class="row svelte-3rqno7"><div class="columns"><div class="column">${`<h2 class="title is-2 svelte-3rqno7">Nous contacter</h2>
                        <form class="svelte-3rqno7"><div class="fieldset svelte-3rqno7"><div class="field"><legend class="label">Vos informations</legend>
                                    <div class="columns"><div class="column"><label class="label is-2 svelte-3rqno7" for="firstname">Prénom</label>
                                            <div class="control"><input id="firstname" class="input" type="text" placeholder="Votre prénom"${add_attribute("value", contact.firstname, 0)}></div></div>
                                        <div class="column"><label class="label is-2 svelte-3rqno7" for="lastname">Nom</label>
                                            <div class="control"><input id="lastname" class="input" type="text" placeholder="Votre nom"${add_attribute("value", contact.lastname, 0)}></div></div></div></div>
                                <div class="field"><label class="label is-2 svelte-3rqno7" for="email">Votre mail</label>
                                    <div class="control"><input id="email" class="input" type="email" placeholder="Votre email"${add_attribute("value", contact.email, 0)}></div></div></div>
                            <div class="fieldset svelte-3rqno7"><legend class="label">Pour quelle raison nous contactez vous ?</legend>
                                <div class="field"><div class="control"><div class="select" id="raison"><select name="raison"><option value="" disabled selected>La raison de votre contact</option><option value="1">Raison 1</option><option value="2">Raison 2</option><option value="3">Raison 3</option></select></div></div></div>
                                <div class="field"><label for="message" class="label is-2 svelte-3rqno7">Message</label>
                                    <div class="control"><textarea id="message" name="message" class="textarea svelte-3rqno7" placeholder="Votre message">${""}</textarea></div></div>
                                ${``}</div>
                            <div class="field"><div class="control">${validate_component(Button, "Button").$$render($$result, { text: "Envoyer" }, {}, {})}</div></div></form>`}
                        <hr>
                        <address class="svelte-3rqno7"><p class="ref svelte-3rqno7">Adresse</p>
                            <p>16 rue de l’Evangile – 75018 Paris</p>
                            <p class="ref svelte-3rqno7">Téléphone</p>
                            <p><a href="tel:+33143381698" class="svelte-3rqno7">01 43 38 16 98</a></p>
                            <p class="ref svelte-3rqno7">Mail</p>
                            <p><a href="mailto:contact@aprtfformations.fr" class="svelte-3rqno7">contact@aprtfformations.fr</a></p></address></div>
                    <div class="column"><iframe title="Localisation de l'APRTF" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.206113230414!2d2.3599578765283344!3d48.89240897133683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ffcceb3a2e3%3A0xa4efe7e4ef97fc55!2sAprtf!5e0!3m2!1sfr!2sit!4v1682666495810!5m2!1sfr!2sit" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div>
            <div class="row svelte-3rqno7"><div class="columns"><div class="column"><h2 class="title is-2 svelte-3rqno7">Informations pratiques</h2>
                        <picture><img src="images/contact-illustration-2.svg" srcset="images/contact-illustration-2.svg 250w" sizes="250px" alt=""></picture></div>
                    <div class="column"><div class="explication svelte-3rqno7"><p class="ref svelte-3rqno7">Restauration</p>
                            <p class="svelte-3rqno7">Les repas ne sont pas compris dans le tarif de formation.<br>
                                Il est possible de se restaurer à proximité ou bien sur place (cuisine équipée d’un micro-onde, réfrigérateur, vaisselle).<br>
                                Le café et le thé son accessibles gratuitement.
                            </p>
                            <p class="ref svelte-3rqno7">Pendant les sessions, penser à prendre</p>
                            <p class="svelte-3rqno7">Papier, stylo et éventuellement votre ordinateur portable.<br>
                                L’espace est équipé d’un accès Wifi, d’ordinateurs portables, de téléviseurs, d’un rétro-projecteur et de Paperboards.
                            </p>
                            <p class="ref svelte-3rqno7">Les locaux de l’APRTF sont accessibles</p>
                            <p class="svelte-3rqno7">Par le Métro : Marx Dormoy ou La Chapelle.<br>
                                Par les Bus 35 &amp;  60 (arrêt Place de Torcy ou Place Hébert) et 65 (arrêt Boucry).
                            </p>
                            <p class="svelte-3rqno7">Accès routier : Par la Porte de la Chapelle<br>
                                Les formations sont assurées en présentiel.
                            </p></div></div></div></div></div></div>
</section>`;
});
export {
  Page as default
};

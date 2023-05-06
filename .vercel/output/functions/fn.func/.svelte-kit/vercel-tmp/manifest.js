export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/contact-illustration-2.svg","images/contact-illustration.svg","images/family-illustration.svg","images/home-illustration.svg","images/journee-illustration.svg","images/logo-inverted.svg","images/logo.svg","images/photos/asen-eia.png","images/photos/asen_eia@2x.png","images/photos/dafna-waintrater.png","images/photos/dafna-waintrater@2x.png","images/photos/didier-destal.png","images/photos/didier-destal@2x.png","images/photos/elida-romano.png","images/photos/elida-romano@2x.png","images/photos/elisabeth-bouana.png","images/photos/elisabeth-bouana@2x.png","images/photos/flore-chevet.png","images/photos/flore-chevet@2x.png","images/photos/imen-fradi.png","images/photos/imen-fradi@2x.png","images/photos/jean-clair-bouley.png","images/photos/jean-clair-bouley@2x.png","images/photos/jean-desmarquet.png","images/photos/jean-desmarquet@2x.png","images/photos/marie-christine-beaucousin.png","images/photos/marie-christine-beaucousin@2x.png","images/photos/noel-pommepuy.png","images/photos/noel-pommepuy@2x.png","images/photos/partick-chaltiel.png","images/photos/partick-chaltiel@2x.png","images/photos/rafella-cucciniello.png","images/photos/rafella-cucciniello@2x.png","images/pictos/ampoule.svg","images/pictos/calendar.svg","images/pictos/chat.svg","images/pictos/check-circle.svg","images/pictos/contact.svg","images/pictos/email.svg","images/pictos/hospital.svg","images/pictos/house.svg","images/pictos/megaphone.svg","images/pictos/modalite.svg","images/pictos/people.svg","images/pictos/public.svg","images/pro-illustration.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.087bfdd3.js","app":"_app/immutable/entry/app.93c1a361.js","imports":["_app/immutable/entry/start.087bfdd3.js","_app/immutable/chunks/index.441be7e6.js","_app/immutable/chunks/singletons.f0804645.js","_app/immutable/chunks/index.c6575a81.js","_app/immutable/entry/app.93c1a361.js","_app/immutable/chunks/index.441be7e6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/association",
				pattern: /^\/association\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/colloque",
				pattern: /^\/colloque\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/journees-cliniques",
				pattern: /^\/journees-cliniques\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/journees-cliniques/[slug]",
				pattern: /^\/journees-cliniques\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/journees-cliniques/[slug]/inscription",
				pattern: /^\/journees-cliniques\/([^/]+?)\/inscription\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/therapie",
				pattern: /^\/therapie\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

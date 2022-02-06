const STATIC_RESOURCES_BASE_URL = "https://static.experimentalplayers.org/";
const ICONS_BASE_URL = STATIC_RESOURCES_BASE_URL + "/icons";

const sections = [
	{
		title: 'Spotify',
		description: 'Una fantastica playlist che raccoglie tutti i gusti musicali degli <b>Experimental Players</b>!',
		link: '#',
		icon: ICONS_BASE_URL + '/Spotify.png',
		type: "is-success"
	},
	{
		title: 'Hub',
		description: '<i>Coming Soon!</i>',
		link: 'https://hub.experimentalplayers.org',
		icon: ICONS_BASE_URL + '/Hub.png',
		type: "is-warning"
	},
	{
		title: 'Shop',
		description: 'Vestiti alla moda con il drip ufficiale 🥵 di EXP.',
		link: 'https://shop.experimentalplayers.org',
		icon: ICONS_BASE_URL + '/Shop.png',
		type: "is-light"
	},
	{
		title: 'Instagram',
		description: 'Seguici per non perderti mai un post.',
		link: 'https://instagram.com/experimentalplayers',
		icon: ICONS_BASE_URL + '/Instagram.png',
		type: "is-danger"
	},
	{
		title: 'GitHub',
		description: 'I nostri progetti, sempre e solo <i>open-source</i>.',
		link: 'https://github.com/experimental-players/',
		icon: ICONS_BASE_URL + '/GitHub.png',
		type: "is-dark"
	},
];
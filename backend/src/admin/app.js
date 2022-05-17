import Logo from "./extensions/logo.png";
import MenuLogo from "./extensions/menu-logo.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: favicon,
    },
    locales: ["uk", "en"],
    menu: {
      logo: MenuLogo,
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};

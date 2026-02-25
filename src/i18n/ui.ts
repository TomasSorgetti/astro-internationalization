export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "en";

export const ui = {
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      blog: "Blog",
      services: "Servicios",
      contact: "Contacto",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    hero: {
      title: "Internacionalización de sitios web con Astro",
    },
    language: {
      picker: "Cambiar idioma",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      services: "Services",
      contact: "Contact",
    },
    footer: {
      rights: "All rights reserved.",
    },
    hero: {
      title: "Internationalization of websites with Astro",
    },
    language: {
      picker: "Switch language",
    },
  },
} as const;

import authorAvatar from "../../public/images/author/devbertskie.png";
export const siteConfig = {
  name: "Eastwoods Equestrian",
  description:
    "Eastwoods provides bespoke care and expert training, crafting confident champions in show jumping and eventing with 5-star vetted quality.",
  author: "devbertskie",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/devbertskie",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;

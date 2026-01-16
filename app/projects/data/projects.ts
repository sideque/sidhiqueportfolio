import { ProjectType } from "@shared/types";

export const projects: ProjectType[] = [
  {
    _id: "1",
    title: "MobiVault",
    slug: "mobivault", // ✅ lowercase
    desc: "Mobile e-commerce website for buying and selling used smartphones.",
    src: "/images/projects/mobivault.png",
    alt: "MobiVault Project",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    tag: ["E-commerce", "Backend"],
    github: "https://github.com/sideque/mobivault",
    website: "https://www.mobivault.shop",
    href: "",
    ariaLabel: ""
  },

  {
    _id: "2",
    title: "MobiVault",
    slug: "mobivault", 
    desc: "Mobile e-commerce website with admin dashboard for buying and selling used smartphones.",
    src: "/images/projects/mobivaultadmin.png",
    alt: "MobiVault Project",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    tag: ["E-commerce", "Backend"],
    github: "https://www.mobivault.shop/admin/dashboard",
    website: "https://www.mobivault.shop",
    href: "",
    ariaLabel: ""
  },
];

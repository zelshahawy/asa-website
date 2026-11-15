export const association = {
  name: "Arab Student Association",
  university: "The University of Chicago",
  instagram: "https://www.instagram.com/arabatuchicago/",
  mailingList: "https://lists.uchicago.edu/web/info/arabstudentassociation",
  blueprint: "https://blueprint.uchicago.edu/organization/arabstudentassociation",
};

export const communityLinks = [
  {
    number: "01",
    name: "Follow along",
    detail: "@arabatuchicago",
    description: "Event announcements and moments from the community.",
    href: association.instagram,
    kind: "instagram",
  },
  {
    number: "02",
    name: "Get the next invitation",
    detail: "The ASA mailing list",
    description: "Subscribe through the University’s mailing-list page.",
    href: association.mailingList,
    kind: "mail",
  },
  {
    number: "03",
    name: "Find us on campus",
    detail: "ASA on Blueprint",
    description: "Our profile in UChicago’s student organization directory.",
    href: association.blueprint,
    kind: "campus",
  },
] as const;

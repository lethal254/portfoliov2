export const portfolio = {
  name: "portfolio",
  type: "document",
  title: "Portfolio",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "githubLink",
      type: "url",
      title: "Github Link",
    },
    {
      name: "liveLink",
      type: "url",
      title: "Live Link",
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}

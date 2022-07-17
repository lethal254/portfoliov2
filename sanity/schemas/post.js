export const post = {
  title: "Blog Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Blog Title",
      name: "blogtitle",
      type: "string",
    },
    {
      name: "postedAt",
      title: "Posted At",
      type: "datetime",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "blogtitle",
        maxLength: 96,
      },
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    { name: "shortDescription", title: "Short Description", type: "text" },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image", options: { hotspot: true } },
      ],
    },
  ],
}

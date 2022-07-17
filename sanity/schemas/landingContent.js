export const landingContent = {
  name: "landingContent",
  title: "Landing page content",
  type: "document",
  fields: [
    { name: "tagline", title: "Hero tag line", type: "string" },
    { name: "introduction", title: "Brief Introduction", type: "string" },
    {
      name: "cv",
      title: "CV",
      type: "file",
      options: { storeOriginalFilename: true },
    },
    {
      name: "aboutme",
      title: "About me",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "contactContent",
      title: "Contact content",
      type: "string",
    },
  ],
}

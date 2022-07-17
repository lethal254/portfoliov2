export const previousJobs = {
  name: "previousJobs",
  title: "Previous Jobs",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "company", title: "Company Name", type: "string" },
    { name: "fromDate", title: "From", type: "datetime" },
    { name: "toDate", title: "To", type: "datetime" },
    {
      name: "description",
      title: "Description",
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

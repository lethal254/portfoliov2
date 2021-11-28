// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: "herotext",
      type: "document",
      title: "Herotext",
      fields: [{ name: "herotext", type: "string", title: "Herotext" }],
    },
    {
      name: "abouttext",
      type: "document",
      title: "Abouttext",
      fields: [{ name: "abouttext", type: "text", title: "Abouttext" }],
    },
    {
      name: "servicestext",
      type: "document",
      title: "Servicestext",
      fields: [
        { name: "graphics", type: "text", title: "Graphic Design" },
        { name: "web", type: "text", title: "Web Development" },
        { name: "social", type: "text", title: "Social media marketing" },
      ],
    },
    {
      name: "projects",
      type: "document",
      title: "Projects",
      fields: [
        { name: "image", type: "image", title: "Image" },
        {
          name: "techs",
          type: "array",
          title: "Technologies",
          of: [{ type: "string" }],
        },
        { name: "githublink", type: "string", title: "Githublink" },
        { name: "livelink", type: "string", title: "Livelink" },
      ],
    },
  ]),
})

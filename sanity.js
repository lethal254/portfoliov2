import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "sgg7l14r",
  dataset: "production",
  useCdn: true,
})

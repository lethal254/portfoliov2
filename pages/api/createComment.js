import sanityClient from "@sanity/client"

const client = sanityClient({
  projectId: "sgg7l14r",
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
})

export default async function createComment(req, res) {
  console.log(req.body)
  const { name, email, comment, _id } = JSON.parse(req.body)
  try {
    const response = await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Couldn't submit comment", error })
  }
  console.log("Comment submitted")
  return res.status(200).json({ message: "Comment submitted" })
}

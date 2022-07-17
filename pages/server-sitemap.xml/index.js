import { getServerSideSitemap } from "next-sitemap"
import client from "../../sanity"

export const getServerSideProps = async (ctx) => {
  const blogs = await client.fetch(`*[_type=="post"]{
        _id,
        blogtitle,
        postedAt,
        slug,
        author -> {
        name
      },
      tags[] -> {
        title
      } ,
      body,
      shortDescription,
      mainImage{
        asset ->{
          url
        }
      }
      }`)
  const fields = blogs.map((blog) => ({
    loc: `https://bennycodes.me/blog/${blog.slug.current}`,
    lastmod: new Date().toISOString(),
  }))
  return getServerSideSitemap(ctx, fields)
}
export default function Site() {
  return <></>
}

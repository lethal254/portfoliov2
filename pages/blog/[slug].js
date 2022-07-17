import React from "react"
import Image from "next/image"
import client from "../../sanity"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
const builder = imageUrlBuilder(client)
import Head from "next/head"

function urlFor(source) {
  return builder.image(source)
}

const SingleBlog = ({ blog }) => {
  console.log(blog)
  const convertTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp)

    return date.toString().slice(0, 15)
  }
  const myPortableTextComponents = {
    types: {
      image: ({ value }) => {
        console.log(value.asset._ref)
        return (
          <Image
            src={urlFor(value).toString()}
            alt='Blog image'
            width='100%'
            height='70%'
            objectFit='cover'
            layout='responsive'
          />
        )
      },
      callToAction: ({ value, isInline }) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className='callToAction'>{value.text}</div>
        ),
    },
  }
  return (
    <div className='w-[90%]  md:w-[80%] lg:w-[60%] mx-auto'>
      <Head>
        <title>{blog.blogtitle}</title>
        <meta name='description' content={blog.shortDescription} />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'></meta>
      </Head>
      <Image
        src={blog.mainImage.asset.url}
        alt='Blog image'
        width='100%'
        height='70%'
        objectFit='cover'
        layout='responsive'
      />
      <div className='flex items-center mt-4'>
        <h4 className='text-gray-400'>{convertTimeStamp(blog.postedAt)}</h4>
        <div className='md:w-[70%] lg:w-[70%] w-[70%] h-[0.1px] bg-gray-50 bg-opacity-20 ml-2'></div>
      </div>
      <h1 className='text-4xl text-gray-200 mt-4 mb-4'>{blog.blogtitle}</h1>
      <article className='text-lg text-gray-200 leading-loose tracking-wider portable'>
        <PortableText value={blog.body} components={myPortableTextComponents} />
      </article>
      <div className='mb-4 mt-4 flex space-x-4 '>
        {blog.tags.map((tag) => (
          <>
            <p key={tag.title} className='text-base text-gray-400'>
              {tag.title}
            </p>
          </>
        ))}
      </div>
      <form>
        <input
          type='text'
          className='w-[100%] bg-slate-800 rounded-md outline-none text-gray-200 p-4 mt-4 mb-4'
          placeholder='Your name'
        />
        <textarea
          id=''
          cols='30'
          rows='5'
          placeholder='Comment'
          className='w-[100%] bg-slate-800 rounded-md outline-none text-gray-200 p-4 mt-4 mb-4'></textarea>
        <button className='button'>Add comment</button>
      </form>
    </div>
  )
}

export default SingleBlog

export const getServerSideProps = async ({ req, res, query }) => {
  const { slug } = query
  const blog = await client.fetch(`*[_type=="post" && slug.current=="${slug}"]{
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

  return {
    props: {
      blog: blog[0],
    },
  }
}

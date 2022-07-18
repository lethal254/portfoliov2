import React, { useState } from "react"
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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify({ name, email, comment, _id: blog._id }),
      })
      setSubmitted(true)
    } catch (error) {
      console.log(error)
      setSubmitted(false)
    }
  }

  const convertTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp)

    return date.toString().slice(0, 15)
  }
  const myPortableTextComponents = {
    types: {
      image: ({ value }) => {
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
    <div className='w-[100%] md:w-[80%] lg:w-[60%] mx-auto'>
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
      <h1 className='text-2xl text-gray-200 mt-4 mb-4'>{blog.blogtitle}</h1>
      <article className='text-gray-300 leading-loose tracking-wider portable'>
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
      {submitted ? (
        <div className='min-h-[10vh] bg-slate-800 p-4 text-gray-400 mb-4'>
          <h3 className='text-xl text-gray-200'>Comment submitted</h3>
          <p>Your comment has been submitted and will be approved shortly</p>
        </div>
      ) : (
        <form onSubmit={onFormSubmit}>
          <input
            required
            type='text'
            className='w-[100%] bg-slate-800 rounded-md outline-none text-gray-200 p-4 mt-4 mb-4'
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type='email'
            className='w-[100%] bg-slate-800 rounded-md outline-none text-gray-200 p-4 mt-4 mb-4'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            required
            id=''
            cols='30'
            rows='5'
            placeholder='Comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='w-[100%] bg-slate-800 rounded-md outline-none text-gray-200 p-4 mt-4 mb-4'></textarea>
          <button className='button'>Add comment</button>
        </form>
      )}
      {/* comments */}
      {blog.comments.length > 0 && (
        <article className='min-h-[20vh] border-2 border-gray-200 border-opacity-20 p-4 text-gray-400 mb-6 mt-10'>
          <h3 className='text-xl text-gray-200 mb-4 '>Comments</h3>
          {blog.comments.map((comment) => (
            <div key={comment._id} className='flex mt-2 flex-col md:flex-row'>
              <div>
                <h4 className='text-sky-600 mr-4'>{comment.name}</h4>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}
        </article>
      )}
    </div>
  )
}

export default SingleBlog

export const getServerSideProps = async ({ req, res, query }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  )
  const { slug } = query
  const blog =
    await client.fetch(`*[_type=="post" && slug.current=="${slug}"][0]{
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
  'comments': *[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true
  ],
  mainImage{
    asset ->{
      url
    }
  }
  }`)

  return {
    props: {
      blog,
    },
  }
}

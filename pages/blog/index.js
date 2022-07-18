import React, { useEffect, useState } from "react"
import Image from "next/image"
import Loader from "../../components/Loader"
import Link from "next/link"
import client from "../../sanity"
import Head from "next/head"

const Blog = ({ blogs }) => {
  const [showPreloader, setShowPreloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false)
    }, 3000)
  })

  const convertTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp)

    return date.toString().slice(0, 15)
  }

  if (showPreloader) {
    return (
      <>
        <Head>
          <title>My Blog</title>
          <meta
            name='description'
            content='I write content revolving around the js ecosystem. Learn React, NextJs, NodeJs and other cool stuff with me.'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'></meta>
        </Head>
        <Loader />
      </>
    )
  } else {
    return (
      <div className='h-[70vh]  lg:min-h-[60vh]'>
        <Head>
          <title>My Blog</title>
          <meta
            name='description'
            content='I write content revolving around the js ecosystem. Learn React, NextJs, NodeJs and other cool stuff with me.'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'></meta>
        </Head>
        <div className='flex items-center  '>
          <h2 className='text-gray-200 md:text-2xl lg:text-3xl text-xl'>
            Blog
          </h2>
          <div className='md:w-[40%] lg:w-[20%] w-[50%] h-[0.1px] bg-gray-50 bg-opacity-20 ml-2'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6  '>
          {blogs.map((blog) => {
            return (
              <>
                <Link
                  href={`/blog/${blog.slug.current}`}
                  passHref
                  key={blog.slug.current}>
                  <div className='w-full cursor-pointer hover:-translate-y-1 transition-all duration-150 ease-linear p-1'>
                    <Image
                      src={blog.mainImage.asset.url}
                      alt='Blog image'
                      width='100%'
                      height='70%'
                      objectFit='cover'
                      layout='responsive'
                      priority
                    />
                    <h4 className='text-gray-400 mt-3'>
                      {convertTimeStamp(blog.postedAt)}
                    </h4>
                    <h2 className='text-gray-200 text-2xl'>{blog.blogtitle}</h2>
                    <p className='text-gray-300'>{blog.shortDescription}</p>
                  </div>
                </Link>
              </>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Blog

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  )
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

  return {
    props: {
      blogs: blogs,
    },
  }
}

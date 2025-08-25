import React from 'react'
import Hero from '../../components/Others/Hero'
import { blogHero } from '../../assets/heroData'
import BlogItems from '../../components/BlogContent/BlogItems'

const Blog = () => {
  return (
    <div>
      <Hero blogHero={blogHero} />
      <BlogItems />
    </div>
  )
}

export default Blog

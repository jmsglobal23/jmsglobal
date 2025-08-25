import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';
import { blogData } from '../../assets/blogData';

const BlogItems = () => {
  const [hoveredBlog, setHoveredBlog] = useState(null);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to estimate reading time
  const getReadingTime = (content) => {
    const wordCount = content.split(' ').length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute
    return `${readingTime} min read`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 !py-12 !px-4 sm:!px-6 lg:!px-8 relative overflow-hidden">
      {/* Animated Fruit Background Elements */}
      <div className="absolute top-10 left-5 animate-bounce opacity-20">
        <span className="text-5xl">🍎</span>
      </div>
      <div className="absolute top-1/3 right-8 animate-pulse opacity-20">
        <span className="text-6xl">🍊</span>
      </div>
      <div className="absolute bottom-1/4 left-10 animate-bounce opacity-20">
        <span className="text-7xl">🍋</span>
      </div>
      <div className="absolute top-20 right-1/4 animate-pulse opacity-20">
        <span className="text-5xl">🍇</span>
      </div>
      <div className="absolute bottom-40 right-16 animate-bounce opacity-20">
        <span className="text-6xl">🍉</span>
      </div>

      <div className="max-w-7xl !mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center !mb-12 sm:!mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            Our <span className="text-transparent bg-clip-text bg-emerald-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 !max-w-3xl !mx-auto !mb-6">
            Discover the latest insights, tips, and news about fresh produce and agricultural exports
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-400 !mx-auto rounded-full"></div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredBlog(blog.id)}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              {/* Blog Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/emerald/white?text=Blog+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg !p-3 text-center">
                  <div className="text-sm font-bold text-emerald-600">
                    {new Date(blog.date).getDate()}
                  </div>
                  <div className="text-xs text-gray-600">
                    {new Date(blog.date).toLocaleString('en-US', { month: 'short' })}
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="!p-6">
                <div className="flex items-center text-gray-600 !mb-4 text-sm">
                  <div className="flex items-center !mr-4">
                    <FaCalendarAlt className="text-emerald-600 !mr-2" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="text-emerald-600 !mr-2" />
                    <span>{getReadingTime(blog.content)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 !mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <div className="flex items-center text-gray-600 !mb-4 text-sm">
                  <FaUser className="text-emerald-600 !mr-2" />
                  <span>{blog.author}</span>
                </div>

                <div 
                  className="text-gray-700 !mb-6 line-clamp-3 prose prose-emerald max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' 
                  }}
                />

                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors"
                >
                  Read More
                  <FaArrowRight className="!ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
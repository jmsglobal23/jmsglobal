import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../../assets/blogData';
import { FaCalendarAlt, FaUser, FaClock, FaArrowLeft, FaShare, FaLeaf, FaBookOpen } from 'react-icons/fa';

const BlogDetails = () => {
  const { blogSlug } = useParams();

  // Find the blog by slug
  const blog = blogData.find(b => b.slug === blogSlug);

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
    const readingTime = Math.ceil(wordCount / 200);
    return `${readingTime} min read`;
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center !px-4">
        <div className="text-center bg-white !p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 !mb-4">Blog post not found</h2>
          <Link
            to="/blog"
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            <FaArrowLeft className="!mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

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
        {/* Breadcrumb */}
        <nav className="flex !mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center !space-x-2">
            <li>
              <Link to="/" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="!mx-2 text-gray-400">/</span>
              <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                Blog
              </Link>
            </li>
            <li className="flex items-center">
              <span className="!mx-2 text-gray-400">/</span>
              <span className="text-gray-600 line-clamp-1 max-w-xs">{blog.title}</span>
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-emerald-600 font-semibold !mb-8 hover:text-emerald-700 transition-colors"
        >
          <FaArrowLeft className="!mr-2" />
          Back to Blog
        </Link>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 !mb-12">
          {/* Left Column - Image and Meta Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-6">
              <div className="relative h-64 lg:h-80">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/emerald/white?text=Blog+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              <div className="!p-6">
                <div className="flex items-center justify-between !mb-4">
                  <div className="flex items-center text-emerald-600 bg-emerald-50 rounded-full !px-4 !py-2">
                    <FaBookOpen className="!mr-2" />
                    <span className="font-medium">Article</span>
                  </div>
                  <button className="flex items-center !px-4 !py-2 bg-emerald-100 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-200 transition-colors">
                    <FaShare className="!mr-2" />
                    Share
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <FaCalendarAlt className="text-emerald-600 !mr-3 text-lg flex-shrink-0" />
                    <div>
                      <p className="font-medium">Published Date</p>
                      <p className="text-sm">{formatDate(blog.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <FaUser className="text-emerald-600 !mr-3 text-lg flex-shrink-0" />
                    <div>
                      <p className="font-medium">Author</p>
                      <p className="text-sm">{blog.author}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <FaClock className="text-emerald-600 !mr-3 text-lg flex-shrink-0" />
                    <div>
                      <p className="font-medium">Reading Time</p>
                      <p className="text-sm">{getReadingTime(blog.content)}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 !mt-6 !pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 !mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-emerald-100 text-emerald-800 !px-3 !py-1 rounded-full text-sm">
                      Fresh Produce
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 !px-3 !py-1 rounded-full text-sm">
                      Nutrition
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 !px-3 !py-1 rounded-full text-sm">
                      Agriculture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl !p-6 md:!p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-6">
                {blog.title}
              </h2>

              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="bg-emerald-50 rounded-xl !p-6 !mb-8 border-l-4 border-emerald-500">
                  <p className="text-gray-700 italic text-lg">
                    {blog.content.split('</p>')[0].replace('<p>', '')}
                  </p>
                </div>

                {/* Main Content */}
                <div
                  className="custom-blog-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl !p-6 !mt-8 border border-emerald-200">
                  <div className="flex items-start">
                    <FaLeaf className="text-emerald-600 text-2xl !mr-4 !mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-800 !mb-2">Key Takeaways</h3>
                      <p className="text-gray-700">
                        {blog.content.split('<h3>').pop().replace('</h3>', '').replace('<p>', '').substring(0, 150)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-2xl shadow-xl !p-6 md:!p-8">
          <h2 className="text-2xl font-bold text-gray-900 !mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogData
              .filter(b => b.id !== blog.id)
              .slice(0, 2)
              .map(relatedBlog => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.slug}`}
                  className="group block border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200/emerald/white?text=Blog+Image';
                      }}
                    />
                  </div>
                  <div className="!p-5">
                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2 !mb-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {formatDate(relatedBlog.date)} • {getReadingTime(relatedBlog.content)}
                    </p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      {/* Custom CSS for blog content styling */}
      <style>
        {`
  .custom-blog-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #065f46;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #10b981;
  }
  
  .custom-blog-content p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #374151;
    margin-bottom: 1.5rem;
  }
  
  .custom-blog-content ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 2rem;
  }
  
  .custom-blog-content li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.6;
    color: #374151;
  }
  
  .custom-blog-content li:before {
    content: "•";
    color: #10b981;
    font-weight: bold;
    position: absolute;
    left: 1rem;
    font-size: 1.5rem;
  }
  
  .custom-blog-content strong {
    color: #065f46;
    font-weight: 600;
  }

  /* Beautiful Blockquote Styling */
  .custom-blog-content blockquote {
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border-left: 4px solid #10b981;
    border-radius: 0 12px 12px 0;
    padding: 1.5rem 2rem;
    margin: 2rem 0;
    font-style: italic;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }

  .custom-blog-content blockquote:before {
    content: """;
    font-family: Georgia, serif;
    font-size: 4rem;
    color: #10b981;
    opacity: 0.3;
    position: absolute;
    top: -1rem;
    left: 0.5rem;
    line-height: 1;
  }

  .custom-blog-content blockquote:after {
    content: """;
    font-family: Georgia, serif;
    font-size: 4rem;
    color: #10b981;
    opacity: 0.3;
    position: absolute;
    bottom: -2rem;
    right: 0.5rem;
    line-height: 1;
  }

  .custom-blog-content blockquote p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #065f46;
    margin-bottom: 0;
    position: relative;
    z-index: 1;
  }

  .custom-blog-content blockquote cite {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 600;
    color: #059669;
    text-align: right;
    font-size: 1rem;
  }

  .custom-blog-content blockquote cite:before {
    content: "— ";
  }

  /* Beautiful Table Styling */
  .custom-blog-content table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 2rem 0;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .custom-blog-content thead {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
  }

  .custom-blog-content th {
    color: #065f46;
    font-weight: 600;
    text-align: left;
    padding: 1rem 1.5rem;
    font-size: 1.125rem;
    border-bottom: 2px solid #047857;
  }

  .custom-blog-content th:first-child {
    border-top-left-radius: 12px;
  }

  .custom-blog-content th:last-child {
    border-top-right-radius: 12px;
  }

  .custom-blog-content td {
    padding: 1rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.6;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
  }

  .custom-blog-content tr:last-child td {
    border-bottom: none;
  }

  .custom-blog-content tr:last-child td:first-child {
    border-bottom-left-radius: 12px;
  }

  .custom-blog-content tr:last-child td:last-child {
    border-bottom-right-radius: 12px;
  }

  .custom-blog-content tbody tr {
    transition: background-color 0.2s ease;
  }

  .custom-blog-content tbody tr:hover {
    background-color: #f0fdf4;
  }

  .custom-blog-content tbody tr:nth-child(even) {
    background-color: #f9fafb;
  }

  .custom-blog-content tbody tr:nth-child(even):hover {
    background-color: #ecfdf5;
  }

  /* Responsive Table */
  @media (max-width: 768px) {
    .custom-blog-content table {
      display: block;
      overflow-x: auto;
    }
    
    .custom-blog-content th,
    .custom-blog-content td {
      padding: 0.75rem 1rem;
      font-size: 1rem;
    }
  }

  /* Code and Preformatted Text */
  .custom-blog-content code {
    background-color: #f0fdf4;
    color: #065f46;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
  }

  .custom-blog-content pre {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    overflow-x: auto;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .custom-blog-content pre code {
    background: transparent;
    color: #d1fae5;
    padding: 0;
    font-size: 0.95em;
    line-height: 1.5;
  }

  /* Images within content */
  .custom-blog-content img {
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    height: auto;
  }

  /* Horizontal Rule */
  .custom-blog-content hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #10b981 50%, transparent 100%);
    margin: 2.5rem 0;
  }

  /* Definition Lists */
  .custom-blog-content dl {
    margin: 1.5rem 0;
  }

  .custom-blog-content dt {
    font-weight: 600;
    color: #065f46;
    margin-top: 1rem;
  }

  .custom-blog-content dd {
    margin-left: 1.5rem;
    color: #374151;
    margin-bottom: 1rem;
  }
`}
      </style>
    </div>
  );
};

export default BlogDetails;
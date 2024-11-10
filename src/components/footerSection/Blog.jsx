import React from 'react';

// Sample blog posts data for BookMyTransport
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Tips for Hassle-Free Shipping',
    date: 'October 18, 2024',
    snippet: 'Discover essential tips to ensure your shipping process is smooth and efficient...',
    link: '/blog/hassle-free-shipping',
  },
  {
    id: 2,
    title: 'Understanding Freight Costs: A Comprehensive Guide',
    date: 'October 15, 2024',
    snippet: 'Learn how freight costs are calculated and what factors influence them...',
    link: '/blog/freight-costs',
  },
  {
    id: 3,
    title: 'How to Choose the Right Transport Partner',
    date: 'October 12, 2024',
    snippet: 'Selecting the right transport partner can make or break your logistics strategy...',
    link: '/blog/choose-transport-partner',
  },
  {
    id: 4,
    title: 'The Future of Transportation: Trends to Watch',
    date: 'October 10, 2024',
    snippet: 'Explore the upcoming trends in transportation that will shape the industry...',
    link: '/blog/future-transportation',
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 bg-gray-50">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D3557]">BookMyTransport Blog</h1>
        <p className="mt-4 text-lg text-gray-700">Insights and articles on transportation, logistics, and travel</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2 text-[#1D3557]">{post.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.snippet}</p>
            <a href="#" className="text-[#4FC3F7] hover:underline font-semibold">
              Read More
            </a>
          </div>
        ))}
      </div>

      <footer className="text-center mt-12">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} BookMyTransport. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;

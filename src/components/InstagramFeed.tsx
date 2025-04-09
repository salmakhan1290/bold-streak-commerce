
import React from 'react';
import { Instagram } from 'lucide-react';

interface Post {
  id: number;
  image: string;
  likes: number;
  comments: number;
  username: string;
}

const posts: Post[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1554245064-c2e49efb9508?q=80&w=1935&auto=format&fit=crop",
    likes: 1243,
    comments: 45,
    username: "athlete_runner"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop",
    likes: 987,
    comments: 32,
    username: "street_style"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1569420077790-afb136b3bb8c?q=80&w=1968&auto=format&fit=crop",
    likes: 1576,
    comments: 67,
    username: "urban_athlete"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1972&auto=format&fit=crop",
    likes: 2105,
    comments: 89,
    username: "boldstreak"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1974&auto=format&fit=crop",
    likes: 765,
    comments: 21,
    username: "city_runner"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1558951537-d2dcb8f76f52?q=80&w=1974&auto=format&fit=crop",
    likes: 1890,
    comments: 54,
    username: "sneaker_head"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Instagram size={28} className="mr-2 text-brand-black" />
          <h2 className="text-brand-black font-heading text-3xl font-bold">FOLLOW US</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={`Instagram post by ${post.username}`}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <div className="text-white mb-1 flex items-center">
                  <span className="font-bold mr-1">{post.likes}</span> likes
                </div>
                <div className="text-white flex items-center">
                  <span className="font-bold mr-1">{post.comments}</span> comments
                </div>
                <div className="text-brand-yellow mt-2 text-sm">@{post.username}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;

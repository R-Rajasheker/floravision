import React from 'react';
import O2Plants from './O2Plants';

// External URL for a placeholder avatar
const DEFAULT_AVATAR_URL = "https://images.unsplash.com/photo-1579294246197-2a4439c0d381?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=100&h=100&fit=crop"; 
const SECOND_AVATAR_URL = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop";
const THIRD_AVATAR_URL = "https://images.unsplash.com/photo-1594744803329-e58b18ef0e31?q=80&w=100&h=100&auto=format&fit=crop";

// Custom Star component for the rating - consistent with the card file
const StarRating = ({ rating = 5 }) => {
  // Ensure rating is capped at 5 for visual display
  const displayRating = Math.min(5, Math.max(0, rating));
  const roundedRating = Math.round(displayRating);
  
  const Star = ({ filled }) => (
    <span 
      className={`text-xl ${filled ? 'text-yellow-400' : 'text-yellow-400/50'}`}
      role="img"
      aria-label={filled ? 'Filled star' : 'Unfilled star'}
    >
      ★
    </span>
  );

  return (
    <div className="flex space-x-0.5">
      {/* Generate 5 stars, checking if index is less than the rounded rating */}
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < roundedRating} />
      ))}
    </div>
  );
};

// Reusable Testimonial Card Component (for a single review)
const TestimonialCard = ({ avatarUrl, name, rating, quote }) => {
  return (
    // Applied the dark moss color and the signature large rounding
    <article 
      className="bg-[#384038] p-6 sm:p-8 rounded-[3rem] shadow-2xl 
                 transition-transform hover:scale-[1.02] duration-300 transform"
      style={{ minHeight: '18rem' }} // Ensures vertical consistency in the grid
    >
      
      {/* Header: Avatar, Name, and Rating */}
      <div className="flex items-start space-x-4 mb-4">
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt={`${name}'s profile`}
          // Used a border color similar to the slight green halo in the screenshot
          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#4c554c] shrink-0"
          onError={(e) => {
            e.target.onerror = null; // Prevents looping
            e.target.src = "https://placehold.co/56x56/4c554c/f0fdf4?text=PR"; // Placeholder
          }}
        />
        
        {/* Name and Rating */}
        <div className="flex flex-col pt-0.5">
          <h3 className="text-xl font-semibold text-gray-100 leading-tight">
            {name}
          </h3>
          <StarRating rating={rating} />
        </div>
      </div>

      {/* Quote/Testimonial Body */}
      <p className="mt-4 text-base text-gray-200 leading-relaxed font-light">
        {quote}
      </p>
      
      {/* Removed the extra subtle shadow div, as the main shadow-2xl on the container is sufficient */}
    </article>
  );
};


// Main Reviews Grid Component (Based on your input structure)
const ReviewsGrid = () => {
  const reviews = [
    {
      id: 1,
      name: "Shelly Russel",
      text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier! They bring such a fresh and vibrant energy to my home.",
      avatar: DEFAULT_AVATAR_URL,
      rating: 4.5
    },
    {
      id: 2,
      name: "Lula Rolfson",
      text: "Each one has its own unique charm and personality, and they've already started brightening up my space. I can't express how thrilled I am with my new natural plants!",
      avatar: SECOND_AVATAR_URL,
      rating: 5
    },
    {
      id: 3,
      name: "Carol Huels",
      text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better! The quality is outstanding.",
      avatar: THIRD_AVATAR_URL,
      rating: 4
    }
  ];

  return (
    // Set a consistent dark background for the whole section
    <section className="py-16  font-sans"> 
      <div className="max-w-7xl mx-auto px-5">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <TestimonialCard
              key={review.id}
              name={review.name}
              quote={review.text}
              avatarUrl={review.avatar}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
      <O2Plants/>
    </section>
  );
};



const App = () => {
  return (
    <div className="min-h-screen">
     
      <ReviewsGrid />
    </div>
  );
};

export default App;

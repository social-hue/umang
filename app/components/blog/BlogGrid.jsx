const { BlogCard } = require("./BlogCard");

const POSTS = [
  {
    id: 1,
    title: "Where Luxury Meets Life After 55",
    slug: "Where-Luxury-Meets-Life-After-55",
    categories: ["LifeStyle", "Senior Living"],
    image: "/glimps/1.webp",
    author: "Sanjayy Bharadwajj",
    date: "September 20, 2025",
    authorimg: "/sanjay_avtar.jpg",
    readTime: "1k shares",
    excerpt:
      "Life after 55 is often imagined as a quiet, restful phase, but at Umang Living, we believe it’s the perfect time to live fully, pursue passions, and embrace community. We’re more than just a place to reside.",
  },
  {
    id: 2,
    title: "Problems Faced by Senior Citizens after Retirement in India",
    slug: "Problems-Faced-by-Senior-Citizens-after-Retirement-in-India",
    categories: ["Challenges", "Senior Living"],
    image: "/glimps/2.webp",
    author: "Sanjayy Bharadwajj",
    date: "September 5, 2025",
    authorimg: "/sanjay_avtar.jpg",
    readTime: "1K shares",
    excerpt:
      "Retirement is often considered a well-deserved phase of rest and reflection after decades of hard work. In India, senior citizens look forward to this stage as a time to spend with family, pursue hobbies, and enjoy peace of mind.",
  },
  {
    id: 3,
    title: "Why Elderly Communities Matter More Than Ever",
    slug: "Why-Elderly-Communities-Matter-More-Than-Ever",
    categories: ["Communities", "Effect"],
    image: "/glimps/3.webp",
    author: "Sanjayy Bharadwajj",
    date: "August 20, 2025",
    authorimg: "/sanjay_avtar.jpg",
    readTime: "1K shares",
    excerpt:
      "At Umang Living, we believe that the golden years of life deserve to be filled with joy, purpose, and companionship. That’s the very foundation on which this project was born — from a deeply personal space of observing how emotional well-being declines when seniors feel left behind by a fast-moving world.",
  },

  {
    id: 4,
    title: "Why India Elders Need More Than Just Shelter",
    slug: "Why-Indias-Elders-Need-More-Than-Just-Shelter",
    categories: ["unhygienic", "unsafe conditions"],
    image: "/glimps/8.webp",
    author: "Sanjayy Bharadwajj",
    date: "August 5, 2025",
    authorimg: "/sanjay_avtar.jpg",
    readTime: "1K shares",
    excerpt:
      "As someone who works every day to create spaces where seniors can live with dignity, this story shook me. And it reminded me, once again, why Umang Living exists.",
  },
  {
    id: 5,
    title: "Why You Should Never Truly Retire",
    slug: "Why-You-Should-Never-Truly-Retire",
    categories: ["retirement", "planning"],
    image: "/glimps/6.webp",
    author: "Girish Singh",
    date: "July 20, 2025",
    authorimg: "/blog/avtar.jpg",
    readTime: "1K shares",
    excerpt:
      "For many, life is a checklist—education, job, marriage, raising children, building a home, saving for the future",
  },
  {
    id: 6,
    title: "Taking a Journey you Truly Deserve",
    slug: "Taking-a-Journey-you-Truly-Deserve",
    categories: ["Health", "Wellness"],
    image: "/glimps/7.webp",
    author: "Shubra Gupta",
    date: "July 5, 2025",
    authorimg: "/blog/avtar.jpg",
    readTime: "1K shares",
    excerpt:
      "For years, your calendar may have revolved around meetings, responsibilities, school vacations, bills, and other people’s needs.",
  },
  // {
  //   id: 7,
  //   title: "Rediscovering Spirituality After Retirement",
  //   slug: "Rediscovering-Spirituality-After-Retirement",
  //   categories: ["guides", "retirees"],
  //   image: "/spritual.jpg",
  //   author: "Gopinath Pant",
  //   date: "June 20, 2025",
  //   authorimg: "/blog/avtar.jpg",
  //   readTime: "1K shares",
  //   excerpt:
  //     "Retirement is not just the end of a career—its the beginning of a new, quieter, and more reflective phase of life. It’s when the noise begins to settle, and the soul finally has room to speak.",
  // },
  // {
  //   id: 8,
  //   title: "Plan a Healthy, Happy Retirement",
  //   slug: "Plan-a-Healthy-Happy-Retirement",
  //   categories: ["guides", "retirees"],
  //   image: "/glimps/1.jpg",
  //   author: "Dipankar Sen",
  //   date: "June 5, 2025",
  //   authorimg: "/blog/avtar.jpg",
  //   readTime: "1K shares",
  //   excerpt:
  //     "You’ve worked hard your entire life - raising a family, building a career, supporting loved ones, and managing responsibilities.",
  // },
];

export const BlogGrid = ({ limit }) => {
  const visiblePosts = limit ? POSTS.slice(0, limit) : POSTS;
  return (
    <section className="main_width py-8 md:py-12 pb-20 overflow-hidden">
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-6">
        {visiblePosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};











"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const BlogCard = ({
  title,
  categories,
  image,
  author,
  date,
  readTime,
  excerpt,
  slug,
}) => (
  <Link href={`/blog/${slug}`} className="group block">
    <motion.article
      className="flex flex-col cursor-pointer rounded-sm overflow-hidden bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="h-[160px] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/20 to-transparent"></div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="uppercase text-xs text-white bg-teal-700/70 px-3 py-0.5 rounded-sm tracking-wide"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-md text-zinc-800 leading-snug group-hover:text-teal-700 transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-sm text-zinc-500 gap-2">
          <span className="font-medium">{author}</span>
          <span className="w-1 h-1 bg-zinc-400 rounded-full" />
          <span>{date}</span>
        </div>
        <p className="text-zinc-600 text-sm line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
        <span className="mt-1 text-teal-700 font-medium text-sm hover:underline">
          View post →
        </span>
      </div>
    </motion.article>
  </Link>
);

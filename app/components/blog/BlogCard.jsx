import Link from "next/link";
import { CiShare2 } from "react-icons/ci";

export const BlogCard = ({
  title,
  categories,
  image,
  author,
  date,
  readTime,
  excerpt,
  slug,
  authorimg,
}) => (
  <Link href={`/blog/${slug}`} className="group block">
    <article className="flex flex-col cursor-pointer rounded-[30px] shadow-md overflow-hidden bg-white transition hover:shadow-xl">
      <div className="h-[350px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.1]"
        />

        <div className="flex gap-2 absolute top-6 left-6">
          {categories.map((cat) => (
            <span
              key={cat}
              className="uppercase text-[16px] font-semibold text-white white_blur px-2 py-1 rounded-sm tracking-wider"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="font-barlow font-bold lg:text-[25px] text-[20px] text-[#121416] leading-snug">
          {title}
        </h3>

        <div className="flex 2xl:flex-row flex-col 2xl:items-center items-start gap-2 text-gray-500">
          <div className="flex items-center gap-1">
            {/* <img
              src={authorimg}
              className=" w-[50px] object-cover object-top h-[50px] rounded-full "
              alt="avatar"
            /> */}
            <span className="text-[#121416] font-barlow font-semibold lg:text-[18px] text-[16px] ">
              {author}
            </span>
          </div>
          <div className="flex gap-2 items-center font-medium text-[18px]">
            <hr className="2xl:w-[40px] w-[30px] 2xl:block hidden" />
            <span className="w-1 h-1 bg-gray-400 rounded-full" />
            <span>{date}</span>
            {/* <span className="w-1 h-1 bg-gray-400 rounded-full" /> */}
            {/* <span className="flex items-center gap-1">
              <CiShare2 />
              {readTime}
            </span> */}
          </div>
        </div>

        <p className="text-[#6C757D] font-barlow line-clamp-2 flex-1 lg:text-[22px] md:text-[18px] ">
          {excerpt}
        </p>

        <span className="mt-2 text-[#E7216A] underline uppercase font-barlow font-semibold text-sm hover:underline">
          View post
        </span>
      </div>
    </article>
  </Link>
);

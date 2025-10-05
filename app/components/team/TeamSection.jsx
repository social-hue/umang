"use client";
import { FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function TeamSection() {
  const team = [
    {
      name: "Sanjayy Bharadwajj",
      title: "Director",
      img: "/author1.png",
      desc: "Former frontend dev for Linear, Coinbase, and Postscript.",
    },
    {
      name: "Varsha Jaiswal",
      title: "Associate Director",
      img: "https://i.etsystatic.com/6764349/r/il/a18191/5961673915/il_570xN.5961673915_6qkk.jpg",
      desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      name: "Anupam Kinshuk",
      title: "Business Consultant",
      img: "https://i.pinimg.com/170x/65/89/e6/6589e68327a888950a61ae7a370a05ce.jpg",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      name: "Priti Pathak",
      title: "Vice President",
      img: "https://m.media-amazon.com/images/S/aplus-media/vc/d1c253e8-0bcb-490e-985e-047cb711f0ef.__CR0,0,300,300_PT0_SX300_V1___.jpg",
      desc: "Former PM for Linear, Lambda School, and On Deck.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto py-10 mb-6 bg-white">
      {/* Heading */}
      <h2 className="text-center text-[#101828] text-3xl md:text-5xl font-semibold mb-4">
        Meet our team
      </h2>
      <p className="text-center text-lg text-[#667085] max-w-xl mx-12 md:mx-auto mb-6 font-medium">
        Our philosophy is simple — hire a team of diverse, passionate people and foster a culture
        that empowers you to do your best work.
      </p>

      {/* Team Cards */}
      <div className="px-12 md:px-0 flex flex-wrap justify-center gap-4 md:gap-2">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-[#F9FAFB] border border-[#98A2B3] rounded-sm p-5 text-center 
                       transition-all duration-200 hover:bg-[#bbb9bd67] hover:text-white cursor-pointer
                       w-full sm:w-[80%] md:w-[45%] lg:w-[20%] max-w-sm"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
            />
            <span className="block text-lg text-zinc-800 font-semibold">{member.name}</span>
            <span className="block text-zinc-800 font-medium mb-2 group-hover:text-white">
              {member.title}
            </span>
            <p className="text-sm text-[#667085] max-w-[90%] mx-auto group-hover:text-white">
              {member.desc}
            </p>
            <div className="flex justify-center gap-2 mt-4 text-[#98A2B3]">
              {/* <a href="#" className="hover:text-zinc-900 transition">
                <FaTwitter />
              </a> */}
              <a href="#" className="hover:text-zinc-900 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-zinc-900 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

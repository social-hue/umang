"use client";
import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    {
      name: "Varsha Jaiswal",
      title: "Associate Director",
      img: "/varsha.webp",
      desc: "Strategic operations expert ensuring efficient project execution and excellence.",
      linkedin: "https://www.linkedin.com/in/varsha-jaiswal-509191202/",
    },
    {
      name: "Anuupam Kinshuk",
      title: "Principal Consultant",
      img: "/anupam.webp",
      desc: "Growth strategist, partnerships, operations, services & technology excellence",
      linkedin: "https://www.linkedin.com/in/anuupam",
    },
    {
      name: "Priti Pathak",
      title: "Vice President",
      img: "/priti.webp",
      desc: "Driving business growth through impactful partnerships and engagement.",
      linkedin: "https://www.linkedin.com/in/priti-pathak-88a0b45",
    },
    {
      name: "Ankit Rathi",
      title: "Principal Architect",
      img: "/ankit.jpeg",
      desc: "Architect focused on designing senior-friendly & community-oriented living spaces",
      linkedin: "https://in.linkedin.com/in/",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto py-12 mb-6 bg-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-[#101828] text-4xl md:text-5xl leading-light font-semibold mb-4"
      >
        Meet our team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-lg text-[#667085] max-w-xl mx-12 md:mx-auto mb-6 font-semibold"
      >
        Our philosophy is simple — hire a team of diverse, passionate people and foster a culture
        that empowers you to do your best work.
      </motion.p>

      {/* Team Cards */}
      <div className="px-14 md:px-0 flex flex-wrap justify-center gap-4 md:gap-3">
        {team.map((member, index) => (
          <motion.a
            key={index}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="bg-[#F9FAFB] border border-[#98A2B3] rounded-sm p-4 text-center 
                       transition-all duration-300 hover:bg-[#bbb9bd67] hover:text-white cursor-pointer
                       w-full sm:w-[80%] md:w-[45%] lg:w-[20%] max-w-sm block"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-30 h-30 object-cover rounded-full mx-auto mb-3"
            />
            <span className="block text-lg text-zinc-800 font-semibold">{member.name}</span>
            <span className="block text-zinc-800 font-medium mb-2">{member.title}</span>
            <p className="text-md text-zinc-800 max-w-[90%] mx-auto mb-2">{member.desc}</p>
          </motion.a>
        ))}
      </div>
    </main>
  );
}

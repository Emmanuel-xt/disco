import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mt-20 flex flex-col items-center gap-10">

      <div className="border border-gray-500 p-5 text-center bg-black text-white rounded-lg flex flex-col items-center glassmorphism">
        <Image
          src="/assets/download.png"
          alt="mission"
          width={100}
          height={100}
        />
        <p className="font-bold text-2xl mt-4">INTRODUCTION</p>
        <p className="text-sm mt-4">
          Welcome to Engineering learning hub, your gateway to a world of
          innovation and discovery in the realm of Engineering. As we navigate
          the dynamic landscape of technology and problem solving, our platform
          is designed to be your trusted companion on the exciting journey of
          learning and mastering Engineering principles. At engineering learning
          hub, we believe that Engineering is not just a field of study; it is a
          mindset, a way of approaching challenges with creativity and
          precision. Whether you are a budding engineer eager to explore the
          fundamentals or a seasoned engineer seeking to stay ahead in a rapidly
          evolving society, our comprehensive learning resources are tailored to
          meet your needs. Embark on a learning experience that goes beyond
          textbook and lectures. Our curated content covers a spectrum of
          engineering disciplines, from Electrical and Electronic to Mechanical,
          computer and ICT engineering. Through engaging tutorial, real-world
          case studies and researches, hands-on projects, we aim to foster a
          community of passionate learners who are ready to shape the future.
          Join us as we bridge the gap between theory and practice, providing
          you with the tools and knowledge to tackle complex problems head-on.
        </p>
      </div>

      <div className="border border-gray-500 p-5 text-center bg-black text-white rounded-lg flex flex-col items-center glassmorphism mt-10">
        <Image
          src="/assets/mission.png"
          alt="mission"
          width={100}
          height={100}
        />

        <h6 className="font-bold text-2xl mt-4">MISSION AND VISION</h6>
        <p className="text-sm mt-4">
          Mission Statement: At Engineering Learning Hub, our mission is to
          empower individuals with the knowledge and skills needed to thrive in
          the ever-evolving field of engineering. We are committed to providing
          accessible, high-quality learning resources that transcend traditional
          boundaries, fostering a community of curious minds and innovative
          thinkers. Through a blend of interactive content, real-world
          applications, and collaborative learning experiences, we aim to
          inspire a new generation of engineers who can contribute meaningfully
          to global progress Vision Statement: Our vision at Engineering
          Learning Hub is to be the premier online destination for engineering
          education, recognized for its transformative impact on individuals and
          the engineering community as a whole. We envision a future where
          learners from all walks of life can access cutting-edge content,
          engage in hands-on projects, and connect with a network of like-minded
          individuals.
        </p>
      </div>

      <div className="border border-gray-500 p-5 text-center bg-black text-white rounded-lg flex flex-col items-center glassmorphism mt-10">

        <Image
          src="/assets/engine.png"
          alt="mission"
          width={100}
          height={100}
        />

        <h6 className="font-bold text-2xl mt-4">WHO WE ARE</h6>
        <p className="text-sm mt-4">
          Welcome to Engineering Learning Hub (a subsidiary of Gem Tech Hub), a
          dynamic hub where knowledge meets innovation, and learning transcends
          boundaries. Our Commitment: As a leading platform in the field, we are
          committed to democratizing access to high-quality engineering
          education. Whether you're a student taking your first steps into the
          world of engineering or a seasoned professional looking to stay
          abreast of the latest advancements, engineering Learning Hub is your
          digital companion on this educational journey. Expertise and
          Excellence: What sets us apart is our commitment to excellence. Our
          team comprises experienced educators, industry professionals, and tech
          enthusiasts who bring a wealth of expertise to curate engaging and
          relevant content. From foundational concepts to advanced applications,
          we strive to make learning comprehensive, enjoyable, and applicable to
          real-world scenarios. Innovation through Collaboration: At engineering
          Learning Hub, we believe that innovation thrives in collaborative
          environments. Our platform is a vibrant community where learners can
          connect, share ideas, and collaborate on projects Empowering Engineers
          for Tomorrow: Our overarching goal is to empower individuals to become
          not just proficient engineers but visionary problem-solvers. We
          understand that the future of technology and industry depends on
          individuals who can bridge the gap between theoretical knowledge and
          practical application. Engineering Learning Hub is your gateway to
          developing the skills and mindset needed to engineer a brighter
          future. Join us on this exciting journey of discovery, where every
          click opens doors to new possibilities and each lesson is a step
          towards mastery. Together, let's shape the future of engineering
          education.
        </p>
      </div>

    </div>
  );
};

export default page;
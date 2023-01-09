import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container w-full text-center m-auto">
      <div className="md:flex md:flex-wrap mt-10 text-center md:-mx-4 justify-center text-ocean">
        {" "}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 flex-auto">
          <div className="p-4 ml-4 relative">
            <Image
              src="/images/1.png"
              className="square rounded-md"
              alt="client wrist being massaged"
              width="200"
              height="200"
            />
            <h4 className="text-3xl font-bold mt-4 absolute pr-4 top-12 text-white">
              Manage chronic pain and disease
            </h4>
          </div>
          <div className="p-4 ml-4 relative">
            {" "}
            <Image
              src="/images/1.png"
              className="square rounded-md"
              alt="client wrist being massaged"
              width="200"
              height="200"
            />
            <h4 className="text-3xl font-bold mt-4 absolute pr-4 top-12 z-[2] text-white">
              Improve overall health and wellbeing
            </h4>
          </div>
          <div className="p-4 ml-4 relative">
            {" "}
            <Image
              src="/images/1.png"
              className="square rounded-md"
              alt="client wrist being massaged"
              width="200"
              height="200"
            />
            <h4 className="text-3xl font-bold mt-4 absolute pr-4 top-12 z-[2] text-white">
              Calm and professional treatment
            </h4>
          </div>
          <div className="p-4 ml-4 relative">
            {" "}
            <Image
              src="/images/1.png"
              className="square rounded-md"
              alt="client wrist being massaged"
              width="200"
              height="200"
            />
            <h4 className="text-3xl font-bold mt-4 absolute pr-4 top-12 z-[2] text-ocean">
              Management of Stress and Anxiety
            </h4>
          </div>
        </div>
        <h4 className="w-full mt-[5%] items-center">About Sonia</h4>
        <div className="md:w-3/4 lg:w-2/3 flex-wrap sm:w-4/5">
          <p className="text-lg font-bold mt-[10%] ml-[5%] inline-block">
            Sonia received her Massage Therapy qualification at the NSW School
            of Massage in 2011. Since then Sonia has been working hard to
            provide quality tailored massage treatments to her clients. Sonia
            believes that activating the relaxation response via massage calms
            the nervous system and allows the body to heal itself naturally.
            Calming the body through touch means less &quot;fight and
            flight&quot; resulting in a decrease of stress hormones, increase in
            circulation, energy and alertness and a decrease in blood pressure
            and heart rate. Put simply, Massage can help you feel better. Sonia
            sees self care as a necessity, not a luxury and believes the body
            needs calm, peace, care, kindness and compassion in order to operate
            at best state. When not working around the massage table Sonia
            enjoys working in the garden, painting and drawing, and walking
            along the beach. Sonia is also a Qualified Mindfulness and Mediation
            Teacher with ACMM, and holds a Diploma of Business and a Diploma of
            Visual Art.
          </p>
        </div>
        <div className="md:w-1/4 lg:mt-10 mb-10 lg:w-1/3 mt-10 inline-block">
          {" "}
          <Image
            className="tall-img"
            src="/images/MTM_Sonia.jpeg"
            alt="image description"
            width="200"
            height="200"
          />
        </div>
      </div>
      <h4 className="w-full relative block mt-10">Client testimonials</h4>
      <div className="md:w-[30%] lg:mt-10 lg:-[25%] inline-flex text-justify">
        <p className="text-lg font-bold mt-4 ml-10 mr-10">
          “Sonia is a very professional and conscientious person. She has always
          been on time, discharged her duty with utmost diligence and is very
          pleasant and agreeable. We have been very happy with all the work that
          Sonia has performed. Her therapy has helped my parents and me. Over
          the whole period that we have known Sonia we can express nothing but
          gratitude and praise in her regard. We would highly recommend Sonia to
          anybody.” <br></br> - Alena
        </p>
      </div>
      <div className="md:w-[30%] lg:mt-10 lg:-[25%] inline-flex text-justify">
        <p className="text-lg font-bold mt-4 ml-10 mr-10">
          “Sonia is one of the best Remedial Therapists I&apos;ve had in over 20
          years, as she really takes the time to understand what your body needs
          and uses her expertise to the fullest to cater to it. You will not
          regret booking with her. Sonia&apos;s bright smile, grounded energy,
          and skills have provided much healing to my body and mind from the
          rigorous demands of the day.”<br></br> - Hera
        </p>
      </div>
      <div className="md:w-[30%] lg:mt-10 lg:-[30%] inline-flex text-justify">
        <p className="text-lg font-bold mt-4 ml-10 mr-10">
          “My family is so happy we found Sonia, she is fantastic. She is not
          afraid to get into those sore places and pressure is suited to each
          client. Sonia is beautiful inside and out, she is great at what she
          does and is so welcoming and comfortable. You can lay there in silence
          or spill your life story and break down - either way she genuinely
          listens and cares and keeps doing what she needs to do.”
          <br></br> - Ali
        </p>
      </div>
    </div>
  );
};

export default About;

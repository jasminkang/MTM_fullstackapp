import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container w-full text-center p-8 m-auto">
      <div className="md:flex md:flex-wrap mt-5 text-center md:-mx-4 justify-center">
        <div className="md:w-1/3 md:px-4 lg:w-1/3 p-4">
          {" "}
          <Image
            src="/images/why_one.jpeg"
            className="square rounded-md"
            alt="client wrist being massaged"
            width="100"
            height="100"
          />
          <h4 className="text-xl font-bold mt-4">Relaxation Massage</h4>
          <p className="mt-1  cutoff-text text-left">
            This massage enables deep relaxation by releasing muscle tension
            through a series of several flowing techniques like long strokes,
            effleurage, kneading, friction, and deep circular movements. The
            pressure applied depends on you and how you&apos;re feeling at the
            time. Soft, medium or deeper pressure may be requested. The main
            purpose of this treatment is to calm and relax the nervous system
            which promotes a natural healing process of the body and should
            leave you feeling calm and peaceful. Benefits of this massage may
            include a reduction in stress, increased feelings of wellness and
            relaxation, reduction in pain and muscle soreness and tension,
            production of positive hormones, improvement of immune function and
            lower heart rate and blood pressure.
          </p>
          <input className="expand-btn" type="checkbox"></input>
        </div>
        <div className="md:w-1/3 md:px-3 lg:w-1/3 p-4">
          <h4 className="text-xl font-bold mt-4">Aged Care Massage</h4>{" "}
          <p className="mt-1  cutoff-text text-left">
            A Massage aimed to reduce tension and tightness in the muscles and
            body, provide relaxation and calm via soft tissue work that is
            tailored to the individual. Massage may be completed on a Massage
            Table, Chair or in bed. This soft tissue work may include the hands
            and arms, feet and legs and neck and head. It can be a full body
            massage or aimed at providing pain relief to a specific area of the
            body. Soft tissue massage is safe, effective and aims to provide
            care and nurturing to those in our Aged Care community. Current
            health conditions are always taken into consideration when
            conducting this type of massage.
          </p>
        </div>

        <div className="md:w-1/3 md:px-3 lg:w-1/3 p-4">
          <h4 className="text-xl font-bold mt-4">Oncology Massage</h4>{" "}
          <p className="mt-1  cutoff-text text-left">
            This session which includes a client medical history intake form.
            This treatment addresses the needs of a person who is diagnosed with
            cancer, receiving treatment for cancer or who has survived cancer
            and is gentle, safe and effective. This massage is both comforting
            and nurturing. It may also be suitable to those who are in a fragile
            state of health. It is very gentle, mindful and there are specific
            massage sequences that will be applied depending on the needs of the
            individual at the time. Massage can be applied in a chair, massage
            table or bed and will be conducted safely and professionally.
          </p>
        </div>

        <div className="md:w-1/3 md:px-3 lg:w-1/3 p-4">
          <h4 className="text-xl font-bold mt-4">Remedial Massage</h4>
          <p className="mt-1  cutoff-text text-left">
            A targeted Massage for specific pain and injury. This massage is not
            a full body massage and targets a specific part/s of the body that
            needs rehabilitation. Remedial Massage can help with Achilles
            Tendon, Tendinitis, Shin Splints, Tennis Elbow, Frozen Shoulder,
            Hamstring Injuries, Plantar Fasciitis, Scar tissue, Whiplash, Carpal
            Tunnel Syndrome, Thoracic Outlet Syndrome and Repetitive Strain
            Injury to name a few. Remedial Massage is often completed over a
            course of time with a number of sessions booked to assist with your
            recovery.
          </p>
        </div>
        <div className="md:w-1/3 md:px-3 lg:w-1/3 p-4">
          <h4 className="text-xl font-bold mt-4">Manual Lymphatic Drainage</h4>{" "}
          <p className="mt-1  cutoff-text">
            MLD is a specific massage technique (timing, pressure and direction)
            which encourages the natural circulation of lymphatic fluid through
            the body. It is not a muscular massage but a harmonious specific
            treatment that uses gentle massage and mild stretching of the
            connective tissue to facilitate the bodies natural ability to
            rejuvenate, heal and deal with the many stressors of life. The
            manual manoeuvres are very subtle, very soft and very gentle. Work
            is generally performed with the flat of the hand using all the
            fingers to stimulate flowing movements. This flow improves
            circulation, allows for toxin removal as well as allowing
            regenerative fluid to flow more freely to areas of the body that
            need it most, assisting in the bodies natural healing process.
          </p>
        </div>
        <div className="md:w-1/3 md:px-3 lg:w-1/3 p-4">
          <h4 className="text-xl font-bold mt-4">Mobile</h4>
          <p className="mt-1  cutoff-text text-left">
            A Mobile Massage offered to Aged Care, Home Care, Palliative and
            Oncology Massage Clients. Conducted on a mobile massage table at the
            home, in a chair or in bed depending on the specific circumstances.
            This massage will be tailored to the individual at the time of
            treatment and includes towels, linen, oil, relaxation music and all
            equipment needed to provide a relaxing massage to those who need it
            most.
          </p>
        </div>
        <div className="w-[50%] object-center">
          <h4 className="text-xl text-center">Pricelist</h4>
          <ul className="text-left">
            <li>
              Relaxation, Aged care and Oncology massage: 60 mins $85/ 90 mins
              $125
            </li>
            <li>
              Remedial, Manual Lymphatic Drainage massage: 60 mins $95 / 90 mins
              $125{" "}
            </li>
            <li>Mobile Care Massage: 60mins $120 / 90mins $150</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

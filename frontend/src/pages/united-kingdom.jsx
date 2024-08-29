import React, { useEffect } from "react";
import { UKBenefits } from "../utils/constants";

import ContactMessage from "../components/contactMessage";
import ukCover from "../assets/covers/ukCover.png";
import { Link } from "react-router-dom";

export default function UnitedKingdom() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const tableData1 = [
    {
      id: "1",
      point: "Language spoken",
      answer: "English",
    },
    {
      id: "2",
      point: "Cost of study",
      answer: "Varies by University",
    },
    {
      id: "3",
      point: "Source of funding",
      answer: "loans",
    },
    {
      id: "4",
      point: "Exams required",
      answer: "IELTS, TOEFL",
    },
    {
      id: "5",
      point: "Degrees",
      answer: "Undergraduate, Postgraduate, Doctoral",
    },
    {
      id: "6",
      point: "Intakes",
      answer: "Fall and Spring",
    },
  ];
  const tableData2 = [
    {
      id: "1",
      point: "Undergraduate (UG)",
      answer: "£15,000 - £35,000",
    },
    {
      id: "2",
      point: "Postgraduate (PG)",
      answer: "£20,000 - £40,000",
    },
    {
      id: "3",
      point: "MBA",
      answer: "£20,000 - £60,000",
    },
    {
      id: "4",
      point: "PhD",
      answer: "£18,000 - £35,000",
    },
    {
      id: "5",
      point: "Short-term Course (6 months)",
      answer: "£8,000 - £15,000",
    },
    {
      id: "6",
      point: "Foundation Course",
      answer: "£10,000 - £25,000",
    },
  ];

  return (
    <div>
      {/* covers */}
      <div className="relative">
        <div className="h-full">
          <img
            src={ukCover}
            alt="ukCover"
            className="w-full h-[65vh] object-cover"
          />
          <div className="absolute inset-0 bg-[#1F0259] opacity-40"></div>
        </div>
        <div className="flex flex-col gap-4 absolute left-10 bottom-1/2 transform translate-y-1/2 w-1/2 max-md:w-auto max-md:right-10">
          <h2 className="text-white font-bold text-5xl max-md:text-3xl">
            Your <span className="text-[#1F0259]">dream</span> of studying in{" "}
            <span className="text-[#1F0259]">UK</span> is closer than you think!
          </h2>
          <p className="text-white text-lg font-medium">
            Learn everything you need to know about studying in UK and get end
            to end expert guidance from us.
          </p>
          <div>
            <Link to="/register">
              <button className="btn btn-secondary">
                Get Started For FREE
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Study In UK? */}
      <section className="m-12 max-md:m-8 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl max-md:text-lg">
            Why Study In UK?
          </h1>
          <p className="text-[#1F0259]">
            <span className="font-bold">The United Kingdom</span> stands out as
            a top destination for higher education across the globe. It
            comprises of Northern Ireland, Scotland and Wales. Many
            international students fancy studying in the United Kingdom due to
            the following reasons listed below Amazing Academic Reputation – The
            UK has some the worlds most oldest universities namely Oxford and
            Cambridge both that carries a history of over 800 years. 16 % of the
            worlds top universities is in the United Kingdom
          </p>
        </div>
        <div className="flex items-start max-md:items-stretch">
          <div>
            <table>
              <thead>
                <tr className="flex gap-8 items-center  bg-vim">
                  <th className="text-[#1F0259] font-semibold p-2 max-md:p-3 max-md:text-xl">
                    Key Facts top study in UK
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData1.map((row) => (
                  <tr
                    key={row.id}
                    className="flex gap-8 items-center border font-semibold rounded-md p-2"
                  >
                    <td className="w-[350px] max-md:w-[100px] border-r-2 max-md:p-2">
                      {row.point}
                    </td>
                    <td className="w-[550px] max-md:w-[150px] p-0">
                      {row.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Benefits of Studying in the UK
          </h1>
          <p className="text-[#1F0259]">
            Opting to <span className="font-bold">study in the UK</span> is not
            merely about an international degree. It's a doorway to growth,
            exposure, and holistic development tailored for international
            students, especially those from international.
          </p>
          <div className="flex flex-col gap-y-3 max-md:gap-y-4">
            {UKBenefits.map((benefit) => (
              <ul className="list-disc ml-8">
                <li key={benefit.id} className="text-[#1F0259]">
                  <span className="font-bold">{benefit.point}</span>: &nbsp;
                  {benefit.answer}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center my-3">
            <p className="italic text-center text-[#1F0259] text-sm">
              Need to learn more about Applying to Study in the UK and all the
              benefits that you
              <br /> can gain by it? Contact US and book a FREE consultation
              Today!
            </p>
            <Link to="/register">
              <button className="btn btn-secondary">
                Want to study in UK? Get FREE counselling
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Popular Courses to Study in the UK
          </h1>
          <p className="text-[#1F0259]">
            <span className="font-bold">International students in the UK</span>
            are presented with an unparalleled array of educational
            possibilities across a spectrum of fields. Whether one envisions a
            journey into the hallowed halls of 
            <span className="font-bold">study in a UK</span> university or seeks
            the best courses to study in the UK, the opportunities for
            intellectual growth and professional advancement are boundless.
          </p>
          <div className="flex max-md:flex-col items-center max-md:items-start flex-1 max-md:gap-6">
            <ul className="text-[#1F0259] list-disc ml-8 font-bold">
              <li>Medicine</li>
              <li>Business and Management</li>
              <li>Engineering</li>
              <li>Computer Science</li>
              <li>Art and Design</li>
              <li>Law</li>
            </ul>
            <div className="flex flex-1 items-center justify-center">
              <ContactMessage
                message="Fascinating, right? Eager to explore further,aren't you?
Then click to discover more about the Best Courses to Study in the UK for International Students!"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Cost of Studying in the UK for International Students
          </h1>
          <p className="text-[#1F0259]">
            The UK is renowned for its quality of education, but it's essential
            for international students to understand the costs involved. Tuition
            fees can vary significantly between institutions and courses. Let's
            break down the average yearly costs for international students.
          </p>
          <div className="my-4">
            <div>
              <table>
                <thead>
                  <tr className="flex gap-8 items-center bg-vim">
                    <th className="w-[350px] text-[#1F0259] font-semibold p-2 max-md:w-[100px]">
                      Level of Education
                    </th>
                    <th className="text-[#1F0259] font-semibold py-2 pr-2 max-md:w-[150px]">
                      Costs for international Students in £ (Per year) (approx.)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData2.map((row) => (
                    <tr
                      key={row.id}
                      className="flex gap-8 items-center border font-semibold rounded-md p-2"
                    >
                      <td className="w-[350px] max-md:w-[150px] border-r-2">
                        {row.point}
                      </td>
                      <td className="max-md:w-[120px] max-md:p-0">
                        {row.answer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Documents Required to Study in the United Kingdom for International
            Students
          </h1>
          <div className="flex max-md:flex-col items-center flex-1">
            <ul className="text-[#1F0259] list-disc ml-8 font-bold">
              <li>Academic Transcripts</li>
              <li>Statement of Purpose or Personal Statement</li>
              <li>Letters of Recommendation</li>
              <li>
                Proof of English Language Proficiency (IELTS, TOEFL, etc.)
              </li>
              <li>CV/Resume</li>
              <li>Passport-sized photographs</li>
            </ul>
            <div className="flex flex-1 items-center justify-center mt-4">
              <ContactMessage message="Studying abroad can be difficult. Simplify it with NSA!" />
              {/* use shadcn button */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

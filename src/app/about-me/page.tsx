import Image from "next/image";
import me from "../../../public/me.jpg";

const AboutMePage = () => {
  const hobbies = [
    "Sports (almost all)",
    "Training",
    "Gaming",
    "Sight-seeing",
    "PC Time",
    "Movies",
    "Tv shows",
    "Traveling",
  ];
  const languages = [
    {
      language: "English",
      level: "Fluent",
    },
    {
      language: "Spanish",
      level: "Native",
    },
    {
      language: "Italian",
      level: "Intermediate",
    },
  ];
  return (
    <section className="py-5 px-6 lg:px-14  lg:grid lg:grid-cols-2 lg:gap-y-10 lg:justify-items-center flex flex-col items-center gap-3">
      <div className="w-[200px] h-[300px] lg:w-[300px] lg:h-[500px] relative rounded-lg">
        <Image
          src={me}
          alt={"Pablo Bentivengo"}
          fill
          className="rounded-lg object-cover"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col  lg:items-start gap-5">
        <div>
          <b>Name:</b> Pablo Bentivengo
        </div>
        <div>
          <b>Birth Date:</b> 30 July 1996
        </div>
        <div>
          <b>Age:</b> {new Date().getFullYear() - 1996}
        </div>
        <div>
          <b>Nationality:</b> Argentine-Italian
        </div>
        <div>
          <b>Hobbies:</b> {hobbies.join(", ")}
        </div>
        <div className="flex  flex-wrap gap-3 items-center">
          <b>Languages:</b>{" "}
          {languages.map((lng) => (
            <span
              className="text-white bg-blue-500 rounded-lg px-2"
              key={lng.language}
            >
              {lng.language} - {lng.level}
            </span>
          ))}
        </div>
        <div className="font-bold italic">
          <q>
            I am a Frontend Developer with background experience in
            Accountability and Logistics. Thanks to these background experiences
            I learnt to work over due dates and accomplish the given objectives
            not only effectively but efficiently. I am a proactive person always
            looking opportunities where I can learn and become a better person
            and professional. At the moment I am currently studying to get my
            Software Engineer degree.
          </q>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;

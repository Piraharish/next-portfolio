import fetchEducationData, {
  EducationProps,
} from "@/actions/fetchEducationData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MotionDiv, MotionP, MotionSection } from "../motions";
import SectionTitle from "../ui/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Education = () => {
  const [educationData, setEducationData] = useState<EducationProps | null>(
    null
  );
  const [defaultValue, setDefaultValue] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEducationData();
        setEducationData(data);
        if (data && data.educationList.length > 0) {
          setDefaultValue(data.educationList[0].name.toLowerCase());
        }
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <MotionSection
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <SectionTitle title={educationData?.title || ""} titleNo={"02."} />
      <div className="max-w-3xl mx-auto min-h-96">
        <Tabs
          defaultValue={defaultValue || "vhnsnc"}
          className="flex max-md:flex-col gap-x-4 gap-y-8"
        >
          <TabsList>
            {educationData?.educationList.map((data, index) => (
              <TabsTrigger key={index} value={data.name.toLowerCase()}>
                {data.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {educationData?.educationList.map((data, index) => (
            <TabsContent key={index} value={data.name.toLowerCase()}>
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 5 },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="flex flex-col w-full mb-3.5"
              >
                <h3 className="text-xl font-bold tracking-wide flex gap-x-4 items-center capitalize">
                  {data.role}
                  <Link
                    href={data.url}
                    className="text-primary group flex items-center gap-px custom-focus"
                  >
                    @
                    <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] tran300 ease-out">
                      {data.name}
                    </span>
                  </Link>
                </h3>
                <p className="font-mono">
                  {data.start} - {data.end}
                </p>
              </MotionDiv>
              {data.shortDescription.map((desc, idx) => (
                <MotionP
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 5 },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.4 + idx * 0.1,
                  }}
                  key={idx}
                  className="relative text-base tracking-wide mb-2 pl-6 li-before"
                >
                  {desc}
                </MotionP>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </MotionSection>
  );
};

export default Education;

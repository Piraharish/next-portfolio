import { MotionDiv } from "../motions";

const SectionTitle = ({
  title,
  titleNo,
}: {
  title: string;
  titleNo: string;
}) => {
  return (
    <MotionDiv
      className="flex items-center relative text-xl sm:text-2xl w-full whitespace-nowrap font-bold my-10 capitalize afterline2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <span className="mr-2 font-mono text-primary">{titleNo}</span>
      {title}
    </MotionDiv>
  );
};

export default SectionTitle;

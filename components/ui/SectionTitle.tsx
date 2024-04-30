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
      className="flex items-center relative text-xl sm:text-2xl tracking-wide w-full whitespace-nowrap font-bold mb-20 capitalize afterline2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <span className="mr-2 font-mono text-primary">{titleNo}</span>
      {title}
    </MotionDiv>
  );
};

export default SectionTitle;

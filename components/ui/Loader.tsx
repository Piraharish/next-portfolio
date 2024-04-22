import { MotionDiv, MotionPath, MotionSvg, MotionText } from "../motions";

const Loader = () => {
  return (
    <MotionDiv
      className="text-primary fill-none flex justify-center items-center overflow-hidden h-screen"
      exit={{ scale: 0 }}
      key="motiondivleave"
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
    >
      <MotionSvg
        className="size-24"
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <title>Loader Logo</title>
        <g>
          <g id="P" transform="translate(35.000000, 35.000000)">
            <MotionText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
              }}
              exit={{
                scale: 2,
              }}
              x="1"
              y="35"
              fill="currentColor"
              fontSize="55px"
              fontFamily="Consolas"
            >
              P
            </MotionText>
          </g>
          <MotionPath
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            exit={{
              scale: 2,
            }}
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
          />
        </g>
      </MotionSvg>
    </MotionDiv>
  );
};

export default Loader;

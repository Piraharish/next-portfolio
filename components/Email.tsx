import Link from "next/link";
import { MotionDiv } from "./motions";
function Email() {
  return (
    <MotionDiv
      className="max-md:hidden fixed bottom-0 md:right-4 lg:right-12 flex flex-col items-center gap-6 afterline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <Link
        href="mailto:piraharish.s@gmail.com"
        className="vertical-mode custom-focus font-mono font-medium text-base lg:text-lg tracking-wider mb-5 p-3 tran300 hover:text-primary hover:-translate-y-2 focus:-translate-y-2"
      >
        piraharish.s@gmail.com
      </Link>
    </MotionDiv>
  );
}

export default Email;

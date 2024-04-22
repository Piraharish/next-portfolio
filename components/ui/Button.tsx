import Link from "next/link";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      className="text-primary font-mono px-4 py-2 rounded border border-solid border-primary bg-transparent text-base outline-none flex duration-300 btn"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
};

export default Button;

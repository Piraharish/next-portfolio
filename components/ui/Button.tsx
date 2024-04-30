import Link from "next/link";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      className="text-primary font-mono font-medium tracking-wide px-4 py-2 rounded border border-solid border-primary bg-transparent text-lg outline-none flex duration-300 btn w-max"
      href={link}
      target="_blank"
      rel="noopener noreferrer preconnect"
      aria-label={`Link to ${text}`}
      title={`Link to ${text}`}
    >
      {text}
    </Link>
  );
};

export default Button;

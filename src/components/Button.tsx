import Link from "next/link";
import React from "react";

function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link className="btn" href={link} target="_blank"  rel="noopener noreferrer">
      {text}
    </Link>
  );
}

export default Button;

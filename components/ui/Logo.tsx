import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-primary inline-block size-11 z-[1] relative tran300 hover:outline-0 hover:-translate-x-1 hover:-translate-y-1 focus:-translate-x-1 focus:outline-0 focus:-translate-y-1 group"
    >
      <div className="tran300 absolute top-0 left-0 -z-[1] group-hover:translate-x-1 group-hover:translate-y-[3px] group-focus:translate-x-1 group-focus:translate-y-[3px]">
        <svg
          className="align-middle size-full fill-current"
          id="hex"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
        >
          <title>Hexagon</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
                fill="currentColor"
              ></polygon>
            </g>
          </g>
        </svg>
      </div>
      <div className="relative z-[1]">
        <svg
          className="text-primary tran300 size-full align-middle select-none"
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 95"
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                id="Shape"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
              />
            </g>
          </g>
          <text
            x="27"
            y="67"
            fill="currentColor"
            fontSize="50px"
            className="font-semibold"
          >
            P
          </text>
        </svg>
      </div>
    </Link>
  );
};

export default Logo;

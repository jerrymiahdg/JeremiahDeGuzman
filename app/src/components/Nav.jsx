import { Link } from "react-router";

const Nav = () => {
  return (
    <div className="flex gap-7 text-lg py-5 font-instrument-serif italic">
      <Link to="/">Home</Link>
      <Link>Projects</Link>
      <Link>Contact</Link>
    </div>
  );
};

export default Nav;

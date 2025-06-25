import { Link } from "react-router";

const Nav = () => {
  return (
    <div className="flex gap-7 text-xl py-5 font-instrument-serif italic">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Nav;

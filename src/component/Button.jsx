import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        to={"/contact"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-cover bg-circleStar bg-center bg-no-repeat group"
      ></Link>
      ddd
    </div>
  );
};

export default Button;

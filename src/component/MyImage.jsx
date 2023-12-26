import MyImg from "../assets/img/priyankarasenarathne.jpg";
const MyImage = () => {
  return (
    <div className=" xl:flex lg:overflow-hidden xl:max-w-none z-0">
      <img
        src={MyImg}
        width={"200px"}
        height={"200px"}
        alt="MyImage"
        className="w-full h-full bg-cover bg-no-repeat -z-10" //translate-z-0
      />
    </div>
  );
};

export default MyImage;

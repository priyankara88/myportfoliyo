import MyImg from "../assets/img/priyankarasenarathne.jpg";
const MyImage = () => {
  return (
    <>
      <img
        src={MyImg}
        alt="MyImage"
        className="w-full h-full bg-cover bg-no-repeat -z-10" //translate-z-0
      />
    </>
  );
};

export default MyImage;

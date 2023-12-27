import MyImg from "../assets/img/priyankarasenarathne.jpg";
const MyImage = () => {
  return (
    <div>
      <img
        src={MyImg}
        alt="MyImage"
        className="w-full h-full bg-cover bg-no-repeat -z-10" //translate-z-0
      />
    </div>
  );
};

export default MyImage;

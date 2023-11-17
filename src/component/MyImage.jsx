import MyImg from "../assets/img/myimage.png";
const MyImage = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none z-0">
      <img
        src={MyImg}
        alt="My Image"
        width={200}
        height={200}
        className="   w-full h-full" //translate-z-0
      />
    </div>
  );
};

export default MyImage;

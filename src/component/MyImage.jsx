import MyImg from "../assets/img/myimage.png";
const MyImage = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none z-0">
      <img
        src={MyImg}
        alt="My Image"
        width={200}
        height={200}
        className="translate-z-0   w-full h-full"
      />
    </div>
  );
};

export default MyImage;

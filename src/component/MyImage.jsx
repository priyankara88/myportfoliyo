import MyImg from "../assets/img/avatar.png";
const MyImage = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none z-0">
      <img
        src={MyImg}
        alt="My Image"
        width={300}
        height={200}
        className="translate-z-0   w-full h-full"
      />
    </div>
  );
};

export default MyImage;

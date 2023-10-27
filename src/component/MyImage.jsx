import MyImg from "../assets/img/avatar.png";
const MyImage = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <img
        src={MyImg}
        alt="My Image"
        width={400}
        height={300}
        className="translate-z-0   w-full h-full"
      />
    </div>
  );
};

export default MyImage;

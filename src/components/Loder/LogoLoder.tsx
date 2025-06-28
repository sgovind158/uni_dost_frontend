import Image from "next/image";

const LogoLoader = () => (
  <div className="flex justify-center items-center h-full w-full">
    <Image
      src="/assests/splash/uni_logo.svg"
      alt="Loading..."
      width={98}
      height={98}
      className="animate-spin"
    />
  </div>
);

export default LogoLoader;
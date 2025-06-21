"use client";
import Image from "next/image";
import WhiteLine from "./components/Line/WhiteLine";
import LogoLoader from "./components/Loder/LogoLoder";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
   const router = useRouter();

   useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/waiting");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="">
      <div className="relative min-h-[100vh]">
        <Image className="absolute right-0 " src={"/assests/splash/top_img.svg"} alt="UNI DOST Logo" width={250} height={340} />
        <Image className="absolute bottom-0" src={"/assests/splash/bottom_img.svg"} alt="UNI DOST Logo Text" width={250} height={340} />
        <div className="w-full flex justify-center h-[100vh]">
          {/* <Image
            src={"/assests/splash/uni_logo.svg"}
            alt="Uni DOST Illustration"
            width={98}
            height={98}
          /> */}
          <LogoLoader/>

          
        </div>

        <div className="absolute w-full bottom-[10px] flex flex-col justify-center items-center">
          <p className="text-center max-w-[215px] text-sm text-white">
            Join <span className="text-base font-semibold">10K+</span> Students & Alumni Around the Globe
          </p>
          <div>
            <WhiteLine/>
          </div>

          </div>
        
      </div>

     
    </div>
  );
}

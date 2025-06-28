import LogoLoader from "@/components/Loder/LogoLoder";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Loader = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="w-full flex justify-center h-[100vh] md:h-[80vh]">
      <LogoLoader />
    </div>
  );
};

export default Loader;

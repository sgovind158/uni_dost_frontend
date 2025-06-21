import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  // swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});


const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(nextConfig);

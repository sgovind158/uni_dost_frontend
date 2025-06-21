import withPWAInit from '@ducanh2912/next-pwa';
const withPWA = withPWAInit({
  // eslint-disable-next-line linebreak-style
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  register: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});
// eslint-disable-next-line linebreak-style
const nextConfig = {


};
export default withPWA(nextConfig);

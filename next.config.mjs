/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
        port: "",
        pathname: "/mycompany-data-bucket-dev/**",
      },
    ],
  }

};

export default nextConfig;

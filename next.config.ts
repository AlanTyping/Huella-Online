import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/como-hacer-una-pagina-web-para-fotografos",
        destination:
          "/blog/fotografos/como-hacer-una-pagina-web-para-fotografos",
        permanent: true,
      },
      {
        source: "/blog/cuanto-cuesta-una-web-para-fotografos",
        destination: "/blog/fotografos/cuanto-cuesta-una-web-para-fotografos",
        permanent: true,
      },
      {
        source: "/blog/que-debe-tener-el-portfolio-web-de-un-fotografo",
        destination:
          "/blog/fotografos/que-debe-tener-el-portfolio-web-de-un-fotografo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

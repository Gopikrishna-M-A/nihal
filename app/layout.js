import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import "./globals.css";
import "./responsive.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KNM TIMBERS AND ABU SAW MILL",
  description:
    "K.N.M Timbers and Abu Saw Mill, established in 1991 is a high quality leading furniture venture of Kerala. A business that has been passed over for generations, we have successfully supplied woods and materials across the globe for the past 32 years. KNM Timbers and Abu Saw Mill celebrates craftsmanship blended with creativity making it every client's primary choice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} page`}>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#22292E",
              // Alias Token
              colorBgContainer: "#ffffff",
            },
          }}
        >
          <div>{children}</div>
        </ConfigProvider>
      </body>
    </html>
  );
}

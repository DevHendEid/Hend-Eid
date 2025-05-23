import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { Baloo_Bhai_2 } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });
const balooBhai = Baloo_Bhai_2({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-baloo-bhai', // هذا مهم لاستخدام الخط كمتغير CSS
});

export const metadata = {
  title: "Portfolio of Hend Eid - Software Developer",
  description:
    "This is the portfolio of Hend Eid. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${balooBhai.variable}`}>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}

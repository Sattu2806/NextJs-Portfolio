import "@/styles/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

// Code written by Satender Maurya aka Sattu

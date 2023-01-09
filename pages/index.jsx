import React from "react";
import Head from "next/head";

import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Muscle Therapy Massage</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomeHero></HomeHero>
      </div>
    </>
  );
}

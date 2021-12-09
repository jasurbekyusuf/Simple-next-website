import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../component/Navbar";
import Image from "next/image";
export default function About() {
  return (
    <>
      <Head>
        <title>List| About</title>
      </Head>
      <div className="style.container">
        <h1>About Page</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <Image src="/public/about.jpg" width={328} height={300} />
      </div>
    </>
  );
}

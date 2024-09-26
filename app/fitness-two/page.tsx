import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function FitnessTwo() {
  return (
    <div>
      Fitness-Two
      <br></br>
      <br></br>
      <Link href="/fitness-one">Fitness One</Link>
      <br></br>
      <br></br>
      <Link href="/fitness-two">Fitness Two</Link>
      <br></br>
      <br></br>
      <Link href="/">Main Page</Link>
    </div>
  );
}

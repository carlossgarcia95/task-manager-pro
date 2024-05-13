import Link from "next/link";

export default function Home() {
  return (
    <div>
      Company website
      <Link href={"/workspace"}>Get Started</Link>
    </div>
  );
}

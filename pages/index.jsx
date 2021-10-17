import Link from "next/link";

export default function Home() {
  return (
    <div>
      Kosonk min, baru jadi login:{" "}
      <Link href="/login">
        <a className="underline">sini</a>
      </Link>
    </div>
  );
}

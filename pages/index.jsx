import Link from "next/link";
import Nav from "../components/navigation/nav";

const Home = () => {
  return (
    <Nav>
      <div className="bg-white">
        Kosonk min, baru jadi login:{" "}
        <Link href="/login">
          <a className="underline">sini</a>
        </Link>
      </div>
    </Nav>
  );
};

export default Home;

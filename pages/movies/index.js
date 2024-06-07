import Link from "next/link";
import Image from "next/image";

export default function Movies() {
  return (
    <>
      <h1>I am the movies page</h1>
      <Image
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="cinema"
        height={426}
        width={640}
      />
      <div>
        <Link href="/movies/interstellar">
          interstellar (using the nextJS link component
        </Link>
      </div>
      <div>
        <a href="/movies/tenet">tenet (using a standard a tag)</a>
      </div>
    </>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className=" w-auto">
      <div className="mx-auto mt-2 flex w-11/12 flex-row justify-around rounded-md bg-slate-500 px-5 py-3">
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <nav className="headerLinks flex flex-row gap-2">
          <Link href={`/`}>Home</Link>
          <Link href={`/contact`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

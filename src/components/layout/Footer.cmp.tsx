import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-auto">
      <div className="mx-auto flex w-11/12 flex-col justify-center rounded-md bg-slate-500 px-5 py-3 md:flex-row md:justify-around">
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <nav className="footerLinks flex flex-col justify-center gap-2">
          <Link href={`/`}>Home</Link>
          <Link href={`/contact`}>Contact</Link>
        </nav>
        <div className="socials">
          <h3>SOCIAL 1</h3>
          <h3>SOCIAL 2</h3>
        </div>
      </div>
    </footer>
  );
}

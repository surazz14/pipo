import Link from "next/link";
import { site } from "@/config/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 text-center">
      <p className="font-deva text-3xl text-pipo-red">नमस्ते</p>
      <h1 className="font-display mt-4 text-5xl text-pipo-navy">Page not found</h1>
      <p className="mt-4 max-w-md text-pipo-muted">
        That page has wandered off. Head home, or open the Nepalese menu.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-red">
          Home
        </Link>
        <a href={site.menuUrl} className="btn-gold">
          Menu
        </a>
      </div>
    </section>
  );
}

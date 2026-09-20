import Link from "next/link";
import { fullAddress, site } from "@/config/site";
import { Nepal, NepalFlag, PrayerFlags } from "@/components/NepalMarks";

export function Footer() {
  return (
    <footer className="bg-pipo-navy text-pipo-white">
      <PrayerFlags />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <NepalFlag className="h-12 w-10" />
            <div>
              <p className="font-display text-2xl tracking-[0.14em] uppercase">
                {site.name}
              </p>
              <p className="mt-1 text-xs tracking-[0.22em] uppercase text-pipo-gold">
                A taste of <Nepal /> in Freo
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
            Himalayan spices, handmade momos and family recipes — served in
            Fremantle Food Court.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Visit</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">{fullAddress()}</p>
          <a
            href={site.location.mapsUrl}
            className="mt-3 inline-block text-sm text-pipo-gold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>

        <div>
          <h2 className="footer-heading">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {site.hours.map((row) => (
              <li key={row.days} className="flex flex-col">
                <span>{row.days}</span>
                <span className="text-pipo-gold-soft">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Kitchen</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-white/75 hover:text-pipo-gold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/75 hover:text-pipo-gold">
                About us
              </Link>
            </li>
            <li>
              <a href={site.menuUrl} className="text-white/75 hover:text-pipo-gold">
                Menu
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-white/75 hover:text-pipo-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs tracking-[0.16em] uppercase text-white/50">
        © {new Date().getFullYear()} {site.name}. Proudly Nepalese. Fremantle WA.
      </div>
    </footer>
  );
}

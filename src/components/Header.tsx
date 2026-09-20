"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/config/site";
import { NepalFlag } from "@/components/NepalMarks";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-pipo-navy/95 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-pipo-white">
          <NepalFlag className="h-11 w-9 drop-shadow" />
          <span className="leading-tight">
            <span className="font-display block text-xl tracking-[0.18em] uppercase">
              {site.shortName}
            </span>
            <span className="block text-[10px] tracking-[0.28em] uppercase text-pipo-gold-soft">
              Nepalese · Fremantle
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              !item.external &&
              (item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href));

            const className = `text-[13px] tracking-[0.22em] uppercase transition-colors ${
              active
                ? "text-pipo-gold"
                : "text-pipo-white/85 hover:text-pipo-gold"
            }`;

            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                className={className}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.menuUrl} className="btn-gold hidden sm:inline-flex">
            Order online
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`h-px w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-pipo-navy px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-display text-2xl text-pipo-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-display text-2xl text-pipo-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ),
            )}
            <a href={site.menuUrl} className="btn-gold mt-2 w-fit">
              Order online
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

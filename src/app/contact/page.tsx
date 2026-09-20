import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Nepal, PrayerFlags } from "@/components/NepalMarks";
import { fullAddress, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find Pipo Fremantle in Fremantle Food Court, 6 Henderson Street, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="absolute inset-0 -z-10 grid grid-cols-3">
          {[
            { src: "/images/momos.jpg", label: "Momo" },
            { src: "/images/noodles.jpg", label: "Chowmein" },
            { src: "/images/pizza.jpg", label: "Pizza" },
          ].map((dish) => (
            <div key={dish.label} className="relative overflow-hidden">
              <Image
                src={dish.src}
                alt={dish.label}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.22em] uppercase text-white/85">
                {dish.label}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mx-auto max-w-6xl">
          <p className="eyebrow">Say namaste</p>
          <h1 className="font-display mt-4 text-5xl sm:text-6xl">Contact</h1>
          <p className="mt-4 max-w-xl text-white/80">
            Visit our <Nepal className="text-pipo-gold-soft">Nepalese</Nepal>{" "}
            stall in Fremantle Food Court, or leave a message and we will reply.
          </p>
        </div>
      </section>
      <PrayerFlags />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <aside className="space-y-8">
          <div>
            <h2 className="font-display text-3xl text-pipo-navy">The stall</h2>
            <p className="mt-3 text-sm leading-7 text-pipo-muted">
              {fullAddress()}
            </p>
            <a
              href={site.location.mapsUrl}
              className="mt-2 inline-block text-sm text-pipo-red hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <div>
            <h2 className="font-display text-3xl text-pipo-navy">Hours</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {site.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-6 border-b border-pipo-navy/10 py-2">
                  <span>{row.days}</span>
                  <span className={row.time === "Closed" ? "text-pipo-red" : "text-pipo-navy"}>
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-pipo-navy">Order</h2>
            <p className="mt-3 text-sm leading-7 text-pipo-muted">
              Menu and online ordering for pickup from the food court kitchen.
            </p>
            <a href={site.menuUrl} className="btn-red mt-4">
              View menu
            </a>
          </div>
        </aside>

        <div className="rounded-[var(--radius-lg)] bg-pipo-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <h2 className="font-display text-3xl text-pipo-navy">Write to us</h2>
          <p className="mt-2 mb-8 text-sm text-pipo-muted">
            Questions, group orders, or a hello from Nepal — send it through.
          </p>
          <ContactForm />
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[var(--radius-lg)] border border-pipo-navy/10 bg-white">
          <iframe
            title="Map to Pipo Fremantle"
            src={site.location.embedUrl}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

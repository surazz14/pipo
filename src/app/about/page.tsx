import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fullAddress, site } from "@/config/site";
import { Nepal, NepalFlag, PrayerFlags } from "@/components/NepalMarks";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pipo Fremantle is a Nepalese restaurant in Fremantle Food Court, cooking Himalayan family recipes in the heart of Freo.",
};

const values = [
  {
    title: "Nepal first",
    copy: "We highlight Nepal in the kitchen and on the plate — spices, dumpling folds, and the greeting you get at the counter.",
  },
  {
    title: "Cooked to order",
    copy: "This is not factory food-court fare. Momos, curries and noodles are prepared the way they are at home.",
  },
  {
    title: "Easy Freo lunch",
    copy: "Find us in Fremantle Food Court: sit in, take away, or order online before you walk over.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Image
          src="/images/spices.jpg"
          alt="Himalayan spices used in Nepalese cooking"
          fill
          className="object-cover"
          priority
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="eyebrow">Our story</p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl sm:text-6xl">
            From the kitchens of <Nepal className="text-pipo-gold-soft" /> to
            Fremantle
          </h1>
        </div>
      </section>
      <PrayerFlags />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="gold-rule" />
          <h2 className="section-title mt-5">Namaste, we are Pipo</h2>
          <p className="mt-6 text-base leading-8 text-pipo-muted">
            {site.name} is a <Nepal>Nepalese</Nepal> restaurant inside Fremantle
            Food Court. We opened the stall to share the food we miss from
            home: a basket of momos with fiery achar, a bowl of curry that
            smells like toasted cumin, chowmein tossed the Kathmandu way.
          </p>
          <p className="mt-4 text-base leading-8 text-pipo-muted">
            Nepal is more than a flavour note here — it is the whole point. The
            flag colours, the spices, the word namaste at the pass. If you have
            eaten in Pokhara or walked the alleys of Thamel, you will recognise
            the kitchen. If you have not, this is a good place to start.
          </p>
          <p className="mt-4 text-base leading-8 text-pipo-muted">
            You will find us at {fullAddress()}, among the food-court tables a
            short stroll from Fremantle Markets.
          </p>
        </div>
        <div className="relative">
          <Image
            src="/images/dining.jpg"
            alt="Warm dining atmosphere"
            width={900}
            height={700}
            className="h-[420px] w-full rounded-[var(--radius-lg)] object-cover"
          />
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-[var(--radius-md)] bg-pipo-white px-4 py-3 shadow-[var(--shadow-card)]">
            <NepalFlag className="h-10 w-8" />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-pipo-muted">
                Proudly
              </p>
              <p className="font-display text-2xl text-pipo-navy">
                <Nepal>Nepalese</Nepal>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pipo-navy px-5 py-20 text-pipo-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">What we cook for</p>
          <h2 className="font-display mt-4 text-4xl">Everything we believe in</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-display text-2xl text-pipo-gold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-20 lg:px-8">
        <p className="font-deva text-3xl text-pipo-red">धन्यवाद</p>
        <h2 className="section-title max-w-2xl">
          Hungry? The full <Nepal>Nepalese</Nepal> menu is one click away.
        </h2>
        <div className="flex flex-wrap gap-3">
          <a href={site.menuUrl} className="btn-red">
            View menu
          </a>
          <Link href="/contact" className="btn-gold">
            Visit us
          </Link>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { fullAddress, signatureDishes, site } from "@/config/site";
import { MountainRule, Nepal, NepalFlag, PrayerFlags } from "@/components/NepalMarks";

const services = [
  {
    title: "Dine in",
    copy: "Pull up a seat in Fremantle Food Court and eat momos while they’re still steaming.",
  },
  {
    title: "Takeaway",
    copy: "Nepalese comfort food, packed to go — perfect before the Markets or the harbour.",
  },
  {
    title: "Order online",
    copy: "Skip the queue. Browse the full menu and order for pickup from our kitchen.",
  },
];

const beliefs = [
  { value: "Himalayan", label: "spices, toasted fresh" },
  { value: "Handmade", label: "momos every day" },
  { value: "Nepal", label: "family recipes" },
  { value: "Freo", label: "food court ease" },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-pipo-navy text-pipo-white">
        <Image
          src="/images/himalaya.jpg"
          alt="Himalayan mountains of Nepal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,18,32,0.88)_8%,rgba(11,18,32,0.55)_48%,rgba(200,16,46,0.28)_100%)]" />
        <div className="absolute inset-x-0 top-0">
          <PrayerFlags className="opacity-90" />
        </div>
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pb-28 pt-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-deva text-3xl text-pipo-gold-soft">नमस्ते</p>
            <p className="eyebrow mt-3 flex items-center gap-3">
              <NepalFlag className="h-7 w-6" />
              From <Nepal /> to Fremantle Food Court
            </p>
            <h1 className="font-display mt-5 text-5xl leading-[0.95] sm:text-7xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
              A <Nepal>Nepalese</Nepal> kitchen in the heart of Freo — handmade
              momos, Himalayan spice and a warm namaste, served among the food
              court tables of Henderson Street.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.menuUrl} className="btn-red">
                View menu
              </a>
              <Link href="/about" className="btn-outline">
                Our story
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <MountainRule light />
        </div>
      </section>

      <section className="-mt-8 relative z-10 mx-auto grid max-w-6xl gap-4 px-5 lg:grid-cols-3 lg:px-8">
        {services.map((item, i) => (
          <article
            key={item.title}
            className="card-lift rounded-[var(--radius-lg)] border border-pipo-sand bg-pipo-white p-7 shadow-sm"
          >
            <p className="text-xs tracking-[0.28em] uppercase text-pipo-red">
              0{i + 1}
            </p>
            <h2 className="font-display mt-3 text-3xl text-pipo-navy">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-pipo-muted">{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -left-3 top-8 hidden h-40 w-3 bg-pipo-blue sm:block" />
          <div className="absolute -left-0 top-8 hidden h-40 w-3 bg-pipo-red sm:block" />
          <div className="overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src="/images/momos.jpg"
              alt="Handmade Nepalese momos"
              width={900}
              height={700}
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 max-w-xs rounded-[var(--radius-lg)] bg-pipo-navy p-6 text-pipo-white shadow-[var(--shadow-card)] sm:right-6">
            <p className="font-deva text-xl text-pipo-gold">नेपाल</p>
            <p className="mt-1 text-sm leading-6 text-white/75">
              Every plate starts with Nepal — the spices, the dumpling fold, the
              achar on the side.
            </p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Namaste & welcome</p>
          <div className="gold-rule mt-4" />
          <h2 className="section-title mt-5">
            A little piece of <Nepal /> in Fremantle
          </h2>
          <p className="mt-6 text-base leading-8 text-pipo-muted">
            Pipo is a <Nepal>Nepalese</Nepal> restaurant tucked inside Fremantle
            Food Court. We cook the food we grew up with: momos pinched by hand,
            curries built on toasted masala, and noodles that taste like a
            Kathmandu evening — not a generic food-court curry.
          </p>
          <p className="mt-4 text-base leading-8 text-pipo-muted">
            Come for a quick lunch, stay for the steam off the momo basket.
            When you are ready, the full menu lives on our ordering page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn-red">
              About us
            </Link>
            <a href={site.menuUrl} className="btn-gold">
              Order now
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pipo-navy py-20 text-pipo-white">
        <Image
          src="/images/nepal.jpg"
          alt="Temple architecture of Nepal"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-pipo-navy/70" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="eyebrow">Why Nepal on every plate</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl">
              Himalayan flavour, Freo hospitality
            </h2>
            <p className="mt-5 max-w-xl text-white/75 leading-8">
              Nepal sits between India and the high mountains, and its kitchen
              carries both — chilli heat, sesame achar, ginger, cumin, and the
              comfort of a dumpling you eat with your hands.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {beliefs.map((item) => (
              <li
                key={item.label}
                className="rounded-[var(--radius-md)] border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-3xl text-pipo-gold">
                  {item.value === "Nepal" ? <Nepal /> : item.value}
                </p>
                <p className="mt-2 text-sm text-white/70">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">The kitchen&apos;s specials</p>
              <h2 className="section-title mt-3">Taste of Nepal</h2>
            </div>
            <a href={site.menuUrl} className="btn-red">
              Full menu
            </a>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map((dish) => (
              <a
                key={dish.name}
                href={site.menuUrl}
                className="card-lift group overflow-hidden rounded-[var(--radius-lg)] bg-pipo-white"
              >
                <div className="relative h-52">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-pipo-red px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-white">
                    {dish.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-pipo-navy">
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-pipo-muted">
                    {dish.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pipo-sand/60 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Find us</p>
            <h2 className="section-title mt-3">
              Fremantle Food Court, Henderson Street
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-pipo-muted">
              Look for the <Nepal /> flag in the food court — we&apos;re at{" "}
              {fullAddress()}, a short walk from Fremantle Markets.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-pipo-ink">
              {site.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-6 border-b border-pipo-navy/10 py-2 max-w-sm">
                  <span>{row.days}</span>
                  <span className={row.time === "Closed" ? "text-pipo-red" : "text-pipo-navy"}>
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.location.mapsUrl}
                className="btn-gold"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
              <Link href="/contact" className="btn-red">
                Contact
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-pipo-navy/10 bg-white shadow-[var(--shadow-card)]">
            <iframe
              title="Pipo Fremantle on Google Maps"
              src={site.location.embedUrl}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

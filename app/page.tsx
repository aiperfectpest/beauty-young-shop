import Image from "next/image";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const collections = [
  {
    name: "New Arrivals",
    text: "The latest drops — fresh silhouettes and seasonal essentials.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Everyday Basics",
    text: "Soft tees, denim and knits made to wear on repeat.",
    img: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dresses",
    text: "Effortless dresses for day, night and everything between.",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Accessories",
    text: "Finishing touches — bags, jewellery and the little details.",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  },
];

const reviews = [
  {
    quote:
      "The quality is unreal for the price. Everything fits like it was made for me.",
    name: "Sophie L.",
    tag: "Verified buyer",
  },
  {
    quote:
      "Minimal, chic and so easy to style. Beauty Young is my go-to now.",
    name: "Mia R.",
    tag: "Verified buyer",
  },
  {
    quote:
      "Fast shipping and the pieces look even better in person. Obsessed.",
    name: "Chloé T.",
    tag: "Verified buyer",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo/logo.webp"
              alt="Beauty Young"
              width={110}
              height={36}
              priority
            />
          </a>
          <nav className="hidden gap-8 text-xs uppercase tracking-wider2 text-ink md:flex">
            <a href="#shop" className="hover:text-stone">Shop</a>
            <a href="#reviews" className="hover:text-stone">Reviews</a>
            <a href="#contact" className="hover:text-stone">Contact</a>
          </nav>
          <a
            href="#shop"
            className="text-xs uppercase tracking-wider2 text-ink hover:text-stone"
          >
            Bag (0)
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[86vh] items-center justify-center overflow-hidden bg-blush"
      >
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-6 text-center text-white">
          <p className="text-xs uppercase tracking-wider2">Beauty Young</p>
          <h1 className="mt-4 text-4xl font-light leading-tight sm:text-6xl">
            Welcome to our shop
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/90">
            Minimal fashion for the modern young woman. Effortless style,
            made to be lived in.
          </p>
          <a
            href="#shop"
            className="mt-8 inline-block border border-white px-12 py-4 text-xs uppercase tracking-wider2 text-white transition-colors hover:bg-white hover:text-ink"
          >
            Shop the collection
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-wider2 text-stone">
            Beauty Young
          </p>
          <h2 className="mt-4 text-2xl font-light leading-relaxed sm:text-3xl">
            Timeless pieces, thoughtfully designed. We create effortless
            everyday wardrobes for women who love clean, modern style.
          </h2>
        </Reveal>
      </section>

      {/* Shop / Collections (services list) */}
      <section id="shop" className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal className="mb-12 text-center">
          <p className="text-xs uppercase tracking-wider2 text-stone">
            What we offer
          </p>
          <h2 className="mt-3 text-3xl font-light">Shop by collection</h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-blush">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-sm uppercase tracking-wider2">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-stone">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-blush py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-xs uppercase tracking-wider2 text-stone">
              Loved by you
            </p>
            <h2 className="mt-3 text-3xl font-light">Customer reviews</h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <figure className="flex h-full flex-col border-t border-ink/15 pt-6">
                  <div className="text-sm tracking-wider2 text-ink">
                    ★★★★★
                  </div>
                  <blockquote className="mt-4 flex-1 text-lg font-light leading-relaxed">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-xs uppercase tracking-wider2 text-stone">
                    {r.name} — {r.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
        <Reveal className="mb-10 text-center">
          <p className="text-xs uppercase tracking-wider2 text-stone">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-light">Contact us</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Questions about an order, sizing or a return? Send us a note and
            we’ll get back to you.
          </p>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10 bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Image
              src="/logo/logo.webp"
              alt="Beauty Young"
              width={120}
              height={40}
              className="bg-white p-2"
            />
            <p className="mt-4 text-sm text-white/60">
              Minimal fashion for the modern young woman.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider2 text-white/50">
              Shop
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#shop" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#shop" className="hover:text-white">Everyday Basics</a></li>
              <li><a href="#shop" className="hover:text-white">Dresses</a></li>
              <li><a href="#shop" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider2 text-white/50">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>hello@beautyyoung.com</li>
              <li>+60 12 345 6789</li>
              <li>Mon–Sat, 10am–7pm</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider2 text-white/50">
              Visit
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Beauty Young Store</li>
              <li>Kuala Lumpur, Malaysia</li>
              <li>
                <a href="#contact" className="underline hover:text-white">
                  Get directions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row">
            <p>© {new Date().getFullYear()} Beauty Young. All rights reserved.</p>
            <p className="uppercase tracking-wider2">Minimal Fashion</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

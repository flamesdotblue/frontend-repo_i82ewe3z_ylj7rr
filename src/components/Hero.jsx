import { Play, Calendar, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.25),rgba(124,58,237,0.15),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-200 shadow">
              New season enrollment open
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Move with confidence. Dance with joy.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              From Ballet to Hip-Hop, beginners to pros — find your rhythm with
              expert instructors, uplifting community, and classes that fit your
              schedule.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#classes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-white font-semibold shadow hover:shadow-md transition"
              >
                Explore Classes <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50"
              >
                Book a Trial <Calendar className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/64?img=${i+10}`}
                    alt="student avatar"
                    className="h-8 w-8 rounded-full ring-2 ring-white"
                  />
                ))}
              </div>
              <p>Trusted by 500+ local dancers</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/60 ring-1 ring-black/5 shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600&auto=format&fit=crop"
                alt="Dance studio"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl bg-white/90 px-4 py-3 shadow ring-1 ring-black/5">
              <p className="text-sm font-medium">Weekly Showcase Nights</p>
              <p className="text-xs text-gray-600">Fridays • 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

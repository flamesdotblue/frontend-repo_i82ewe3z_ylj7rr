import { Clock, Users, Music } from "lucide-react";

const classes = [
  {
    title: "Beginner Ballet",
    level: "Foundations",
    days: "Mon & Wed",
    time: "5:30 – 6:30 PM",
    color: "from-rose-500 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Hip-Hop Groove",
    level: "All Levels",
    days: "Tue & Thu",
    time: "6:45 – 7:45 PM",
    color: "from-indigo-500 to-violet-500",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Contemporary Flow",
    level: "Intermediate",
    days: "Wed & Fri",
    time: "7:45 – 8:45 PM",
    color: "from-emerald-500 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Latin Fusion",
    level: "Open Class",
    days: "Sat",
    time: "10:00 – 11:30 AM",
    color: "from-amber-500 to-orange-500",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "K-Pop Choreo",
    level: "Beginner/Int",
    days: "Sun",
    time: "2:00 – 3:00 PM",
    color: "from-fuchsia-500 to-pink-600",
    image:
      "https://images.unsplash.com/photo-1548504778-b14db3da1fbb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Jazz Technique",
    level: "Intermediate",
    days: "Tue",
    time: "5:00 – 6:00 PM",
    color: "from-cyan-500 to-blue-500",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ClassGrid() {
  return (
    <section id="classes" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Find your perfect class</h2>
            <p className="mt-2 text-gray-600">Flexible options for every style and level.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            View Full Schedule
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <div key={c.title} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow hover:shadow-lg transition">
              <div className="relative h-44 overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className={`absolute left-3 top-3 inline-flex items-center rounded-full bg-gradient-to-r ${c.color} px-3 py-1 text-xs font-semibold text-white shadow`}>{c.level}</div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                  <div className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> {c.days}</div>
                  <div className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {c.time}</div>
                </div>
                <button className="mt-4 inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-800">
                  Reserve Spot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

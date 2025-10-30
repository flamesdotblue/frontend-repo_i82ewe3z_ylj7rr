import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-pink-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book a free trial</h2>
            <p className="mt-2 text-gray-600">
              Tell us your goals and preferred styles. We'll match you with the right class
              and send confirmation details.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p className="inline-flex items-center gap-2"><Phone className="h-5 w-5 text-pink-600" /> (555) 123-4567</p>
              <p className="inline-flex items-center gap-2"><Mail className="h-5 w-5 text-pink-600" /> hello@rhythmdance.com</p>
              <p className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-pink-600" /> 123 Pulse Ave, Studio 2B, New City</p>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">First name</label>
                  <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                <div>
                  <label className="text-sm font-medium">Last name</label>
                  <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Preferred style</label>
                  <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                    <option>Ballet</option>
                    <option>Hip-Hop</option>
                    <option>Contemporary</option>
                    <option>Latin</option>
                    <option>Jazz</option>
                    <option>K-Pop</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Share goals or schedule preferences" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800">
                {sent ? "Request sent!" : "Request a Trial Class"}
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">We typically reply within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

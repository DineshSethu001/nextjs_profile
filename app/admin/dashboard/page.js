export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-[#11110F] px-6 py-12 text-[#F2E8D8] md:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C8955B]">
            Admin Dashboard
          </p>

          <h1 className="mt-4 font-serif text-5xl">
            Dashboard
          </h1>

          <p className="mt-4 text-white/40">
            Manage your portfolio from here.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm text-white/40">
              Projects
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              5
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm text-white/40">
              Skills
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              12
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm text-white/40">
              Messages
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              8
            </h2>
          </div>

        </div>

      </div>

    </main>
  );
}
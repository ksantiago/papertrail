export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-black">PaperTrail</h1>

            <p className="mt-2 text-gray-600">
              Track important cases, follow-ups, and administrative tasks.
            </p>
          </div>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Add Issue
          </button>
        </div>

        <div className="mt-10 rounded-xl border border-zinc-200 bg-stone-50 p-5 shadow-sm">
          <p className="text-gray-500">No active issues yet.</p>
        </div>
      </div>
    </main>
  );
}

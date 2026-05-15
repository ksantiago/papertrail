export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">PaperTrail</h1>

        <p className="mt-3 text-gray-600">
          Track important cases, follow-ups, and administrative tasks.
        </p>

        <button className="mt-6 rounded bg-black px-4 py-2 text-white">
          Add Issue
        </button>

        <div className="mt-10 rounded border p-6">
          <p className="text-gray-500">No active issues yet.</p>
        </div>
      </div>
    </main>
  );
}

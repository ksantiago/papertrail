"use client";

import React, { useState } from "react";

type Issue = {
  id: number;
  title: string;
  status: string;
  notes: string;
};

export default function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Waiting");
  const [notes, setNotes] = useState("");

  const handleAddIssue = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newIssue: Issue = {
      id: Date.now(),
      title,
      status,
      notes,
    };

    setIssues([...issues, newIssue]);

    setTitle("");
    setStatus("Waiting");
    setNotes("");
  };

  return (
    <main className="min-h-screen bg-zinc-100 p-8">
      <div className="mx-auto max-w-4xl">
        <div>
          <h1 className="text-4xl font-bold text-black">PaperTrail</h1>

          <p className="mt-2 text-gray-600">
            Track important cases, follow-ups, and administrative tasks.
          </p>
        </div>

        <form
          onSubmit={handleAddIssue}
          className="mt-8 rounded-xl border border-zinc-200 bg-stone-50 p-5 shadow-sm"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Issue title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="rounded-lg border border-zinc-300 p-3"
            />

            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className="rounded-lg border border-zinc-300 p-3"
            >
              <option value="Waiting">Waiting</option>
              <option value="In Progress">In Progress</option>
              <option value="Submitted">Submitted</option>
              <option value="Blocked">Blocked</option>
              <option value="Resolved">Resolved</option>
            </select>

            <textarea
              placeholder="Notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className="rounded-lg border border-zinc-300 p-3"
            />

            <button
              type="submit"
              className="w-fit rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Add Issue
            </button>
          </div>
        </form>

        {issues.length === 0 ? (
          <div className="mt-10 rounded-xl border border-zinc-200 bg-stone-50 p-5 shadow-sm">
            <p className="text-gray-500">No active issues yet.</p>
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-4">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="rounded-xl border border-zinc-200 bg-stone-50 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{issue.title}</h2>

                  <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm">
                    {issue.status}
                  </span>
                </div>

                <p className="mt-3 text-gray-600">{issue.notes}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

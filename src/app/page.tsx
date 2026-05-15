"use client";

import React, { useState } from "react";
type Note = {
  id: number;
  body: string;
  createdAt: string;
};

type Issue = {
  id: number;
  title: string;
  status: string;
  notes: Note[];
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
      notes: [
        {
          id: Date.now(),
          body: notes,
          createdAt: new Date().toLocaleString(),
        },
      ],
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
          <h1 className="text-4xl font-bold text-zinc-950">PaperTrail</h1>

          <p className="mt-2 text-zinc-600">
            Track important cases, follow-ups, and administrative tasks.
          </p>
        </div>

        <form
          onSubmit={handleAddIssue}
          className="mt-8 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Issue title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="rounded-lg border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
            />

            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className="rounded-lg border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 focus:border-zinc-500 focus:outline-none"
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
              className="min-h-[120px] rounded-lg border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
            />

            <button
              type="submit"
              className="w-fit rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Add Issue
            </button>
          </div>
        </form>

        {issues.length === 0 ? (
          <div className="mt-10 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-zinc-500">No active issues yet.</p>
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-4">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-zinc-900">
                    {issue.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    {issue.createdAt}
                  </p>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                    {issue.status}
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  {issue.notes.map((note) => (
                    <div key={note.id} className="rounded-lg bg-zinc-50 p-3">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-zinc-700">{note.body}</p>

                        <span className="shrink-0 text-xs text-zinc-400">
                          {note.createdAt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

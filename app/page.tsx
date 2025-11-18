export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Top Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back, <span className="text-brand">Student</span></h1>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <input
                type="text"
                placeholder="Search courses, tasks..."
                className="w-72 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-700 focus:outline-none"
              />
            </div>
            <button className="rounded-lg bg-zinc-900/60 px-3 py-2 text-sm border border-zinc-800 hover:bg-zinc-900">
              + Add Task
            </button>
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-brand to-indigo-700 grid place-items-center text-xs font-semibold">
              U
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'GPA', value: '3.82' },
            { label: 'Credits', value: '15 / 18' },
            { label: 'Attendance', value: '96%' },
            { label: 'Due Soon', value: '3 items' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-soft">
              <div className="text-xs uppercase text-zinc-400">{s.label}</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Schedule */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-medium text-zinc-200">Today?s Schedule</h2>
              <span className="text-xs text-zinc-400">Tue, 10:00 ? 16:00</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { time: '10:00', title: 'Linear Algebra', room: 'B-204' },
                { time: '12:00', title: 'Intro to Psychology', room: 'A-105' },
                { time: '14:00', title: 'Computer Networks', room: 'Lab-2' },
              ].map((c) => (
                <div key={c.time} className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/60 px-3 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-zinc-800/70 grid place-items-center text-zinc-300 text-xs">{c.time}</div>
                    <div>
                      <div className="text-sm font-medium">{c.title}</div>
                      <div className="text-xs text-zinc-400">Room {c.room}</div>
                    </div>
                  </div>
                  <button className="rounded-md border border-zinc-800 bg-zinc-950/40 px-2.5 py-1.5 text-xs text-zinc-300 hover:bg-zinc-900">Details</button>
                </div>
              ))}
            </div>
          </section>

          {/* Tasks */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h2 className="text-base font-medium text-zinc-200">Tasks</h2>
            <div className="mt-3 space-y-2">
              {[
                { t: 'CS - Project proposal', due: 'Today' },
                { t: 'Math - Problem set 4', due: 'Tomorrow' },
                { t: 'History - Essay outline', due: 'Fri' },
              ].map((x) => (
                <label key={x.t} className="flex items-start gap-3 rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-3 text-sm">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-brand focus:ring-0" />
                  <div className="flex-1">
                    <div className="font-medium text-zinc-200">{x.t}</div>
                    <div className="text-xs text-zinc-400">Due {x.due}</div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Grades */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-medium text-zinc-200">Recent Grades</h2>
              <button className="text-xs text-zinc-300 underline underline-offset-4">View all</button>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              {[
                { course: 'Data Structures', item: 'Quiz 2', score: '92%' },
                { course: 'Psychology', item: 'Lab 1', score: '88%' },
                { course: 'Linear Algebra', item: 'HW 3', score: '95%' },
                { course: 'Networks', item: 'Project Milestone', score: '90%' },
              ].map((g) => (
                <div key={g.course + g.item} className="rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-3">
                  <div className="text-sm font-medium text-zinc-200">{g.course}</div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-zinc-400">{g.item}</span>
                    <span className="font-semibold text-zinc-100">{g.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick links */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h2 className="text-base font-medium text-zinc-200">Quick Links</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { name: 'Courses', hint: 'Browse' },
                { name: 'Calendar', hint: 'Plan' },
                { name: 'Messages', hint: 'Chat' },
                { name: 'Resources', hint: 'Docs' },
              ].map((q) => (
                <button key={q.name} className="rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-3 text-left hover:bg-zinc-900">
                  <div className="text-sm font-medium text-zinc-200">{q.name}</div>
                  <div className="text-xs text-zinc-400">{q.hint}</div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

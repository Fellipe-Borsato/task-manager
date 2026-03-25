"use client";

export const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-black text-white flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <h1 className="text-lg font-semibold">Task Manager</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <a
          href="/"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-zinc-800 transition"
        >
          <span>Overview</span>
        </a>

        <a
          href="/analytics"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-zinc-800 transition"
        >
          <span>Analytics</span>
        </a>

        <a
          href="/settings"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-zinc-800 transition"
        >
          <span>Settings</span>
        </a>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-800">
        <button className="w-full bg-zinc-800 hover:bg-zinc-700 py-2 rounded-lg transition">
          Logout
        </button>
      </div>
    </aside>
  );
};


import './App.css'
import { useNavigate } from "react-router-dom";

const topics = [
  {
    title: "server state management",
    items: [
      { label: "Normal", path: "/normal" },
      { label: "Use Query", path: "/use-query" },
    ],
  },
];

function App() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
      <h1>ESTA APP ES UNA COMPLETA LOCURA</h1>

      <nav className="flex flex-col items-center gap-2">
        {topics.map((topic) => (
          <div key={topic.title} className="relative group">
            <button
              type="button"
              className="cursor-pointer text-2xl font-medium text-[var(--text-h)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline"
            >
              {topic.title}
            </button>

            <div className="absolute left-1/2 top-full z-10 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="flex min-w-44 flex-col gap-1 rounded-md border border-[var(--border)] bg-[var(--code-bg)] p-2 shadow-[var(--shadow)]">
                {topic.items.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => navigate(item.path)}
                    className="rounded-md px-4 py-2 text-left text-[var(--text-h)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default App

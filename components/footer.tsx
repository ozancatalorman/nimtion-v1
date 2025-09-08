export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-ink/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Nimtion Automation. All rights reserved.</p>
          <p className="opacity-80">Built with Next.js, Tailwind, and ❤︎</p>
        </div>
      </div>
    </footer>
  );
}
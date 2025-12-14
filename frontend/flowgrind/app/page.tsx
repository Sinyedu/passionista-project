import { Navbar } from "@/app/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center  dark:bg-black font-sans">
        <main className="flex w-full max-w-3xl flex-col items-center justify-center py-16 px-8 bg-white dark:bg-black">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-6">
            Welcome to your Next.js project
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 text-center">
            Edit{" "}
            <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
              pages/index.tsx
            </code>{" "}
            to get started.
          </p>
        </main>
      </div>
    </>
  );
}

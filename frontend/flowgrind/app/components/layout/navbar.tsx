import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-white">
                FlowGrind
              </Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/dashboard"
                className="border-b-2 border-transparent text-white hover:border-gray-300 hover:text-blue-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/auth/login"
                className="border-b-2 border-transparent text-white hover:border-gray-300 hover:text-blue-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

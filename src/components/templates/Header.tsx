import { Menu, Search, SlidersHorizontal } from "lucide-react";

function Header() {
  return (
    <nav className="flex items-center justify-between text-xl px-8 py-4 bg-zinc-800 text-white h-full w-full">
      <div className="flex items-center gap-8 h-full ">
        <img className="w-8 h-8" src="/github-mark-white.svg" />

        <ul className="flex text-white list-none">
          <li className="p-2">Product</li>
          <li className="p-2">Solutions</li>
          <li className="p-2">Resources</li>
          <li className="p-2">Open Source</li>
          <li className="p-2">Enterprice</li>
          <li className="p-2">Pricing</li>
        </ul>
      </div>
      <div className="flex items-center gap-3 h-full">
        <div className="hidden 2xl:flex items-center justify-between xl:w-sm p-2 h-9 text-sm text-white border-1 border-neutral-400 rounded-md">
          <div className="flex gap-2 items-center">
            <Search className="text-gray-600" />
            <p className=" text-neutral-400">Search or jump to...</p>
          </div>

          <button className="">
            <img src="/public/cmd.svg" alt="" />
          </button>
        </div>

        <div className="flex 2xl:hidden">
          <Search className="text-gray-600" />
        </div>

        <button className="px-3">Sign in</button>
        <button className="px-3 py-1 border-1 rounded-md border-gray-300">
          Sign up
        </button>

        <button className="flex p-2 border-1 rounded-lg border-gray-300">
          <SlidersHorizontal />
        </button>
      </div>
    </nav>
  );
}

function MobileHeader() {
  return (
    <nav className="flex items-center justify-between text-xl px-8 py-4 bg-zinc-800 text-white h-full w-full">
      <div>
        <button>
          <Menu size={28} />
        </button>
      </div>
      <div className="flex items-center gap-8 h-full ">
        <img className="w-8 h-8" src="/github-mark-white.svg" />
      </div>

      <div className="flex items-center gap-3 h-full">
        <button className="px-3 py-1 border-1 rounded-md border-gray-300">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export { Header, MobileHeader };

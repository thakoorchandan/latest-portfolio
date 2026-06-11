"use client";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navigation = [
  { name: "Home", id: "home" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
];

const hrefFor = (id) => (id === "home" ? "/" : `/#${id}`);

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="icon-link h-10 w-10"
    >
      {!mounted ? (
        <span className="h-5 w-5" />
      ) : isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 lg:px-6">
      <nav
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 lg:px-6"
        aria-label="Global"
      >
        <Link href="/" className="flex items-center gap-2.5 font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-soft text-sm font-extrabold text-white shadow-lg shadow-accent/30">
            TC
          </span>
          <span className="text-base tracking-tight">Thakoor Chandan</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center lg:flex lg:gap-x-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={hrefFor(item.id)}
              className="group relative text-sm font-semibold text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.name}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-accent to-accent-soft transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-link h-10 w-10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <Dialog.Panel className="glass fixed inset-y-3 right-3 z-50 w-[calc(100%-1.5rem)] overflow-y-auto rounded-3xl px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2.5 font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-soft text-sm font-extrabold text-white">
                TC
              </span>
              <span>Thakoor Chandan</span>
            </span>
            <button
              className="icon-link h-10 w-10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-1.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={hrefFor(item.id)}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-muted transition-colors duration-300 hover:bg-white/10 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;

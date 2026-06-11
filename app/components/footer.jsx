"use client";
import Link from "next/link";

const socials = [
  {
    href: "mailto:thakoorchandan@gmail.com",
    label: "Mail",
    path: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z",
    viewBox: "0 0 16 16",
  },
  {
    href: "https://www.linkedin.com/in/thakoor-chandan/",
    label: "LinkedIn",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
    viewBox: "0 0 16 16",
  },
  {
    href: "https://github.com/thakoorchandan",
    label: "GitHub",
    path: "M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",
    viewBox: "0 0 20 20",
  },
];

function Footer() {
  return (
    <footer className="px-4 pb-4 pt-16 lg:px-6">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl px-8 py-8 sm:text-center md:flex-row lg:flex-row">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="font-bold text-foreground">
            Thakoor Chandan
          </Link>
          . All rights reserved.
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              className="icon-link h-10 w-10"
              aria-label={s.label}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox={s.viewBox}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={s.path}
                />
              </svg>
              <span className="sr-only">{s.label}</span>
            </Link>
          ))}
          <Link href="/documents/ThakoorChandan.pdf" target="_blank">
            <button className="btn-primary text-sm">Resume</button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

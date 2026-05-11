import Link from "next/link";

const contacts = [
  {
    type: "Email",
    value: "berrykurniawan22@gmail.com",
    href: "mailto:berrykurniawan389@gmail.com",
  },
  {
    type: "GitHub",
    value: "github.com/berykwn",
    href: "https://github.com/Berykwn",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/Berykwn",
    href: "https://linkedin.com/in/berrykwn",
  },
];

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16">
      <div className="max-w-lg">
        <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-[0.1em] mb-3">
          Contact
        </p>

        <h1 className="text-[26px] md:text-[32px] font-light text-neutral-900 tracking-[-0.04em] leading-[1.15] mb-4">
          Good work starts
          <br />
          with a conversation.
        </h1>

        <p className="text-[13px] md:text-[13.5px] text-neutral-500 leading-[1.7] mb-10">
          Open to full-time roles, freelance engagements, or an idea worth
          talking through. Remote-first, South Sumatera-based — distance has
          never been the issue.
        </p>

        {/* Contact list */}
        <div>
          {contacts.map(({ type, value, href }) => (
            <Link
              key={type}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between py-4 border-t border-black/[0.06] last:border-b last:border-black/[0.06] hover:opacity-40 transition-opacity group"
            >
              <div className="flex flex-col gap-1 min-w-0 mr-4">
                <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-[0.08em] shrink-0">
                  {type}
                </span>
                <span className="text-[13px] md:text-[13px] text-neutral-900 truncate">
                  {value}
                </span>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 shrink-0 text-neutral-200 group-hover:text-neutral-400 transition-colors"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          ))}
        </div>

        <p className="text-[11px] text-neutral-400 font-mono mt-8">
          // Usually respond within a day.
        </p>
      </div>
    </div>
  );
}
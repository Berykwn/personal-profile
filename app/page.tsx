import Link from "next/link";
import TiltedCard from "./components/tilted-card";
import TypewritterName from "./components/typewriter-name";
import PageWrapper from "./components/page-wrapper";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-12 px-6">
      <article className="max-w-lg flex flex-col" aria-labelledby="profile-title">
        <header>
          <h1
            id="profile-title"
            className="text-3xl font-bold text-neutral-700 dark:text-neutral-200"
          >
            <TypewritterName />
          </h1>

          <div className="flex gap-x-3 mt-1">
            <span className="relative flex size-3 mt-0.75" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(255,215,0,0.4)] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-orange-300 shadow-[0_0_10px_rgba(255,215,0,0.7)]"></span>
            </span>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Junior Software Engineer
            </p>
          </div>
        </header>

        <section className="mt-4" aria-labelledby="about-title">
          <h2 id="about-title" className="sr-only">About</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-200 mb-2">
            I'm currently working as an <strong>IT Developer at PT Priamanaya Energi</strong>,
            where I build asset management systems using IBM Maximo and BIRT. My stack includes
            <strong> Java</strong>, <strong>JavaScript</strong>, and <strong>Jython</strong>.
          </p>

          <section className="mt-4" aria-labelledby="education-title">
            <h2
              id="education-title"
              className="font-semibold text-neutral-700 dark:text-neutral-200 mb-2"
            >
              🎓 Education
            </h2>
            <ul className="list-disc list-inside text-sm text-neutral-500 dark:text-neutral-200 space-y-1">
              <li>
                <strong>B.Sc. in Information Systems</strong>, Universitas Amikom Yogyakarta
              </li>
              <li>
                <strong>Frontend Engineering Bootcamp</strong>, Alterra Academy 💻
              </li>
            </ul>
          </section>
        </section>

        <hr className="h-px my-4 bg-neutral-100 dark:bg-neutral-700 border-0" aria-hidden="true" />

        <footer>
          <p className="text-sm text-neutral-500 dark:text-neutral-200 mb-1">
            I believe code is not just logic — it’s art with purpose. Let’s build something meaningful.
          </p>

          <Link
            href="/my-work"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            My work →
          </Link>
        </footer>
      </article>

      <aside
        className="relative animate-fire-bounce hidden lg:block"
        aria-label="Profile picture decoration"
      >
        <div
          className="absolute inset-0 rounded-xl z-0 fire-shadow animate-[firePulse_3s_ease-in-out_infinite]"
          aria-hidden="true"
        ></div>

        <TiltedCard
          imageSrc="/profile-picture-4.png"
          altText="Generate by ChatGPT"
          captionText="Hello, I’m Berry!"
          containerHeight="260px"
          containerWidth="180px"
          imageHeight="260px"
          imageWidth="180px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </aside>
    </PageWrapper>
  );
}

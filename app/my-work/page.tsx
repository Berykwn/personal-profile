import Link from "next/link";
import PageWrapper from "../components/page-wrapper";
import WorkJourney from "./components/work-journey";

export default function MyWork() {
  return (
    <PageWrapper className="lg:pt-32 lg:pb-16 px-6 pt-28 pb-8 ">
      <section aria-labelledby="work-heading">
        <header className="mb-6">
          <h1
            id="work-heading"
            className="text-3xl font-bold text-neutral-600 dark:text-neutral-200"
          >
            My Work Journey
          </h1>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            A glimpse of my past work and projects.{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Let's get in touch.
            </Link>
          </p>
        </header>

        <article>
          <WorkJourney />
        </article>
      </section>
    </PageWrapper>
  );
}

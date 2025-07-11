import PageWrapper from "../components/page-wrapper";

export default function Contact() {
    return (
        <PageWrapper className="flex flex-col lg:flex-row items-start gap-y-6 lg:gap-x-12 px-6 py-16">
            <article className="max-w-lg w-full" aria-labelledby="contact-title">
                <h1
                    id="contact-title"
                    className="text-3xl font-bold text-neutral-700 dark:text-neutral-100 mb-2"
                >
                    Let’s Connect 🤝
                </h1>

                <p className="text-neutral-500 dark:text-neutral-400 mb-6 text-sm">
                    Whether you want to talk about a project, job opportunity, or just want to say hi — I’d love to hear from you.
                </p>

                <ul className="space-y-4 text-sm text-neutral-700 dark:text-neutral-200">
                    <li>
                        <strong>Email:</strong>{" "}
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            berrykurniawan389@gmail.com
                        </a>
                    </li>
                    <li>
                        <strong>Github:</strong>{" "}
                        <a
                            href="https://github.com/Berykwn"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            github.com/Berykwn
                        </a>
                    </li>
                    <li>
                        <strong>LinkedIn:</strong>{" "}
                        <a
                            href="https://linkedin.com/in/berrykwn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            linkedin.com/in/Berykwn
                        </a>
                    </li>
                </ul>

                <footer className="mt-8 text-neutral-400 dark:text-neutral-500 text-xs">
                    I usually respond within a day or two. ✨
                </footer>
            </article>
        </PageWrapper>
    );
}

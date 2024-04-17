import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-1 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-blue-500 hover:bg-blue/50">
          <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 inline-block text-transparent bg-clip-text ">
            Convert PDFs into Conversations Instantly
          </p>
        </div>
        <h1 className="mt-4 max-w-4xl text-6xl font-bold md:text-6xl lg:text-7xl">
          Chat with{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 inline-block text-transparent bg-clip-text">
            DocAi
          </span>{" "}
          in seconds.
        </h1>
        <p className="mt-8 mb-4 max-w-prose text-zinc-800 sm:text-lg">
          Transform how you{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 inline-block text-transparent bg-clip-text">
            interact{" "}
          </span>{" "}
          with documents.{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 inline-block text-transparent bg-clip-text  ">
            DocAI{" "}
          </span>{" "}
          brings your{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 inline-block text-transparent bg-clip-text ">
            PDFs to life,{" "}
          </span>{" "}
          enabling real-time{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 inline-block text-transparent bg-clip-text ">
            {" "}
            conversations and insights --
          </span>{" "}
          because your{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 inline-block text-transparent bg-clip-text ">
            knowledge{" "}
          </span>{" "}
          shouldn&apos;s be locked on a page.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className:
              "mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 ",
          })}
          href="/sign-up"
        >
          Start For Free <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>

            <div>
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      src="/dashboard-preview.jpg"
                      alt="product preview"
                      width={1364}
                      height={866}
                      quality={100}
                      className="rounded-lg bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
                Start Chatting In Minutes
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                <span className="text-blue-600 ">Discover</span> insights from
                your
                <span className="text-blue-600"> PDF&apos;s faster</span> than
                ever with <span className="text-blue-600 ">DocAI </span>{" "}
              </p>
            </div>
          </div>
          <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 1
                </span>
                <span className="text-xl font-semibold">
                  Set Up Your Workspace
                </span>
                <span className="mt-2 text-zinc-700">
                  Start your journey with DocAI. Sign up swiftly, unlocking
                  access to our intuitive platform. Choose the starter plan for
                  essential features at great value, or elevate your experience
                  with advanced insights and capabilities with our{" "}
                  <Link
                    href="/pricing"
                    className="text-blue-700 underline underline-offset-2"
                  >
                    Pro plan
                  </Link>
                  .
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 2
                </span>
                <span className="text-xl font-semibold">
                  Upload Your Document{" "}
                </span>
                <span className="mt-2 text-zinc-700">
                  With just a drag and drop, your PDF becomes a dynamic partner
                  in progress. DocAI swiftly gets to work, turning static pages
                  into interactive dialogues. Prepare to see your text in a new
                  light, where every word is a window to deeper understanding.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 3
                </span>
                <span className="text-xl font-semibold">
                  Ask Away and Discover{" "}
                </span>
                <span className="mt-2 text-zinc-700">
                  Simply pose your questions and let DocAI guide you to clarity.
                  Within moments, transform every page into a conversation,
                  uncovering insights with ease and precision. It&apos;s your
                  document, but with instant, intelligent feedback at your
                  fingertips.
                </span>
              </div>
            </li>
          </ol>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/file-upload-preview.jpg"
                  alt="uploading preview"
                  width={1419}
                  height={732}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* Professional Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-32">
        <MaxWidthWrapper className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-bold text-xl">DocAI</h3>
            <p className="text-gray-400">
              © {new Date().getFullYear()} DocAI. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/about"
              className="hover:text-blue-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="hover:text-blue-500 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  );
}

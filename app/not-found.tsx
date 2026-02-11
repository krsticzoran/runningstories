import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-black min-h-screen flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-7xl mb-24 tracking-tight font-extrabold lg:text-9xl text-white">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
            Page not found currently
          </p>
          <p className="mb-4 text-lg font-light text-custom-gray">
            Sorry, we can't find such page.
          </p>

          <Link
            href={"/"}
            className="text-white text-center bg-custom-accent focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mb-2"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
}

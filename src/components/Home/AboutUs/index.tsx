import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">
              Ne kujdesemi për ju <br className="hidden md:block" />
              me               shërbime profesionale <br className="hidden md:block" />
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
              Ofrojmë pastrimin dhe hekurosjen e rrobave të ndryshme, kostumeve, 
              perdeve dhe shumë llojeve të tjera të tekstileve me siguri të garantuar.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Me 5 pika në Prishtinë dhe rrethinë, jemi gjithmonë afër jush për të 
              siguruar shërbime të shpejta dhe cilësore.
            </p>

            <div className="mt-8">
              <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Na kontaktoni tani
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 auto-rows-[120px] sm:auto-rows-[140px] md:auto-rows-[160px] lg:auto-rows-[180px]">
            {/* Image 1 - Tall vertical */}
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
              <Image
                src="/foto/foto1.png"
                alt="Pastrim kimik i rrobave"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Image 2 - Small square */}
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
              <Image
                src="/foto/foto2.jpg"
                alt="Hekurosje profesionale"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Image 3 - Wide horizontal */}
            <div className="relative col-span-2 row-span-1 overflow-hidden rounded-lg sm:col-span-1">
              <Image
                src="/foto/foto3.png"
                alt="Pastrim i perdeve"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Image 4 - Small square */}
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
              <Image
                src="/foto/foto4.png"
                alt="Pastrim i kostumeve"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Image 5 - Tall vertical */}
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
              <Image
                src="/foto/foto5.jpg"
                alt="Pika tona të shërbimit"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Image 6 - Medium rectangle */}
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
              <Image
                src="/foto/foto6.jpg"
                alt="Ekipi ynë profesional"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Image 7 - Extra wide */}
            <div className="relative col-span-2 row-span-1 overflow-hidden rounded-lg sm:col-span-2">
              <Image
                src="/foto/foto7.jpg"
                alt="Shërbime cilësore të garantuara"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
              />
            </div>

            {/* Image 8 - Small square */}
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
              <Image
                src="/foto/foto8.jpg"
                alt="Tekstile të ndryshme"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
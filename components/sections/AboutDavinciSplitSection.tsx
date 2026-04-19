import Image from "next/image";

const ABOUT_IMAGE_WIDTH = 1024;
const ABOUT_IMAGE_HEIGHT = 682;
const ABOUT_IMAGE_SRC = "/about-dubai-night.png?v=3";

export function AboutDavinciSplitSection() {
  return (
    <section
      className="relative z-[1] bg-[#171515] py-20 text-white sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="about-davinci-split-heading"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
        <div className="mx-auto w-full max-w-[52rem] rounded-sm lg:max-w-[56rem] shadow-[0_28px_56px_-8px_rgba(0,0,0,0.55),0_12px_28px_-6px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 overflow-hidden rounded-sm bg-[#171515] lg:grid-cols-2 lg:grid-rows-1 lg:min-h-[min(52vh,560px)]">
            <div className="relative min-h-[220px] w-full self-stretch bg-[#171515] py-6 sm:min-h-[260px] sm:py-8 lg:h-full lg:min-h-0 lg:py-0">
              <div className="absolute inset-2 flex items-center justify-center sm:inset-3 lg:inset-2">
                <Image
                  src={ABOUT_IMAGE_SRC}
                  alt="Dubai skyline at night with illuminated towers"
                  width={ABOUT_IMAGE_WIDTH}
                  height={ABOUT_IMAGE_HEIGHT}
                  className="max-h-full w-auto max-w-full object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority={false}
                  unoptimized
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#171515] px-6 py-12 sm:px-10 sm:py-14 lg:min-h-0 lg:px-8 lg:py-12 xl:px-10">
              <div className="mx-auto flex w-full max-w-[18rem] flex-col items-center text-center sm:max-w-xs md:max-w-sm">
                <h2
                  id="about-davinci-split-heading"
                  className="text-2xl font-light leading-snug tracking-tight text-white sm:text-[1.65rem] md:text-3xl"
                >
                  About Davinci
                </h2>
                <p className="mt-3 max-w-full text-[10px] font-normal uppercase leading-[1.65] tracking-[0.08em] text-white/95 sm:mt-4 sm:text-[11px] md:text-xs md:leading-[1.7]">
                  Davinci Properties is a premier real estate company in the UAE, offering a wide range
                  of properties to fit your unique needs. We pride ourselves on our commitment to
                  providing exceptional service, transparency, and results. As our business continues
                  to thrive, our team and clients will reap the rewards of our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

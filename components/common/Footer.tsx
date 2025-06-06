import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" text-white text-base py-10 md:py-20 relative z-0 font-semibold">
      <div className="absolute w-full md:w-[90%] h-full bg-primary top-0 left-0 -z-10"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 z-20 container mx-auto">
        <div className="col-span-1">
          <div className="max-md:pt-12">
            <h3 className="text-gray text-xs mb-3">BUSINESS INQUIRIES</h3>
            <a href="mailto:hi@beedev.dev" className="text-lg">
              hi@beedev.dev
            </a>
          </div>
          <div className="pt-12">
            <h3 className="text-gray text-xs mb-3">ADDRESS</h3>
            <p className="text-lg">32205 Ivice Kozoderovic 1b</p>
            <p className="text-lg">Cacak, Serbia</p>
            <p className="text-lg">Belgrade, Serbia</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="max-md:pt-12">
            <h3 className="text-gray text-xs mb-3">CALL US</h3>
            <a href="tel:+381 (0)63 624 005" className="text-lg block mb-2">
              +381 (0)63 624 005
            </a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="max-md:pt-12">
            <h3 className="text-gray text-xs mb-3">WORK WITH US</h3>
            <a
              href="mailto:milosostoja95@gmail.com"
              className="text-lg block mb-2"
            >
              milosostoja95@gmail.com
            </a>
          </div>
        </div>
        <div className="col-span-1 pt-12">
          <p className="text-xs">© 2022 BeeDev Agency</p>
        </div>
        <div className="col-span-1 pt-12">
          <Link href="/privacy-policy" className="text-xs">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

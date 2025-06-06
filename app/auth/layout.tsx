import Image from "next/image";

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="h-screen grid grid-cols-12 items-center">
        <div className="col-span-7 relative h-full">
          <Image
            src="/rand.png"
            fill
            alt="sing up image"
            sizes="100wv"
            className="w-full h-full"
          />
        </div>
        <div className="col-span-5 px-20">
          {children}
        </div>
      </div>  
    );



  }
  
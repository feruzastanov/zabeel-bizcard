import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Side margins to create tablet view */}
      <div className="mx-auto max-w-4xl min-h-screen relative overflow-hidden">
        {/* Dubai skyline background image */}
        <div className="absolute inset-0">
          <Image
            src="/dubai-skyline.jpg"
            alt="Dubai Skyline with Burj Khalifa"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Custom dark blue overlay with #0a3265 */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(10, 50, 101, 0.65)" }}
        ></div>

        {/* Additional overlay for depth with the same color */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(10, 50, 101, 0.7) 0%, transparent 50%, rgba(10, 50, 101, 0.4) 100%)`,
          }}
        ></div>

        {/* Main content container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Top section with image and contact info */}
          <div className="flex flex-col md:flex-row items-center md:items-start p-6 lg:p-8 gap-8">
            {/* Left side - Fuad's image with diagonal cut */}
            <div className="relative w-64 h-80 lg:w-72 lg:h-96">
              {/* Photo container */}
              <div className="relative w-full h-full">
                <Image
                  src="/fuadAlBastaki.jpeg"
                  alt="Fuad Al Bastaki"
                  fill
                  className="object-cover object-center rounded-lg"
                  priority
                />
              </div>

              {/* Logo positioned on the image */}
              <div className="absolute top-4 left-4 text-white">
                <div className="text-lg lg:text-xl font-bold tracking-wider">
                  <span className="block transform -rotate-12 origin-left">
                    Z
                  </span>
                  <span className="block text-xs font-normal mt-1 ml-5">
                    ZABEEL
                  </span>
                  <span className="block text-xs font-light ml-5">GROUP</span>
                </div>
              </div>
            </div>

            {/* Right side - Contact information */}
            <div className="flex-1 flex items-center justify-center w-full md:h-80 lg:h-96">
              <div className="text-white space-y-3 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs lg:text-sm">+971528333533</span>
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs lg:text-sm">
                    zabeel@emirates.net.ae
                  </span>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs lg:text-sm">
                    zabeelconsultancy@gmail.com
                  </span>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs lg:text-sm">
                    PYRAMID CENTRE OFFICE 313A DUBAI-U.A.E
                  </span>
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Main content section - centered */}
          <div className="flex-1 flex items-center justify-center px-6 lg:px-8 pb-8">
            <div className="text-white text-center max-w-2xl">
              {/* Name and title */}
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-2 tracking-wide">
                  FUAD AL BASTAKI
                </h1>
                <p className="text-lg lg:text-xl font-light tracking-wider">
                  CEO OF ZABEEL
                </p>
              </div>

              {/* Separator line */}
              <div className="w-24 h-px bg-white/50 mx-auto mb-8"></div>

              {/* Description paragraphs */}
              <div className="space-y-4 text-sm lg:text-base leading-relaxed text-left">
                <p>
                  Fuad is the CEO of Zabeel Management & Marketing Consultancy,
                  established in the UAE in 2002 and a member of the Mohammed
                  Bin Rashid Est for SME Development.
                </p>

                <p>
                  Over the years, Zabeel has grown into a trusted business
                  partner for over 88 companies, offering services in sectors
                  such as industry, medical, financial solutions, investment,
                  media, farming, legal, trading, and consultancy.
                </p>

                <p>
                  Their expert team helps businesses redefine strategies,
                  improve processes, and implement systems for growth and
                  competitive success.
                </p>

                <p>
                  Zabeel has signed several agreements with the UAE government
                  and provides consultancy and marketing services both locally
                  and internationally. The company is known for its dynamic
                  approach in adapting to the evolving global business
                  environment, ensuring a successful future for its clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements with custom color */}
        <div
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(to top, rgba(10, 50, 101, 0.6) 0%, transparent 100%)`,
          }}
        ></div>
      </div>
    </div>
  );
}

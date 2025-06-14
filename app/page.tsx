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
              <div className="text-white space-y-5 text-left max-w-md">
                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">
                    Contact Landline Number
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">+971 4 3345656</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">
                    E-mail Address
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">zabeell@emirates.net.ae</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">
                    Office Address
                  </span>
                  <div className="flex items-start space-x-2">
                    <div className="flex flex-col">
                      <span className="text-sm">
                        Villa 45 Al Bastakia Department Store
                      </span>
                      <span className="text-sm">
                        Al Fahidi Historical Neighbourhood
                      </span>
                      <span className="text-sm">Bur Dubai-U.A.E</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">P.O. Box</span>
                  <span className="text-sm">
                    55611 Dubai, United Arab Emirates
                  </span>
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
                  In UAE, Zabeel Management & Marketing Consultancy was founded
                  in 1995 and has grown into a consistent business partner with
                  more than 88 companies providing services in the Industry,
                  Contracting, Medical, Commercial, Financial Solutions, Banking
                  Solutions, Database Systems Design, Travel Agency, Farming of
                  Sheeps and Goats, Valet Parking Services, General Trading,
                  Legal Services, Foodstuff Trading, Commercial Brokerage, Goods
                  Wholesalers, Yachts Rental, Readymade Garments Trading ,
                  Virtual Assets Broker & Dealer Services, Department Store,
                  Mobile Phones & Accessories Trading Import and Export,
                  Recruitments, as well as our Management & Marketing
                  Consultancy.
                </p>

                <p>
                  Our dynamic team is committed to assist in your organization
                  in changing strategies, processes, systems and staff to enable
                  your business to achieve performance improvement, growth and
                  diversity in a competitive global environment.
                </p>

                <p>
                  We specialized in helping businesses to help themselves by
                  accurately defining corporate strategies and communicating the
                  strategies to you, and assist in implementing them for a more
                  exciting and successful future for your organization.
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

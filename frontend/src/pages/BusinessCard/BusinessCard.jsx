import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";
import "./BusinessCard.css";

const BusinessCard = ({
  name = "Hafiz Daniyal Shakeel",
  title = "Full Stack Engineer",
  email = "hafizdaniyalshakeel@gmail.com",
  phone = "+92 328 7751754",
  location = "Gujrat, Pakistan",
  website = "merndev.site",
  github = "unikalnix",
  linkedin = "hafiz daniyal shakeel",
  portfolioUrl = "https://merndev.site",
  logoText = "Mern Dev",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-[500px] flex items-center justify-center">
      {" "}
      <div className="perspective-1000 w-full max-w-[400px] h-[245px] cursor-pointer">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden bg-[#09090B] rounded-xl p-6 border border-gray-800 shadow-lg flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[#fafafa] text-xl font-semibold">{name}</h2>
                <p className="text-[#f67655] text-sm">{title}</p>
              </div>
              <div className="relative">
                <h1 className="text-[#CACACA] font-semibold text-xl cursor-pointer relative w-fit">
                  {logoText}
                  <span className="absolute top-0 right-0 w-[4px] h-[4px] rounded-full bg-[#f67655]"></span>
                </h1>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <Mail className="text-[#f67655] w-4 h-4" />
                <span className="text-[#a1a1aa] text-sm">{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-[#f67655] w-4 h-4" />
                <span className="text-[#a1a1aa] text-sm">{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#f67655] w-4 h-4" />
                <span className="text-[#a1a1aa] text-sm">{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-[#f67655] w-4 h-4" />
                <span className="text-[#a1a1aa] text-sm">{website}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-3">
                <Github className="text-[#a1a1aa] w-5 h-5 hover:text-[#f67655] transition-colors" />
                <Linkedin className="text-[#a1a1aa] w-5 h-5 hover:text-[#f67655] transition-colors" />
              </div>
              <div className="flex items-center gap-1 text-[#f67655] text-xs">
                <span>Flip to scan</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#09090B] rounded-xl p-6 border border-gray-800 shadow-lg flex flex-col items-center justify-center">
            <div className="bg-white p-3 rounded-lg w-[125px] h-[125px]">
              <img src="src\assets\MernDev-QrCode.png" alt="" />
            </div>
            <p className="text-[#f67655] text-sm mt-4">
              Scan to visit my portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

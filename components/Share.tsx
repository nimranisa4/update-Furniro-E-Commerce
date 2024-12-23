import type { NextPage } from "next";
import Image from "next/image";
// import Image1 from '@/public/images/rectangle-36.png';
import Image2 from '@/public/images/rectangle-45.png';
import Image3 from '@/public/images/rectangle-37.png';
import Image4 from '@/public/images/rectangle-38.png';
import Image5 from '@/public/images/rectangle-39.png';
import Image6 from '@/public/images/rectangle-40.png';
import Image7 from '@/public/images/rectangle-41.png';
import Image8 from '@/public/images/rectangle-44.png';
import Image9 from '@/public/images/rectangle-43.png';

const Share: NextPage = () => {
  const images = [ Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

  return (
    <div className="flex flex-col items-center p-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <p className="text-lg sm:text-xl text-gray-700">Share your setup with</p>
        <b className="text-xl sm:text-2xl text-black font-bold">
          #FuniroFurniture
        </b>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg overflow-hidden flex justify-center items-center aspect-square"
          >
            <Image
              className="rounded-lg object-cover"
              src={img}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Share;

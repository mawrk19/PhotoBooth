'use client';
import Webcam from "react-webcam";
import { BackgroundGradient } from "@/components/ui/background-gradient";

function Camera({ selectedFilter = 'none', webcamRef }) {
  const filters = {
    none: '',
    grayscale: 'grayscale',
    sepia: 'sepia',
    blur: 'blur-sm',
    brightness: 'brightness-150',
  };

  return (
    <BackgroundGradient className="w-full h-full">
      <div className="flex justify-center items-center w-full h-full">
        <Webcam
          ref={webcamRef}
          width={300}
          height={300}
          className={`w-full h-full rounded-[1.5vw] shadow-lg transform scale-x-[-1] ${filters[selectedFilter]}`}
        />
      </div>
    </BackgroundGradient>
  );
}

export default Camera;

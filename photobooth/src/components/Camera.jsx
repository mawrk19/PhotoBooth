'use client';
import Webcam from "react-webcam";
import { BackgroundGradient } from "@/components/ui/background-gradient";

function Camera () {
  return (
    <BackgroundGradient>
      <div className="flex justify-center items-center">
        <Webcam
          width={600}
          height={600}
          className="rounded-[1.5vw] shadow-lg transform scale-x-[-1]"
        />
      </div>
    </BackgroundGradient>
  );
}

export default Camera;

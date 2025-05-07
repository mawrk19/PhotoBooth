'use client';
import Webcam from "react-webcam";
import { BackgroundGradient } from "@/components/ui/background-gradient";

function Camera () {
    return (
        <BackgroundGradient>
        <div className="flex justify-center items-center">
            <Webcam className="rounded-[1.5vw] shadow-lg" width={600} height={600} />
        </div>
        </BackgroundGradient>
    );
}

export default Camera;

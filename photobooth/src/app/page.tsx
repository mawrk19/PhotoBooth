'use client';
import { useState, useRef } from 'react';
import Control from "@/components/Cam/Control";
import Camera from "../components/Cam/Camera";
import Preview from "@/components/Cam/Preview";
import { DotBackgroundDemo } from "@/components/ui/dot-background";
import Webcam from 'react-webcam';

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('none');
  const webcamRef = useRef<Webcam>(null);

  const handleCapture = (imageData: string) => {
    setImages((prev) => [...prev, imageData]);
  };

  return (
    <>
      {/* Background Layer */}
      <DotBackgroundDemo />

      {/* Foreground Content */}
      <div className="relative w-full h-screen p-2 sm:p-4 md:p-6">
        <main className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-2 sm:gap-4 md:gap-6 h-full">
            
            {/* Left Column - Camera and Controls */}
            <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 w-full lg:w-[50%] h-full">
              <div className="h-[35vh] lg:h-[40vh]">
                <Camera selectedFilter={selectedFilter} webcamRef={webcamRef} />
              </div>
              <div className="h-[12vh] lg:h-[15vh]">
                <Control onCapture={handleCapture} onFilterChange={setSelectedFilter} webcamRef={webcamRef} />
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="w-full lg:w-[50%] h-[65vh] lg:h-[70vh]">
              <Preview images={images} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

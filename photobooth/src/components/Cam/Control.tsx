'use client';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { BackgroundGradient } from "@/components/ui/background-gradient";

function Control() {
  const webcamRef = useRef<Webcam>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleClick = () => {
    // Take the first photo
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setImages((prev) => [...prev, imageSrc]);
      }
    }

    // Take another photo after 3 seconds
    setTimeout(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          setImages((prev) => [...prev, imageSrc]);
        }
      }
    }, 3000); // 3000ms = 3 seconds
  };

  return (
    <BackgroundGradient>
    <div className="control w-[600px] h-auto bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col items-center justify-center gap-4 rounded-[1.5vw]">
      <h1 className="text-xl font-semibold">Control</h1>

      {/* <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="rounded-md"
        width={400}
        height={300}
      /> */}

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        onClick={handleClick}
      >
        Take Picture
      </button>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`capture-${idx}`} className="rounded shadow-md w-40" />
        ))}
      </div>
    </div>
    </BackgroundGradient>
  );
}

export default Control;

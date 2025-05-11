'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface ControlProps {
  onCapture: (imageSrc: string) => void;
  onFilterChange: (filter: string) => void;
  webcamRef: React.RefObject<Webcam | null>;
}

function Control({ onCapture, onFilterChange, webcamRef }: ControlProps) {
  const [selectedTimer, setSelectedTimer] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [countdown, setCountdown] = useState(0);
  const [isCapturing, setIsCapturing] = useState(false);

  const captureImage = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        onCapture(JSON.stringify({
          imageSrc,
          filter: selectedFilter
        }));
      }
    }
  }, [webcamRef, onCapture, selectedFilter]);

  // Countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && isCapturing) {
      captureImage();
      setIsCapturing(false);
    }
    return () => clearInterval(timer);
  }, [countdown, isCapturing, captureImage]);

  const handleClick = () => {
    if (selectedTimer > 0) {
      setCountdown(selectedTimer);
      setIsCapturing(true);
    } else {
      captureImage();
    }
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const filters = {
    none: '',
    grayscale: 'grayscale',
    sepia: 'sepia',
    blur: 'blur-sm',
    brightness: 'brightness-150',
  };

  return (
    <BackgroundGradient>
      <div className="control w-full h-full bg-transparent dark:bg-transparent shadow-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-[1.5vw]">
        <h1 className="text-base sm:text-lg font-semibold">Control</h1>
                
        {/* Timer Selection */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          <button
            className={`px-2 py-1 rounded text-xs ${selectedTimer === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedTimer(0)}
          >
            No Timer
          </button>
          <button
            className={`px-2 py-1 rounded text-xs ${selectedTimer === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedTimer(3)}
          >
            3s
          </button>
          <button
            className={`px-2 py-1 rounded text-xs ${selectedTimer === 5 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedTimer(5)}
          >
            5s
          </button>
          <button
            className={`px-2 py-1 rounded text-xs ${selectedTimer === 10 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedTimer(10)}
          >
            10s
          </button>
        </div>

        {/* Countdown Display */}
        {countdown > 0 && (
          <div className="text-2xl sm:text-3xl font-bold text-blue-500">
            {countdown}
          </div>
        )}

        {/* Filter Selection */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {Object.keys(filters).map((filter) => (
            <button
              key={filter}
              className={`px-2 py-1 rounded text-xs ${selectedFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200 disabled:opacity-50 text-sm"
          onClick={handleClick}
          disabled={isCapturing}
        >
          {isCapturing ? 'Capturing...' : 'Take Picture'}
        </button>
      </div>
    </BackgroundGradient>
  );
}

export default Control;

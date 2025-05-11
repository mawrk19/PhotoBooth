'use client';
import React, { useState } from 'react';
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface PreviewProps {
  images: string[];
}

type LayoutType = '4vertical' | '3vertical' | '6grid';
type FilterType = 'none' | 'grayscale' | 'sepia' | 'blur' | 'brightness';

interface ImageData {
  imageSrc: string;
  filter: FilterType;
}

function Preview({ images }: PreviewProps) {
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>('4vertical');

  const filters: Record<FilterType, string> = {
    none: '',
    grayscale: 'grayscale',
    sepia: 'sepia',
    blur: 'blur-sm',
    brightness: 'brightness-150',
  };

  const handlePrint = async () => {
    const element = document.getElementById('print-content');
    if (!element) return;

    const html2pdf = (await import('html2pdf.js')).default;
    const opt = {
      margin: 1,
      filename: 'photobooth-pictures.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const getLayoutClass = () => {
    switch (selectedLayout) {
      case '4vertical':
        return 'grid grid-cols-1 gap-4 h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-y-auto';
      case '3vertical':
        return 'grid grid-cols-1 gap-4 h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-y-auto';
      case '6grid':
        return 'grid grid-cols-2 gap-4 h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-y-auto';
      default:
        return 'grid grid-cols-1 gap-4 h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-y-auto';
    }
  };

  const getMaxImages = () => {
    switch (selectedLayout) {
      case '4vertical':
        return 4;
      case '3vertical':
        return 3;
      case '6grid':
        return 6;
      default:
        return 4;
    }
  };

  const parseImageData = (image: string): ImageData => {
    try {
      const data = JSON.parse(image);
      return {
        imageSrc: data.imageSrc,
        filter: data.filter || 'none'
      };
    } catch {
      // Handle legacy format (just the image string)
      return { imageSrc: image, filter: 'none' };
    }
  };

  return (
    <BackgroundGradient>
      <div className="preview w-full h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-[8px] shadow-lg p-4 sm:p-5 md:p-6 rounded-[1.5vw] flex flex-col">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Preview</h2>
        
        {/* Layout Selection */}
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          <button
            className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${selectedLayout === '4vertical' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedLayout('4vertical')}
          >
            4 Vertical
          </button>
          <button
            className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${selectedLayout === '3vertical' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedLayout('3vertical')}
          >
            3 Vertical
          </button>
          <button
            className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${selectedLayout === '6grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedLayout('6grid')}
          >
            6 Grid
          </button>
        </div>

        {/* Print Button */}
        <button
          className="w-full bg-green-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-green-600 transition duration-200 mb-3 sm:mb-4 text-sm sm:text-base"
          onClick={handlePrint}
        >
          Print to PDF
        </button>

        {/* Images Preview */}
        <div id="print-content" className={`${getLayoutClass()} p-2`}>
          {images.slice(0, getMaxImages()).map((img, idx) => {
            const imageData = parseImageData(img);
            return (
              <div key={idx} className="aspect-square">
                <img
                  src={imageData.imageSrc}
                  alt={`capture-${idx}`}
                  className={`rounded shadow-md w-full h-full object-cover transform scale-x-[-1] ${filters[imageData.filter]}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </BackgroundGradient>
  );
}

export default Preview; 
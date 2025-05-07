import Control from "@/components/Cam/Control";
import Camera from "../components/Cam/Camera";
import { DotBackgroundDemo } from "@/components/ui/dot-background";

export default function Home() {
  return (
    <>
      {/* Background Layer */}
      <DotBackgroundDemo />

      {/* Foreground Content */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full">
        <main className="flex flex-1 flex-col items-center justify-center gap-8 w-full">

          <div className="absolute right-[20rem] top-[5rem] flex justify-center items-center w-full">
            <Camera />
          </div>

          <div className="absolute right-[20rem] bottom-[4rem] flex justify-center items-center w-full">
            <Control />
          </div>

        </main>
        <footer></footer>
      </div>
    </>
  );
}

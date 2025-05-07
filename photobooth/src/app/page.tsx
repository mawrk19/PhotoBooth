import { AuroraBackground } from "@/components/ui/aurora-background";
import Camera from "../components/Camera";

export default function Home() {
  return (
    <>
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <AuroraBackground>
        <></>
        </AuroraBackground >
      </div>

      {/* Foreground Content */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full">
        <main className="flex flex-1 flex-col items-center justify-center gap-8 w-full">
          <div className="relative right-[20rem] top-[18rem] flex justify-center items-center w-full">
            <Camera />
          </div>
        </main>

        <footer></footer>
      </div>
    </>
  );
}

import Image from "next/image";
import Slider from "./ui/slider";

export default function Home() {
  return (
    <main className="container flex">
      <div className="min-h-screen flex items-center justify-center">
        <Slider />
      </div>
    </main>
  );
}

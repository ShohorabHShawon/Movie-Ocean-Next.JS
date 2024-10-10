import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-10">Welcome to MOVIEDB</h1>
      </div>
    </div>
  );
}

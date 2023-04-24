import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`text-center ${inter.className}`}>
         <a href="/users" className="my-5 inline-block bg-gray-400 hover:bg-gray-700 text-white py-2 px-4 rounded"> Users
            <span className="inline-block ml-1 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </a>
    </main>
  );
}

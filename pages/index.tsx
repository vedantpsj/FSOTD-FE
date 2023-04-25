import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`text-center max-w-[600px] my-5 mx-auto ${inter.className}`}>
        <div className="flex items-center border rounded-md p-3 justify-between bg-white">
            <h4 className="text-black">User List</h4>
            <a href="/users" className="inline-block bg-gray-400 hover:bg-gray-700 text-white py-2 px-4 rounded"> Users
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </a>
        </div>
    </main>
  );
}

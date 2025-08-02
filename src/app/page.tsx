"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [apiResponse, setApiResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/nikita');
        const data = await response.json();
        setApiResponse(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
        setApiResponse('Error loading data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg mb-8 text-center w-full max-w-4xl">
        <h2 className="text-xl font-semibold">Welcome to Our Site!</h2>
        <p className="mt-2 text-blue-100">This is a blue banner to highlight important information.</p>
      </div>
      <h1 className="text-4xl font-bold text-green-600 mb-8">hello</h1>
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">API Response:</h2>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <p className="text-2xl font-bold text-blue-600">{apiResponse}</p>
        )}
      </div>
      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">SKU Inventory Table</h2>
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">SKU</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Product Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Brand</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Size/Model</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Stock Qty</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">LP-DL-15-001</td>
              <td className="border border-gray-300 px-4 py-2">ThinkPad X1 Carbon</td>
              <td className="border border-gray-300 px-4 py-2">Lenovo</td>
              <td className="border border-gray-300 px-4 py-2">Laptops</td>
              <td className="border border-gray-300 px-4 py-2">15" i7 16GB</td>
              <td className="border border-gray-300 px-4 py-2">$1,299.99</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
              <td className="border border-gray-300 px-4 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">PH-AP-64-002</td>
              <td className="border border-gray-300 px-4 py-2">iPhone 15 Pro</td>
              <td className="border border-gray-300 px-4 py-2">Apple</td>
              <td className="border border-gray-300 px-4 py-2">Smartphones</td>
              <td className="border border-gray-300 px-4 py-2">256GB Titanium</td>
              <td className="border border-gray-300 px-4 py-2">$999.99</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Low Stock</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">HG-YT-BL-003</td>
              <td className="border border-gray-300 px-4 py-2">Ceramic Coffee Mug</td>
              <td className="border border-gray-300 px-4 py-2">YETI</td>
              <td className="border border-gray-300 px-4 py-2">Drinkware</td>
              <td className="border border-gray-300 px-4 py-2">14oz Blue</td>
              <td className="border border-gray-300 px-4 py-2">$24.99</td>
              <td className="border border-gray-300 px-4 py-2">45</td>
              <td className="border border-gray-300 px-4 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">FU-HM-ER-004</td>
              <td className="border border-gray-300 px-4 py-2">Aeron Office Chair</td>
              <td className="border border-gray-300 px-4 py-2">Herman Miller</td>
              <td className="border border-gray-300 px-4 py-2">Furniture</td>
              <td className="border border-gray-300 px-4 py-2">Size B Black</td>
              <td className="border border-gray-300 px-4 py-2">$1,395.00</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Critical</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">BK-ED-PY-005</td>
              <td className="border border-gray-300 px-4 py-2">Clean Code</td>
              <td className="border border-gray-300 px-4 py-2">Prentice Hall</td>
              <td className="border border-gray-300 px-4 py-2">Books</td>
              <td className="border border-gray-300 px-4 py-2">Paperback</td>
              <td className="border border-gray-300 px-4 py-2">$42.99</td>
              <td className="border border-gray-300 px-4 py-2">28</td>
              <td className="border border-gray-300 px-4 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">GA-SM-WH-006</td>
              <td className="border border-gray-300 px-4 py-2">Galaxy Watch 6</td>
              <td className="border border-gray-300 px-4 py-2">Samsung</td>
              <td className="border border-gray-300 px-4 py-2">Wearables</td>
              <td className="border border-gray-300 px-4 py-2">44mm White</td>
              <td className="border border-gray-300 px-4 py-2">$329.99</td>
              <td className="border border-gray-300 px-4 py-2">0</td>
              <td className="border border-gray-300 px-4 py-2"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Out of Stock</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start border-2 border-blue-500 p-6 rounded-lg">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

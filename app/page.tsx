import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="row-start-2 flex flex-col items-center justify-center">
        <Link
          href="/zappar"
          className="px-8 py-3 text-base rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          カメラ起動
        </Link>

        <button
          type="button"
          className="mt-3 px-8 py-3 text-base rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          画像登録
        </button>
         <div className="mt-8 text-center text-base">
          <Link href="/quize/register" className="text-white no-underline hover:underline">
            Quize
          </Link>
        </div>
      </div>
    </div>
  );
}

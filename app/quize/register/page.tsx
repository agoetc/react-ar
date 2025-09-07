import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm w-full p-6 bg-white rounded-xl shadow-lg box-border">
        {/* 問題文（固定表示） */}
        
        {/* 問題文（固定表示） */}
        <div className="text-2xl mb-8 p-4 bg-white border-l-4 border-white text-black rounded">
          大阪城はだれが作ったか
        </div>

        {/* 選択肢（ボタン） */}
        <div className="flex justify-between gap-5 mb-8">
          <button className="flex-1 py-4 bg-black border border-gray-300 rounded-lg text-base font-bold text-center transition hover:bg-red-600 text-white">
           大工
          </button>
          <button className="flex-1 py-4 bg-black border border-gray-300 rounded-lg text-base font-bold text-center transition hover:bg-green-600 text-white">
            豊臣秀吉
          </button>
        </div>

        {/* 解説入力欄 */}
        <div className="mb-8">
          <label htmlFor="description" className="block font-bold mb-2 text-black">
            解説
          </label>
         <p className="w-full p-3 border border-white rounded-lg text-black min-h-[80px] box-border bg-white">
            大阪城は豊臣秀吉によって築かれました。彼は戦国時代の有力な武将であり、天下統一を果たした人物です。
          </p>
        </div>

        {/* 登録ボタン */}
        <button
          type="submit"
          className="block w-full py-4 bg-black text-white text-lg font-bold rounded-lg mt-5 mb-6 transition hover:bg-gray-800"
        >
          登録
        </button>

        {/* HOMEリンク */}
        <div className="mt-8 text-center text-base">
          <Link href="/" className="text-black no-underline hover:underline">
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
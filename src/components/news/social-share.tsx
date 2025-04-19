import Link from "next/link";
import { Facebook, Twitter, Instagram, Share2 } from "lucide-react";

export default function SocialShare() {
  return (
    <div className="flex items-center justify-between py-4 border-t border-b border-gray-800">
      <div className="flex flex-row-reverse items-center space-x-4 space-x-reverse">
        <Link href="#" className="text-gray-400 hover:text-white">
          <Share2 className="h-5 w-5" />
        </Link>
        <span className="text-gray-400 text-sm">مشاركة:</span>
        <Link href="#" className="text-blue-500 hover:text-blue-400">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="#" className="text-sky-500 hover:text-sky-400">
          <Twitter className="h-5 w-5" />
        </Link>
        <Link href="#" className="text-pink-500 hover:text-pink-400">
          <Instagram className="h-5 w-5" />
        </Link>
      </div>
      <div>
        <span className="text-gray-400 text-sm">1250 مشاهدة</span>
      </div>
    </div>
  );
}

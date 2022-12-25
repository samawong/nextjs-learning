import Link from 'next/link';

export default function Nav() {
    return <>
        <nav className="relative container m-auto p-8">
            <div className="flex items-center justify-between ">
                <div className="hidden md:flex items-center space-x-8 ">
                    <Link href="/" className="text-yellow-700 hover:text-yellow-600">网站首页</Link>
                    <Link href="/#About" className="text-slate-900 hover:text-yellow-600 ">关于酒店</Link>
                    <Link href="" className="text-slate-900 hover:text-yellow-600 ">会议</Link>
                </div>
                <div  className="hidden md:flex items-center space-x-8">
                    <Link href="" className="text-slate-900 hover:text-yellow-600 ">客房</Link>
                    <Link href="" className="text-slate-900 hover:text-yellow-600 ">餐饮</Link>
                    <Link href="" className="text-slate-900 hover:text-yellow-600 ">联系我们</Link>
                    </div>
            </div>
        </nav>
    </>
}
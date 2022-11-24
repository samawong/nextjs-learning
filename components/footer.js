import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){
    return (
        <footer className="bg-veryDarkBlue">
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2022, All Rights Reserved.
                    </div>
                    <div>
                        <Image src="/static/logo-white.svg" alt=""  width={200} height={100} className="h-8"/>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Link href="#">
                            <Image src="/static/icon-facebook.svg" alt="" width={40} height={40} className="h-8"/>
                        </Link>
                        <Link href="#">
                            <Image src="/static/icon-youtube.svg" alt="" width={40} height={40} className="h-8"/>
                        </Link>
                        <Link href="#">
                            <Image src="/static/icon-pinterest.svg" alt="" width={40} height={40} className="h-8"/>
                        </Link>
                        <Link href="#">
                            <Image src="/static/icon-twitter.svg" alt="" width={40} height={40} className="h-8"/>
                        </Link>
                        <Link href="#">
                            <Image src="/static/icon-instagram.svg" alt="" width={40} height={40} className="h-8"/>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <Link href="#" className="hover:text-brightRed">Home</Link>
                        <Link href="#" className="hover:text-brightRed">Pricing</Link>
                        <Link href="#" className="hover:text-brightRed">Products</Link>
                        <Link href="#" className="hover:text-brightRed">About</Link>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <Link href="#" className="hover:text-brightRed">Careers</Link>
                        <Link href="#" className="hover:text-brightRed">Community</Link>
                        <Link href="#" className="hover:text-brightRed">Privacy Policy</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                            <input className="flex-1 px-4 rounded-full focus:outline-nont" type="text"  placeholder="Updated in your box"/>
                            <button className="px-6 py-2 rounded-full text-white bg-brightRed hover:bg-brightRedLight">Go</button>
                        </div>
                    </form>
                    <div className="hidden mx-auto my-6 text-center text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
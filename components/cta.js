import Link from "next/link";
import Home from "../styles/Home.module.css";

export default function Cta(){
    return (
        <div>
            <section className= { Home.cta + ' bg-brightRed  ' }  >
                <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                    <h2 className="text-5xl font-bold leading-light text-center text-white md:text-4xl md:max-w-xl md:text-left">
                        Simplify how your team works today
                    </h2>
                    <Link href="#" className="px-6 pt-2 p-3 text-brightRed bg-white rounded-full baseline hover:bg-brightRedSuperLight">Get Started</Link>
                </div>
            </section>
        </div>
    );
}
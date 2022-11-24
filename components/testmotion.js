import Link from 'next/link';
import Image from 'next/image';

export default function Testmotion(){
    return (
        <div className="testmotion">
            <div className="max-w-7xl px-5 mx-auto mt-32 text-center dark:bg-black  dark:text-white">
                <h2 className="text-4xl font-bold text-center">
                    What's Different About Manage?
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-12">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-log bg-veryLightGray md:w-1/3 dark:bg-black ">
                        <Image src="/static/avatar-shanai.png" className="w-16 -mt-14" alt="" width={100} height={100} />
                        <h5 className="text-lg font-bold">Shan Ai</h5>
                        <p className="text-sm text-darkGrayishBlue ">
                            "Manage has supercharged out team's workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated."
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-log bg-veryLightGray mt-12 md:mt-0 md:w-1/3 dark:bg-black ">
                        <Image src="/static/avatar-ali.png" className="w-16 -mt-14" alt=""  width={100} height={100}  />
                        <h5 className="text-lg font-bold">Ali</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            "Manage has supercharged out team's workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated."
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-log bg-veryLightGray mt-12 md:mt-0 md:w-1/3 dark:bg-black ">
                        <Image src="/static/avatar-anisha.png" className="w-16 -mt-14" alt=""  width={100} height={100} />
                        <h5 className="text-lg font-bold">Ani Sha</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            "Manage has supercharged out team's workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated."
                        </p>
                    </div>
                    
                </div>
                <div className="my-16">
                    <Link href="#" className="px-6 pt-2 p-3 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight ">Get Started</Link>
                </div>
            </div>
            
        </div>
    )
} 
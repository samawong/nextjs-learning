import Image from 'next/image';

export default function Logo() {
    return (
      <>
      <div className="pt-2 dark:hidden">
        <Image src="/static/logo.svg" width={150} height={150} alt=""/>
      </div>
      <div className="pt-2 hidden dark:block">
        <Image src="/static/logo-white.svg" width={150} height={150} alt=""/>
      </div>
      </>
    );
}
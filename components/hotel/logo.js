import Image from 'next/image';

export default function Logo() {
    return (
      <>
      <div className="">
        <Image src="/static/hotel/logo.png" width={240} height={240} alt=""/>
      </div>
      </>
    );
}
"use client";
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${params.slug} times`;
    });

    // /blog/hello-world => { params: { slug: 'hello-world' } }
    // /blog/hello-world?id=123 => { searchParams: { id: '123' } }
    return (
      <div className="container flex flex-row items-center justify-center px-6 mx-6">
        <h2 className="text-4xl">{params.slug}</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }


  
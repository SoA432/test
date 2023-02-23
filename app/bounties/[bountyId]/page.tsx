"use client";

import { useEffect, useState } from "react";

const Bounty = ({ searchParams }: any) => {

  const [data, setData] = useState<any>();

  useEffect(() => {
    console.log('init');
    setData(Math.random());
  }, [])
  return (
    <>
      <div
        style={{
          position: "relative",
          padding: "1rem",
          height: "100%",
        }}
      >
        fsafsafs {data}
      </div> 
    </>
  );
};

export default Bounty;


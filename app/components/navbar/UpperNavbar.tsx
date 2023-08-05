"use client";

import Container from "../Container";

const UpperNavbar = () => {
  return (
    <div className="w-full h-11 bg-violet-600">
      <Container>
        <div className="flex">
          <div className="flex justify-start items-center gap-4 text-zinc-100 text-base">
            <p>mhhasanul@gmail.com</p>
            <p>(12345)67890</p>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;

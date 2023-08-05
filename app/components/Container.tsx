"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
      w-[1137px] 
      h-full 
      mx-auto 
      xl:px-20
      md:px-10
      sm:px-2
      px-4"
    >
      {children}
    </div>
  );
};

export default Container;

import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

function Conatiner({ children }: IContainerProps) {
  return <div className="container mx-auto">{children}</div>;
}

export default Conatiner;

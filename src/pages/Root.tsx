import React from "react";

interface RootPageProps {
  header: string;
  children: React.ReactNode;
}

const RootPage: React.FC<RootPageProps> = (props) => {
  return (
    <>
      <div className="my-6 lg:my-12 container px-3 mx-auto">
        {props.children}
      </div>
    </>
  );
};

export default RootPage;

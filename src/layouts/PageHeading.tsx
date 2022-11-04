import React from "react";

const PageHeading = (props: { title: string; children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 pb-0 border-b border-gray-300">
      <div>
        <h4 className="mb-3 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl">
          {props.title}
        </h4>
      </div>
      {props.children}
    </div>
  );
};
export default PageHeading;

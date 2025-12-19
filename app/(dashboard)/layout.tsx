import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex  ">
      <div className="bg-green-100  h-full w-[15em] px-4 py-5">
        <header className=" ">
          <h1 className="font-semibold text-xl">Dashboard Layout </h1>
        </header>
        <nav className=" flex flex-col gap-5 mt-10 text-sm ">
          <p>Sidebar Navigation</p>
          <p>Sidebar Navigation</p>
          <p>Sidebar Navigation</p>
          <p>Sidebar Navigation</p>
          <p>Sidebar Navigation</p>
        </nav>
      </div>
      {children}
    </main>
  );
};

export default DashboardLayout;

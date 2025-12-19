import React from "react";

const UserLayout = ({
  children,
  graphics,
  analytics,
}: {
  children: React.ReactNode;
  graphics: React.ReactNode;
  analytics: React.ReactNode;
}) => {
  return (
    <main className="w-full h-full">
      <nav className="bg-blue-100 flex py-5 gap-10 items-center justify-center text-sm ">
        <p>UserNav</p>
        <p>UserNav</p>
        <p>UserNav</p>
        <p>UserNav</p>
        <p>UserNav </p>
      </nav>

      <div className="flex h-full">
        {children}
        <section className="bg-purple-700 w-1/2 h-full flex flex-col items-center justify-center gap-10">
          {graphics} {analytics}
        </section>
      </div>
    </main>
  );
};

export default UserLayout;

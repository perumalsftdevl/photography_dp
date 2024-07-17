const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#fff] overflow-auto">
      <div className=" h-full w-full border">{children}</div>
    </main>
  );
};

export default LandingLayout;

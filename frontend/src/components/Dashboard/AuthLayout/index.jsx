export const AuthLayout = ({ children }) => {
  return (
    <main className="flex w-full min-h-screen bg-[#f1f5f9] flex-col items-center justify-center px-4 text-center">
      <div className="w-full flex flex-col items-center md:w-8/12 sm:w-5/6 space-y-5 bg-neutral-900">
        {children}
      </div>
    </main>
  );
};

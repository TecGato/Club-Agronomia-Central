export const InputForm = ({ title, icon, placeHolder, type }) => {
  return (
    <div>
      <label
        htmlFor="input-group-1"
        className="block mb-2 text-sm font-medium text-neutral-400 text-left"
      >
        {title}
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id="input-group-1"
          className="block w-full pl-10 p-2.5 rounded-lg bg-neutral-950 border border-neutral-400 placeholder-neutral-400 text-white outline-none
                                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
};

import { ReactNode } from "react";
import { Switch } from "react-aria-components";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-full scale-[3]">
      <div className="flex flex-col space-y-3">
        <Toggle>Airplane Mode</Toggle>
        {/* <Toggle>Wi-Fi</Toggle> */}
      </div>
    </div>
  );
}

function Toggle({ children }: { children: ReactNode }) {
  return (
    <Switch className="inline-flex items-center text-white space-x-4 group">
      <div className="flex w-10 h-6 rounded-full items-center border-2 border-transparent bg-zinc-600 group-data-[selected]:bg-green-5000 transition  group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-900">
        <div className="inline-flex group-data-[selected]:translate-x-4 transition group-data-[selected]:group-data-[pressed]:translate-x-2 duration-1000 ease-linear">
          <div className="bg-white w-2.5 h-5 rounded-l-full" />
          <div className="w-2 scale-x-0 h-5 bg-white group-data-[pressed]:scale-x-100 transition-all duration-1000 ease-linear origin-left" />
          <div className="bg-white -translate-x-2 group-data-[pressed]:translate-x-0 w-2.5 h-5 rounded-r-full transition-all duration-1000 ease-linear" />
        </div>
      </div>
      <span>{children}</span>
    </Switch>
  );
}

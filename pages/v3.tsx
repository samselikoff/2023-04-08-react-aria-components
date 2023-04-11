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
      <div className="flex w-10 h-6 rounded-full items-center justify-start group-data-[selected]:justify-end border-2 border-transparent bg-zinc-600 group-data-[selected]:bg-green-5000 transition duration-200 ease-linear group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-900">
        <div className="bg-white shadow w-5 h-5 rounded-full origin-right transition-all duration-200 group-data-[pressed]:w-7 ease-linear" />
      </div>
      <span>{children}</span>
    </Switch>
  );
}

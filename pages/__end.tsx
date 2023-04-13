import { ComponentProps, ReactNode, useState } from "react";
import { Switch } from "react-aria-components";

export default function Page() {
  let [airplaneMode, setAirplaneMode] = useState(true);

  return (
    <div className="flex flex-col items-center px-6 justify-center min-h-full text-center">
      <div className="flex flex-col space-y-3 w-72">
        <Toggle isSelected={airplaneMode} onChange={setAirplaneMode}>
          Airplane Mode: {airplaneMode ? "On" : "Off"}
        </Toggle>
        <Toggle>Wi-Fi</Toggle>
      </div>
    </div>
  );
}

function Toggle({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof Switch>) {
  return (
    <Switch
      {...props}
      className="inline-flex items-center space-x-4 group touch-none"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="flex w-9 h-6 rounded-full items-center border-2 border-transparent bg-zinc-600 group-data-[selected]:bg-green-500 transition group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-900 duration-200 cursor-pointer">
        <div className="bg-white shadow w-5 h-5 rounded-full origin-right transition-all group-data-[pressed]:w-6 group-data-[selected]:ml-3 group-data-[selected]:group-data-[pressed]:ml-2 duration-300" />
      </div>
      <span>{children}</span>
    </Switch>
  );
}

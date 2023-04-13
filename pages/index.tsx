import { useState } from "react";
import { Switch } from "react-aria-components";

export default function Page() {
  let [airplaneMode, setAirplaneMode] = useState(false);

  return (
    <div className="flex flex-col px-20 justify-center min-h-full text-center">
      <div className="flex flex-col">
        <Switch
          isSelected={airplaneMode}
          onChange={setAirplaneMode}
          className="inline-flex group"
        >
          <div className="w-9 h-6 bg-zinc-600 duration-300 transition group-data-[selected]:bg-green-500 mr-4 rounded-full border-2 border-transparent group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-900">
            <div className="w-5 h-5 group-data-[pressed]:w-6 group-data-[selected]:ml-3 group-data-[selected]:group-data-[pressed]:ml-2 duration-300 transition-all bg-white rounded-full shadow"></div>
          </div>
          <span>Airplane Mode: {airplaneMode ? "On" : "Off"}</span>
        </Switch>
      </div>
    </div>
  );
}

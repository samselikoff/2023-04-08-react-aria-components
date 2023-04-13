import { useState } from "react";
import { Switch } from "react-aria-components";

export default function Page() {
  let [airplaneMode, setAirplaneMode] = useState(true);

  return (
    <div className="flex flex-col items-center px-6 justify-center min-h-full text-center">
      <div className="flex flex-col w-72">
        <Switch
          isSelected={airplaneMode}
          onChange={setAirplaneMode}
          className="inline-flex items-center group"
        >
          <div className="w-9 h-6 bg-zinc-600 transition group-data-[selected]:bg-green-500 mr-4 rounded-full border-2 border-transparent group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-900">
            <div className="w-5 group-data-[pressed]:w-6 h-5 bg-white shadow transition-all rounded-full group-data-[selected]:ml-3 group-data-[selected]:group-data-[pressed]:ml-2"></div>
          </div>
          <span>Airplane Mode: {airplaneMode ? "On" : "Off"}</span>
        </Switch>
      </div>
    </div>
  );
}

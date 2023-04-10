import { Switch } from "react-aria-components";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full">
      {/* Flex + width */}
      {/* <Switch className="inline-flex items-center text-white space-x-4 group">
        <div className="flex w-12 px-1 h-7 border rounded-full items-center group-data-[selected]:justify-end">
          <div className="bg-green-500 w-5 h-5 rounded-full transition-all group-data-[pressed]:w-full" />
        </div>
        <span>Low power mode</span>
      </Switch> */}

      {/* Width + Translate x */}
      <Switch className="inline-flex items-center text-white space-x-4 group">
        <div className="flex w-11 h-6 rounded-full items-center border-2 border-transparent bg-zinc-600 group-data-[selected]:bg-green-500 transition duration-200 ease-in-out ">
          <div className="bg-white shadow w-5 h-5 rounded-full origin-right transition-all duration-200 ease-in-out group-data-[pressed]:w-7 group-data-[selected]:translate-x-5 group-data-[selected]:group-data-[pressed]:translate-x-3" />
        </div>
        <span>Airplane mode</span>
      </Switch>

      {/* Width + Translate x */}
      {/* <Switch className="inline-flex items-center text-white space-x-4 group">
        <div className="flex w-12 h-7 px-1 border rounded-full items-center">
          <div
            className="bg-green-500 w-5 h-5 rounded-full origin-right transition-all
            group-data-[pressed]:scale-x-150
            group-data-[selected]:translate-x-5
          group-data-[selected]:group-data-[pressed]:translate-x-3
        "
          />
        </div>
        <span>Low power mode</span>
      </Switch> */}

      {/* End state */}
      {/* <Switch className="inline-flex items-center text-white space-x-4 group">
        <div className="flex w-12 h-7 border rounded-full items-center justify-end">
          <div className="bg-green-500 w-8 h-5 rounded-full transition-all" />
        </div>
        <span>Low power mode</span>
      </Switch> */}

      {/* Old */}
      {/* <Switch className="inline-flex items-center text-white space-x-4 group">
        <div className="flex w-12 px-1 h-7 border rounded-full items-center">
          <div className="bg-green-500 w-5 h-5 rounded-full group-data-[selected]:translate-x-full transition-all group-data-[pressed]:w-full group-data-[pressed]:translate-x-0 ease-linear duration-1000 ease" />
        </div>
        <span>Low power mode</span>
      </Switch> */}
    </div>
  );
}

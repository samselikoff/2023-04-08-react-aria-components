import { ReactNode } from "react";
import { Switch } from "react-aria-components";

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-20 px-6">
      <div className="flex flex-col space-y-3">
        <Toggle>Airplane Mode</Toggle>
        <Toggle>Wi-Fi</Toggle>
        {/* {[...Array(100).keys()].map((i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus aspernatur voluptatibus doloremque quas expedita
            consequuntur modi iste et veniam totam, optio eum dolorum quidem,
            temporibus, labore eos praesentium ab! Repellendus.
          </p>
        ))} */}
      </div>
    </div>
  );
}

function Toggle({ children }: { children: ReactNode }) {
  return (
    <Switch className="inline-flex items-center space-x-4 group">
      <div className="flex w-10 h-6 rounded-full items-center border-2 border-transparent bg-zinc-600 group-data-[selected]:bg-green-500 transition group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-900 duration-200">
        <div className="bg-white shadow w-5 h-5 rounded-full origin-right transition-all group-data-[pressed]:w-7 group-data-[pressed]:delay-75 group-data-[selected]:ml-4 group-data-[selected]:group-data-[pressed]:ml-2 duration-300" />
      </div>
      <span>{children}</span>
    </Switch>
  );
}

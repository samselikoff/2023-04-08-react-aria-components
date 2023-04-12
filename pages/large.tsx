import { ReactNode } from "react";
import { Switch } from "react-aria-components";

export default function Page() {
  return (
    <div className="py-20 px-10">
      <div>
        <div className="flex flex-col justify-start items-start space-y-4">
          <Toggle>Airplane Mode</Toggle>
          <Toggle>Wi-Fi</Toggle>
          {[...Array(100).keys()].map((i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus aspernatur voluptatibus doloremque quas expedita
              consequuntur modi iste et veniam totam, optio eum dolorum quidem,
              temporibus, labore eos praesentium ab! Repellendus.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Toggle({ children }: { children: ReactNode }) {
  return (
    <Switch
      className="inline-flex items-center group"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="flex w-12 h-7 rounded-full items-center border-2 border-transparent bg-zinc-600 group-data-[selected]:bg-green-500 transition group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-900 ">
        <div className="bg-white shadow w-6 h-6 rounded-full origin-right transition-all group-data-[pressed]:w-8 group-data-[selected]:ml-5 group-data-[selected]:group-data-[pressed]:ml-3 " />
      </div>
      <span className="ml-4">{children}</span>
    </Switch>
  );
}

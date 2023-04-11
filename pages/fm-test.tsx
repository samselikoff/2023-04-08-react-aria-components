import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Switch } from "react-aria-components";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col space-y-3">
        <Toggle>Airplane Mode</Toggle>
        <Toggle>Wi-Fi</Toggle>
      </div>
    </div>
  );
}

function Toggle({ children }: { children: ReactNode }) {
  return (
    <Switch className="group">
      {({ isSelected, isPressed }) => (
        <div
          // animate={
          //   isSelected && isPressed
          //     ? "isSelectedAndPressed"
          //     : isSelected
          //     ? "isSelected"
          //     : isPressed
          //     ? "isPressed"
          //     : "idle"
          // }
          // variants={{
          //   isSelected: {
          //     x: 10,
          //     justifyContent: "flex-end",
          //   },
          // }}
          className="inline-flex items-center text-white space-x-4"
        >
          <motion.div
            // variants={{
            //   idle: {
            //     justifyContent: "flex-start",
            //   },
            //   isSelected: {
            //     justifyContent: "flex-end",
            //   },
            // }}
            // animate={{
            //   backgroundColor: isPressed ? "bg-green-500" : "bg-zinc-600",
            // }}
            className={`${
              isSelected ? "justify-end" : "justify-start"
            } flex w-10 h-6 rounded-full transition-colors items-center border-2 border-transparent bg-zinc-600 group-data-[selected]:bg-green-500 group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-900`}
          >
            <motion.div layout transition={{ duration: 1, ease: "linear" }}>
              <motion.div
                // initial={false}
                animate={{
                  //   x: isSelected && isPressed ? 8 : isSelected ? 16 : 0,
                  width: isPressed ? 28 : 20,
                }}
                // transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
                // transition={{ type: "spring" }}
                // transition={{ duration: 2, ease: "linear" }}
                // layout="position"
                transition={{ duration: 1, ease: "linear" }}
                // layout="position"
                className={`bg-white shadow h-5 rounded-full origin-right`}
              />
            </motion.div>
          </motion.div>
          <span>{children}</span>
        </div>
      )}
    </Switch>
  );
}

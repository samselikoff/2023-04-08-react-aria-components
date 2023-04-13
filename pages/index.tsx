import { ReactNode } from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center px-6 justify-center min-h-full text-center">
      <div className="flex flex-col space-y-3 w-72">
        <Toggle>Airplane Mode</Toggle>
      </div>
    </div>
  );
}

function Toggle({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

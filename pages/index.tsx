import { Switch } from "react-aria-components";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full">
      <Switch>
        <div className="indicator" />
        Low power mode
      </Switch>
    </div>
  );
}

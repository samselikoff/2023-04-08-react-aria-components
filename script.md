# Script

React Aria just released a new set of headless components. They're currently in Alpha but we're going to take a look at one of them today to build a custom animated Toggle component styled with Tailwind.

Now if you're eager to see the final code, I've included a link in the description to a code snippet over on buildui.com. So feel free to grab it, drop it in your app, and customize it to your heart's content.

But ok, let's get to it! We are looking at React Aria Components, and if we click Components we'll see all these goodies that are included in the alpha release. And the one we're using today is Switch.

## 🟢 Step

Now there's other headless component libraries that let you build switches, but today we're actually going to be recreating the switch from iOS – and it has some really neat details that are super easy to pull off with React Aria.

Now if you're an iPhone user, you've probably noticed these details, and there's two that I want to call out. First, whenever you press down on a switch, it immediately grows a little bit. And this is really nice because it gives you instant visual feedback that you're interacting with the control that you intended to. And second, if you decide you don't want to toggle the switch, you can actually slide your thumb off the control, and it will shrink back down to its original size. And you can actually move your thumb on and off the control while its pressed to initiate or cancel the toggle as much as you like. And if you let go off the switch the interaction is canceled, and if you let go while you're on it (and the control has grown), it toggles the switch.

So this is what we're gonna build today, and I'm excited to show you just how easy it is with React Aria, so let's get into it.

## 🟢 Step

- Switch
- Toggle
- bg-green and ml-4 w/transition
- focus-visible

First thing bring in Switch. Screen does

```tsx
import { Switch } from "react-aria-components";

export default function Page() {
  return (
    <div className="flex flex-col items-center px-6 justify-center min-h-full text-center">
      <div className="flex flex-col w-72">
        <Switch className="inline-flex items-center">
          <div className="w-9 h-6 bg-zinc-600 mr-4 rounded-full border-2 border-transparent">
            <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>
          <span>Airplane Mode</span>
        </Switch>
      </div>
    </div>
  );
}
```

## 🟢 Step

and if you've watched my channel in the past you know how much

https://react-spectrum.adobe.com/react-aria/react-aria-components.html

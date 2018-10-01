import { EventData } from "data/observable";
import { Button } from "ui/button";

export function pageLoaded(args: EventData) {
}

export function stdDemo(args: EventData) {
  const frame = (<Button>args.object).page.frame;
  frame.navigate({
    moduleName: "demo/std-page",
    context: { startDemo: true }
  });
}

export function ccViewDemo(args: EventData) {
  const frame = (<Button>args.object).page.frame;
  frame.navigate({
    moduleName: "demo/ccview-page",
    context: { startDemo: true }
  });
}

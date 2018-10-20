import { EventData } from "data/observable";
import { Button } from "ui/button";

export function pageLoaded(args: EventData) {
}

export function stdDemo(args: EventData) {
  const frame = (<Button>args.object).page.frame;
  frame.navigate("demo/std-page");
}

export function ccViewDemo(args: EventData) {
  const frame = (<Button>args.object).page.frame;
  frame.navigate("demo/ccview-page");
}

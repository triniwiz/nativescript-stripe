import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

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

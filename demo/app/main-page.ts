import { Frame, EventData } from "@nativescript/core";

export function pageLoaded(args: EventData) { }

export function stdDemo(args: EventData) {
  const frame = Frame.topmost();
  frame.navigate("demo/std-page");
}

export function ccViewDemo(args: EventData) {
  const frame = Frame.topmost();
  frame.navigate("demo/ccview-page");
}

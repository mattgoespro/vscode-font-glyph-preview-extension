import { Editor } from "./Editor/Editor";
import React from "react";
import { createRoot } from "react-dom/client";
import { FontGlyphsLoadedMessage, WebviewReadyMessage } from "../shared/event";

window.onload = () => {
  const vscodeApi = window.acquireVsCodeApi();

  vscodeApi.postMessage({ data: { state: "ready" } } satisfies Partial<
    MessageEvent<WebviewReadyMessage>
  >);

  window.onmessage = (event: MessageEvent<FontGlyphsLoadedMessage>) => {
    createRoot(document.getElementById("root")).render(<Editor glyphs={event.data?.glyphs} />);
  };
};

import { Component, h, Listen, Prop } from "@stencil/core";
import { loadScript } from "../../utils/loadScript";

import { state as globalStore } from "../../store/global-store";

declare let Plotly;

@Component({
  tag: "custom-chart",
  styleUrl: "custom-chart.css",
})
export class CustomChart {
  @Prop() chartTitle = "Custom Chart";
  refInput: HTMLElement;

  async componentWillLoad() {
    await loadScript("https://cdn.plot.ly/plotly-2.20.0.min.js");
  }

  componentDidLoad() {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter",
    };

    var trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: "scatter",
    };

    var data = [trace1, trace2];

    Plotly.newPlot(this.refInput, data);
  }

  @Listen("mapLoaded", { target: "window" })
  onMapLoadedHandler(_old, _new) {
    console.log("onMapLoadedHandler", _old, _new);
  }

  render() {
    return (
      <div>
        <h1
          onClick={() => {
            globalStore.title = globalStore.title + "!";
          }}
        >
          {globalStore.title}
        </h1>
        <div ref={(el) => (this.refInput = el as HTMLElement)}></div>
        <custom-map
          version={2}
          // onMapLoaded={(ev) => {
          //   console.log(ev);
          // }}
        ></custom-map>
      </div>
    );
  }
}

import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

import { loadCss, loadScript } from "../../utils/loadScript";

import { state as globalStore } from "../../store/global-store";

declare let maplibregl;

@Component({
  tag: "custom-map",
  styleUrl: "custom-map.css",
})
export class CustomMap {
  @Prop() version;

  @Event() mapLoaded: EventEmitter;

  refElement: HTMLElement;
  map;

  async componentWillLoad() {
    await loadCss("https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css");
    await loadScript("https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.js");
  }

  componentDidLoad() {
    this.map = new maplibregl.Map({
      container: this.refElement,
      style: "https://demotiles.maplibre.org/style.json", // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    this.map.on("load", () => {
      this.mapLoaded.emit({ map: this.map });
    });
  }

  render() {
    return (
      <div>
        <h1>
          {globalStore.title} - Version : {this.version}
        </h1>
        <div
          ref={(el) => {
            this.refElement = el;
          }}
          style={{ width: "800px", height: "800px" }}
        ></div>
      </div>
    );
  }
}

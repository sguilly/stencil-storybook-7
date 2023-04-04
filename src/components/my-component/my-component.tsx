import {
  Component,
  Prop,
  h,
  State,
  Event,
  EventEmitter,
  Listen,
} from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
})
export class MyComponent {
  @Prop() label: string;

  @State() count = 0;

  @Event() didLoad: EventEmitter<any>;

  componentDidLoad() {
    this.didLoad.emit(true);
  }

  @Listen("mapLoaded", { target: "window" })
  onMapLoadedHandler(_old, _new) {
    console.log("my-component onMapLoadedHandler", _old, _new);
  }

  render() {
    return (
      <div>
        <span>Mon Test </span>
        <button
          id="btPlus"
          onClick={() => {
            this.count++;
          }}
        >
          +
        </button>
        <button
          id="btMinus"
          onClick={() => {
            this.count--;
          }}
        >
          -
        </button>
        <div id="counter">
          {this.label} : {this.count}
        </div>
      </div>
    );
  }
}

// importing forwardRef as an extra here
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
// importing necessary accessors
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// NUMBER_CONTROL_ACCESSOR constant to allow us to use the "TeslaCounterComponent" as
// a custom provider to the component and enforce the ControlValueAccessor interface
const NUMBER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  // forwardRef allows us to grab the TypeScript class
  // at a later (safer) point as classes aren't hoisted
  useExisting: forwardRef(() => TeslaCounterComponent),
  multi: true
};

@Component({
  selector: 'app-tesla-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tesla-counter">
      <p class="tesla-counter__title">{{ title }}</p>
      <div class="tesla-counter__container cf">
        <div
          class="tesla-counter__item"
          (keydown)="onKeyUp($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)"
          tabindex="0">
          <p class="tesla-counter__number">
            {{ value }}
            <span>{{ unit }}</span>
          </p>
          <div class="tesla-counter__controls" tabindex="-1">
            <button tabindex="-1" (click)="increment()" [disabled]="value === max"></button>
            <button tabindex="-1" (click)="decrement()" [disabled]="value === min"></button>
          </div>
        </div>
      </div>
    </div>
  `,
  // set the custom accessor as a provider
  providers: [NUMBER_CONTROL_ACCESSOR],
  styleUrls: ['./tesla-counter.component.scss']
})
export class TeslaCounterComponent implements ControlValueAccessor {
  // step count, default of 1
  @Input() step: number = 1;
  // minimum number allowed before disabling buttons
  @Input() min: number;
  // maximum number allowed before disabling buttons
  @Input() max: number;

  // title to be passed to the control
  @Input() title: string = '';
  // unit to be used alongside the title (mph/degrees/anything)
  @Input() unit: string = '';

  value: number;
  focused: boolean;

  // internal functions to call when ControlValueAccessor
  // gets called
  private onTouch: Function;
  private onModelChange: Function;

  // our custom onChange method
  private onChange(value: number) {
    this.value = value;
    this.onModelChange(value);
  }

  // called by the reactive form control
  registerOnChange(fn: Function) {
    // assigns to our internal model change method
    this.onModelChange = fn;
  }

  // called by the reactive form control
  registerOnTouched(fn: Function) {
    // assigns our own "touched" method
    this.onTouch = fn;
  }

  // writes the value to the local component
  // that binds to the "value"
  writeValue(value: number) {
    this.value = value;
  }

  // increment function
  increment() {
    if (this.value < this.max) {
      this.onChange(this.value + this.step);
    }
    this.onTouch();
  }
  // decrement function
  decrement() {
    if (this.value > this.min) {
      this.onChange(this.value - this.step);
    }
    this.onTouch();
  }

  // our onBlur event, has effect on template
  onBlur(event: FocusEvent) {
    this.focused = false;
    event.preventDefault();
    event.stopPropagation();
  }

  // our onKeyup event, will respond to user
  // ArrowDown and ArrowUp keys and call
  // the relevant functions we need
  onKeyUp(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };
    // events here stop the browser scrolling up
    // when using the keys, as well as preventing
    // event bubbling
    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  // when we focus on our counter control
  onFocus(event: FocusEvent) {
    this.focused = true;
    event.preventDefault();
    event.stopPropagation();
  }

}

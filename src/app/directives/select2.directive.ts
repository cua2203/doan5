import { Directive, ElementRef, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as $ from 'jquery';
import 'select2';

@Directive({
  selector: '[appSelect2]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: Select2Directive,
    multi: true
  }]
})
export class Select2Directive implements OnInit, OnDestroy, OnChanges, ControlValueAccessor {
  @Input('appSelect2') select2Options: any;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initializeSelect2();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['select2Options'] && !changes['select2Options'].firstChange) {
      this.initializeSelect2();
    }
  }

  ngOnDestroy() {
    $(this.el.nativeElement).select2('destroy');
  }

  initializeSelect2() {
    $(this.el.nativeElement).select2(this.select2Options);
    $(this.el.nativeElement).on('change', (event) => {
      const value = Number($(this.el.nativeElement).val());
      this.onChange(value);
    });
  }

  writeValue(value: any): void {
    $(this.el.nativeElement).val(value).trigger('change');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    $(this.el.nativeElement).prop('disabled', isDisabled);
  }
}

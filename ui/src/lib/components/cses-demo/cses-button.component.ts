import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {ButtonSize, ButtonType} from "./cses-button.type";
import {BaseComponent} from  'core-common'
export interface  ICsesButtonConfig{
  iconName:string,
  iconPrefix:string,
  label:string,
  size:ButtonSize,
  type:ButtonType,
  disabled:boolean
}
/**
 * 基础按钮组件
 * @example <cses-button label=“按钮” />
 */
@Component({
  selector: 'cses-button',
  templateUrl: './cses-button.component.html',
  imports: [NgIf],
  standalone: true
})
export default class CsesButton extends BaseComponent<string, ICsesButtonConfig>{
  id = '10001';
  name ='cses-button';

  @Output('click') click = new EventEmitter<MouseEvent>();

  protected onClick(event: MouseEvent) {
    event.stopPropagation();
    if (this.config.disabled) return;
    this.click.emit(event);
  }


  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }


}

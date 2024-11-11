import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  /* public onDelete: EventEmitter<number> = new EventEmitter(); */

  /* onDeleteCharacters( index: number):void {
    this.onDelete.emit(index);
  } */

    onDeleteById( id?:string ):void {
      if( !id ) return;
      this.onDelete.emit(id);
    }

}

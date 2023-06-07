import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragdropbasics';

  lyrics =[
    'in the town where i was born',
    'Lived a man sailed to sea',
    'And he told us of his life',
    'in the land of submarines',
    'so we sailed up to the sun',
    'till we found the sea of greens',
    'and we lived beneath the waves',
    'in our yellow sun=vmarine'
  ];

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.lyrics, event.previousIndex, event.currentIndex); 
  }
}


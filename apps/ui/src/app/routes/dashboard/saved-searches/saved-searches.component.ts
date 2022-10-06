import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'starter-saved-searches',
  templateUrl: './saved-searches.component.html',
  styleUrls: ['./saved-searches.component.scss'],
})
export class SavedSearchesComponent  {
 

 
  onEdit(id: number) {
    console.log('edit this search')
  }

  onDelete(id: number) {
    console.log('delete this search')
  }

}

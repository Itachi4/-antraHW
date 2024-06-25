import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autocomplete-app';
  searchText = '';
  items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

  get filteredItems() {
    if (this.searchText === '') {
      return []; // Return an empty array if no input is provided
    }
    
    return this.items.filter(item => {
      // Split the item into words and check if any word includes the searchText
      return item.toLowerCase().split(' ').some(word => 
        word.includes(this.searchText.toLowerCase())
      );
    });
  }
  
}

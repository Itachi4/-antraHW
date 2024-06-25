import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autocomplete-app';
  searchText = '';
  items = ['New York', 'California', 'Chicago', 'New Jersey', 'San Francisco'];

  get filteredItems() {
    if (this.searchText === '') {
      return [];
    }

    return this.items.filter(item =>
      item.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
  }
}

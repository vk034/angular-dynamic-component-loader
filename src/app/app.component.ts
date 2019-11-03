import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TabDetailComponent } from './tab-detail/tab-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = [
    {
      title: "Tab 1",
      detail: "Tab 1 details",
      component: TabDetailComponent
    },
    {
      title: "Tab 2",
      detail: "Tab 2 details",
      component: TabDetailComponent
    },
    {
      title: "Tab 3",
      detail: "Tab 3 details",
      component: TabDetailComponent
    },
    {
      title: "Tab 4",
      detail: "Tab 4 details",
      component: TabDetailComponent
    }
  ];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push({
      title: `Tab ${this.tabs.length + 1}`,
      detail: `Tab ${this.tabs.length + 1} details`,
      component: TabDetailComponent
    });

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Data, Column } from '../../../models/sortingTable.model'
@Component({
  selector: 'gm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class TableComponent implements OnInit {
  /**
   * Table columns, sets the order and configuration
   */
  @Input() columns: Column[] = [];

  /**
  * Table data , api response normally 
  */
  @Input() dataSource: Data[] = [];
  @Input() ariaLabel: string = '';

  /**
  * include search bar or not 
  */
  @Input() withSearch: boolean = false

  /**
  * array to mange sorting data
  */

  displayedData: any[] = [];

  /**
  * search values for each field,
  * extracted from dataSource automatically
  */
  selects: { [key: string]: any } = {}

  /**
  * keeps track of search criteria
  */
  search: { [key: string]: any } = {}

  /**
  * determine if search is asc or desc
  */
  sortType: string | null = null

  /**
  * some logic runs to get search selectors based on DataSource
  */
  ngOnInit(): void {
    this.displayedData = this.dataSource
    this.columns.forEach((el: any) => {
      if (el.hasOwnProperty('isSearchable')) {

        this.getSearchSelector(el?.dataIndex, el.title);
        this.search[el.dataIndex] = ''
      }
    })
  }



  /**
  * sort data in table
  */
  onSort(key: any) {
    this.dataSource.sort(this.sortByKey(key));
  };

  /**
   * helper function for sort
   */
  sortByKey(key: string) {
    if (this.sortType === 'asc' || this.sortType === null) {

      this.sortType = 'desc';
      return function (a: any, b: any) {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
      }
    }
    else {
      this.sortType = 'asc';

      return function (a: any, b: any) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      }
    }

  }


  getSearchSelector(key: string, title: string) {
    // get search options
    let tempSelect = this.dataSource.map((el: any) => ({ selectValue: el[key], title }));
    let unique = [...new Map(tempSelect.map((item: any) => [item["selectValue"], item])).values()];
    this.selects[key] = [...new Set(unique)];
  }

  selectOption(event: any, key: any) {
    // filter on Select
    this.search[key] = event.target.value;

    console.log(this.search);
    /* if (this.search[key] === '') {
      delete this.search[key];
    } */

    let searchValues = Object.values(this.search).filter(el => el !== '');

    if (searchValues.length === 0) {
      this.displayedData = this.dataSource
    } else {
      for (let searchObj in this.search) {
        console.log(this.dataSource)
        if (event.target.value === '') {
          return
        }

        this.displayedData = this.dataSource.filter((el: any) => {
          if (this.search[searchObj] === '') return el;
          return el[searchObj] === this.search[searchObj]
        });

      }
    }
  }

  /**
   * determine if reset button show be shown or not
   */
  showReset() {
    let searchValues = Object.values(this.search).filter(el => el !== '');
    return searchValues.length
  }

  /**
  * reset search criteria
  */
  resetFilter() {

    this.displayedData = this.dataSource;
    this.search = {}

  }
}

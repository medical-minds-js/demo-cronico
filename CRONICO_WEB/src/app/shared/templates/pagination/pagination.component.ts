import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() id: string = '';
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;
  @Output() changePage = new EventEmitter();

  pagesList: { name: string; show: boolean }[] = [];
  pagesShowList: number[] = [];
  fistPage: boolean = true;
  lastPage: boolean = false;
  mutiplePages: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.createPagesList();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createPagesList();
  }

  createPagesList() {
    if (this.totalPages > 1) {
      this.mutiplePages = true;
    }
    this.pagesList = [];
    for (let index = 1; index <= this.totalPages; index++) {
      if (this.mutiplePages) {
        if (index == this.totalPages) {
          this.pagesList.push({ name: `${index}`, show: true });
        } else {
          this.pagesList.push({ name: `${index}`, show: true });
        }
      } else {
        this.pagesList.push({ name: `${index}`, show: true });
      }
    }
  }

  increasePage() {
    let page = this.currentPage;
    page++;
    this.changeCurrentPage(page);
  }

  decreasePage() {
    let page = this.currentPage;
    page--;
    this.changeCurrentPage(page);
  }

  changeCurrentPage(page: number) {
    this.currentPage = page;
    if (page == 1) {
      this.fistPage = true;
    } else {
      this.fistPage = false;
    }
    if (page == this.totalPages) {
      this.lastPage = true;
    } else {
      this.lastPage = false;
    }

    if (this.currentPage >= 5 && this.currentPage < this.totalPages - 5) {
      this.pagesList.map((i) => {
        if (
          +i.name == 1 ||
          +i.name == this.totalPages ||
          (+i.name <= this.currentPage + 5 && +i.name >= this.currentPage - 5)
        ) {
          i.show = true;
        } else {
          i.show = false;
        }
      });
    }
    this.changePage.emit(this.currentPage);
  }
}

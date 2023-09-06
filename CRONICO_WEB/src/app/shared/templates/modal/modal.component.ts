import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string = '';
  @Input() size: string = 'app-modal sm';
  @Input() preventCloseOnClickOutside: boolean = false;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    let modal = this;
    const classesOnClose = [
      'app-modal sm',
      'app-modal md',
      'app-modal lg',
      'app-modal full',
      'app-modal-background',
    ];

    if (!this.id) {
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (e: any) => {
      if (classesOnClose.find((_) => _ === e.target.className)) {
        if (!this.preventCloseOnClickOutside) {
          modal.close();
        }
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.classList.add('app-modal-display');
    document.body.classList.add('app-modal-open');
    setTimeout(() => {
      this.element.classList.add('app-modal-show');
    }, 100);
  }

  close(): void {
    this.element.classList.remove('app-modal-display');
    this.element.classList.remove('app-modal-show');
    document.body.classList.remove('app-modal-open');
  }
}

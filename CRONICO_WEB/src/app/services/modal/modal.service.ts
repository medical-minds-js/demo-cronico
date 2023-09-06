import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: any[] = [];

  add(modal: any) {
    // Add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // Remove modal from array of active modals
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  open(id: string) {
    // Open modal specified by id
    // tslint:disable-next-line:prefer-const
    let modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.open();
  }

  close(id: string) {
    // Close modal specified by id
    // tslint:disable-next-line:prefer-const
    let modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.close();
  }
}

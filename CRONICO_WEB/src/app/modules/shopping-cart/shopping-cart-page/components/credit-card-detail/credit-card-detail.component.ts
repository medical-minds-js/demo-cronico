import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '@core/interfaces/cards.interface';
import { CreateCard } from '@core/interfaces/create-card.interface';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.scss'],
})
export class CreditCardDetailComponent implements OnInit {
  @Input() creditCard: Card = {} as Card;
  @Output() changeActiveCard = new EventEmitter<Card>();
  constructor() {}

  ngOnInit(): void {}

  changeCard(card: Card) {
    this.changeActiveCard.emit(card);
  }
}

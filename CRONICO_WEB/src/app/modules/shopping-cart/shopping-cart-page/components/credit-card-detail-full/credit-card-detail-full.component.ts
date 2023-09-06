import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '@core/interfaces/cards.interface';
import { CreateCard } from '@core/interfaces/create-card.interface';

@Component({
  selector: 'app-credit-card-detail-full',
  templateUrl: './credit-card-detail-full.component.html',
  styleUrls: ['./credit-card-detail-full.component.scss'],
})
export class CreditCardDetailFullComponent implements OnInit {
  @Input() creditCard: Card = {} as Card;
  @Output() changeActiveCard = new EventEmitter<Card>();
  constructor() {}

  ngOnInit(): void {}

  changeCard(card: Card) {
    this.changeActiveCard.emit(card);
  }
}

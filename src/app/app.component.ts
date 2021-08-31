import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'linguagens-de-prog';
}
abstract class Pessoa {
  palavra: string;
  numberA: number;
  numberB: number;

  constructor(palavra: string, numberA: number, numberB: number) {
    this.palavra = palavra;
    this.numberA = numberA;
    this.numberB = numberB;
  }

  dizerAlgo(): string {
    console.log(this.palavra);
    return this.palavra;
  }
  multiplicar(): void {
    console.log('Valor Multiplicado=' + this.numberA * this.numberB);
  }
  somar(): void {
    console.log('Valor Somado= ' + (this.numberA + this.numberB));
  }
  subtrair(): void {
    console.log('Valor Subtrair= ' + (this.numberA - this.numberB));
  }
  dividir(): void {
    console.log('Valor Dividir= ' + this.numberA / this.numberB);
  }
  calcularRestoDeDivisao(): void {
    console.log('Valor do Resto da Divisão= ' + (this.numberA % this.numberB));
  }
}
class Aluno extends Pessoa {
  constructor(palavra: string, numberA: number, numberB: number) {
    super(palavra, numberA, numberB);
  }
}
window.onload = () => {
  var dizalgo: Aluno = new Aluno(
    'Estou programando em TypeScript usando Angular',
    3,
    2
  );
  dizalgo.dizerAlgo();
  dizalgo.multiplicar();
  dizalgo.somar();
  dizalgo.subtrair();
  dizalgo.dividir();
  dizalgo.calcularRestoDeDivisao();
};

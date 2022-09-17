import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  pokemon: any[];
  cols: number;

  handleClick(id: number) {
    const event = new CustomEvent("favorites:toggle", {
      detail: {
        id
      }
    });
    console.log(event)
    window.dispatchEvent(event);
  }

  constructor(private dataService: DataService) { 
    this.pokemon = [];
    this.cols = 1;
   }

  ngOnInit(): void {
    this.cols = Math.floor(Math.min(window.innerWidth, 900) / 300);
    window.addEventListener("resize", () => {
      this.cols = Math.floor(Math.min(window.innerWidth, 900) / 300);
    })
    this.dataService.getPokemon().subscribe((data) => {

      this.pokemon = data.results.map((data) => {
        const url = data.url.split("/");
        const [pokimonNumber] = url.splice(-2);
        const onClick = () => {this.handleClick(pokimonNumber)}
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokimonNumber}.png`;
        return {
          ...data,
          image: imageUrl,
          onClick
        }
      });
    })
  }

}

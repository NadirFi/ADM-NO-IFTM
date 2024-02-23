import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{

  photoCover: string = "";

  heroTitle: string = "";

  heroDescription: string = "Stronger Attacks";

  id: string | null = "0";

  data = dataFake;

  constructor( private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter( article => article.id === id )[0];

    this.photoCover = result.photo;
    this.heroTitle = result.title;
  }



}

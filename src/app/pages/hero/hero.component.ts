import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SmallCardComponent, RouterLink,],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  photoCover: string = "";

  heroTitle: string = "";

  heroDescription: string = "Stronger Attacks";

  @Input()
  id: string | null = "0";

  pilar: string | null = "0"

  data = dataFake;

  constructor( private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }


  setValuesToComponent(id: string | null) {
    const result = dataFake.filter( article => article.id === id )[0];

      console.log(result);

      this.photoCover = result.photo;
      this.heroTitle = result.title;
  }

}

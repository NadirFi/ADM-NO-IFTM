import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { dataFake } from '../data/dataFake';
import { SmallCardComponent } from '../components/small-card/small-card.component';

@Component({
  selector: 'app-hero-p',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './hero-p.component.html',
  styleUrl: './hero-p.component.css'
})
export class HeroPComponent implements OnInit {
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


      this.photoCover = result.photo;
      this.heroTitle = result.title;
  }

}

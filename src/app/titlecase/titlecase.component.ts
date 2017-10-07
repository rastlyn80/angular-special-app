import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'titlecase',
  template: `   <div class="container">
                  <div class="row">
                    <div class="col-md-4">
                      <input [(ngModel)]="myText" type="text" class="form-control">
                    </div>
                    <div class="col-md-8">
                    </div>
                    <div class="col-md-12">
                      <p>{{ myText | toTitleCase }}</p>
                    </div>
                  </div>
                </div>

               `,
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  myText;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FreeLancer } from '../../FreeLancer';
import { ProviderService } from '../provider.service';
import { Provider } from '@angular/compiler/src/core';

@Component({
  selector: 'app-webdeveloper',
  templateUrl: './webdeveloper.component.html',
  styleUrls: ['./webdeveloper.component.css'],
  providers: [ProviderService]

})
export class WebdeveloperComponent implements OnInit {

  webDevList: FreeLancer[];
  person = 'assets/images/person.png';
  data: string;
  constructor(private service: ProviderService) {

    // this.webDevList = [
    //   {
    //     'id': 1,
    //     'name': 'ramesh',
    //     'costing': 'usd20',
    //     'description': 'HTML',
    //     'location':  'Pune',
    //     'rating': '4.5'

    //   },
    //   {
    //     'id': 2,
    //     'name': 'rakesh',
    //     'costing': 'usd25',
    //     'description': 'CSS',
    //     'location':  'Chennai',
    //     'rating': '4.4'

    //   }
    // ];
  }

  ngOnInit() {

      this.service.findAll().subscribe(resp => this.webDevList = resp);
  }
 show(id: any) {
   
    this.data = this.webDevList[id].description;
    console.log(this.data);
  }
}

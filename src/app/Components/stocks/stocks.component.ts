import { Component, OnInit } from '@angular/core'; 
import { stock } from './Models/stock';
import { StocksService } from './Services/StockService.Service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  TableData: Array<stock> = [];
  abc ='';
  constructor(private StocksService : StocksService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.StocksService.getData()
      .subscribe 
      ({
        next: (result: any) => {
          console.log(result);
          this.TableData=result;
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}

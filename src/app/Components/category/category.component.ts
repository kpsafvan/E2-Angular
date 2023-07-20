import { Component, OnInit } from '@angular/core';
import { CategoryService } from './Services/CategoryService.Service';
import { category } from './Models/category';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from './create-category/create-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  TableData: Array<category> = [];
  abc ='';
  constructor(private dialog: MatDialog,private router: Router,
    private CategoryService: CategoryService) { }
  
  ngOnInit(): void {
    this.TableData=[];
    this.fetchData();

   // this.abc=this.TableData[0].name;
  }
  fetchData() {
    this.CategoryService.getData()
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
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '512px',
      height:'254px'
      
    });
  }
  create(){
    this.openDialog();
    //this.router.navigate(['create-category']);
  }
}

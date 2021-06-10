import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-tray',
  templateUrl: './new-tray.component.html',
  styleUrls: ['./new-tray.component.css']
})
export class NewTrayComponent implements OnInit {

  public currentStep = 0;
  private maxSteps = 2;
  public productsNumOfColumns = 2;
  public selectedSelected_Products: String[] = [];

  @Input() products: Product[] = [];
  orderForm!: FormGroup;

  receiverForm: FormGroup = this.fb.group({
      receiver_name: ['', [Validators.required]],
      color: ['', [Validators.required]],
      age: ['', [Validators.required]],
      tv_show: ['', [Validators.required]],
      sport: ['', [Validators.required]],
      movie: ['', [Validators.required]],
      song: ['', [Validators.required]],
      profession: ['', [Validators.required]],
  });

  

  constructor(private fb: FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  addSelected_ProductsControls() {
    const arr = this.products.map(element  =>{
      return this.fb.control(false);
    })

    return this.fb.array(arr);
  }

  get selected_productsArray(){
    return <FormArray>this.orderForm.get('selected_products');
  }


  nextStep(){
    if(this.currentStep < this.maxSteps){
      this.currentStep++;
    }
  }
  
  previousStep(){
    if(this.currentStep > 0){
      this.currentStep--;
    }
  }

  saveReceiverDetails(){

  }

  saveOrderDetails(){
    
  }

  getGroups(arr:any, numGroups:number) {
    const perGroup = numGroups;
    return new Array(Math.ceil(arr.length / numGroups))
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  getSelectedSelected_Products(){
    this.selectedSelected_Products = [];
    this.selected_productsArray.controls.forEach((control, i) => {
      if(control.value){
        this.selectedSelected_Products.push(this.products[i].code.toString())
      }
    });
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.products=res;
        this.orderForm = this.fb.group({
          selected_products: this.addSelected_ProductsControls(),
          address: ['', [Validators.required]],
          date: ['', [Validators.required]],
          phone_number: ['', [Validators.required]],
          price: ['', [Validators.required]],
          state: ['En proceso'],
        });
      },
      err => console.log(err)
    );
  }
}

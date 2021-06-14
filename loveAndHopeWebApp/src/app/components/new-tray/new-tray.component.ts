import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/models/form.model';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import jwtDecode, { JwtPayload } from "jwt-decode";

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

  addToShoppingCart(){
    let form: Form = {
      receiver_name:this.receiverForm.value.receiver_name,
      color:this.receiverForm.value.color,
      age:this.receiverForm.value.age,
      tv_show:this.receiverForm.value.tv_show,
      sport:this.receiverForm.value.sport,
      movie:this.receiverForm.value.movie,
      song:this.receiverForm.value.song,
      profession:this.receiverForm.value.profession
    };

    let order:Order = {
      username: this.getCurrentUsername(),
      selected_products: this. selectedSelected_Products,
      address: this.orderForm.value.address,
      date: this.orderForm.value.date,
      phone_number: this.orderForm.value.phone_number,
      price:  this.orderForm.value.price,
      state:  'En proceso'
    }

    if (localStorage.getItem("shoppingCart") == null){
      localStorage.setItem("shoppingCart",JSON.stringify([]));
    }

    let shoppingCart:any[] = JSON.parse(localStorage.getItem("shoppingCart")!);

    shoppingCart.push({order: order,form: form});


    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));

  }

  getCurrentUsername(){
    const token:any = localStorage.getItem('token');
    if(token !== null){
      const decoded:any = jwtDecode<JwtPayload>(token); // Returns with the JwtPayload typ
      return decoded.username;
    }
    else{
      return "user_x";
    }
  }


}







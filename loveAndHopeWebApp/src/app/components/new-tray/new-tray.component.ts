import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-tray',
  templateUrl: './new-tray.component.html',
  styleUrls: ['./new-tray.component.css']
})
export class NewTrayComponent implements OnInit {

  public currentStep = 0;
  private maxSteps = 2;
  public productsNumOfColumns = 2;
  public selectedSelected_Products: string[] = [];

  products = [{img: "assets/images/home_banner.jpg", code: "#13123", name: "cocacola"},
              {img: "assets/images/card_example.jpg", code: "#55123", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#1553", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#178683", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#6354235", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#13423", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#13423", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#13123", name: "cocacola"},
              {img: "assets/images/card_example.jpg", code: "#55123", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#1553", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#178683", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#6354235", name: "cocacola"},
              {img: "assets/images/home_banner.jpg", code: "#13423", name: "cocacola"}]

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

  orderForm: FormGroup = this.fb.group({
    selected_products: this.addSelected_ProductsControls(),
    address: ['', [Validators.required]],
    date: ['', [Validators.required]],
    phone_number: ['', [Validators.required]],
    price: ['', [Validators.required]],
    state: ['En proceso'],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

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
        this.selectedSelected_Products.push(this.products[i].code)
      }
    });
  }
}

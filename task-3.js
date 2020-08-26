class Storage {
  constructor(items) {
    this.items = items;

  }

  getItems() {
    return this.items;
  }

  addItem(ter) {
   this.items.push(ter)
  }
  removeItem(del){
    for(let i=0; i<this.items
      .length; i+=1){
      if(del===this.items[i]){
        this.items.splice(i,1);
      }
    }
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи","Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// number 5
// class StringBuilder{
//   constructor(value){
// this._value=value
//   }
//   get value(){

//     return this._value

//   }

//     append(str){
//       this._value = `${this._value}${str}`
//      }

//    prepend(str){
//     this._value=`${str}${this._value}`

//    }

//    pad(str){
//     this._value=`${str}${this._value}${str}`
//    }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

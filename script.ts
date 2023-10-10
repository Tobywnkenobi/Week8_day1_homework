
/*
Question #1

Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */


type CTStudent = {
    id: string;
    name: string;
    age: number;
    isTired:boolean;
    projectsCompleted:string[];
    pet?: string;
}

let student1 = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3 = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 

/* 
Question #2

Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annotate the return type of the function  */

type Fruit={
    color:string,
    shape:string
  }
  
  let apple:Fruit={color:"red", shape:"sphere"}
  let eaten:Fruit|null=null
  
function fruitColor(fruit: Fruit | null): string {
    if (fruit == null) {
        return "You ate my fruit already";
    }
    return fruit.color;
}

console.log(fruitColor(apple));
console.log(fruitColor(eaten));

/*Question #3

Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */


type Book={
  isbn:string,
  title:string,
  author:string
}

type DigitalBook={
  fileType:string,
}

type Ebook = Book | DigitalBook;

let physicalBook: Ebook = {
    isbn: '54864512',
    title: 'Um is the Element of Confusion',
    author: 'John Doe',
    fileType: 'PDF'
};

let virtualBook: Ebook = {
    fileType: 'PDF'
}

console.log(physicalBook);
console.log(virtualBook);

/*Question #4

Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

- All ShopItems have an numeric id that can not be edited 
- All ShopItems have a price
- All ShopItems have a description
- Some ShopItems have a color
- All ShopItems have a Category represented with an enum 
    - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
- All ShopItems have a list of keywords used to help search for the ShopItem 
    - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

After Creating the `ShopItem` type create 3 items using this type */

enum Category {
    Shirts = 'Shirts',
    Shoes = 'Shoes',
    Pants = 'Pants',
    Hats = 'Hats'
}

class ShopItem {
    id: number;
    price: number;
    description: string;
    color?: string;
    category: Category;
    keywords: string[];

    constructor(id:number, price: number, description: string, category: Category, keywords: string[], color?: string) {
        this.id = id;
        this.price = price;
        this.description = description;
        this.category = category;
        this.keywords = keywords;
        if (color) {
            this.color = color;
        }
    }
}

const item1 = new ShopItem(1, 20, "Red T-Shirt", Category.Shirts, ["red", "t-shirt", "clothing"], "red");

const item2 = new ShopItem(2, 200, "Black leather vest", Category.Shirts, ["black", "vest", "clothing"], "black");

console.log(item1);
console.log(item2);
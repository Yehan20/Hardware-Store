export type CategoryItemType={

    item?:{
        id:number,
        img:string,
        name:string,
        link:string
    }
    product?:{
        _id:string,
        img:string,
        name:string,
        category:string,
        price:number
    }

}
export type ColoumnProp={
     width?:number
     bg?:string
}

export type Cart={
    img:string,
    amount:number,
    price:number,
    name:string,
    category:string
}

export type SingleProductType={
      _id?:string,
      img:string,
      desc?:string,
      category:string,
      price:number,
      name:string,
      color:string,
      inStock:boolean |string,
}

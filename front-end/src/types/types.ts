export type CategoryItemType={

    item?:{
        id:number,
        img:string,
        name:string,
        link:string
    }
    product?:{
        _id:string,
        img:string
    }

}
export type ColoumnProp={
     width?:number
     bg?:string
}

export type SingleProductType={
      _id:string,
      img:string,
      desc:string,
      price:number,
      name:string,
      color:string,
      inStock:boolean,
}

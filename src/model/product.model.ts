export interface MenuItemsI {
  id: number;
  name: string;
  price: number;
}

export interface OrderI extends MenuItemsI {
  quantity: number;
}

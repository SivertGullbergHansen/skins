export interface ItemCardType {
  weaponType: number;
  image: string;
  onClick?: () => any;
  name: string;
  weaponName: string;
  canDelete?: boolean;
}

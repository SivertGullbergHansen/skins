export interface ItemCardType {
  weaponType: number;
  image: string;
  onClick?: () => any;
  onDelete?: () => any;
  name: string;
  weaponName: string;
  canDelete?: boolean;
}

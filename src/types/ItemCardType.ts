export interface ItemCardType extends SkinType {
  onClick?: () => any;
  onDelete?: () => any;
  onEdit?: () => any;
  canDelete?: boolean;
  isActive?: boolean;
}

export interface SkinType {
  weaponName: string;
  name: string;
  type: string;
  image: string;
  id: number;
}

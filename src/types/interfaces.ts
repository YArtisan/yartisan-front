export interface INavLink {
  href: string;
  label: string;
  dropdown?: INavLink[];
}

declare interface SideBarItem{
    icon:string;
    name:string;
    link:string;
    active:boolean;
    subItems?:subItem[]
} 

declare interface subItem {
    name:string,
    link:string
}
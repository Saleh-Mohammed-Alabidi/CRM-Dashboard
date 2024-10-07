"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'



interface Props {
  sidebarLinks: SideBarItem[];
}

const SideBar = ({ sidebarLinks = [] }: Props) => {
  const pathname = usePathname();
 
  return (
 
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu mm-show" id="menu">
            {sidebarLinks.map((item, index) => (
              <li
                className={ pathname==item.link || item.active  ? "mm-active" : ""}
                key={`SideBar_${index}`}
              >
                <Link
                  className={
                    (item?.subItems?.length ?? 0) > 0 ? "has-arrow" : ""
                  }
                  aria-expanded="false"
                  href={(item?.subItems?.length ?? 0) > 0 ? "#" : item.link}
                >
                  <i className={item.icon}></i>
                  <span className="nav-text">{item.name}</span>
                </Link>
                {(item?.subItems?.length ?? 0) > 0 && (
                  <ul>
                    {item?.subItems?.map((subItem, _index) => (
                      <li key={`SideBar_SubItem_${_index}`}>
                        <Link href={subItem.link}> {subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    
  );
};

export default SideBar;

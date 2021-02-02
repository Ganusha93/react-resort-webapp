import React, { useState ,useEffect} from 'react'
import MenuFilter from './MenuFilter'
import MenuList from './MenuList'
import items from '../../menudata'



export default function MenuContainer() {

    const [menus, setMenu] = useState([]);
    const[filteredMenus,setFilteredMenus]=useState(menus);
    

    useEffect(() => {
        setMenu(formatData(items));
        setFilteredMenus(formatData(items))
        
    }, [])
  
    

    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let menus = { ...item.fields, images, id };
            return menus;
        });
        return tempItems
    }

    

    return (
        <>
            <MenuFilter menus={menus}  setFilteredMenus={setFilteredMenus}/>
            <MenuList menus={filteredMenus} />
        </>
    )
}

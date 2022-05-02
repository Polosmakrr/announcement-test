import React from 'react';
import { Link } from 'react-router-dom';
    
const AnnouncementItem = ({announcement}) => {
    
  return (
      <li className='mainBlock_item'>
          
          <Link to={`info${announcement.id}`}>
              <h3 className='mainBlock_itemTitle'>
              {announcement.title}
            </h3>
          </Link>

     </li>
  )
};

export default AnnouncementItem;


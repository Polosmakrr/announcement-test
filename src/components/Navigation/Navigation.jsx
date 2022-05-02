import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>

      <nav className='container'>
        <div className='nav__container'>
          <a href='https://github.com/Polosmakrr'> 
            <div className='nav_logo'>
              <img src="https://pngimg.com/uploads/github/github_PNG40.png" alt="git_hub" width={30}/> 
              <span className='nav_logo_text'>Polosmakrr</span>
            </div>
          </a>
          <div className='nav_link'>
            <NavLink className='nav_link' to="">
                  <button className='nav_btn'>Viev Announcement</button>
              </NavLink>
              <NavLink className='nav_link' to="create">
                  <button className='nav_btn btn'>Create Announcement</button>
              </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
 
    </>
  );
};
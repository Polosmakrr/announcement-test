import { Route, Routes } from 'react-router-dom';
import { CreateAnnouncement } from '../CreateAnnouncement/CreateAnnouncement';
import { Home } from '../Home/Home';
import { Navigation } from '../Navigation/Navigation';
import "react-loader-spinner";
import { Info } from '../Info/Info';
import { Edit } from '../Edit/Edit';

function App() {
  return (
    <Routes>
      <Route path="announcement-test" element={<Navigation/>}>
        <Route path="" element={<Home />}/>
          <Route path="info:id" element={<Info />}/>
          <Route path="edit:id" element={<Edit />}/>
        <Route path=":create" element={<CreateAnnouncement/>}/>
      </Route>
    </Routes>
  );
}

export default App;
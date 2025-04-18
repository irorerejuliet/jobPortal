
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage'
import JobDetailsPage from './Components/Pages/JobDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" />
        <Route index element={<HomePage />} />
        <Route path="/jobdetailspage" element={<JobDetailsPage/>} />
      </Route>
    </Routes>
      
  );
}

export default App

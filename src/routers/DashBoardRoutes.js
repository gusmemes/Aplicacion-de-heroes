import { Routes, Route} from "react-router-dom";
import { Navbar } from "../Components/ui/NavBar"

import { DcScreen } from '../Components/dc/DcScreen';
import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { SearchScreen } from '../Components/search/SearchScreen';
import { HeroScreen } from "../Components/hero/HeroScreen";

export const DashBoardRoutes = () => {
  return (
  <>
    <Navbar />
<div className="container">
    <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />

        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroeId" element={<HeroScreen />} />
        
        <Route path="/" element={<MarvelScreen />} />
      </Routes>
      
      </div>
        </>

        
  )
}

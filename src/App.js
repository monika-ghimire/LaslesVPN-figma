
import './App.css';
import FeaturesPages from './pages/featuresPages/FeaturesPages';
import GobalPage from './pages/gobalPage/GobalPage';
import PackagePlanPage from './pages/packagePlanPage/PackagePlanPage';
import SignupPage from './pages/signUpPage/SignupPage';
import ReviwePage from './pages/reviwePage/ReviwePage'

function App() {
  return (
    <div className='container-holder'>
      <div >
      <SignupPage/>
      <FeaturesPages/>
      <PackagePlanPage/>
      <GobalPage/>
      <ReviwePage/>
      </div>
    </div>
  );
}

export default App;

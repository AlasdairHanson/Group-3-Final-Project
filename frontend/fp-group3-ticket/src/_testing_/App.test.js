import { render, screen } from '@testing-library/react';
import App from '../App';
import UpperNavBar from '../Components/UpperNavBar' ;
import LandingPage from '../Components/LandingPage/LandingPage';
import Solutions from '../Components/Solutions/Solutions';
import TicketPage from '../Components/TicketPage/TicketPage';

test.skip( "App.js should contain the tocket psge, solutions, landing page and upperNavBar", () => {

jest.mock(`../Components/TicketPage/TicketPage`, () => {
  return function TicketPageMock(props){
    return(<p>Mocked TicketPage</p>)
  }
});

jest.mock(`../Components/Solutions/Solutions`, () => {
  return function SolutionsMock(props){
    return(<p>Mocked Solutions</p>)
  }
});

jest.mock(`../Components/LandingPage/LandingPage`, () => {
  return function LandingPageMock(props){
    return(<p>Mocked LandingPage</p>)
  }
});

jest.mock(`../Components/UpperNavBar`, () => {
  return function UpperNavBarMock(props){
    return(<p>Mocked UpperNavBar</p>)
  }
});

}

)
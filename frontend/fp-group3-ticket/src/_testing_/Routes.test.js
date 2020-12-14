import React from 'react';
import { MemoryRouter } from 'react-router';
import { screen, render } from '@testing-library/react';
import UpperNavBar from '../Components/UpperNavBar' ;
import LandingPage from '../Components/LandingPage/LandingPage';
import Solutions from '../Components/Solutions/Solutions';
import TicketPage from '../Components/TicketPage/TicketPage';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

jest.mock(`../Components/UpperNavBar`, () => {
    return function NavBarMock(props){
      return(<p>Mocked NavBar</p>)
    }
  });

jest.mock('../Components/LandingPage/LandingPage', () => {
    return function LandingPageMock(props){
      return(<p>Mocked LandingPage</p>)
    }
  });

jest.mock('../Components/Solutions/Solutions', () => {
    return function SolutionsMock(props){
      return(<p>Mocked Solutions</p>)
    }
  });

jest.mock('../Components/TicketPage/TicketPage', () => {
    return function TicketPageMock(props){
      return(<p>Mocked Ticket Page</p>)
    }
  });


describe("Testing routes", () => {

test.skip("Should render Landing Page page on / route", () => {

    

    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText("Mocked LandingPage")).toBeInTheDocument();


}

);

test.skip("Should render Solutions and NavBar on /solutions route", () => {

    render(

        <MemoryRouter initialEntries={['/solutions']}>
            <App/>
        </MemoryRouter>
        );
        
    expect(screen.getByText("Mocked Solutions")).toBeInTheDocument();
    expect(screen.getByText("Mocked NavBar")).toBeInTheDocument();

}
);

test.skip("Should render TicketPage and NavBar on /tickets route", () => {


    render(
        <MemoryRouter initialEntries={['/tickets']}>
            <App/>
        </MemoryRouter>
    );

    expect(screen.getByText("Mocked Ticket Page")).toBeInTheDocument();
    expect(screen.getByText("Mocked NavBar")).toBeInTheDocument();


}
);

})
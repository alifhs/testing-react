import { render, screen } from "@testing-library/react";
import App from "./App";
import { Counter  } from "./Counter";

import {shallow, mount} from "enzyme";

describe("Counter Testing", () => {
  // test("renders learn react link", () => {
  //   render(<App />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  // test("render title of the counter ", () => {
  //     const {getByText} =  render(<App />);
  //     const linkElement = getByText(/This is counter app/i);
  //     // console.log(linkElement);
  //     expect(linkElement).toBeInTheDocument();
  // })
  
  let wrapper;
  beforeEach(()=> {
    wrapper = mount(<App />);  

    console.log(wrapper.debug())

  })

  test("render the title of counter",  ()=> {

    expect(wrapper.find('h1').text()).toContain('This is counter app')
    // console.log(wrapper.debug());
  }) 
  test("render a button with text of increment",  ()=> {
    
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
    
  })

  test("render the initial value of the state in a div", ()=> {
      expect(wrapper.find('#counter-value').text()).toBe("0");
  })

  test("render the click event of  decrement button and decrement counter value", ()=> {
      wrapper.find("#increment-btn").simulate('click');
      expect(wrapper.find("#counter-value").text()).toBe("1");
      wrapper.find("#decrement-btn").simulate('click');
      expect(wrapper.find("#counter-value").text()).toBe("0");
  })
  test("render the click event of  decrement button and make sure counter is not negative", ()=> {
      wrapper.find("#decrement-btn").simulate('click');
      expect(wrapper.find("#counter-value").text()).toBe("0");
  })
});

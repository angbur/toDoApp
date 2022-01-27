import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import  { store } from "../../store/store";
import HomePage from "../../HomePage/HomePage";
import ToDoListS from "../../ToDoS/NewToDoListS";
import { Button, TextField } from "@material-ui/core";
import NewToDoS from "../../ToDoS/NewToDoS";

describe("App",()=>{

  it("Show reender correctly", ()=>{
    const wrapper = shallow(<App/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should render Welcome view", ()=>{
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage).text()).toEqual("Welcome");
    
  });

  it("Should render toDo view and should allow dispatch fun", ()=>{
    const wrapper = mount(
      <MemoryRouter initialEntries={["/toDos"]}>
        <Provider store={store}>
          <App/>
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(ToDoListS).find(Button).length).toEqual(0);

    wrapper.find(TextField).find("input").simulate("change",{target:{value:"test"}});
    wrapper.find(NewToDoS).find(Button).simulate("click");

    expect(wrapper.find(ToDoListS).find(Button).length).toEqual(1);
    wrapper.find(NewToDoS).find(Button).simulate("click");
    expect(wrapper.find(ToDoListS).find(Button).length).toEqual(0);
  });
});
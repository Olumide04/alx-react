import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header Cell" />
    );
    const colspan = wrapper.find('th[colspan="2"]');

    // Check if the colspan element exists
    expect(colspan.exists()).toBeTruthy();

    // Check the text content of the colspan element
    expect(colspan.text()).toEqual("Header Cell");
  });

  it("renders two cells when textSecondCell exists", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header Cell"
        textSecondCell="Second Header Cell"
      />
    );
    expect(wrapper.find("th").length).toEqual(2);
    expect(wrapper.find("th").at(0).text()).toEqual("Header Cell");
    expect(wrapper.find("th").at(1).text()).toEqual("Second Header Cell");
  });

  it("renders correctly two td elements within a tr element", () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Data Cell 1" textSecondCell="Data Cell 2" />
    );
    expect(wrapper.find("tr").length).toEqual(1);
    expect(wrapper.find("td").length).toEqual(2);
    expect(wrapper.find("td").at(0).text()).toEqual("Data Cell 1");
    expect(wrapper.find("td").at(1).text()).toEqual("Data Cell 2");
  });
});

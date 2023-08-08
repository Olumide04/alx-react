import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection tests", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(wrapper.find("div.bodySection").exists()).toEqual(true);
    expect(wrapper.find("div.bodySection h2").text()).toEqual("test title");
    expect(wrapper.find("div.bodySection p").text()).toEqual(
        "test children node"
    );
    });
});
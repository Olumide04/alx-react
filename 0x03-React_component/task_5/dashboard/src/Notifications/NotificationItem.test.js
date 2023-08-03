import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('renders with correct html when type and value props are provided', () => {
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        expect(wrapper.text()).toEqual('test');
        expect(wrapper.prop('data-notification-type')).toEqual('default');
    });

    it('renders with correct html when type and html props are provided', () => {
        const wrapper = shallow(<NotificationItem type='default' html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });
});

describe("onclick event behaves as it should", () => {
    it("should call console.log", () => {
      const wrapper = shallow(<NotificationItem />);
      const spy = jest.fn();
  
      wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
      wrapper.find("li").props().onClick();
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(1);
      spy.mockRestore();
    });
  });
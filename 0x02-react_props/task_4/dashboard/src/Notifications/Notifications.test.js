import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
// import NotificationItem from './NotificationItem';

describe('Notifications', () => {
    it('renders without crashing', () => {
        shallow(<Notifications displayDrawer={false} />);
    });

    it('renders the menu item correctly when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('does not render the div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('renders the menu item correctly when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('renders the div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    });
});
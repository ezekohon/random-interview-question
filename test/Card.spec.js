import { mount } from '@vue/test-utils';
import Card from '@/components/Card';

describe('Card', () => {
    it('renders question', () => {
        const text = 'text';
        const wrapper = mount(Card, {
            propsData: {
                question: text
            }
        });
        expect(wrapper.find('p').text()).toBe(text);
    })
})
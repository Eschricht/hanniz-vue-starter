import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ExampleComponent from '@/components/ExampleComponent.vue';

describe('ExampleComponent', () => {
  it('Should have message \'test\'', () => {
    const wrapper = mount(ExampleComponent, {
      props: { msg: 'test' },
    });
    expect(wrapper.find('p').text()).to.equal('test');
  });
});

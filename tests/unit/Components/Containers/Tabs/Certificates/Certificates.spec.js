import { mount } from "@vue/test-utils";
import Certificates from "@/components/containers/Tabs/Certificates/Certificates.vue";
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Buttons from "@/components/micro/Buttons/Buttons.vue"

describe("Certificates wrapper", () => {
  const wrapper = mount(Certificates);
  test("Have MyInputs component", () => {
    expect(wrapper.findComponent(MyInputs).exists()).toBe(true);
  });

  test("Have Buttons component", () => {
    expect(wrapper.findComponent(Buttons).exists()).toBe(true);
  });

  test("Have label tag", () => {
    const label = wrapper.find('label')
    expect(label.exists()).toBe(true)
  });
});

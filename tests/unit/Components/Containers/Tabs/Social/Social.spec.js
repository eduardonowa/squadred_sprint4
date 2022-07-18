import { mount } from "@vue/test-utils";
import Social from "@/components/containers/Tabs/Social/Social.vue";
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Buttons from "@/components/micro/Buttons/Buttons.vue";

describe("Social wrapper", () => {
  const wrapper = mount(Social);
  test("Have MyInputs component", () => {
    expect(wrapper.findComponent(MyInputs).exists()).toBe(true);
  });

  test("Have Buttons component", () => {
    expect(wrapper.findComponent(Buttons).exists()).toBe(true);
  });
});

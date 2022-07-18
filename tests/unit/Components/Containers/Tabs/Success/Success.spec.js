import { mount } from "@vue/test-utils";
import Success from "@/components/containers/Tabs/Success/Success.vue";
import Texts from "@/components/micro/Text/Text.vue";
import Buttons from "@/components/micro/Buttons/Buttons.vue";

describe("Success wrapper", () => {
  const wrapper = mount(Success);
  test("Have Birthday component", () => {
    expect(wrapper.findComponent(Texts).exists()).toBe(true);
  });
  test("Have p tag", () => {
    const p = wrapper.find("p");
    expect(p.exists()).toBe(true);
  });
  test("Have Buttons component", () => {
    expect(wrapper.findComponent(Buttons).exists()).toBe(true);
  });
});

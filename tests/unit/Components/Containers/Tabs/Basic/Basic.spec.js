import { mount } from "@vue/test-utils";
import Basic from "@/components/containers/Tabs/Basic/Basic.vue";
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Birthday from "@/components/containers/Birthday/Birthday.vue"
import Checkbox from "@/components/Checkbox/Checkbox.vue"
import Buttons from "@/components/micro/Buttons/Buttons.vue"

describe("Basic wrapper", () => {
  const wrapper = mount(Basic);
  test("Have MyInputs component", () => {
    expect(wrapper.findComponent(MyInputs).exists()).toBe(true);
  });

  test("Have Birthday component", () => {
    expect(wrapper.findComponent(Birthday).exists()).toBe(true);
  });

  test("Have Checkbox component", () => {
    expect(wrapper.findComponent(Checkbox).exists()).toBe(true);
  });

  test("Have Buttons component", () => {
    expect(wrapper.findComponent(Buttons).exists()).toBe(true);
  });
});

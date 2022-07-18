import { shallowMount } from "@vue/test-utils";
import Text from "@/components/micro/Text/Text.vue";

describe("Text wrapper", () => {
  test("Have p tag", () => {
    const wrapper = shallowMount(Text);
    const p = wrapper.find("p");

    expect(p.exists()).toBe(true);
  });
});

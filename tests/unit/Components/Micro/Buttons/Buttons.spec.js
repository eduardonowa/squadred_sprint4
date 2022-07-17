import { shallowMount } from "@vue/test-utils";
import Buttons from "@/components/micro/Buttons/Buttons.vue";

describe("Description wrapper", () => {
  test("Have button tag", () => {
    const wrapper = shallowMount(Buttons);
    expect(wrapper.exists()).toBe(true);
  });
});

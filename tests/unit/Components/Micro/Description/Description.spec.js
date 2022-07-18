import { shallowMount } from "@vue/test-utils";
import Description from "@/components/micro/Description/Description.vue";

describe("Description wrapper", () => {
  test("Have h3 tag", () => {
    const wrapper = shallowMount(Description);
    const h3 = wrapper.find("h3");
    expect(h3.exists()).toBe(true);
  });
});

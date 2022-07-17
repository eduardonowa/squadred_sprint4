import { mount } from "@vue/test-utils";
import Header from "@/components/containers/Header/Header.vue";
import Description from "@/components/micro/Description/Description.vue";
import Title from "@/components/micro/Title/Title.vue";

//same test for basic, social, certificates and success
describe("Header wrapper", () => {
  const wrapper = mount(Header, {
    mocks: {
      $store: {
        state: { actualTab: "basic" },
      },
    },
  });
  test("Have Description component", () => {
    expect(wrapper.findComponent(Description).exists()).toBe(true);
  });

  test("Have Title component", () => {
    expect(wrapper.findComponent(Title).exists()).toBe(true);
  });
});

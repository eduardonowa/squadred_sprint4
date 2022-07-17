import { mount } from "@vue/test-utils";
import Tabs from "@/components/containers/Tabs/Tabs.vue";
import Basic from "@/components/containers/Tabs/Basic/Basic.vue";
import Social from "@/components/containers/Tabs/Social/Social.vue";
import Certificates from "@/components/containers/Tabs/Certificates/Certificates.vue";
import Success from "@/components/containers/Tabs/Success/Success.vue";

describe("Tabs wrapper", () => {
  test("Have Basic component", () => {
    const wrapper = mount(Tabs, {
      mocks: {
        $store: {
          state: { actualTab: "basic" },
        },
      },
    });
    expect(wrapper.findComponent(Basic).exists()).toBe(true);
  });

  test("Have Social component", () => {
    const wrapper = mount(Tabs, {
      mocks: {
        $store: {
          state: { actualTab: "social" },
        },
      },
    });
    expect(wrapper.findComponent(Social).exists()).toBe(true);
  });

  test("Have Certificates component", () => {
    const wrapper = mount(Tabs, {
      mocks: {
        $store: {
          state: { actualTab: "certificates" },
        },
      },
    });
    expect(wrapper.findComponent(Certificates).exists()).toBe(true);
  });

  test("Have Success component", () => {
    const wrapper = mount(Tabs, {
      mocks: {
        $store: {
          state: { actualTab: "success" },
        },
      },
    });
    expect(wrapper.findComponent(Success).exists()).toBe(true);
    // checking if the h2 tag dissappear on success tab
    expect(wrapper.find("h2").exists()).toBe(false);
  });
});

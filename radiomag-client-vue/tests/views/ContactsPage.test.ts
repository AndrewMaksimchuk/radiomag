import { describe, it, expect } from "vitest";
import { shallowMount, MountingOptions, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { isComponentRender } from "tests/isComponentRender";
import { useContacts } from "@/store/contacts";
import Contacts from "@/views/ContactsPage.vue";
import ContactSection from "@/components/ContactSectionComponent.vue";
import contacts from "../../../radiomag-server-express/src/database/seeds/data/contacts.json";

config.global.config.warnHandler = () => {
  return null;
};

const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  return shallowMount(Contacts, options);
};

const wrapper = buildWrapper({
  global: {
    plugins: [createTestingPinia()],
    stubs: { ContactSection: true },
  },
});

const store = useContacts();
store.contacts = contacts.map((data) => {
  return data.data;
});

describe("Contacts page", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  isComponentRender(wrapper, ContactSection, "ContactSection");
});

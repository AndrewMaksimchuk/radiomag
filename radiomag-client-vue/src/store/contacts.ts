import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { GET } from "@/httpClient";

export const useContacts = defineStore("contacts", () => {
  const contacts = ref();

  const salesDepartment = computed(() => ({
    headerText: contacts.value?.at(0).headerText,
    ...contacts.value?.at(0).list.at(0),
  }));

  const shops = computed(() => contacts.value?.at(1).list);

  const load = async () => {
    if (contacts.value) return contacts.value;

    const [error, data] = await GET.contacts();
    if (error) console.debug(error);
    return (contacts.value = data);
  };

  return { contacts, shops, salesDepartment, load };
});

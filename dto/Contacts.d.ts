type ContactItemList = {
    name: string,
    location: string,
    email: string,
    workTime: string,
    telephons: string,
};

interface ContactItem {
    headerText: string,
    list: ContactItemList[],
}

type Contacts = ContactItem[];

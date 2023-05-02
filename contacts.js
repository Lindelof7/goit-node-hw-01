const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contact = contacts.find(item => item.id === contactId);
    return contact;
}

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        name: name,
        email: email,
        phone: phone
    };

    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(books, null, 2))

    return newContact;
}

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId);
    const deleteContact = contacts.splice(index, 1)

    await fs.writeFile(contactsPath, JSON.stringify(books, null, 2))

    return deleteContact;
}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
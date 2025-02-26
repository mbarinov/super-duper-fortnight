export type ContactType = {
  id: string;
  name: string;
  description: string;
  image: string;
  isActive: boolean;
};

const MOCK_CONTACTS: ContactType[] = [
  {
    id: "1",
    name: "Elon Musk",
    description: "CEO",
    image: "/user-avatar.png",
    isActive: true,
  },
  {
    id: "2",
    name: "Vlad Tenev",
    description: "Designer",
    image: "/user-avatar.png",
    isActive: false,
  },
  {
    id: "3",
    name: "Nikola Tesla",
    description: "Engineer",
    image: "/user-avatar.png",
    isActive: false,
  },
  {
    id: "4",
    name: "Max Barinov",
    description: "Engineer",
    image: "/user-avatar.png",
    isActive: false,
  },
];

export const fetchContacts = async (): Promise<ContactType[]> => {
  const delay = Math.floor(Math.random() * 500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return [...MOCK_CONTACTS];
};

export const sendMoney = async (): Promise<{ success: boolean }> => {
  const delay = Math.floor(Math.random() * 500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return { success: true };
};

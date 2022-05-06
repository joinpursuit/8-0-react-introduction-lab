import ContactUserCard from "./ContactUserCard";

const Contacts = () => {
  return (
    <aside className="border">
      <h3 className="center-text">Contacts</h3>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </aside>
  );
};
export default Contacts;

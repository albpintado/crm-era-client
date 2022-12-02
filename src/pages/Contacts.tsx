import axios from "axios";
import ContactList from "components/Contact/ContactList";
import { ContactModel } from "components/Contact/ContactModel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllByDate } from "utils/contacts.service";
import getCookie from "utils/utils";

const HomePage = (): JSX.Element => {
  const [todayContacts, setTodayContacts] = useState<ContactModel[]>(
    new Array()
  );
  const [selectedContact, setSelectedContact] = useState<ContactModel>();

  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie() == "") navigate("/login");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const filterDate = new Date().toISOString().split("T")[0];
      const data = await getAllByDate(filterDate);
      setTodayContacts(data);
    };
    fetchData();
  }, []);

  return todayContacts.length > 0 ? (
    <>
      <section className="content-grid">
        <div className="main-area-2">
          <ContactList
            contacts={todayContacts}
            setSelectedContact={setSelectedContact}
          />
        </div>
        <div className="second-area-2">
          {selectedContact != null ? (
            <div className="contact-update-container">
              <section className="contact-update-container_update-form">
                <h3>Update contact</h3>
                <p>{selectedContact.name}</p>
                <p>{selectedContact.date}</p>
                <p>{selectedContact.details}</p>
                <p>{selectedContact.method}</p>
                <label htmlFor="is-customer">
                  Is customer?
                  <input
                    type="checkbox"
                    onClick={() =>
                      setSelectedContact({
                        ...selectedContact,
                        opportunity: {
                          ...selectedContact.opportunity,
                          isCustomer: !selectedContact.opportunity.isCustomer,
                        },
                      })
                    }
                  />
                </label>
              </section>
              <section className="contact-update-container_opportunity">
                <h3>{"Contact with " + selectedContact.opportunity.name}</h3>
                <p>{selectedContact.opportunity.email}</p>
                <p>{selectedContact.opportunity.phone}</p>
                <p>
                  {selectedContact.opportunity.isCustomer
                    ? "Customer"
                    : "Opportunity"}
                </p>
              </section>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default HomePage;

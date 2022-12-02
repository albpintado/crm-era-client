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
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie() == "") {
      navigate("/login");
    } else {
      navigate("/contacts");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const filterDate = new Date().toISOString().split("T")[0];
      const data = await getAllByDate(filterDate);
      setTodayContacts(data);
    };
    fetchData();
  }, []);

  return <></>;
};

export default HomePage;

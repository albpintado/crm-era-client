import axios from "axios";
import { ContactModel } from "components/Contact/ContactModel";
import getCookie from "./utils";

const getAllByDate = async (filterDate: String): Promise<ContactModel[]> => {
  const request = await axios({
    method: "get",
    url: "http://localhost:8080/api/contacts/date?is=" + filterDate,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie(),
    },
  });

  return request.data;
};

export { getAllByDate };

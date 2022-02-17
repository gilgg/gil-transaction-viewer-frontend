import axios from "axios";

const getCoordsFromApi = async (selectedTransaction, setCoords) => {
  const coordsFromApi = (
    await axios.post(`${process.env.REACT_APP_API_URL}/customers/coords`, {
      city: selectedTransaction.customer.city,
      country: selectedTransaction.customer.country,
    })
  ).data;
  setCoords(coordsFromApi);
};

const getResultsByLimitAndPage = (arr, limit, page) => {
  const startIndex = limit * (page - 1);
  const endIndex = limit * page;
  const res = arr.slice(startIndex, endIndex);
  return res;
};

const getResultsByFilter = (arr, filterBy, query) => {
  const filteredArr = arr.filter((transaction) => {
    if (
      filterBy === "currency" ||
      filterBy === "credit_card_type" ||
      filterBy === "credit_card_number"
    ) {
      return transaction[filterBy].toLowerCase().includes(query.toLowerCase());
    } else {
      return transaction.customer[filterBy]
        .toLowerCase()
        .includes(query.toLowerCase());
    }
  });

  return filteredArr;
};

const getDefaultValues = (addOrEdit, transaction, field) => {
  if (addOrEdit === "edit") {
    if (
      field === "total_price" ||
      field === "currency" ||
      field === "credit_card_type" ||
      field === "credit_card_number"
    )
      return transaction[field];
    else {
      return transaction.customer[field];
    }
  } else {
    return "";
  }
};

const getGenderOptions = (addOrEdit, gender) => {
  if (addOrEdit === "edit" && gender === "male") {
    return (
      <>
        <option value="Gender" disabled>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </>
    );
  } else if (addOrEdit === "edit" && gender === "female") {
    return (
      <>
        <option value="Gender" disabled>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </>
    );
  } else {
    return (
      <>
        <option value="Gender" disabled>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </>
    );
  }
};

const sortArray = (arr, field, sortType) => {
  let updatedField = field.toLowerCase().replaceAll(" ", "_");
  if (field === "Customer Id") {
    updatedField = "_id";
  }

  const getItem = (item) => {
    if (
      updatedField === "total_price" ||
      updatedField === "currency" ||
      updatedField === "credit_card_type" ||
      updatedField === "credit_card_number"
    ) {
      return item[updatedField];
    } else {
      return item.customer[updatedField];
    }
  };

  if (sortType === 1) {
    return arr.sort((a, b) => {
      if (getItem(a) > getItem(b)) {
        return 1;
      }
      if (getItem(b) > getItem(a)) {
        return -1;
      }
      return 0;
    });
  } else {
    return arr.sort((a, b) => {
      if (getItem(a) > getItem(b)) {
        return -1;
      }
      if (getItem(b) > getItem(a)) {
        return 1;
      }
      return 0;
    });
  }
};

const toTitleCase = (str) => {
  const words = str.split(" ");
  const newWords = words.map((word) =>
    word[0].toUpperCase().concat(word.slice(1))
  );
  return newWords.join(" ");
};

export {
  getCoordsFromApi,
  getResultsByLimitAndPage,
  getResultsByFilter,
  getDefaultValues,
  getGenderOptions,
  sortArray,
  toTitleCase,
};

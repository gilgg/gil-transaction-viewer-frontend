/////////////// HeaderDashboard
export const resultsOnChangeHandler = (dispatch, resultsRef) => {
  const limit = resultsRef.current.value;
  dispatch({ type: "CHANGE_LIMIT", limit });
};

export const showAllHandler = (e, dispatch) => {
  e.preventDefault();
  dispatch({ type: "SHOW_ALL" });
};

export const showMapHandler = (e, setShowMap) => {
  e.preventDefault();
  setShowMap((prevState) => !prevState);
};

export const onAddEditHandler = (e, addOrEdit, setEdit, setAdd) => {
  e.preventDefault();

  if (addOrEdit === "edit") {
    setEdit((prevState) => !prevState);
    setAdd(false);
  } else {
    setAdd((prevState) => !prevState);
    setEdit(false);
  }
};
///////////////

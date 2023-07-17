import React from "react";

export const SnackbarContext = React.createContext();
function SnackbarProvider({ children }) {
  const [snackbarList, setSnackbarList] = React.useState([]);
  function addSnackbar(variant, message) {
    if (message.length > 0) {
      const newSnackbarList = [...snackbarList];
      newSnackbarList.push({
        id: crypto.randomUUID(),
        variant: variant,
        message: message,
      });
      setSnackbarList(newSnackbarList);
    }
  }
  function removeSnackbar(id) {
    const newSnackbarList = [...snackbarList];
    const updatedSnackbarList = newSnackbarList.filter(
      (item) => item.id !== id
    );
    setSnackbarList(updatedSnackbarList);
  }
  return (
    <SnackbarContext.Provider
      value={{ snackbarList, addSnackbar, removeSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}

export default SnackbarProvider;

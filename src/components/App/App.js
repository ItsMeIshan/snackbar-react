import SnackbarPreview from "../SnackbarPreview/SnackbarPreview";
import SnackbarProvider from "../SnackbarProvider/SnackbarProvider";

function App() {
  return (
    <>
      <SnackbarProvider>
        <SnackbarPreview />
      </SnackbarProvider>
    </>
  );
}

export default App;

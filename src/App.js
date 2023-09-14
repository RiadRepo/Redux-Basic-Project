import "./App.css";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";

function App() {
  return (
    <>
      <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Flight Booking</title>
        <link rel='stylesheet' href='./styles.css' />
        <link rel='icon' type='image/x-icon' href='./img/favicon.png' />
      </head>
      <Header />
      <BookingForm />
    </>
  );
}

export default App;

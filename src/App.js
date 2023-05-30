import ExpenceItem from "./components/ExpenceItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenceItem ExpenceDate= "March 27th 2021" expenceTitle="Car Insurance" ExpenceAmount={234.45} />
      <ExpenceItem ExpenceDate= "Dec 16th 2020" expenceTitle="Home Insurance" ExpenceAmount={120567} />
      <ExpenceItem ExpenceDate= "Jun 12th 2022" expenceTitle="Health Insurance" ExpenceAmount={345.67} />
      <ExpenceItem ExpenceDate= "Frb 6th 2022" expenceTitle="Car Insurance" ExpenceAmount={678.78} />

    </div>
  );
}

export default App;

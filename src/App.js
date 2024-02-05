import WelcomeMessage from "./components/welcome";
import StudentInfo from "./components/studentinfo";
function App() {
  return (
    <div className="App">
      <div className="container mt-3" >
        <WelcomeMessage name="Student" />
        <StudentInfo RollNo = "2211CS010504" Name="Sathwika" MobileNo = "9535598122" />
      </div>
    </div>
  );
}
export default App;
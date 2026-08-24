import Student from "./components/student.jsx";
import Subject from "./components/subject.jsx";

function App() {
 return (
   <div>
     <Student name="Aliza Jane" age={20} course="Information Technology" section="BSIT 3-1" studentnumber="202403260" />
     <Subject subjectname="Application app development" subjectcode="DCIT26" />
   </div>
 );
}
export default App; 
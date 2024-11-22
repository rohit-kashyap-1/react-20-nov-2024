import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Employee from './components/Employee';

import img1 from './images/empp.jpg'
import img2 from './images/emp2.jpg'
import img3 from './images/emp3.jpg'
//mount
//unmount
//update
/* 
<Message msg="Hii"  />
    <Message msg="How are you"  />
    <Message msg="Testing"  />
*/

function App() {
  return (
    <>
    <div style={{ display:'flex',gap:'14px' }}>
    <Employee name="Rohit sharma" designation="Front-end Developer" image={img1} />
    <Employee name="Khushi Sharma" designation="Backend Developer" image={img2} />
    <Employee name="paviter Sharma" designation="Digital Marketing" image={img3} />
    </div>
    </>
  )
}

export default App;

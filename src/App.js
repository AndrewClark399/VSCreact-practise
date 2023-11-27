import Trainer from "./components/Trainer"
import Trainee from "./components/Trainee"
import DateExpiry from "./components/DateExpiry"

function App() {
  return (
    <div>
      <header>
        
        <h1>Our Training Courses</h1> 
      </header>

      <Trainer />
      <Trainee />
	
    
	
        <table>
          <caption>A sample of our courses</caption>
        <thead>
          <tr>
            <th>Course Provider</th>
            <th>Course Subject</th>
            <th>Course Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AWS Technical Essentials</td>
            <td>Technical IT</td>
            <td>1 day</td>
            <td>£495</td>
          </tr>  
          <tr>
            <td>Configuring and Deploying a Private Cloud</td>
            <td>Technical IT</td>
            <td>5 days</td>
            <td>£2066</td>
          </tr>
          <tr>
            <td>PRINCE2 Foundation</td>
            <td>Project Management</td>
            <td>2 days</td>
            <td>£898</td>
          </tr>  
          <tr>
            <td>Brilliant Virtual Delivery</td>
            <td>Leadership & Management</td>
            <td>2 days</td>
            <td>£1362</td>
          </tr>  
	
        </tbody>
        </table>
        <footer>All prices are inclusive of VAT.

        </footer>

        <form>
        <fieldset>            
            <legend>Your Details</legend>
            <ul>
                <li>
                <label>First Name:</label><input type="text" autofocus/>
                </li>
                <li>
                <label>Surname:</label><input type="text"/>
                </li>
                <li>
                <label>Position/Role:</label><input type="text"/>
                </li>
                <li>
                <label>Email:</label><input type="email" id="email" placeholder="you@domain.com" required/>
                </li>
                <li>
                <label>Phone:</label><input type="tel" id="tel" placeholder="+447500000000"/>
                </li>
            </ul>
                
        </fieldset>
        <br/>
        <fieldset>
            
            <legend>Course Details:</legend>
            <ul>
            <li>
            <label for="Select Course">Select Course</label>
            <select name="Select Course" id="Select course">
            <option value=""></option>
            <option value="">Programming with JavaScript</option>
            <option value="">Developing Web Applications using HTML5</option>
            <option value="">Developing Responsive Websites</option>
            <option value="">Leveraging the Power of jQuery</option>
        </select>
          </li>
          <li>
        <label>Number of delegates:</label><input type="number"></input>
        </li>
        <li>
        <label>Date:</label><input type="date" id="date"></input>
        <DateExpiry />
        </li>
            </ul>
        </fieldset>
        <br/>
        <fieldset>
            <button>Submit</button>
        </fieldset>

    

      </form>
      <section>
        <h2>Ex 1.</h2>
        <input id="counter1" type="number" value="0" readonly/>
        <button onclick="ex1Add1()">+1</button>
    </section>
    <section>
        <h2>Ex 2.</h2>
        <input id="counter" type="number" value="0" readonly/>
        <br/>
        <button onclick="changeCount(-5)">-5</button>
        <button onclick="changeCount(-1)">-1</button>
        <button onclick="changeCount('R')">Reset</button>
        <button onclick="changeCount(+1)">+1</button>
        <button onclick="changeCount(+5)">+5</button>
    </section>
   
	
    
	
    
    </div>
  );
}

function changeCount(change) {

  if (change === 'R')
      "counter".value = 0;
  
  else
      "counter".value = +"counter".value + change;
}

export default App;

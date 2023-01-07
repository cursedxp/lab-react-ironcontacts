import "./App.css";
import { useState } from "react";
import allContacts from "./contacts.json";

function App() {
  //First 5 element of an array
  const firstFive = allContacts.slice(0, 5);
  //
  const [contacts, setContact] = useState(firstFive);

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} width={50}></img>
                </td>
                <td>{contact.name}</td>
                <td>{(Math.ceil(contact.popularity) / 2).toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

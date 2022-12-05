import Table from "react-bootstrap/Table";
import "./table.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";

const BasicExample = () => {
  function sortListDir() {
    var list,
      i,
      switching,
      b,
      shouldSwitch,
      dir,
      switchcount = 0;
    list = document.getElementById("id01");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("TD");
      for (i = 0; i < b.length - 1; i++) {
        shouldSwitch = false;
        if (dir === "asc") {
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  //

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>
            <button className="sortbutton" onClick={sortListDir}>
              First Name
            </button>
          </th>
          <th>
            <button id="id01" className="sortbutton" onClick={sortListDir}>
              Last Name
            </button>
          </th>
          <th>
            <button id="id01" className="sortbutton" onClick={sortListDir}>
              User Name
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr id="id01">
          <td>1</td>
          <td id="id01">Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr id="id01">
          <td>2</td>
          <td id="id01">Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr id="id01">
          <td>3</td>
          <td id="id01">Larry</td>
          <td>Johnson</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BasicExample;

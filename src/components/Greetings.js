import React from 'react';

function Greetings() {
  return (
    <div className="container">
      <span className="border tl" />
      <span className="border tr" />
      <span className="border bl" />
      <span className="border br" />
      <h1 className="display-5">Greetings</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Greeting</th>
            <th scope="col">Language</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Greetings;

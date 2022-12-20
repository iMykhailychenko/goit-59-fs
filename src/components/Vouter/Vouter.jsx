import { Component } from 'react';

export class Vouter extends Component {
  render() {
    return (
      <ul className="list-group list-group-numbered w-100 my-5">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="ms-2 w-50">
            <p className="m-0">iPhone</p>
          </div>
          <button type="button" className="btn btn-outline-secondary" style={{ minWidth: 150 }}>
            Vote
          </button>
          <span className="badge bg-primary rounded-pill">0</span>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="ms-2 w-50">
            <p className="m-0">Samsung</p>
          </div>
          <button type="button" className="btn btn-outline-secondary" style={{ minWidth: 150 }}>
            Vote
          </button>
          <span className="badge bg-primary rounded-pill">0</span>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="ms-2 w-50">
            <p className="m-0">Nokia</p>
          </div>
          <button type="button" className="btn btn-outline-secondary" style={{ minWidth: 150 }}>
            Vote
          </button>
          <span className="badge bg-primary rounded-pill">0</span>
        </li>
      </ul>
    );
  }
}

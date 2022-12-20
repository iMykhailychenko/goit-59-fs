import { Component } from 'react';

const phoneMap = [
  { id: 'iphone', title: 'iPhone' },
  { id: 'samsung', title: 'Samsung' },
  { id: 'nokia', title: 'Nokia' },
];

export class Vouter extends Component {
  state = {
    iphone: 0,
    samsung: 0,
    nokia: 0,
  };

  handleClick = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));

    // switch (name) {
    //   case 'iphone':
    //     this.setState(prevState => ({
    //       iphone: prevState.iphone + 1,
    //     }));
    //     break;

    //   default:
    //     return;
    // }

    // if (name === 'iphone') {
    //   this.setState(prevState => ({
    //     iphone: prevState.iphone + 1,
    //   }));
    // }
  };

  render() {
    return (
      <ul className="list-group list-group-numbered w-100 my-5">
        {phoneMap.map(phone => (
          <li key={phone.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="ms-2 w-50">
              <p className="m-0">{phone.title}</p>
            </div>

            <button
              name={phone.id}
              type="button"
              onClick={this.handleClick}
              className="btn btn-outline-secondary"
              style={{ minWidth: 150 }}
            >
              Vote
            </button>

            <span className="badge bg-primary rounded-pill">{this.state[phone.id]}</span>
          </li>
        ))}
      </ul>
    );
  }
}

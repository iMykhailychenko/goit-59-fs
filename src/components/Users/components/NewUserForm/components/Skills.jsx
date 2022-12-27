import { Component } from 'react';

const skillsMap = [
  { id: 'react', title: 'React' },
  { id: 'vue', title: 'Vue' },
  { id: 'angular', title: 'Angular' },
];

const defaultValue = {
  react: false,
  vue: false,
  angular: false,
};

export class Skills extends Component {
  state = defaultValue;

  hadleChange = event => {
    this.setState({ ...defaultValue, [event.target.value]: true });
  };

  // hadleChange2 = event => {
  //   this.setState(prevState => {
  //     const oldKey = Object.keys(prevState).find(key => prevState[key]);

  //     if (oldKey) {
  //       return { oldKey: false, [event.target.value]: true };
  //     }

  //     return { [event.target.value]: true };
  //   });
  // };

  render() {
    return (
      <fieldset className="mt-3">
        <legend className="h6">Skills:</legend>

        <div className="d-flex">
          {skillsMap.map(skill => (
            <div key={skill.id} className="form-check me-5">
              <label className="form-check-label">
                <span>{skill.title}</span>
                <input
                  type="radio"
                  name="skills"
                  value={skill.id}
                  checked={this.state[skill.id]}
                  onChange={this.hadleChange}
                  className="form-check-input"
                />
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    );
  }
}

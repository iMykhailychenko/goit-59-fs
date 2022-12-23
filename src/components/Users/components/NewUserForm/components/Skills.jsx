import { Component } from 'react';

const skillsMap = [
  { id: 'react', title: 'React' },
  { id: 'vue', title: 'Vue' },
  { id: 'angular', title: 'Angular' },
];

export class Skills extends Component {
  render() {
    return (
      <fieldset className="mt-3">
        <legend className="h6">Skills:</legend>

        <div className="d-flex">
          {skillsMap.map(skill => (
            <div key={skill.id} className="form-check me-5">
              <label className="form-check-label">
                <span>{skill.title}</span>
                <input type="radio" className="form-check-input" />
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    );
  }
}

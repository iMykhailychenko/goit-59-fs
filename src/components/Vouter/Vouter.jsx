import { useState } from 'react';

const phoneList = [
  { id: 'iphone', title: 'iPhone' },
  { id: 'android', title: 'Android' },
  { id: 'nokia', title: 'Nokia' },
];

export const Vouter = () => {
  const [phones, setPhones] = useState({
    iphone: 0,
    android: 0,
    nokia: 0,
  });

  const handleChange = event => {
    const { name } = event.target;
    setPhones(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  return (
    <>
      {phoneList.map(element => (
        <p key={element.id}>{phones[element.id]}</p>
      ))}

      {phoneList.map(element => (
        <button
          key={element.id}
          name={element.id}
          onClick={handleChange}
          className="btn btn-primary"
          type="button"
        >
          {element.title}
        </button>
      ))}
    </>
  );
};

import React, { useEffect, useState } from 'react';

// Mouse hover letter index (like medium.com)
// Autosave features with timeout
// Frequency analyzer

const abcd = String.fromCharCode(...Array(123).keys()).slice(97);

const Home: React.FC = () => {
  const [form, setForm] = useState<{
    input: string;
    replaces: { [key: string]: string };
  }>({
    input: '',
    replaces: {},
  });

  const handleInput = (e: any) =>
    setForm((state) => ({ ...state, input: e.target.value }));

  const handleItem = (e: any) => {
    if (!e.target.value.match(/^[0-9]+$/)) {
      setForm((state) => ({
        ...state,
        replaces: {
          ...state.replaces,
          [e.target.name]: e.target.value.toLowerCase(),
        },
      }));
    }
  };

  const handleSave = () => {
    Object.entries(form.replaces).forEach(([key, val]) => {
      if (!val) {
        delete form.replaces[key];
      }
    });
    const data = JSON.stringify(form);
    localStorage.setItem('saved_data', data);
    alert('Data saved');
  };

  const handleRemoveSpace = () => {
    if (!form.input.trim().length) return;
    setForm((state) => ({ ...state, input: state.input.replace(/ /g, '') }));
  };

  const handleDeleteItems = () => {
    setForm((state) => ({ ...state, replaces: {} }));
  };

  const filteredOutput = () => {
    if (!form.input.trim().length) return '';

    let res = form.input.toLocaleLowerCase();

    Object.keys(form.replaces).forEach((i) => {
      if (form.replaces[i] && form.replaces[i] !== '-') {
        res = res.replaceAll(form.replaces[i], i.toUpperCase());
      }
    });

    [...abcd].forEach((i) => {
      res = res.replaceAll(i, '-');
    });

    return res.toUpperCase();
  };

  useEffect(() => {
    const loadData = () => {
      const data = localStorage.getItem('saved_data');
      if (data) {
        setForm(JSON.parse(data));
      }
    };
    loadData();
  }, []);

  return (
    <div className="p-10">
      <div className="py-5 sticky top-0 bg-white z-10 flex space-x-3">
        <button
          onClick={handleSave}
          className="text-sm border-2 border-black py-1 px-4"
        >
          Save
        </button>
        <button
          onClick={handleRemoveSpace}
          className="text-sm border-2 border-black py-1 px-4"
        >
          Remove space
        </button>
      </div>
      <div>
        <textarea
          disabled
          value="NEW KINDS OF CRYPTOGRAPHIC SYSTEMS ARE EMERGING THAT HAVE INCREDIBLE PROPERTIES WHICH APPEARS TO ELIMINATE COMPLETELY SOME PROBLEMS THAT HAVE PLAGUED CRYPTOGRAPHY USERS FOR CENTURIES"
          className="border-2 w-full p-3"
          rows={4}
        />
      </div>
      <div>
        <h2>Output(normal text)</h2>
        <textarea
          disabled
          value={filteredOutput()}
          className="border-2 w-full p-3"
          rows={4}
        />
      </div>
      <div className="flex items-center mb-5">
        <ul className="flex overflow-x-auto">
          {[...abcd].map((i) => (
            <li key={i} className="flex flex-col items-center text-center">
              <span className="w-10">{i}</span>
              <input
                name={i}
                value={form.replaces[i] || ''}
                onChange={handleItem}
                className="border-2 w-10 px-2 text-center"
                maxLength={1}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={handleDeleteItems}
          className="mt-auto ml-5 text-sm border-2 border-black py-1 px-4"
        >
          Delete all
        </button>
      </div>
      <div>
        <h2>Input(cipher text)</h2>
        <textarea
          onChange={handleInput}
          value={form.input}
          className="border-2 w-full p-3"
          rows={4}
        />
      </div>
    </div>
  );
};

export default Home;

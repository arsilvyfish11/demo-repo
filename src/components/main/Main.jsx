import React, { useState } from 'react';

const Main = (props) => {
  const [description, setDescription] = useState('');
  const [annotations, setAnnotations] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    props.handleChangeDes(e.target.value);
  };

  const handleAnnotationsChange = (e) => {
    setAnnotations(e.target.value);
    props.handleChangeAnn(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleClick();
    setDescription('');
    setAnnotations('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Description"
          required
        />
        <input
          type="text"
          value={annotations}
          onChange={handleAnnotationsChange}
          className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Annotations"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <button
          type="submit"
          className="flex-1 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add Page
        </button>
        <button
          type="button"
          onClick={() => {
            setDescription('');
            setAnnotations('');
            props.handleRestart();
          }}
          className="flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Restart
        </button>
      </div>
    </form>
  );
};

export default Main;

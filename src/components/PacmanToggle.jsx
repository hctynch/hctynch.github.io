import { useState } from 'react';
import { ImPacman } from 'react-icons/im';

export default function PacmanToggle({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    if (onChange) onChange(!isChecked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="sr-only peer"
      />
      <div className="relative w-12 h-6 bg-gray-600 rounded-full peer-checked:bg-emerald-400">
        <ImPacman
          className={`absolute top-[2px] left-[2px] h-5 w-5 text-white transition-transform ${
            isChecked ? 'translate-x-6' : ''
          }`}
        />
      </div>
    </label>
  );
}

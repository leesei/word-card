import { useCallback } from "react";
import wordset from "../wordset";

export default function Settings({ settings, updateSettings }) {
  const handleShuffleChange = useCallback(
    (event) => {
      updateSettings({ ...settings, shuffle: event.target.checked });
    },
    [settings, updateSettings]
  );
  const handleWordSetChange = useCallback(
    (event) => {
      updateSettings({ ...settings, wordset: event.target.value });
    },
    [settings, updateSettings]
  );

  return (
    <div className="content ">
      <h4>Settings</h4>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={settings.shuffle}
              onChange={handleShuffleChange}
            />
            Shuffle
          </label>
        </div>

        <div className="field">
          <div className="control" onChange={handleWordSetChange}>
            {Object.keys(wordset).map((key) => (
              <label className="radio" key={key}>
                <input
                  type="radio"
                  name="wordset"
                  value={key}
                  checked={settings.wordset === key}
                />
                {key}
              </label>
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          input {
            margin-right: 0.2rem;
          }
        `}
      </style>
    </div>
  );
}

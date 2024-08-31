import { useState } from "react";
import CitraButton from "./core/button/button.citra";

function App() {
  const [smallButton, setSmallButton] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1>Button</h1>
      <p>Click Primary Button untuk toggle small</p>
      <p>Click Secondary untuk toggle disable</p>
      <CitraButton
        small={smallButton}
        disabled={disableButton}
        title="Primary"
        variant="primary"
        starticon="search"
        onClick={() => setSmallButton(!smallButton)}
      />
      <CitraButton
        small={smallButton}
        disabled={disableButton}
        title="Secondary"
        variant="secondary"
        endicon="search"
        onClick={() => setDisableButton(!disableButton)}
      />
      <CitraButton
        small={smallButton}
        disabled={disableButton}
        title="Warning"
        variant="warning"
        starticon="search"
        endicon="search"
      />
      <CitraButton
        disabled={disableButton}
        small={smallButton}
        title="Tertiary"
        variant="tertiary"
      />
      <CitraButton
        small={smallButton}
        disabled={disableButton}
        title=""
        variant="icon"
        starticon="search"
      />
      <CitraButton
        small={smallButton}
        disabled={disableButton}
        title="Danger"
        variant="danger"
        loadingbutton
        showloading={loading}
        isblock
        onClick={() => setLoading(!loading)}
      />
      <CitraButton
        title="Inline Link BUtton"
        variant="inline-link"
      />
      <CitraButton
        title="Link"
        variant="link"
      />
      <p>Text yang terdapat inline link buttin <CitraButton title="Link" variant="inline-link" /></p>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { MEUFORMATOFSMWIDGET } from "@meuformato/fsm";

function App() {
  useEffect(() => {
    MEUFORMATOFSMWIDGET.start("<your_key_here>", {
      showInstructions: true,
      showBoxes: true,
      shouldOpenAnotherPage: true,
      destination: ".plugin",
      debug: true,
      buttonText: "Meu Formato",
      onError: function (errorLabel, err) {
        switch (errorLabel) {
          case "CAMERA_ACCESS_ERROR":
            console.log("Error:", err);
            break;
          case "FACE_ANALYSIS_ERROR":
            console.log("Error:", err);
            break;
          case "API_VALIDATION_ERROR":
            console.log("Error:", err);
            break;
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>ReactViteIntegrationDemo</h1>
      <div className="plugin"></div>
      <h1>ReactViteIntegrationDemo</h1>
    </div>
  );
}

export default App;

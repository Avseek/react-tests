import './App.css';

function App() {
  return (
    <>
      <div class="container">
        <div class="label">Label 1 (number):&nbsp;</div>
        <div class="break"></div>
        <div class="inputContainer"><input type="text" inputmode="numeric"></input></div>
        <div class="break"></div>

        <div class="label">Label 2:&nbsp;</div>
        <div class="break"></div>
        <div class="inputContainer"><input type="text"></input></div>
        <div class="break"></div>

        <div class="label">Label 3:&nbsp;</div>
        <div class="break"></div>
        <div class="inputContainer"><input type="text"></input></div>
        <div class="break"></div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div class="label">Label 4 (number):&nbsp;</div>
        <div class="break"></div>
        <div class="inputContainer"><input type="number"  inputmode="numeric"></input></div>
        <div class="break"></div>

        <div class="label">Label 5:&nbsp;</div>
        <div class="break"></div>
        <div class="inputContainer"><input type="text"></input></div>
      </div>
    </>
  )
}

export default App;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['white']};
  }


  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, label {
    font: 400 1rem Roboto, sans-serif;
  }
  

  .sr-only {
	border: 0;
	clip: rect(1px, 1px, 1px, 1px); 
	-webkit-clip-path: inset(50%);
		clip-path: inset(50%);  
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	white-space: nowrap;           
}
`;

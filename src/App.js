import React from 'react';
import * as qz from 'qz-tray';
import { sha256 } from 'js-sha256';


class App extends React.Component {
  constructor(props) {
    super(props);
    qz.api.setSha256Type(data => sha256(data));
    qz.api.setPromiseType(resolver => new Promise(resolver));
  }

  componentDidMount() {
    // Examplo usando React
    // Por padrão não é possível usar mais de um array para imprimir,
    // a função recebe apenas um array com todos os dados necessários para
    // fazer uma impressão.
    qz.websocket.connect()
      .then(qz.printers.getDefault)
      .then(printer => {
        console.log('impressora default: ', printer)
        const config = qz.configs.create(printer)
        const data = ['Primeira linha', 'segunda linha', 'terceira linha'] // para mudar o conteúdo
        return qz.print(config, data)
      })
      .then(qz.websocket.disconnect)
      .catch(err => console.error(err));
  }

  render() {
    return <div>Hello QZ</div>
  }
}

export default App;

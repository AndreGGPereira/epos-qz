# Exemplo React

### como usar
- recomendo que você sempre coloque as chamadas do qz no `componentDidMount` do component para evitar que o app trave ou faça mais de uma chamada para a impressora.

- sempre crie uma instância da configuração da api no construtor da classe:
```javascript
qz.api.setSha256Type(data => sha256(data));
qz.api.setPromiseType(resolver => new Promise(resolver));
```

o exemplo mostra como fazer usando a impressora default, se tiver mais de uma impressora conenctada, ou mais até mesmo nunca estiver sido conectada, é preciso colocar o nome automáticamente.

para imprimir imagens: https://github.com/qzind/tray/wiki/2.0-Pixel-Printing#image-printing

# NotionPlusPlus

## Develop 👨‍💻

### Interface 🖥🖱

1. Desenvolver os cards usando Bootstrap
2. Implementar as classes para o funcionamento
3. Implementar os comportamentos

### API 💻

1. A API será utilizando a biblioteca [json-server](https://www.npmjs.com/package/json-server) que fornece uma API REST fake baseada em JSON.
2. Tentou-se utilizar docker porém o serviço não está sendo mapeado para a porta nas minhas máquinas, ou seja está inacessível.

## Para rodar o servidor de JSON Server:

> Pre-requisitos: NodeJs com NPM istalado.

1. Ir para o caminho que contém o arquivo db.json
```bash
cd /NotionPlusPlus/API
```

2. Instalar o json-server através do NPM
```bash
sudo npm install -g json-server
```

3. Rodar o comando para iniciar o serviço
```bash
json-server db.json --p 8282
```
> Parametro --p indica a porta que o serviço irá rodar.

4. Verificar se o serviço está rodando, para isso acessar 
```bash
http://localhost:8282
```

# List Car - Test

MVP de um projeto que lista carros a partir de um JSON contendo informações relevantes de carros distintos. 

## Iniciando o projeto LOCALMENTE

Baixe o repositório e localmente instale as dependencias na raiz do projeto.

### `yarn ` ou `yarn install`

Com as dependencias instaladas, rode o projeto localmente.

### `yarn start`

Ele irá iniciar no modo de desenvolvimento
Abra [http://localhost:3000](http://localhost:3000) para visualizar no seu Browser.


### Sobre os componentes :

A disposição das pastas do Projeto segue a seguinte : 

<img src="/public/architeture.png">

Vão existir dois arquivos JSON contendo os dados dos carros, e separados por marcas, um mockup para visualização final.
**Foram utilizados os dois arquivos JSON fornecidos, sendo separado para listar, e outro para ter informações detalhadas de cada item, sendo inserido imagens para cada um, tanto quanto as marcas dos que não possuiam no padrão fornecido**
Uma pasta preparada para um futuro uso de api e consumo dinamico de dados esta criada.

Foi criado um componente separado para as informações do carro clicado, assim como um para listar os carros, e um componente dinamico de carousel, tanto para o banner principal, quanto para cada card de informações detalhadas de cada carro.



Packages instalados : 

"styled-components": "^6.1.0",
"react-responsive-carousel": "^3.2.23",

visite o modelo atual 
Versão : 0.0.1

https://list-cars.onrender.com/

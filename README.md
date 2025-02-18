# serverless ejercicio

Ejercicio Serverless para una arquitectura Lambda,SQS y RDS en AWS. Ocupando como IDE Visual Code  

## 1 Instalacion de componentes necesarios

1.- instalar Nodejs
>https://nodejs.org/en

2.- instalar Serverless Framework
>https://www.serverless.com/

3.- installar visual code
>https://code.visualstudio.com/

4.- installar thunderclient
>https://www.thunderclient.com/

## 2 Validaciones

verificando Nodejs
>node --version

verificando Serverless Framework
>serverless version

>Nota: Aclaratoria si bien serverless framework permite la creacion de servicio automatica como empezare a desde 0 y solo lo ocupare como para el deploy 

## 3 creacion de mi primera lambda 

primero creare un con nodejs 

```npm init -y ```

segundo creare un archivo como serverless.yml

tercero creare un archivo handler en el cual usare para crear mis funciones

cuarto agregamos en el archivo serverless la primera funcion con Hello

quinto en el archivo handler la funcion hello 

sexto en la terminal agregamos el comando
```serverless deploy```

>Nota: Asumiré que tiene una cuenta AWS y la configuracion de la cuenta esta realizado 


## 4 Creacion de la primera funcion Pizza

primero creamos un proyecto con nodejs

segundo creamos un archivo  llamado serverless.yml

tercero creamo un archivos llamado handler.js 

cuarto agregamos en el archivo  serverless lo siguiente 

```
functions:
  newOrder:
    handler: handler.newOrder
    events:
      - httpApi:
          path: /order
          method: post
```
el metodo que llamaremos la funcion sera post el cual espera la informacion json

agregaremos con node el modulo de uuidv4

>https://www.npmjs.com/package/uuid

luego agregamos la funcion en el archivo handler newOrder










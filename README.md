**Intrucciones para deploy**

Para el deploy de este hay dos maneras, una es docker y la otra es con runserver

## DEPLOY con Docker
En caso de que sea la primera vez deployeando con docker debemos usar el comando: docker compose up --build una vez levantado tanto back como front debemos usar la url localhost:3000 En caso de que queramos cerrarlo es con el comando: docker compose down Para las siguientes veces que queramos deployearlo debesmo usar el comando docker compose up

## DEPLOY con runserver
Primero que nada debemos crear el entorno virtual con el comando python -m venv venv con eso creariamos un entorno virtual llamado venv. Para activarlo usando bash seria source venv/scripts/activate en windows y source venv/bin/activate en linux

Deploy back:

Primero hariamos cd App_Full_Stack para ir la carpeta del back Despues hariamos pip install -r requirements.txt para instalar las dependencias Y por ultimo python manage.py runserver para el deploy del back

Deploy front:

Primero hariamos cd imdb_full_stack para ir la carpeta del front Y despues npm start para deploy del front

Una vez levantado tanto front y back podriamos ir al localhost:3000

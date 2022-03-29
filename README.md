1. Clonar repositorio
2. Crear función Lambda desde 0 en AWS, utilizando NodeJS 14.x
3. Ejecutamos npm ci para compilar el proyecto con las versiones definidas en el package-lock.json
4. Comprimimos en un zip todo el proyecto (para añadir Axios, que está fuera del SDK)
5. Configuramos variable de entorno API_URL
6. Cargamos ZIP en función Lambda
7. Ejecutamos evento de test
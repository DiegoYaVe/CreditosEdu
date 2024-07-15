# Frontend del Sistema de Gestión de Objetos 

| Angular|

# Backend

| Java Spring (Spring boot) con JWT|

# Base de datos
| MySQL |

## Aplicación de Gestión de Objetos con Angular.

¡Bienvenido al repositorio del frontend de la Aplicación de Gestión de Objetos! En esta aplicación, utilizamos Angularpara el desarrollo del frontend, proporcionando una experiencia de usuario dinámica y amigable.

## Descripción

El objetivo central de este frontend es proporcionar una interfaz de usuario eficiente y centralizada para la gestión de solicitudes de creditos educativos. Angular se utiliza en el frontend para construir una interfaz interactiva y receptiva.

## Características Clave

### Frontend Angular
- **Componentes Dinámicos**: Utilizamos componentes de Angularpara crear una interfaz de usuario dinámica y modular.
- **Bootstrap para Estilos**: Se emplea Bootstrap para asegurar un diseño consistente y responsivo.
- **Iconos con Font Awesome**: Implementación de iconos vectoriales mediante Font Awesome.
- **Comunicación Asincrónica**: HttpClient se utiliza para manejar las solicitudes HTTP asincrónicas hacia el backend.

## Funcionalidades CRUD

### Crear 
Permite a los usuarios agregar nuevos objetos a la base de datos mediante un formulario. Los datos se envían al backend utilizando una solicitud HTTP POST.

## Leer 
Permite a los usuarios ver una lista de todos los objetos almacenados. Los datos se obtienen del backend mediante una solicitud HTTP GET.

## Actualizar
Permite a los usuarios editar los detalles de un objeto existente. Los datos modificados se envían al backend utilizando una solicitud HTTP PUT.

## Eliminar
Permite a los usuarios eliminar un objeto de la base de datos. La eliminación se realiza mediante una solicitud HTTP DELETE.

## Tecnologías Empleadas

### Frontend
- **Angular**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Bootstrap**: Framework CSS para el diseño responsivo.
- **Font Awesome**: Biblioteca de iconos vectoriales.
- **HttpClient**: Cliente HTTP para realizar solicitudes a la API.

## Instalación y Ejecución

### Prerrequisitos
- Node.js, npm instalados en su máquina.

### Pasos
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/Julian1699/Base-Angular-SpringBoot.git
    ```

2. Instalar las dependencias:
    ```bash
    cd frontend-angular
    
    npm install
    ```

    npm install sweetalert2

3. Ejecutar la aplicación:
    ```bash
    npm start
    ```

4. Acceder a la aplicación en [http://localhost:4200].


## Backend
1. Tener instalado algun IDE Eclipse, NeatBeans o Intellij
2. Cargar la carpeta del backend
3. Correr el programa
Acceder a la aplicación en [http://localhost:8080].


## BASE DE DATOS
El script se encuentra en la carpeta raíz en la subcarpeta SQL y el archivo tiene como nombre [creditosedu.sql]


## Componentes Principales

### navbar
Este componente define la barra de navegación de la aplicación, utilizando `@angular/router` para la navegación entre diferentes rutas. Incluye enlaces a las diferentes secciones de la aplicación como Inicio, Agregar Objeto, Listar Objetos, Información y Tecnologías.

### LoginComponent
Permite el inicio de sesión si se ha registrado previamente al usuario.

### RegisterComponent
Este componente permite agregar un nuevo usuario al sistema mediante un formulario. Utiliza `HttpClient` para enviar la solicitud POST al backend. El formulario recoge información sobre el nombre de usuario y contraseña.

### CreditRequestDetailRComponent
Este componente permite agregar una nueva solicitud de crédito educativo al sistema mediante un formulario. Utiliza `HttpClient` para enviar la solicitud POST al backend. El formulario recoge información sobre el solicitante, la descripción y monto del crédito solicitado.

### CreditRequestDetailComponent
Este componente permite editar una solicitud de crédito existente. Utiliza `HttpClient` para enviar la solicitud PUT al backend. El formulario prellena los campos con los datos existentes del objeto y permite modificar la descripción y monto de crédito.

### CreditRequestListComponent
Este componente muestra una lista de todos las solicitudes de crédito existentes y permite editar y eliminar objetos mediante interacciones con el backend. Utiliza `HttpClient` para obtener los datos desde el backend.



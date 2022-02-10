# Frontend
As an assignment for my Faculty, second year first semester, I had to put into practice my C#, SQL, HTML, CSS and Javascript skills for a project for the WAD Course, where I designed alongside a colleague an online book store. Our web application had 3 many-to-many relationships which resulted in 6 one-to-many, we also have 2 one-to-one and one initial one-to-many relationship divided like the below:

A book can have one or more authors, an author can write one or more books.
A book has a description and a description belongs to only one book.
A book can be in more physical stores and a store can have more books.
A publishing house can publish more books and a book has only one publisher.
An author has a bio and a bio belongs only to one author.
An employee can have more clients and a client can be helped by more employees.
The new entities after we broke the "many-to-many" relationships are: Factura, Descriere, CarteMagazin.

We implemented modules for the entities presented in the backend, we linked the back with the front and deployed pipes, directives, reactive forms (add, update, delete, login, register), routes with and without parameters.

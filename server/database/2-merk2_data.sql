-- Insertar categorías de stand (3 categorías)
INSERT INTO `merk2`.`stand_category` (`name`) VALUES ('Alimentos');
INSERT INTO `merk2`.`stand_category` (`name`) VALUES ('Artesanías');
INSERT INTO `merk2`.`stand_category` (`name`) VALUES ('Ropa');

-- Insertar stands (6 stands, 2 por categoría)
-- Stands de Alimentos
INSERT INTO `merk2`.`stand` (`name`, `size`, `creation_date`, `stand_category_id`) 
VALUES ('Delicias Caseras', 'medium', '2024-05-15', 1);
INSERT INTO `merk2`.`stand` (`name`, `size`, `creation_date`, `stand_category_id`) 
VALUES ('Sabores del Mundo', 'large', '2024-03-10', 1);

-- Stands de Artesanías
INSERT INTO `merk2`.`stand` (`name`, `size`, `creation_date`, `stand_category_id`) 
VALUES ('Artesanías Mágicas', 'small', '2024-06-20', 2);
INSERT INTO `merk2`.`stand` (`name`, `size`, `creation_date`, `stand_category_id`) 
VALUES ('Creaciones Únicas', 'medium', '2024-04-05', 2);

-- Stands de Ropa
INSERT INTO `merk2`.`stand` (`name`, `size`, `creation_date`, `stand_category_id`) 
VALUES ('Moda Express', 'large', '2024-02-28', 3);
INSERT INTO `merk2`.`stand` (`name`, `size`, `creation_date`, `stand_category_id`) 
VALUES ('Estilo Urbano', 'medium', '2024-01-15', 3);

-- First insert users (both sellers and clients)
-- Sellers for "Delicias Caseras"
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('María López', 'maria.lopez@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Juan Pérez', 'juan.perez@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');

-- Sellers for "Sabores del Mundo"
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Ana Rodríguez', 'ana.rodriguez@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Carlos Gómez', 'carlos.gomez@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');

-- Sellers for "Artesanías Mágicas"
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Laura Martínez', 'laura.martinez@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Pedro Sánchez', 'pedro.sanchez@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');

-- Sellers for "Creaciones Únicas"
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Sofía Fernández', 'sofia.fernandez@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Miguel Torres', 'miguel.torres@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');

-- Sellers for "Moda Express"
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Carmen Díaz', 'carmen.diaz@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Roberto Flores', 'roberto.flores@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');

-- Sellers for "Estilo Urbano"
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Elena Vargas', 'elena.vargas@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Javier Ruiz', 'javier.ruiz@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');

-- Clients
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Alejandro Mendoza', 'alejandro.mendoza@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Valentina Castro', 'valentina.castro@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Fernando Navarro', 'fernando.navarro@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');
INSERT INTO `merk2`.`user` (`name`, `email`, `password`) 
VALUES ('Gabriela Morales', 'gabriela.morales@example.com', '$2b$10$QfJ2P7fKHAAWjFSeLXNwzuWkcvTrnwv89/HjxTCPs0FUfEOTsXl7u');

-- Now insert sellers (associate user_id with stand_id)
-- We'll use the user_id that was auto-generated when inserting into the user table
-- Assuming the IDs start at 1 and increment sequentially
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (1, 1); -- María López at "Delicias Caseras"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (2, 1); -- Juan Pérez at "Delicias Caseras"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (3, 2); -- Ana Rodríguez at "Sabores del Mundo"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (4, 2); -- Carlos Gómez at "Sabores del Mundo"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (5, 3); -- Laura Martínez at "Artesanías Mágicas"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (6, 3); -- Pedro Sánchez at "Artesanías Mágicas"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (7, 4); -- Sofía Fernández at "Creaciones Únicas"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (8, 4); -- Miguel Torres at "Creaciones Únicas"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (9, 5); -- Carmen Díaz at "Moda Express"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (10, 5); -- Roberto Flores at "Moda Express"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (11, 6); -- Elena Vargas at "Estilo Urbano"
INSERT INTO `merk2`.`seller` (`user_id`, `stand_id`) VALUES (12, 6); -- Javier Ruiz at "Estilo Urbano"

-- Insert clients (just need user_id)
INSERT INTO `merk2`.`client` (`user_id`) VALUES (13); -- Alejandro Mendoza
INSERT INTO `merk2`.`client` (`user_id`) VALUES (14); -- Valentina Castro
INSERT INTO `merk2`.`client` (`user_id`) VALUES (15); -- Fernando Navarro
INSERT INTO `merk2`.`client` (`user_id`) VALUES (16); -- Gabriela Morales

-- Insertar productos (3 por stand, total 18)
-- Productos de "Delicias Caseras"
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Empanadas Caseras', 'Deliciosas empanadas hechas a mano', 1500, 50, 1);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Torta de Chocolate', 'Torta casera de chocolate con glaseado', 2500, 20, 1);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Galletas Artesanales', 'Surtido de galletas hechas con ingredientes naturales', 1200, 100, 1);

-- Productos de "Sabores del Mundo"
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Tacos Mexicanos', 'Auténticos tacos mexicanos con carne y vegetales', 1800, 60, 2);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Sushi Roll', 'Roll de sushi con salmón fresco y aguacate', 3000, 40, 2);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Paella Española', 'Tradicional paella con mariscos y arroz', 4500, 25, 2);

-- Productos de "Artesanías Mágicas"
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Collar Artesanal', 'Collar hecho a mano con piedras naturales', 2800, 30, 3);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Figura de Madera', 'Figura tallada a mano en madera noble', 3500, 15, 3);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Atrapasueños', 'Atrapasueños tradicional con plumas y cuentas', 1900, 25, 3);

-- Productos de "Creaciones Únicas"
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Jarrón de Cerámica', 'Jarrón decorativo pintado a mano', 4200, 10, 4);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Cuadro Decorativo', 'Cuadro original con técnica mixta', 5000, 8, 4);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Lámpara Artesanal', 'Lámpara de mesa hecha con materiales reciclados', 3800, 12, 4);

-- Productos de "Moda Express"
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Camisa Formal', 'Camisa de algodón para ocasiones especiales', 3200, 45, 5);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Jeans Premium', 'Jeans de alta calidad con corte moderno', 4800, 30, 5);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Chaqueta de Cuero', 'Chaqueta de cuero sintético con forro', 7500, 20, 5);

-- Productos de "Estilo Urbano"
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Zapatillas Urbanas', 'Zapatillas cómodas para uso diario', 5500, 35, 6);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Gorra Personalizada', 'Gorra con diseño exclusivo bordado', 1800, 50, 6);
INSERT INTO `merk2`.`product` (`name`, `description`, `price`, `stock`, `stand_id`) 
VALUES ('Camiseta Estampada', 'Camiseta de algodón con estampado original', 2200, 60, 6);


-- Insertar ventas y detalles de ventas
-- Venta 1: Cliente 1 compra a vendedor del stand 1
INSERT INTO `merk2`.`sale` (`client_id`, `seller_id`) 
VALUES (13, 1);  -- Alejandro Mendoza (user_id 13) compra a María López (user_id 1)
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (1, 1, 3);
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (1, 2, 1);

-- Venta 2: Cliente 2 compra a vendedor del stand 3
INSERT INTO `merk2`.`sale` (`client_id`, `seller_id`) 
VALUES (14, 5);  -- Valentina Castro (user_id 14) compra a Laura Martínez (user_id 5)
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (2, 7, 2);
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (2, 9, 1);

-- Venta 3: Cliente 3 compra a vendedor del stand 5
INSERT INTO `merk2`.`sale` (`client_id`, `seller_id`) 
VALUES (15, 9);  -- Fernando Navarro (user_id 15) compra a Carmen Díaz (user_id 9)
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (3, 13, 1);
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (3, 14, 1);
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (3, 15, 1);

-- Venta 4: Cliente 4 compra a vendedor del stand 2
INSERT INTO `merk2`.`sale` (`client_id`, `seller_id`) 
VALUES (16, 3);  -- Gabriela Morales (user_id 16) compra a Ana Rodríguez (user_id 3)
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (4, 4, 2);
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (4, 5, 3);

-- Venta 5: Cliente 1 compra a vendedor del stand 6
INSERT INTO `merk2`.`sale` (`client_id`, `seller_id`) 
VALUES (13, 11);  -- Alejandro Mendoza (user_id 13) compra a Elena Vargas (user_id 11)
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (5, 16, 1);
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (5, 18, 2);

-- Venta 6: Cliente 2 compra a vendedor del stand 4
INSERT INTO `merk2`.`sale` (`client_id`, `seller_id`) 
VALUES (14, 7);  -- Valentina Castro (user_id 14) compra a Sofía Fernández (user_id 7)
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (6, 10, 1);
INSERT INTO `merk2`.`sale_has_product` (`sale_id`, `product_id`, `quantity`) 
VALUES (6, 11, 1);
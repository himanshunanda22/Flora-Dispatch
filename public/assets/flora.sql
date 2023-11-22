-- Create the Flora database
CREATE DATABASE IF NOT EXISTS flora;

-- Use the Flora database
USE flora;

-- Create the 'plants' table
CREATE TABLE IF NOT EXISTS plants (
    plant_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    temperature VARCHAR(20),
    soil_type VARCHAR(50),
    humidity VARCHAR(20),
    price DECIMAL(10, 2),
    description TEXT,
    img BLOB
);


-- Create the 'tools' table
CREATE TABLE IF NOT EXISTS tools (
    tool_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    img BLOB
);

-- Create the 'fertilizer' table
CREATE TABLE IF NOT EXISTS fertilizer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    img BLOB
);


INSERT INTO plants (name, temperature, soil_type, humidity, price, description, img)
VALUES
   ('Rose', 'Moderate', 'Well-draining', 'Average', 19.99, 'Classic symbol of love and beauty', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\rose.jpeg')),
   ('Lavender', 'Warm', 'Sandy', 'Low', 15.99, 'Fragrant herb with purple flowers', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\lavender.jpeg')),
   ('Tulip', 'Cool', 'Loamy', 'Average', 12.99, 'Colorful spring flower', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\tulip.jpeg')),
   ('Orchid', 'Warm', 'Bark mix', 'High', 29.99, 'Exotic and elegant flowering plant', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\orchid.jpeg')),
   ('Sunflower', 'Warm', 'Well-draining', 'Low', 14.99, 'Bright and cheerful sun-loving flower', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\sunflower.jpeg')),
   ('Daisy', 'Moderate', 'Loamy', 'Average', 11.99, 'Simple and classic white flower', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\daisy.jpeg')),
   ('Fern', 'Cool', 'Humus-rich', 'High', 18.99, 'Lush green foliage for shade', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\fern.jpeg')),
   ('Cactus', 'Hot', 'Sandy', 'Low', 9.99, 'Low-maintenance desert plant', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\cactus.jpeg')),
   ('Lily', 'Moderate', 'Well-draining', 'High', 22.99, 'Elegant and fragrant flowering plant', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\lily.jpeg')),
   ('Bamboo', 'Warm', 'Loamy', 'Average', 24.99, 'Fast-growing and versatile', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\bamboo.jpeg')),
   ('Carnation', 'Cool', 'Well-draining', 'Average', 16.99, 'Sweetly fragrant and colorful flower', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\carnation.jpeg')),
   ('Poinsettia', 'Warm', 'Well-draining', 'Average', 17.99, 'Popular holiday plant with red leaves', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\poinsettia.jpeg')),
   ('Aloe Vera', 'Warm', 'Sandy', 'Low', 13.99, 'Succulent with soothing gel', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\aloe_vera.jpeg')),
   ('Hydrangea', 'Cool', 'Loamy', 'High', 26.99, 'Large blooms in various colors', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\hydrangea.jpeg')),
   ('Peace Lily', 'Moderate', 'Well-draining', 'High', 21.99, 'Air-purifying indoor plant with white blooms', LOAD_FILE('C:\\Users\\himan\\OneDrive\\Desktop\\Project\\SE\\Flora_Dispatch\\pics\\plants\\peace_lily.jpeg'));


INSERT INTO fertilizer (name, description, price)
VALUES
   ('All-Purpose Fertilizer', 'Balanced nutrients for various plants', 9.99),
   ('Organic Plant Food', 'Natural and eco-friendly fertilizer', 12.99),
   ('Flower Bloom Booster', 'Promotes vibrant and abundant blooms', 14.99),
   ('Vegetable Garden Fertilizer', 'Specially formulated for vegetables', 11.99),
   ('Citrus Tree Fertilizer', 'For healthy growth of citrus trees', 16.99),
   ('Indoor Plant Fertilizer', 'Gentle formula for indoor plants', 10.99),
   ('Rose Plant Food', 'Nourishes and strengthens rose plants', 13.99),
   ('Cactus and Succulent Fertilizer', 'Specifically designed for arid plants', 8.99),
   ('Tomato Plant Fertilizer', 'Enhances tomato plant growth and fruiting', 15.99),
   ('Evergreen Tree Fertilizer', 'For the health and vitality of evergreen trees', 17.99),
   ('Orchid Fertilizer', 'Balanced nutrients for orchid plants', 18.99),
   ('Bonsai Tree Fertilizer', 'Promotes bonsai tree health and aesthetics', 14.99),
   ('Herb Garden Fertilizer', 'Nourishes herbs for optimal flavor', 12.99),
   ('Fruit Tree Fertilizer', 'Feeds fruit trees for robust fruit production', 19.99),
   ('Bulb Plant Food', 'Supports bulbs for vibrant spring flowers', 11.99);

INSERT INTO tools (name, description, price)
VALUES
   ('Pruning Shears', 'Sharp blades for precise pruning', 12.99),
   ('Garden Trowel', 'Handy tool for digging and transplanting', 8.99),
   ('Watering Can', 'Convenient for watering plants', 14.99),
   ('Gardening Gloves', 'Protects hands during gardening tasks', 9.99),
   ('Rake', 'For gathering leaves and debris', 11.99),
   ('Hedge Trimmer', 'Cuts and shapes hedges and shrubs', 24.99),
   ('Wheelbarrow', 'Transports soil, plants, and other materials', 39.99),
   ('Garden Hoe', 'Used for cultivating and weeding', 10.99),
   ('Pruning Saw', 'Cuts through thicker branches', 16.99),
   ('Garden Fork', 'Lifts and turns soil with ease', 13.99),
   ('Sprinkler', 'Automatically waters a large area', 18.99),
   ('Garden Sprayer', 'Applies water, fertilizers, and pesticides', 15.99),
   ('Compost Bin', 'Turns kitchen waste into nutrient-rich compost', 29.99),
   ('Garden Kneeler', 'Provides comfort while gardening', 22.99),
   ('Plant Labels', 'Mark and identify plants in the garden', 6.99);

CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
INSERT INTO users (username, email, password)
VALUES
   ('PES2UG21CS911', 'siri@example.com', 'siri'),
   ('PES2UG21CS913', 'hsts@example.com', 'hsts'),
   ('PES2UG21CS915', 'nanda@example.com', 'nanda'),
   ('PES2UG21CS473', 'kumar@example.com', 'kumar'),
   ('admin', 'admin@example.com', 'admin@123');

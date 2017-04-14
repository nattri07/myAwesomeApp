
CREATE DATABASE IF NOT EXISTS mybooks;

GRANT ALL PRIVILEGES on mybooks.*
TO 'awesomeness'@'%' IDENTIFIED BY 'lamepassword'
WITH GRANT OPTION;

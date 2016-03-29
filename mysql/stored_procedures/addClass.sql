DELIMITER //

CREATE PROCEDURE addClass
(IN section VARCHAR(32),
		title VARCHAR(64))
BEGIN
			INSERT INTO Class (section, title)
			VALUES (section, title);
END

//

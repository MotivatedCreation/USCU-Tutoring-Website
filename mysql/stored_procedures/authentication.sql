DELIMITER //

CREATE PROCEDURE signUp
(IN firstName VARCHAR(32),
		lastName VARCHAR(32),
		email VARCHAR(128),
		password VARCHAR(128))
BEGIN
			INSERT INTO User (firstName, lastName, email, password)
			VALUES (firstName, lastName, email, password);
END

//


DELIMITER //

CREATE PROCEDURE signIn
(IN userEmail VARCHAR(128),
    userPassword VARCHAR(128))
BEGIN
	SELECT userID, accountType, firstName, lastName, email, description
	FROM User
	WHERE email = userEmail AND password = userPassword;
END

//

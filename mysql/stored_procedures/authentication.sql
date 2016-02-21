DELIMITER //

CREATE PROCEDURE signUp
(IN firstName VARCHAR(32),
		lastName VARCHAR(32),
		password VARCHAR(128),
		email VARCHAR(128))
BEGIN
			INSERT INTO 'User' (firstName, lastName, email, password)
			VALUES (firstName, lastName, email, password)
END

//


DELIMITER //

CREATE PROCEDURE signIn
(IN userEmail VARCHAR(128),
    userPassword VARCHAR(128))
BEGIN
	SELECT email
	FROM User
	WHERE email = userEmail AND password = userPsassword;
END

//

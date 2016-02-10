DELIMITER //

CREATE PROCEDURE sign_in
(IN userPassword VARCHAR(128),
		userEmail VARCHAR(128))
BEGIN
	SELECT email
	FROM User
	WHERE email = userEmail;
END

//

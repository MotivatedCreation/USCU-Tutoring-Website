DELIMITER //

CREATE PROCEDURE saveUserDescription
(IN theUserID INT(11),
	  theDescription VARCHAR(8000))
BEGIN
	UPDATE User
    SET description = theDescription
    WHERE userID = theUserID;
END

//

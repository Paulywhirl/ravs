


CREATE TYPE heard_about_chrw AS ENUM('Listen to 94.9FM','Saw CHRW at a community event','Saw CHRW at a campus event','Classroom visit at Western','Print ad','Facebook, twitter, and/or instagram','From a friend')


CREATE TABLE volunteers (
	volunteer_id integer NOT NULL 
	userId varchar(20) NOT NULL,
	firstname varchar(20) NOT NULL,
	lastname varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	phone text,
	what_best_describes_your_situation? varchar(500) NOT NULL,
	organization varhcar(600),
	how_did_you_hear_about_949_chrw? heard_about_chrw NOT NULL,
	why_would_you_like_to_volunteer_at_chrw? varchar(500) NOT NULL,
	additional_comments varchar(400),

	constraint volunteer_pk Primary key (volunteer_id)
);


CREATE TABLE sessions (

);

CREATE TABLE registered_sessions (
);
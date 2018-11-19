



CREATE TYPE volunteering_sessions AS ENUM('100', '101','102','103','104','105','106','107','108','201','202','203','301','302','303','304','305','306','401','402','403','404A1'
																					,'404A2','404B1','404B2','404C1','404C2','501','502','503','504','505','506','601','602','603','604','605','606','701','702','703',
																					'704','705','706');

CREATE TABLE volunteers (
	volunteer_id integer NOT NULL UNIQUE PRIMARY KEY,
	userId varchar(20) NOT NULL UNIQUE,
	firstname varchar(20) NOT NULL,
	lastname varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	phone text
	-- what_best_describes_your_situation? varchar(500) NOT NULL,
	-- organization varhcar(600),
	-- how_did_you_hear_about_949_chrw? heard_about_chrw NOT NULL,
	-- why_would_you_like_to_volunteer_at_chrw? varchar(500) NOT NULL,
	-- additional_comments varchar(400)
);

CREATE TABLE session_token (
	id_token varchar(10) NOT NULL UNIQUE,
    volunteer_id integer REFERENCES volunteers(volunteer_id)
);


CREATE TABLE progress_bar (
	sessions_number volunteering_sessions[],
    volunteer_id integer REFERENCES volunteers(volunteer_id)
);

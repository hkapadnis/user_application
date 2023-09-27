Step 1:- Get clone for this repository.
Step 2:- Create Database: `user_auth` and below tables.
	CREATE TABLE `jwtconfirmation` (
	  `user_id` int(11) NOT NULL,
	  `code` varchar(5) NOT NULL
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
	
	CREATE TABLE `user` (
	  `id` int(11) NOT NULL,
	  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
	  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
	  `username` varchar(50) NOT NULL,
	  `password` varchar(255) NOT NULL,
	  `email` varchar(255) NOT NULL,
	  `status` int(11) NOT NULL,
	  `created_date` datetime NOT NULL
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

Step 2:- run below command.
	npm install react-scripts --save
Step 3:- npm start
	Open localhost:3000 to view it in your browser.
	
	
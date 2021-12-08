Create database streaming;
use streaming;

create table user(
  user_id int not null auto_increment primary key,
  name varchar(30),
  email varchar(30),
  password varchar(30)
);

create table singer(
  singer_id int not null auto_increment primary key,
  name varchar(30)
);

create table track(
  track_id int not null auto_increment primary key,
  title varchar(30),
  singer_id int,
  album_id int,
  foreign key (singer_id) references singer(singer_id),
  foreign key (album_id) references album(album_id)
);

create table album(
  album_id int not null auto_increment primary key,
  name varchar(30),
  singer_id int,
  foreign key (singer_id) references singer(singer_id)
);

create table playlist(
  playlist_id int not null auto_increment primary key,
  user_id int,
  tracks int,
  title varchar(30),
  foreign key (user_id) references user(user_id)
);

create table playlist_track(
  track_id int,
  foreign key (track_id) references track(track_id),
  playlist_id int,
  foreign key (playlist_id) references playlist(playlist_id)
);

create table `users` (
  `id` int not null, 
  `username` varchar(255) not null, 
  `first_name` varchar(255) not null, 
  `last_name` varchar(255) not null, 
  `location` varchar(255) not null, 
  `email` varchar(255) not null, 
  `phone_number` varchar(255) not null
); 
alter table 
  `users` 
add 
  primary key `users_id_primary`(`id`); 

create table `campaigns` (
    `id` int not null, 
    `name` varchar(255) not null, 
    `location` varchar(255) not null, 
    `description` varchar(255) not null, 
    `id_organizer` int not null
  ); 
alter table 
  `campaigns` 
add 
  primary key `campaigns_id_primary`(`id`); 

create table `politicians` (
    `id` int not null, 
    `first_name` varchar(255) not null, 
    `last_name` varchar(255) not null, 
    `phone_number` varchar(255) not null, 
    `mailing_address` varchar(255) not null, 
    `email` varchar(255) not null, 
    `organization` varchar(255) not null, 
    `position-type` varchar(255) not null
  ); 
alter table 
  `politicians` 
add 
  primary key `politicians_id_primary`(`id`); 

create table `campaigns_politicians` (
    `id` int not null, 
    `id_campaign` varchar(255) not null, 
    `id_politician` varchar(255) not null
  ); 
alter table 
  `campaigns_politicians` 
add 
  primary key `campaigns_politicians_id_primary`(`id`); 

create table `users_campaigns` (
    `id` int not null, `id_user` int not null, 
    `id_campaign` int not null
  ); 
alter table 
  `users_campaigns` 
add 
  primary key `users_campaigns_id_primary`(`id`); 

create table `campaign_comments` (
    `id` int not null, 
    `comment_text` varchar(255) not null, 
    `likes` int not null, 
    `id_campaign` int not null, 
    `id_user` int not null
  ); 
alter table 
  `campaign_comments` 
add 
  primary key `campaign_comments_id_primary`(`id`); 

create table `prompts` (
    `id` int not null, `id_campaign` int not null, 
    `id_politician` int not null
  ); 
alter table 
  `prompts` 
add 
  primary key `prompts_id_primary`(`id`); 
alter table 
  `campaigns_politicians` 
add 
  constraint `campaigns_politicians_id_politician_foreign` foreign key (`id_politician`) references `politicians` (`id`); 
alter table 
  `campaign_comments` 
add 
  constraint `campaign_comments_id_user_foreign` foreign key (`id_user`) references `users` (`id`); 
alter table 
  `users_campaigns` 
add 
  constraint `users_campaigns_id_user_foreign` foreign key (`id_user`) references `users` (`id`); 
alter table 
  `prompts` 
add 
  constraint `prompts_id_politician_foreign` foreign key (`id_politician`) references `politicians` (`id`); 
alter table 
  `campaigns` 
add 
  constraint `campaigns_id_organizer_foreign` foreign key (`id_organizer`) references `users` (`id`)